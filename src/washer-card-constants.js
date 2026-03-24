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
  show_drum_progress: true,
  drum_progress_color: "#5b9cf6",
  finished_green_duration: 60,
  completion_color_threshold_1: 50,
  completion_color_threshold_2: 30,
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
  wash: "Washing",
  rinse: "Rinsing",
  spin: "Spinning",
  pre_wash: "Pre-Wash",
  delay_wash: "Delayed",
  finish: "Finished",
  none: "Idle",
  drying: "Drying",
  air_wash: "Air Wash",
  ai_wash: "AI Wash",
  ai_rinse: "AI Rinse",
  ai_spin: "AI Spin",
  cooling: "Cooling",
  weight_sensing: "Weight Sensing",
  wrinkle_prevent: "Wrinkle Prevention",
  freeze_protection: "Freeze Protection"
};

export const MACHINE_STATE_LABELS = {
  run: "Running",
  pause: "Paused",
  stop: "Stopped"
};
