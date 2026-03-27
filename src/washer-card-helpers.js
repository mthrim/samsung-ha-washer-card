import {
  DEFAULT_CONFIG,
  ENTITY_KEYS,
  JOB_STATE_LABELS,
  MACHINE_STATE_LABELS
} from "./washer-card-constants";

export function mergeConfig(config) {
  return {
    ...DEFAULT_CONFIG,
    ...config,
    icons: {
      ...DEFAULT_CONFIG.icons,
      ...((config && config.icons) || {})
    }
  };
}

export function buildEntityMap(config) {
  const device = config.device_name || "washer";

  return {
    [ENTITY_KEYS.machineState]:
      config.machine_state_entity || `sensor.${device}_machine_state`,
    [ENTITY_KEYS.jobState]:
      config.job_state_entity || `sensor.${device}_job_state`,
    [ENTITY_KEYS.completionTime]:
      config.completion_time_entity || `sensor.${device}_completion_time`,
    [ENTITY_KEYS.command]:
      config.command_entity || `select.${device}`,
    [ENTITY_KEYS.childLock]:
      config.child_lock_entity || `binary_sensor.${device}_child_lock`,
    [ENTITY_KEYS.remoteControl]:
      config.remote_control_entity || `binary_sensor.${device}_remote_control`,
    [ENTITY_KEYS.bubbleSoak]:
      config.bubble_soak_entity || `switch.${device}_bubble_soak`,
    [ENTITY_KEYS.spinLevel]:
      config.spin_level_entity || `select.${device}_spin_level`,
    [ENTITY_KEYS.rinseCycles]:
      config.rinse_cycles_entity || `number.${device}_rinse_cycles`,
    [ENTITY_KEYS.extraDetergent]:
      config.extra_detergent_entity || `sensor.${device}_extra_detergent`,
    [ENTITY_KEYS.power]:
      config.power_entity || `sensor.${device}_power`,
    [ENTITY_KEYS.cycleEnergy]:
      config.energy_entity || `sensor.${device}_power_energy`
  };
}

export function getEntityState(hass, entityId) {
  return entityId ? hass.states[entityId] : undefined;
}

export function getStateValue(hass, entityId) {
  const entity = getEntityState(hass, entityId);
  return entity ? entity.state : undefined;
}

export function isOn(hass, entityId) {
  return getStateValue(hass, entityId) === "on";
}

export function isUnavailable(value) {
  return (
    value === undefined ||
    value === null ||
    value === "unknown" ||
    value === "unavailable"
  );
}

export function titleCaseLabel(value) {
  if (!value || isUnavailable(value)) {
    return "Unknown";
  }

  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

export function getPrimaryStatus(machineState, jobState) {
  if (machineState === "pause") {
    return "Paused";
  }

  if (machineState === "run") {
    return JOB_STATE_LABELS[jobState] || MACHINE_STATE_LABELS[machineState] || "Running";
  }

  if (machineState === "stop" && jobState === "finish") {
    return "Finished";
  }

  if (machineState === "stop" && jobState && jobState !== "none") {
    return JOB_STATE_LABELS[jobState] || "Stopped";
  }

  return MACHINE_STATE_LABELS[machineState] || titleCaseLabel(machineState) || "Stopped";
}

export function getSecondaryStatus(machineState, jobState) {
  if (machineState === "pause" && jobState && jobState !== "none") {
    return JOB_STATE_LABELS[jobState] || titleCaseLabel(jobState);
  }

  if (machineState === "run") {
    return MACHINE_STATE_LABELS[machineState] || "Running";
  }

  if (jobState === "finished") {
    return "Cycle complete";
  }

  if (jobState && jobState !== "none") {
    return JOB_STATE_LABELS[jobState] || titleCaseLabel(jobState);
  }

  return "Ready";
}

export function shouldShowCompletionTime(machineState, completionValue) {
  return !isUnavailable(completionValue) &&
    (machineState === "run" || machineState === "pause");
}

export function formatTimestamp(hass, value) {
  if (isUnavailable(value)) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  try {
    return new Intl.DateTimeFormat(hass.locale?.language || "en-US", {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit"
    }).format(date);
  } catch (_err) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit"
    });
  }
}

export function isFinishedRecently(machineStateEntity, durationMinutes) {
  if (!machineStateEntity || machineStateEntity.state !== "stop") {
    return false;
  }

  if (!durationMinutes) {
    return true;
  }

  const lastChanged = new Date(machineStateEntity.last_changed);
  if (Number.isNaN(lastChanged.getTime())) {
    return true;
  }

  return Date.now() - lastChanged.getTime() <= durationMinutes * 60_000;
}

export function formatCountdown(completion) {
  if (!completion) return null;
  const end = new Date(completion).getTime();
  const now = Date.now();
  const diff = end - now;
  if (Number.isNaN(end) || diff <= 0) return null;

  const totalMin = Math.floor(diff / 60000);
  const totalSec = Math.floor((diff % 60000) / 1000);

  if (totalMin < 10) {
    return `${totalMin}m ${totalSec}s`;
  }
  if (totalMin <= 90) {
    return `${totalMin}m`;
  }
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

export function getCompletionPercent(powerState, completion) {
  const startStr = powerState?.attributes?.power_consumption_start;
  if (!startStr || !completion) return null;

  const start = new Date(startStr).getTime();
  const end = new Date(completion).getTime();
  const now = Date.now();

  if (Number.isNaN(start) || Number.isNaN(end) || end <= start) return null;

  return Math.max(0, Math.min(100, ((end - now) / (end - start)) * 100));
}

export function getCompletionColor(powerState, completion, config) {
  const t1 = config.completion_color_threshold_1;
  const c1 = config.completion_color_1;
  const t2 = config.completion_color_threshold_2;
  const c2 = config.completion_color_2;

  if ((!t1 && t1 !== 0 && !t2 && t2 !== 0) || (!c1 && !c2)) return null;

  const percentRemaining = getCompletionPercent(powerState, completion);
  if (percentRemaining === null) return null;

  const thresholds = [];
  if (t1 != null && c1) thresholds.push({ threshold: Number(t1), color: c1 });
  if (t2 != null && c2) thresholds.push({ threshold: Number(t2), color: c2 });
  thresholds.sort((a, b) => a.threshold - b.threshold);

  for (const { threshold, color } of thresholds) {
    if (percentRemaining <= threshold) return color;
  }

  return null;
}

export function formatNumber(hass, value, unit) {
  if (isUnavailable(value)) {
    return "";
  }

  const num = Number(value);
  if (Number.isNaN(num)) {
    return `${value}${unit ? ` ${unit}` : ""}`;
  }

  const formatted = new Intl.NumberFormat(hass.locale?.language || "en-US", {
    maximumFractionDigits: num >= 100 ? 0 : 1
  }).format(num);

  return `${formatted}${unit ? ` ${unit}` : ""}`;
}
