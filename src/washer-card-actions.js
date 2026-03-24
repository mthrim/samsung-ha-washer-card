export async function setWasherCommand(card, entityId, option) {
  if (!entityId) return;

  await card.hass.callService("select", "select_option", {
    entity_id: entityId,
    option
  });
}

export async function toggleSwitch(card, entityId) {
  if (!entityId) return;

  await card.hass.callService("homeassistant", "toggle", {
    entity_id: entityId
  });
}
