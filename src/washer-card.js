import { LitElement, html, css } from "lit";
import {
  mergeConfig,
  buildEntityMap,
  getStateValue,
  getEntityState,
  isOn,
  getPrimaryStatus,
  getSecondaryStatus,
  shouldShowCompletionTime,
  isFinishedRecently,
  formatTimestamp,
  formatNumber,
  getCompletionColor,
  getCompletionPercent,
  isUnavailable,
  titleCaseLabel
} from "./washer-card-helpers";
import { ENTITY_KEYS, CARD_TAG } from "./washer-card-constants";
import { setWasherCommand, toggleSwitch } from "./washer-card-actions";

export class SamsungHAWasherCard extends LitElement {
  static properties = {
    hass: {},
    _config: { state: true }
  };

  static async getConfigElement() {
    await import("./washer-card-editor");
    return document.createElement("samsung-ha-washer-card-editor");
  }

  static getStubConfig() {
    return {
      device_name: "washer",
      title: "Washer",
      show_subtitle: true,
      layout_mode: "hero",
      show_completion_time: true,
      show_status_chips: true,
      show_power: true,
      show_energy: true,
      show_bubble_soak_control: true,
      show_washer_settings: true
    };
  }

  setConfig(config) {
    if (!config) {
      throw new Error("Invalid configuration");
    }

    this._config = mergeConfig(config);
  }

  getCardSize() {
    return this._config?.layout_mode === "compact" ? 4 : 6;
  }

