import { LitElement, html, css } from "lit";
import { DEFAULT_CONFIG } from "./washer-card-constants";

const ENTITY_FIELDS = [
  { key: "machine_state_entity", label: "Machine State Entity" },
  { key: "job_state_entity", label: "Job State Entity" },
  { key: "completion_time_entity", label: "Completion Time Entity" },
  { key: "command_entity", label: "Command Entity" },
  { key: "child_lock_entity", label: "Child Lock Entity" },
  { key: "remote_control_entity", label: "Remote Control Entity" },
  { key: "bubble_soak_entity", label: "Bubble Soak Entity" },
  { key: "spin_level_entity", label: "Spin Level Entity" },
  { key: "rinse_cycles_entity", label: "Rinse Cycles Entity" },
  { key: "extra_detergent_entity", label: "Extra Detergent Entity" },
  { key: "power_entity", label: "Power Entity" },
  { key: "energy_entity", label: "Energy Entity" }
];

const BOOLEAN_FIELDS = [
  { key: "show_subtitle", label: "Show subtitle" },
  { key: "show_completion_time", label: "Show completion time" },
  { key: "show_status_chips", label: "Show status chips" },
  { key: "show_power", label: "Show power" },
  { key: "show_energy", label: "Show cycle energy" },
  { key: "show_bubble_soak_control", label: "Show bubble soak control" },
  { key: "show_washer_settings", label: "Show washer settings (spin, rinse, detergent)" },
  { key: "show_drum_progress", label: "Show drum progress fill" }
];

const ICON_FIELDS = [
  { key: "appliance", label: "Appliance Icon" },
  { key: "start", label: "Start Icon" },
  { key: "pause", label: "Pause Icon" },
  { key: "stop", label: "Stop Icon" },
  { key: "child_lock", label: "Child Lock Icon" },
  { key: "remote_control", label: "Remote Icon" },
  { key: "bubble_soak", label: "Bubble Soak Icon" },
  { key: "spin_level", label: "Spin Level Icon" },
  { key: "rinse_cycles", label: "Rinse Cycles Icon" },
  { key: "extra_detergent", label: "Extra Detergent Icon" },
  { key: "power", label: "Power Icon" },
  { key: "energy", label: "Energy Icon" },
  { key: "complete", label: "Completion Icon" }
];

export class SamsungHAWasherCardEditor extends LitElement {
  static properties = {
    hass: {},
    _config: { state: true }
  };

  static styles = css`
    :host {
      display: block;
    }

    .section {
      padding: 12px 0;
      border-bottom: 1px solid var(--divider-color);
    }

    .section:last-child {
      border-bottom: none;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 12px;
    }

    .field {
      margin-bottom: 12px;
    }

    .field:last-child {
      margin-bottom: 0;
    }

    .icon-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 12px;
    }

    .threshold-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 12px;
    }

    .threshold-row:last-child {
      margin-bottom: 0;
    }

    .select-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .select-label {
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    select {
      min-height: 40px;
      border-radius: 10px;
      border: 1px solid var(--divider-color);
      background: var(--card-background-color);
      color: var(--primary-text-color);
      padding: 0 10px;
      font: inherit;
    }
  `;

