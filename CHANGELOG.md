# Changelog

## v0.5.4 — 2026-03-27
- `washer-card.js` — disable Start/Pause/Stop buttons when remote control is off
- `washer-card.js` — hide bubble soak toggle and washer settings (spin level, rinse cycles, extra detergent) when stopped

## v0.5.3 — 2026-03-27
- `washer-card.js` — finished/stopped status now correlates with green state: green → "Finished" / "Cycle complete", not green → "Stopped"

## v0.5.2 — 2026-03-27
- `washer-card-constants.js` — added `show_child_lock` config option (default: true)
- `washer-card.js` — child lock chip conditionally rendered based on `show_child_lock` toggle
- `washer-card-editor.js` — added "Show child lock badge" toggle in Display Options

## v0.5.1 — 2026-03-27
- `washer-card.js` — state caching now backed by HA history API; fetches last known non-unavailable state from the last hour when no in-memory cache exists (e.g. fresh page load during outage)

## v0.5.0 — 2026-03-27
- `washer-card.js` — in-memory state caching: when HA reports unavailable/unknown, card shows last known good state
- `washer-card.js` — stale indicator: card dims to 60% opacity + cloud-off icon next to title when data is stale
- `washer-card.js` — removed `isStopped && !isGreen` override; `getPrimaryStatus` now handles all stop states
- `washer-card-helpers.js` — reverted incorrect `"finish"` → `"finished"` change (washer HA enum uses `"finish"`)

## v0.4.5 — 2026-03-27
- `washer-card-helpers.js` — reverted Idle/Standby fallback (replaced by state caching in v0.5.0)

## v0.4.4 — 2026-03-27
- `washer-card-helpers.js` — fixed remaining `"finish"` → `"finished"` in `getPrimaryStatus` (incorrectly changed, reverted in v0.5.0)

## v0.4.3 — 2026-03-27
- `washer-card-constants.js` — fixed job state key `"finish"` → `"finished"` (incorrectly changed, reverted in v0.5.0; washer uses `"finish"`)
- `washer-card-helpers.js` — fixed `"finish"` → `"finished"` in `getSecondaryStatus` (incorrectly changed, reverted in v0.5.0)

## v0.4.2 — 2026-03-27
- `washer-card.js` — fixed progress circle: uses `transform: scale()` instead of oversized element; circle stays within drum boundary (140px)
- `washer-card.js` — added pulse animation when < 10 minutes remaining (3s pulse > 5min, gradually speeds to 0.75s near 0)

## v0.4.1 — 2026-03-27
- `washer-card.js` — enlarged progress circle to 200px to extend beyond 140px drum (reverted in v0.4.2)

## v0.4.0 — 2026-03-27
- `washer-card-helpers.js` — added `formatCountdown()`: formats remaining time as `Xh Ym` (>=90min), `Xm` (<=90min), or `Xm Ys` (<10min)
- `washer-card.js` — changed drum progress from `conic-gradient` (clock sweep) to `radial-gradient` (center-outward fill) with 10% minimum radius
- `washer-card.js` — added live countdown timer in hero section below primary status, with 1-second tick interval
- `washer-card.js` — moved "Completes at" badge to header top-right, increased size
- `washer-card.js` — removed redundant status badge from header
- `washer-card.js` — secondary status now shown below countdown in hero

## 2026-03-25 (2)
- `washer-card-helpers.js` — fixed `spinLevel` default entity prefix `sensor.` → `select.`; fixed `rinseCycles` default entity prefix `sensor.` → `number.`; fixed `"finished"` job state checks → `"finish"` to match HA enum
- `washer-card-constants.js` — realigned `JOB_STATE_LABELS` keys to actual HA enum values (`wash`, `rinse`, `spin`, `finish`); added `air_wash`, `ai_wash`, `ai_rinse`, `ai_spin`, `cooling`, `weight_sensing`, `wrinkle_prevent`, `freeze_protection`

## 2026-03-25
- `washer-card-constants.js` — added `show_drum_progress` (default: true), `drum_progress_color` (default: `#5b9cf6`), `finished_green_duration` (default: 60), `completion_color_threshold_1/2` (50%, 30%), `completion_color_1/2` (`var(--primary-text-color)`)
- `washer-card-helpers.js` — added `isFinishedRecently()`, `getCompletionPercent()`, `getCompletionColor()`; fixed `formatTimestamp` to use 24h format (`hour12: false`)
- `washer-card.js` — green card background on cycle finish (expires after configurable duration); "Stopped" label reverts when green duration expires; drum progress fill via `conic-gradient` (fills as cycle progresses, 0% → 100%); completion time badge color thresholds; `machineState` now resolved via `getEntityState` for `last_changed` access
- `washer-card-editor.js` — added "Show drum progress fill" toggle, "Drum progress color" field, "Green highlight duration" field, "Completion Time Colors" section with two threshold/color pair rows