  static styles = css`
    :host {
      display: block;
    }

    ha-card {
      position: relative;
      overflow: hidden;
      border-radius: 28px;
      padding: 20px;
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.12), transparent 30%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.06), transparent 28%),
        linear-gradient(
          180deg,
          var(--ha-card-background, var(--card-background-color)) 0%,
          color-mix(
            in srgb,
            var(--ha-card-background, var(--card-background-color)) 92%,
            black 8%
          ) 100%
        );
      box-shadow:
        inset 0 1px 0 rgba(255, 255, 255, 0.05),
        0 8px 28px rgba(0, 0, 0, 0.16);
    }

    .card {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 12px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .header-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.09);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
      flex-shrink: 0;
    }

    .header-icon ha-icon {
      --mdc-icon-size: 22px;
    }

    .header-text {
      min-width: 0;
    }

    .title {
      font-size: 1.08rem;
      font-weight: 700;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .subtitle {
      margin-top: 2px;
      color: var(--secondary-text-color);
      font-size: 0.84rem;
      line-height: 1.2;
    }

    .status-badge {
      flex-shrink: 0;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color);
      font-size: 0.78rem;
      font-weight: 700;
      line-height: 1;
      white-space: nowrap;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .hero {
      display: grid;
      grid-template-columns: 140px 1fr;
      gap: 20px;
      align-items: center;
    }

    .hero.compact {
      grid-template-columns: 88px 1fr;
      gap: 14px;
    }

    .drum-wrap {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .drum-progress {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 140px;
      height: 140px;
      border-radius: 50%;
      opacity: 0.55;
      pointer-events: none;
    }

    .hero.compact .drum-progress {
      width: 88px;
      height: 88px;
    }

    .drum {
      position: relative;
      z-index: 1;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background:
        radial-gradient(circle at 30% 28%, rgba(255, 255, 255, 0.32), rgba(255, 255, 255, 0.06) 42%, rgba(0, 0, 0, 0.18) 70%, rgba(0, 0, 0, 0.28) 100%);
      box-shadow:
        inset 0 2px 12px rgba(255, 255, 255, 0.12),
        inset 0 -10px 24px rgba(0, 0, 0, 0.22),
        0 12px 30px rgba(0, 0, 0, 0.16);
    }

    .hero.compact .drum {
      width: 88px;
      height: 88px;
    }

    .drum::before {
      content: "";
      position: absolute;
      inset: 10px;
      border-radius: 50%;
      background:
        radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.04) 38%, rgba(0, 0, 0, 0.25) 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 2px 10px rgba(255, 255, 255, 0.06);
    }

    .hero.compact .drum::before {
      inset: 7px;
    }

    .drum::after {
      content: "";
      position: absolute;
      inset: 24px;
      border-radius: 50%;
      border: 2px dashed rgba(255, 255, 255, 0.14);
      transform-origin: center;
      animation: none;
    }

    .hero.compact .drum::after {
      inset: 16px;
    }

    .drum.running::after {
      animation: spin 6s linear infinite;
    }

    .drum-center {
      position: relative;
      z-index: 1;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.10);
      box-shadow:
        inset 0 1px 6px rgba(255, 255, 255, 0.08),
        0 2px 10px rgba(0, 0, 0, 0.16);
      backdrop-filter: blur(3px);
    }

    .hero.compact .drum-center {
      width: 40px;
      height: 40px;
    }

    .drum-center ha-icon {
      --mdc-icon-size: 30px;
    }

    .hero.compact .drum-center ha-icon {
      --mdc-icon-size: 22px;
    }

    .hero-info {
      min-width: 0;
    }

    .primary-status {
      font-size: 1.75rem;
      font-weight: 800;
      line-height: 1.08;
      letter-spacing: 0.01em;
      margin-bottom: 6px;
    }

    .hero.compact .primary-status {
      font-size: 1.3rem;
      margin-bottom: 4px;
    }

    .secondary-status {
      color: var(--secondary-text-color);
      font-size: 0.96rem;
      line-height: 1.35;
      margin-bottom: 12px;
    }

    .hero.compact .secondary-status {
      font-size: 0.88rem;
      margin-bottom: 8px;
    }

    .completion {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.84rem;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .completion ha-icon {
      --mdc-icon-size: 16px;
      color: var(--secondary-text-color);
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 34px;
      padding: 0 12px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.82rem;
      font-weight: 600;
      line-height: 1;
    }

    .chip ha-icon {
      --mdc-icon-size: 16px;
    }

    .chip.on {
      background: rgba(255, 255, 255, 0.11);
    }

    .chip.off {
      opacity: 0.78;
    }

    .controls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .control-btn,
    .toggle-btn {
      min-height: 46px;
      border: none;
      outline: none;
      border-radius: 16px;
      font: inherit;
      font-weight: 700;
      letter-spacing: 0.01em;
      cursor: pointer;
      transition:
        transform 0.15s ease,
        opacity 0.15s ease,
        background 0.15s ease,
        box-shadow 0.15s ease;
    }

    .control-btn {
      background: rgba(255, 255, 255, 0.08);
      color: var(--primary-text-color);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .control-btn.primary {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      box-shadow: 0 8px 18px color-mix(in srgb, var(--primary-color) 34%, transparent);
    }

    .toggle-btn {
      width: 100%;
      background: rgba(255, 255, 255, 0.07);
      color: var(--primary-text-color);
    }

    .toggle-btn.active {
      background: color-mix(in srgb, var(--primary-color) 26%, rgba(255, 255, 255, 0.08));
    }

    .control-btn:hover:not(:disabled),
    .toggle-btn:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    .control-btn:active:not(:disabled),
    .toggle-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .control-btn:disabled,
    .toggle-btn:disabled {
      cursor: default;
      opacity: 0.45;
      box-shadow: none;
    }

    .metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }

    .washer-settings {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .metric {
      border-radius: 18px;
      padding: 14px;
      background: rgba(255, 255, 255, 0.07);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }

    .metric-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 8px;
    }

    .metric-label {
      color: var(--secondary-text-color);
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1.2;
    }

    .metric-value {
      font-size: 1.05rem;
      font-weight: 800;
      line-height: 1.2;
      letter-spacing: 0.01em;
    }

    .metric ha-icon {
      --mdc-icon-size: 18px;
      color: var(--secondary-text-color);
    }

    ha-card.finished {
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.10), transparent 30%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.05), transparent 28%),
        linear-gradient(180deg, #1a3d2a 0%, #112a1c 100%);
    }

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @media (max-width: 480px) {
      .hero {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .hero.compact {
        grid-template-columns: 1fr;
      }

      .drum-wrap {
        justify-content: center;
      }

      .completion {
        justify-content: center;
      }

      .washer-settings {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  getStateFlags(machineState) {
    return {
      isRunning: machineState === "run",
      isPaused: machineState === "pause",
      isStopped: machineState === "stop"
    };
  }

  renderChip(icon, label, active) {
    return html`
      <div class="chip ${active ? "on" : "off"}" aria-label="${label}">
        <ha-icon .icon=${icon}></ha-icon>
        <span>${label}</span>
      </div>
    `;
  }

  renderMetric(label, value, icon) {
    return html`
      <div class="metric">
        <div class="metric-top">
          <div class="metric-label">${label}</div>
          <ha-icon .icon=${icon}></ha-icon>
        </div>
        <div class="metric-value">${value}</div>
      </div>
    `;
  }

  renderHeader(config, secondaryStatus) {
    return html`
      <div class="header">
        <div class="header-left">
          <div class="header-icon">
            <ha-icon .icon=${config.icons.appliance}></ha-icon>
          </div>
          <div class="header-text">
            <div class="title">${config.title}</div>
            ${config.show_subtitle
              ? html`<div class="subtitle">Samsung SmartThings Washer</div>`
              : ""}
          </div>
        </div>
        <div class="status-badge">${secondaryStatus}</div>
      </div>
    `;
  }

  renderHero(config, primaryStatus, secondaryStatus, showCompletion, completion, drumClass, completionColor, drumProgressStyle) {
    const heroClass = `hero ${config.layout_mode === "compact" ? "compact" : ""}`;
    const completionStyle = completionColor ? `color: ${completionColor};` : "";

    return html`
      <div class=${heroClass}>
        <div class="drum-wrap">
          ${drumProgressStyle
            ? html`<div class="drum-progress" style=${drumProgressStyle}></div>`
            : ""}
          <div class=${drumClass}>
            <div class="drum-center">
              <ha-icon .icon=${config.icons.appliance}></ha-icon>
            </div>
          </div>
        </div>