  setConfig(config) {
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      icons: {
        ...DEFAULT_CONFIG.icons,
        ...((config && config.icons) || {})
      }
    };
  }

  _emitConfig(config) {
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config },
        bubbles: true,
        composed: true
      })
    );
  }

  _updateField(key, value) {
    const newConfig = { ...this._config };

    if (value === "" || value === null || value === undefined) {
      delete newConfig[key];
    } else {
      newConfig[key] = value;
    }

    this._emitConfig(newConfig);
  }

  _updateBoolean(key, checked) {
    this._emitConfig({
      ...this._config,
      [key]: checked
    });
  }

  _updateIcon(key, value) {
    const newIcons = {
      ...(this._config.icons || {})
    };

    if (value === "" || value === null || value === undefined) {
      delete newIcons[key];
    } else {
      newIcons[key] = value;
    }

    this._emitConfig({
      ...this._config,
      icons: newIcons
    });
  }

  _renderTextField(label, value, onInput, helper = "") {
    return html`
      <div class="field">
        <ha-textfield
          .label=${label}
          .value=${value || ""}
          .helper=${helper}
          .helperPersistent=${Boolean(helper)}
          @input=${onInput}
        ></ha-textfield>
      </div>
    `;
  }

  _renderEntityField(label, key) {
    return html`
      <div class="field">
        <ha-entity-picker
          .hass=${this.hass}
          .label=${label}
          .value=${this._config[key] || ""}
          allow-custom-entity
          @value-changed=${(e) => this._updateField(key, e.detail.value)}
        ></ha-entity-picker>
      </div>
    `;
  }

  _renderSwitch(label, key) {
    return html`
      <div class="field">
        <ha-formfield .label=${label}>
          <ha-switch
            .checked=${Boolean(this._config[key])}
            @change=${(e) => this._updateBoolean(key, e.target.checked)}
          ></ha-switch>
        </ha-formfield>
      </div>
    `;
  }

  _renderThresholdColorRow(index) {
    const thresholdKey = `completion_color_threshold_${index}`;
    const colorKey = `completion_color_${index}`;
    const thresholdVal = this._config[thresholdKey];
    const colorVal = this._config[colorKey] || "";

    return html`
      <div class="threshold-row">
        <ha-textfield
          .label=${`Threshold ${index} (%)`}
          .value=${thresholdVal != null ? String(thresholdVal) : ""}
          type="number"
          min="0"
          max="100"
          @input=${(e) => {
            const val = e.target.value;
            this._updateField(thresholdKey, val === "" ? undefined : Number(val));
          }}
        ></ha-textfield>
        <ha-textfield
          .label=${`Color ${index} (hex)`}
          .value=${colorVal}
          placeholder="#RRGGBB"
          @input=${(e) => this._updateField(colorKey, e.target.value)}
        ></ha-textfield>
      </div>
    `;
  }

  _renderLayoutModeField() {
    return html`
      <div class="field">
        <div class="select-field">
          <div class="select-label">Layout Mode</div>
          <select
            .value=${this._config.layout_mode || "hero"}
            @change=${(e) => this._updateField("layout_mode", e.target.value)}
          >
            <option value="hero">Hero</option>
            <option value="compact">Compact</option>
          </select>
        </div>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="section">
        <div class="section-title">General</div>
        ${this._renderTextField(
          "Title",
          this._config.title,
          (e) => this._updateField("title", e.target.value)
        )}
        ${this._renderTextField(
          "Device Name",
          this._config.device_name,
          (e) => this._updateField("device_name", e.target.value),
          "Used for automatic entity discovery, for example: washer"
        )}
        ${this._renderLayoutModeField()}
      </div>

      <div class="section">
        <div class="section-title">Display Options</div>
        ${BOOLEAN_FIELDS.map((field) => this._renderSwitch(field.label, field.key))}
        ${this._renderTextField(
          "Drum progress color (hex)",
          this._config.drum_progress_color,
          (e) => this._updateField("drum_progress_color", e.target.value),
          "Color of the progress fill inside the drum circle"
        )}
        ${this._renderTextField(
          "Green highlight duration (minutes)",
          this._config.finished_green_duration != null ? String(this._config.finished_green_duration) : "",
          (e) => this._updateField("finished_green_duration", e.target.value === "" ? undefined : Number(e.target.value)),
          "How long the card stays green after finishing (0 = always)"
        )}
      </div>

      <div class="section">
        <div class="section-title">Completion Time Colors</div>
        <div class="field" style="color: var(--secondary-text-color); font-size: 0.85rem; margin-bottom: 12px;">
          Color the remaining-time badge when below a % threshold. Leave blank to use the default color.
        </div>
        ${this._renderThresholdColorRow(1)}
        ${this._renderThresholdColorRow(2)}
      </div>

      <div class="section">
        <div class="section-title">Entities</div>
        ${ENTITY_FIELDS.map((field) => this._renderEntityField(field.label, field.key))}
      </div>

      <div class="section">
        <div class="section-title">Icons</div>
        <div class="icon-grid">
          ${ICON_FIELDS.map((field) =>
            this._renderTextField(
              field.label,
              this._config.icons && this._config.icons[field.key],
              (e) => this._updateIcon(field.key, e.target.value)
            )
          )}
        </div>
      </div>
    `;
  }
}

customElements.define(
  "samsung-ha-washer-card-editor",
  SamsungHAWasherCardEditor
);
