# Changelog

## 2026-03-25 (2)
- `washer-card-helpers.js` — fixed `spinLevel` default entity prefix `sensor.` → `select.`; fixed `rinseCycles` default entity prefix `sensor.` → `number.`; fixed `"finished"` job state checks → `"finish"` to match HA enum
- `washer-card-constants.js` — realigned `JOB_STATE_LABELS` keys to actual HA enum values (`wash`, `rinse`, `spin`, `finish`); added `air_wash`, `ai_wash`, `ai_rinse`, `ai_spin`, `cooling`, `weight_sensing`, `wrinkle_prevent`, `freeze_protection`

## 2026-03-25
- `washer-card-constants.js` — added `show_drum_progress` (default: true), `drum_progress_color` (default: `#5b9cf6`), `finished_green_duration` (default: 60), `completion_color_threshold_1/2` (50%, 30%), `completion_color_1/2` (`var(--primary-text-color)`)
- `washer-card-helpers.js` — added `isFinishedRecently()`, `getCompletionPercent()`, `getCompletionColor()`; fixed `formatTimestamp` to use 24h format (`hour12: false`)
- `washer-card.js` — green card background on cycle finish (expires after configurable duration); "Stopped" label reverts when green duration expires; drum progress fill via `conic-gradient` (fills as cycle progresses, 0% → 100%); completion time badge color thresholds; `machineState` now resolved via `getEntityState` for `last_changed` access
- `washer-card-editor.js` — added "Show drum progress fill" toggle, "Drum progress color" field, "Green highlight duration" field, "Completion Time Colors" section with two threshold/color pair rows