        <div class="hero-info">
          <div class="primary-status">${primaryStatus}</div>
          <div class="secondary-status">${secondaryStatus}</div>

          ${showCompletion
            ? html`
                <div class="completion" style=${completionStyle}>
                  <ha-icon .icon=${config.icons.complete}></ha-icon>
                  <span>Completes at ${formatTimestamp(this.hass, completion)}</span>
                </div>
              `
            : ""}
        </div>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const config = this._config;
    const entities = buildEntityMap(config);

    const machineStateEntity = getEntityState(this.hass, entities[ENTITY_KEYS.machineState]);
    const machineState = machineStateEntity ? machineStateEntity.state : undefined;
    const jobState = getStateValue(this.hass, entities[ENTITY_KEYS.jobState]);
    const completion = getStateValue(this.hass, entities[ENTITY_KEYS.completionTime]);
    const powerState = getEntityState(this.hass, entities[ENTITY_KEYS.power]);
    const energyState = getEntityState(this.hass, entities[ENTITY_KEYS.cycleEnergy]);

    const bubbleSoakOn = isOn(this.hass, entities[ENTITY_KEYS.bubbleSoak]);
    const spinLevelValue = getStateValue(this.hass, entities[ENTITY_KEYS.spinLevel]);
    const rinseCyclesValue = getStateValue(this.hass, entities[ENTITY_KEYS.rinseCycles]);
    const extraDetergentValue = getStateValue(this.hass, entities[ENTITY_KEYS.extraDetergent]);

    const { isRunning, isPaused, isStopped } = this.getStateFlags(machineState);
    const isGreen = isFinishedRecently(machineStateEntity, config.finished_green_duration);
    const primaryStatus = isStopped && !isGreen
      ? "Stopped"
      : getPrimaryStatus(machineState, jobState);
    const secondaryStatus = getSecondaryStatus(machineState, jobState);

    const showCompletion =
      config.show_completion_time &&
      shouldShowCompletionTime(machineState, completion);

    const completionColor = showCompletion
      ? getCompletionColor(powerState, completion, config)
      : null;

