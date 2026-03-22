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
url: /hacsfiles/Samsung-Dryer-Card/samsung-ha-dryer-card.js
type: module