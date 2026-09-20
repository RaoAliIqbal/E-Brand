export const DISCOUNT_CAMPAIGN = "ghostwriting-70-off";
export const TIMED_DISCOUNT_CAMPAIGN = "ghostwriting-85-off";

export function isTimedDiscountContact(contact: { campaign?: string; service: string }) {
  return contact.campaign === TIMED_DISCOUNT_CAMPAIGN;
}

export function isPopupContact(contact: { campaign?: string; service: string }) {
  return isDiscountContact(contact) || isTimedDiscountContact(contact);
}

export function isDiscountContact(contact: { campaign?: string; service: string }) {
  return contact.campaign === DISCOUNT_CAMPAIGN || contact.service === "Ghostwriting — 70% offer";
}