    const drumProgressStyle = (() => {
      if (!config.show_drum_progress || (!isRunning && !isPaused)) return null;
      const pct = getCompletionPercent(powerState, completion);
      if (pct === null) return null;
      const color = config.drum_progress_color || "#5b9cf6";
      const filled = 100 - pct;
      return `background: conic-gradient(from -90deg, ${color} ${filled}%, transparent ${filled}%);`;
    })();

    const childLockOn = isOn(this.hass, entities[ENTITY_KEYS.childLock]);
    const remoteOn = isOn(this.hass, entities[ENTITY_KEYS.remoteControl]);

    const powerValue = powerState
      ? formatNumber(
          this.hass,
          powerState.state,
          powerState.attributes.unit_of_measurement
        )
      : "";

    const energyValue = energyState
      ? formatNumber(
          this.hass,
          energyState.state,
          energyState.attributes.unit_of_measurement
        )
      : "";

    const drumClass = ["drum", isRunning ? "running" : ""]
      .filter(Boolean)
      .join(" ");

    const showSettings =
      config.show_washer_settings &&
      (!isUnavailable(spinLevelValue) ||
        !isUnavailable(rinseCyclesValue) ||
        !isUnavailable(extraDetergentValue));

    return html`
      <ha-card class=${isGreen ? "finished" : ""}>
        <div class="card">
          ${this.renderHeader(config, secondaryStatus)}

          ${this.renderHero(
            config,
            primaryStatus,
            secondaryStatus,
            showCompletion,
            completion,
            drumClass,
            completionColor,
            drumProgressStyle
          )}

          ${config.show_status_chips
            ? html`
                <div class="chips">
                  ${this.renderChip(
                    config.icons.child_lock,
                    childLockOn ? "Child Lock On" : "Child Lock Off",
                    childLockOn
                  )}
                  ${this.renderChip(
                    config.icons.remote_control,
                    remoteOn ? "Remote Enabled" : "Remote Disabled",
                    remoteOn
                  )}
                </div>
              `
            : ""}

          <div class="controls">
            <button
              class="control-btn primary"
              ?disabled=${isRunning}
              @click=${() =>
                setWasherCommand(this, entities[ENTITY_KEYS.command], "run")}
            >
              Start
            </button>
            <button
              class="control-btn"
              ?disabled=${isPaused || isStopped}
              @click=${() =>
                setWasherCommand(this, entities[ENTITY_KEYS.command], "pause")}
            >
              Pause
            </button>
            <button
              class="control-btn"
              ?disabled=${isStopped}
              @click=${() =>
                setWasherCommand(this, entities[ENTITY_KEYS.command], "stop")}
            >
              Stop
            </button>
          </div>

          ${config.show_bubble_soak_control
            ? html`
                <button
                  class="toggle-btn ${bubbleSoakOn ? "active" : ""}"
                  @click=${() =>
                    toggleSwitch(this, entities[ENTITY_KEYS.bubbleSoak])}
                >
                  ${bubbleSoakOn ? "Bubble Soak Enabled" : "Enable Bubble Soak"}
                </button>
              `
            : ""}

          ${showSettings
            ? html`
                <div class="washer-settings">
                  ${!isUnavailable(spinLevelValue)
                    ? this.renderMetric(
                        "Spin Level",
                        titleCaseLabel(spinLevelValue),
                        config.icons.spin_level
                      )
                    : ""}
                  ${!isUnavailable(rinseCyclesValue)
                    ? this.renderMetric(
                        "Rinse Cycles",
                        rinseCyclesValue,
                        config.icons.rinse_cycles
                      )
                    : ""}
                  ${!isUnavailable(extraDetergentValue)
                    ? this.renderMetric(
                        "Detergent",
                        titleCaseLabel(extraDetergentValue),
                        config.icons.extra_detergent
                      )
                    : ""}
                </div>
              `
            : ""}

          <div class="metrics">
            ${config.show_power && powerValue
              ? this.renderMetric("Power", powerValue, config.icons.power)
              : ""}
            ${config.show_energy && energyValue
              ? this.renderMetric("Cycle Energy", energyValue, config.icons.energy)
              : ""}
          </div>
        </div>
      </ha-card>
    `;
  }
}

customElements.define(CARD_TAG, SamsungHAWasherCard);
