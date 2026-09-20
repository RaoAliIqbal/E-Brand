const { test, after } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');

// Load the real server modules without running Next or touching the live inbox.
require.extensions['.ts'] = (mod, filename) => {
  const source = fs.readFileSync(filename, 'utf8').replace(/(["'])@\//g, '$1' + root.replaceAll('\\', '/') + '/');
  mod._compile(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true, target: ts.ScriptTarget.ES2020 } }).outputText, filename);
};
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'storybound-enquiry-test-'));
const file = path.join(temporary, 'inbox.json');
process.env.ADMIN_DATA_FILE = file;
const nodemailer = require('nodemailer').default;
let messages = [];
let behavior;
nodemailer.createTransport = options => ({
  sendMail: async message => {
    messages.push({ options, ...message });
    return behavior ? behavior(message) : { accepted: message.to, rejected: [] };
  },
  close() {},
});
const { POST } = require('../app/api/contact/route.ts');
const { getDashboardData } = require('../lib/admin-store.ts');
const { notifyEnquiry, enquiryEmailContent } = require('../lib/enquiry-email.ts');
const { ENQUIRY_RECIPIENTS } = require('../lib/enquiry-email-config.ts');
const { DISCOUNT_CAMPAIGN, TIMED_DISCOUNT_CAMPAIGN, isDiscountContact, isTimedDiscountContact, isPopupContact } = require('../lib/contact-campaign.ts');

function reset(configured = true) {
  fs.writeFileSync(file, JSON.stringify({ contacts: [], visitors: {}, pageViews: [] }));
  messages = []; behavior = undefined;
  for (const key of ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASSWORD', 'SMTP_FROM']) delete process.env[key];
  if (configured) Object.assign(process.env, { SMTP_HOST: 'smtp.example.invalid', SMTP_USER: 'test', SMTP_PASSWORD: 'fake', SMTP_FROM: 'info@storyboundhouse.com', SMTP_PORT: '465' });
}
process.env.TRUSTED_PROXY_IP_HEADER = 'x-real-ip';
let submissionNumber = 0;
const submit = overrides => POST(new Request('http://localhost/api/contact', {
  method: 'POST', headers: { 'Content-Type': 'application/json', Origin: 'http://localhost', 'x-real-ip': '192.0.2.' + (++submissionNumber) },
  body: JSON.stringify({ name: 'Test Author', email: 'author@example.com', phone: '+15555550100', service: 'Ghostwriting', message: 'A test manuscript.', sourcePage: '/contact', ...overrides }),
}));

test('all five forms persist, route to their inbox, and notify exactly the five recipients', async () => {
  reset();
  const forms = [
    { campaign: DISCOUNT_CAMPAIGN, sourcePage: '/', expected: 'popup-70' },
    { campaign: TIMED_DISCOUNT_CAMPAIGN, sourcePage: '/fiction', expected: 'popup-85' },
    { formSource: 'contact-page', expected: 'contact-page' },
    { formSource: 'footer', sourcePage: '/editing', expected: 'footer' },
    { formSource: 'quote-popup', sourcePage: '/', expected: 'quote-popup' },
  ];
  for (const { expected, ...input } of forms) {
    const response = await submit(input);
    assert.equal(response.status, 201);
    const id = (await response.json()).id;
    const lead = (await getDashboardData()).contacts.find(contact => contact.id === id);
    assert.equal(lead.formSource, expected);
    assert.equal(lead.emailNotification.status, 'sent');
    assert.deepEqual(lead.emailNotification.acceptedRecipients, [...ENQUIRY_RECIPIENTS]);
  }
  const contacts = (await getDashboardData()).contacts;
  assert.equal(contacts.filter(isDiscountContact).length, 1);
  assert.equal(contacts.filter(isTimedDiscountContact).length, 1);
  assert.equal(contacts.filter(contact => !isPopupContact(contact)).length, 3);
  assert.equal(messages.length, 5);
  for (const message of messages) {
    assert.deepEqual(message.to, [...ENQUIRY_RECIPIENTS]);
    assert.equal(message.replyTo, 'author@example.com');
    assert.equal(message.from.address, 'info@storyboundhouse.com');
    assert.ok(message.text.includes('A test manuscript.'));
    assert.equal(message.options.secure, true);
  }
});

test('missing SMTP keeps the enquiry saved with an actionable admin status', async () => {
  reset(false);
  assert.equal((await submit({})).status, 201);
  assert.equal(messages.length, 0);
  const data = await getDashboardData();
  assert.equal(data.emailConfigured, false);
  assert.equal(data.contacts[0].emailNotification.status, 'not-configured');
});

test('SMTP failure preserves the lead and a later retry succeeds without resending sent leads', async () => {
  reset();
  behavior = () => { throw new Error('simulated connection error'); };
  assert.equal((await submit({})).status, 201);
  let lead = (await getDashboardData()).contacts[0];
  assert.equal(lead.emailNotification.status, 'failed');
  behavior = undefined;
  await notifyEnquiry(lead.id);
  lead = (await getDashboardData()).contacts[0];
  assert.equal(lead.emailNotification.status, 'sent');
  assert.equal(lead.emailNotification.attempts, 2);
  await notifyEnquiry(lead.id);
  assert.equal(messages.length, 2);
});

test('partial acceptance retries only missing recipients and blocks concurrent duplicate retries', async () => {
  reset();
  behavior = message => ({ accepted: message.to.slice(0, 2), rejected: message.to.slice(2) });
  await submit({});
  const lead = (await getDashboardData()).contacts[0];
  assert.equal(lead.emailNotification.status, 'partial');
  behavior = undefined;
  await Promise.all([notifyEnquiry(lead.id), notifyEnquiry(lead.id)]);
  assert.deepEqual(messages[1].to, [...ENQUIRY_RECIPIENTS].slice(2));
  assert.equal(messages.length, 2);
  assert.equal((await getDashboardData()).contacts[0].emailNotification.status, 'sent');
});

test('message HTML is escaped and invalid contacts cannot trigger email', async () => {
  reset();
  assert.equal((await submit({ email: 'invalid' })).status, 400);
  assert.equal(messages.length, 0);
  await submit({ name: '<script>bad</script>\r\nSubject: bad', message: '<img src=x onerror=bad>' });
  const lead = (await getDashboardData()).contacts[0];
  const email = enquiryEmailContent(lead);
  assert.ok(!email.html.includes('<script>'));
  assert.ok(email.html.includes('&lt;img'));
  assert.ok(!/[\r\n]/.test(email.subject));
});

test('port 587 requires STARTTLS', async () => {
  reset(); process.env.SMTP_PORT = '587';
  await submit({});
  assert.equal(messages[0].options.secure, false);
  assert.equal(messages[0].options.requireTLS, true);
});

after(() => {
  if (fs.existsSync(file)) fs.unlinkSync(file);
  fs.rmdirSync(temporary);
});
