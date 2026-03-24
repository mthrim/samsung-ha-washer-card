# Samsung HA Washer Card

A custom Lovelace card for Samsung washers using the Home Assistant SmartThings integration.

---

## 📸 Preview

<p align="center">
  <img src="images/hero-card.png" width="400">
</p>

<p align="center">
  <img src="images/compact-card.png" width="400">
</p>

---

## ✨ Features

- Hero and Compact layouts
- Native Home Assistant config editor
- Start / Pause / Stop controls
- Bubble Soak toggle
- Status chips (Child Lock, Remote Control)
- Washer settings tiles (Spin Level, Rinse Cycles, Extra Detergent)
- Power and energy metrics
- Smart state handling (disabled buttons, dynamic labels)
- Washer UI with animated drum

---

## 📦 Installation

### HACS (Recommended)

1. Open HACS
2. Click **⋮ → Custom repositories**
3. Add this repository URL
4. Select category: **Dashboard**
5. Install

Then add the resource if HACS does not automatically:

```yaml
url: /hacsfiles/samsung-ha-washer-card/samsung-ha-washer-card.js
type: module
```

Restart Home Assistant or refresh your browser cache.

### Manual Installation

1. Copy:

```text
dist/samsung-ha-washer-card.js
```

to:

```text
/config/www/samsung-ha-washer-card.js
```

2. Add resource:

```yaml
url: /local/samsung-ha-washer-card.js
type: module
```

---

## 🧪 Example Usage

### Hero Layout

```yaml
type: custom:samsung-ha-washer-card
device_name: washer
title: Washer
layout_mode: hero
show_subtitle: true
```

### Compact Layout

```yaml
type: custom:samsung-ha-washer-card
device_name: washer
layout_mode: compact
show_subtitle: false
```

### With Entity Overrides

Use this if your SmartThings entity IDs don't follow the default naming pattern:

```yaml
type: custom:samsung-ha-washer-card
device_name: washer
title: Washer
machine_state_entity: sensor.washer_machine_state
job_state_entity: sensor.washer_job_state
completion_time_entity: sensor.washer_completion_time
command_entity: select.washer
child_lock_entity: binary_sensor.washer_child_lock
remote_control_entity: binary_sensor.washer_remote_control
bubble_soak_entity: switch.washer_bubble_soak
spin_level_entity: sensor.washer_spin_level
rinse_cycles_entity: sensor.washer_rinse_cycles
extra_detergent_entity: sensor.washer_extra_detergent
power_entity: sensor.washer_power
energy_entity: sensor.washer_power_energy
```

---

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `device_name` | string | `washer` | Base entity name for auto-discovery |
| `title` | string | `Washer` | Card title |
| `layout_mode` | string | `hero` | `hero` or `compact` |
| `show_subtitle` | boolean | `true` | Show "Samsung SmartThings Washer" subtitle |
| `show_completion_time` | boolean | `true` | Show completion time when running |
| `show_status_chips` | boolean | `true` | Show Child Lock and Remote Control chips |
| `show_power` | boolean | `true` | Show power usage metric |
| `show_energy` | boolean | `true` | Show cycle energy metric |
| `show_bubble_soak_control` | boolean | `true` | Show Bubble Soak toggle button |
| `show_washer_settings` | boolean | `true` | Show Spin Level, Rinse Cycles, Extra Detergent tiles |

---

## 🔌 Supported Entities

Auto-discovered from the SmartThings integration based on `device_name`. All can be overridden individually:

| Config key | Default entity ID | Purpose |
|---|---|---|
| `machine_state_entity` | `sensor.washer_machine_state` | Overall machine state (run/pause/stop) |
| `job_state_entity` | `sensor.washer_job_state` | Current job (washing, rinsing, spinning…) |
| `completion_time_entity` | `sensor.washer_completion_time` | ISO timestamp for "Completes at" |
| `command_entity` | `select.washer` | Start / Pause / Stop target |
| `child_lock_entity` | `binary_sensor.washer_child_lock` | Child lock status chip |
| `remote_control_entity` | `binary_sensor.washer_remote_control` | Remote control status chip |
| `bubble_soak_entity` | `switch.washer_bubble_soak` | Bubble Soak toggle |
| `spin_level_entity` | `sensor.washer_spin_level` | Spin level settings tile |
| `rinse_cycles_entity` | `sensor.washer_rinse_cycles` | Rinse cycles settings tile |
| `extra_detergent_entity` | `sensor.washer_extra_detergent` | Extra detergent settings tile |
| `power_entity` | `sensor.washer_power` | Power metric |
| `energy_entity` | `sensor.washer_power_energy` | Cycle energy metric |

---

## ⚠️ Limitations

Samsung washers expose limited controls through SmartThings. The following settings are read-only display tiles (Spin Level, Rinse Cycles, Extra Detergent) — they cannot be changed from the card. Cycle selection and temperature control are not available through the SmartThings integration.

---

## 🧩 Compatibility

- Home Assistant
- SmartThings integration
- Samsung washers supported by SmartThings

---

## 🚀 Roadmap

- Editable spin level and rinse cycle selectors
- SmartThings routine support (preset cycles)
- Enhanced compact layout
- More metrics and diagnostics

---

## 🙌 Credits

Based on the Samsung dryer card by
[@kingchddg901](https://github.com/kingchddg901/samsung-ha-dryer-card),
which was itself inspired by the Samsung washer card by
[@raulpetruta](https://github.com/raulpetruta/samsung-ha-washer-card).

---

## 🪪 License

MIT License
