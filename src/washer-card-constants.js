export const CARD_TAG = "samsung-ha-washer-card";

export const DEFAULT_CONFIG = {
  device_name: "washer",
  title: "Washer",
  show_subtitle: true,
  layout_mode: "hero",
  show_completion_time: true,
  show_status_chips: true,
  show_power: true,
  show_energy: true,
  show_bubble_soak_control: true,
  show_washer_settings: true,
  icons: {
    appliance: "mdi:washing-machine",
    start: "mdi:play",
    pause: "mdi:pause",
    stop: "mdi:stop",
    child_lock: "mdi:lock",
    remote_control: "mdi:remote",
    bubble_soak: "mdi:water-circle",
    power: "mdi:flash",
    energy: "mdi:lightning-bolt",
    complete: "mdi:clock-outline",
    spin_level: "mdi:rotate-3d-variant",
    rinse_cycles: "mdi:water-sync",
    extra_detergent: "mdi:bottle-tonic"
  }
};

export const ENTITY_KEYS = {
  machineState: "machine_state",
  jobState: "job_state",
  completionTime: "completion_time",
  command: "command",
  childLock: "child_lock",
  remoteControl: "remote_control",
  bubbleSoak: "bubble_soak",
  spinLevel: "spin_level",
  rinseCycles: "rinse_cycles",
  extraDetergent: "extra_detergent",
  power: "power",
  cycleEnergy: "cycle_energy"
};

export const JOB_STATE_LABELS = {
  washing: "Washing",
  rinsing: "Rinsing",
  spinning: "Spinning",
  pre_wash: "Pre-Wash",
  soaking: "Soaking",
  rinse_hold: "Rinse Hold",
  delay_wash: "Delayed",
  finished: "Finished",
  none: "Idle",
  spin_only: "Spin Only",
  drying: "Drying",
  sanitizing: "Sanitizing",
  steam: "Steam"
};

export const MACHINE_STATE_LABELS = {
  run: "Running",
  pause: "Paused",
  stop: "Stopped"
};
