# Samsung HA Dryer Card

A custom Lovelace card for Samsung dryers using the Home Assistant SmartThings integration.

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
- Wrinkle Prevent toggle
- Status chips (Child Lock, Remote, Wrinkle Prevent)
- Power and energy metrics
- Smart state handling (disabled buttons, dynamic labels)
- Washer-style UI with animated drum

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
url: /hacsfiles/samsung-ha-dryer-card/samsung-ha-dryer-card.js
type: module
```

Restart Home Assistant or refresh your browser cache.

### Manual Installation

1. Copy:

```text
dist/samsung-ha-dryer-card.js
```

to:

```text
/config/www/samsung-ha-dryer-card.js
```

2. Add resource:

```yaml
url: /local/samsung-ha-dryer-card.js
type: module
```

---

## 🧪 Example Usage

### Hero Layout

```yaml
type: custom:samsung-ha-dryer-card
device_name: dryer
title: Dryer
layout_mode: hero
show_subtitle: true
```

### Compact Layout

```yaml
type: custom:samsung-ha-dryer-card
device_name: dryer
layout_mode: compact
show_subtitle: false
```

---

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `device_name` | string | `dryer` | Base entity name |
| `title` | string | `Dryer` | Card title |
| `layout_mode` | string | `hero` | `hero` or `compact` |
| `show_subtitle` | boolean | `true` | Show subtitle |
| `show_completion_time` | boolean | `true` | Show completion time |
| `show_status_chips` | boolean | `true` | Show status chips |
| `show_power` | boolean | `true` | Show power usage |
| `show_energy` | boolean | `true` | Show energy usage |
| `show_wrinkle_prevent_control` | boolean | `true` | Show wrinkle prevent toggle |

---

## 🔌 Supported Entities

From the Home Assistant SmartThings integration:

- `sensor.dryer_machine_state`
- `sensor.dryer_job_state`
- `sensor.dryer_completion_time`
- `select.dryer`
- `binary_sensor.dryer_child_lock`
- `binary_sensor.dryer_remote_control`
- `binary_sensor.dryer_wrinkle_prevent_active`
- `switch.dryer_wrinkle_prevent`
- `sensor.dryer_power`
- `sensor.dryer_power_energy`

---

## ⚠️ Limitations

Samsung dryers expose limited controls through SmartThings:

- Cycle selection
- Temperature control
- Dry level settings

These are not currently available in Home Assistant.

---

## 🧩 Compatibility

- Home Assistant
- SmartThings integration
- Samsung dryers supported by SmartThings

---

## 🚀 Roadmap

- SmartThings routine support (preset cycles)
- Enhanced compact layout
- Additional animation polish
- More metrics and diagnostics

---

## 🙌 Credits

Based on and inspired by the Samsung washer card by
[@raulpetruta](https://github.com/raulpetruta).

Original project:
https://github.com/raulpetruta/samsung-ha-washer-card

Portions of logic and structure were adapted for dryer support.

---

## 🪪 License

MIT License