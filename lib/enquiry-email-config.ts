export const ENQUIRY_RECIPIENTS = [
  "sales@storyboundhouse.com",
  "support@storyboundhouse.com",
  "arao3960@gmail.com",
  "arao.dev3960@gmail.com",
  "contact@storyboundhouse.com",
] as const;

export function isEnquiryEmailConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD && process.env.SMTP_FROM);
}
