import Link from "next/link";

const contactEmail = "contact@storyboundhouse.com";

export function TermsContent() {
  return (
    <section className="legalPage" aria-labelledby="terms-content-title">
      <div className="legalPageInner">
        <p className="legalUpdated">Last updated: September 17, 2026</p>
        <h2 id="terms-content-title">Terms and Conditions</h2>
        <p>These Terms and Conditions govern your use of the Storybound House website and any writing, editing, design, publishing, or related services purchased from us. By using this website, approving a proposal, or making a payment, you agree to these terms and to the project terms stated in your proposal or service agreement.</p>
        <ol>
          <li>If you do not agree to these terms, please do not use the website or purchase our services.</li>
          <li>You must be legally able to enter a contract in your jurisdiction. If you act for another person or organization, you confirm that you have authority to bind them.</li>
          <li>A project begins only after the scope, schedule, price, and payment terms have been accepted and any required initial payment has cleared.</li>
          <li>Your proposal or service agreement forms part of these terms. If it contains a project-specific provision that conflicts with this page, the signed project-specific provision controls.</li>
        </ol>

        <h2>Definitions</h2>
        <p><strong>“Website”</strong> means the pages, content, and forms available through storyboundhouse.com.</p>
        <p><strong>“Client,” “you,” or “your”</strong> means the person or organization using the website, requesting a proposal, or purchasing services.</p>
        <p><strong>“Storybound House,” “we,” “us,” or “our”</strong> means the writing and publishing-services provider identified in your proposal or service agreement.</p>
        <p><strong>“Services”</strong> means the writing, editing, design, publishing assistance, marketing support, consulting, or related work described in an accepted proposal.</p>
        <p><strong>“Deliverables”</strong> means the drafts, manuscripts, designs, files, or other work we agree to provide.</p>

        <h2>Our Services</h2>
        <p>Every engagement is governed by an agreed scope. You are responsible for reviewing project details, providing accurate source material, responding to questions, and giving feedback within the agreed schedule. We may use carefully selected employees or independent contractors to complete specialist work, and they must follow the confidentiality obligations applicable to the project.</p>
        <p>We do not guarantee publication, sales, bestseller status, media coverage, awards, literary representation, or any particular commercial result. Publishing platforms, retailers, distributors, and other third parties make their own independent decisions.</p>

        <h2>Client Materials, Accuracy, and Approvals</h2>
        <p>You confirm that you have permission to provide and use all material supplied to us. You remain responsible for the truth, legality, permissions, releases, citations, and final subject-matter accuracy of the published work. Where a manuscript includes medical, legal, financial, scientific, or other specialist claims, appropriate professional review may be required before publication.</p>
        <p>Your approval of a draft, design, or final file confirms that you have reviewed it. Changes requested after final approval may require a new scope, schedule, and fee.</p>

        <h2>Payments and Project Scheduling</h2>
        <p>Fees, deposits, installments, taxes, and due dates are stated in the project proposal or invoice. Unless that document says otherwise, payments already earned for completed work are non-refundable. We may pause work when an invoice is overdue or when required materials or feedback have not been provided.</p>

        <h2>Refund Policy</h2>
        <h3>Change of Mind</h3>
        <p>You may request a full refund before writing, editing, design, research, scheduling, or other project work begins. If you cancel within one hour of placing an order but administrative or payment processing has already started, documented processing costs of up to 15% may be deducted. Once project work begins, any refund is limited to the unearned portion of the fee after completed work and non-recoverable costs are deducted.</p>
        <h3>Deliverables That Do Not Match the Agreed Brief</h3>
        <p>If a deliverable materially fails to meet the documented project requirements, notify us in writing and identify the unmet requirements. We will first use the revision, correction, reassignment, or replacement options included in the agreement. If we cannot correct a verified material failure, the parties may agree to an appropriate partial refund based on the affected portion of the work.</p>
        <h3>Late Delivery</h3>
        <p>If a milestone is delayed for reasons within our control, we will provide a revised delivery plan. A refund or credit may be considered when a material delay remains unresolved after reasonable written notice. Delays caused by late client feedback, missing materials, scope changes, third-party services, emergencies, or events outside our reasonable control do not qualify.</p>
        <h3>Refund Time Frame and Exclusions</h3>
        <p>Refund requests must be submitted in writing within 120 days of the relevant delivery. Requests made after that period may not be considered. Refunds are generally unavailable for minor correctable issues, subjective preference after the agreed brief has been met, delays caused by the client, approved work, work used or published by the client, or requests made before the included revision process has been completed.</p>

        <h2>Revisions and Scope Changes</h2>
        <p>Included revisions are defined in your proposal. Revisions address the agreed brief and do not include a new concept, audience, structure, direction, or substantial material introduced after approval. Additional work will be quoted separately before it begins.</p>

        <h2>Confidentiality and Ownership</h2>
        <p>We treat project communications and unpublished materials as confidential and use them only to perform the services, administer the project, or meet legal obligations. After full payment, ownership of the final approved deliverables transfers as stated in your agreement. Working files, unused concepts, licensed materials, third-party assets, tools, methods, and pre-existing intellectual property remain subject to their original ownership or license terms.</p>

        <h2>Website Use and Limitation of Liability</h2>
        <p>You may not misuse the website, attempt unauthorized access, interfere with its operation, or copy protected site content beyond uses permitted by law. To the maximum extent permitted by applicable law, Storybound House is not liable for indirect, incidental, special, or consequential loss. Our aggregate liability relating to a paid project will not exceed the amount paid for the affected services.</p>

        <h2>Changes and Contact</h2>
        <p>We may update these terms when our services, technology, or legal obligations change. The date above identifies the latest version. Questions or formal notices may be sent to <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>.</p>
      </div>
    </section>
  );
}

export function PrivacyContent() {
  return (
    <section className="legalPage" aria-labelledby="privacy-content-title">
      <div className="legalPageInner">
        <p className="legalUpdated">Last updated: September 17, 2026</p>
        <h2 id="privacy-content-title">Privacy Policy</h2>
        <p>This policy explains how Storybound House collects, uses, stores, and shares information obtained through this website and through direct project communications. It also explains the choices available to you. By using the website or contacting us, you acknowledge the practices described here.</p>

        <h2>Information We Collect</h2>
        <p><strong>Information you provide:</strong> your name, email address, telephone number, company, project details, manuscript or source materials, messages, billing information, and any other information you choose to share.</p>
        <p><strong>Usage and device information:</strong> anonymous browser and session identifiers, browser and device type, referring page, pages visited, recent page activity, approximate country or region derived by our hosting provider, and technical events used to maintain security and understand website performance. Our first-party analytics store does not retain your full IP address.</p>
        <p><strong>Payment information:</strong> payments may be processed by third-party payment providers. We receive transaction details needed to administer an order but do not intentionally store complete payment-card numbers on this website.</p>

        <h2>How We Use Information</h2>
        <ul>
          <li>Respond to enquiries and recommend an appropriate service.</li>
          <li>Prepare proposals, provide contracted services, and communicate about projects.</li>
          <li>Process payments, maintain business records, and meet tax or legal obligations.</li>
          <li>Protect the website, prevent fraud or misuse, and diagnose technical problems.</li>
          <li>Measure website performance and improve our content and services.</li>
          <li>Send marketing messages only where permitted; you may unsubscribe at any time.</li>
        </ul>

        <h2>Cookies, Analytics, and IP Addresses</h2>
        <p>Cookies, local storage, session storage, and similar technologies may remember preferences, maintain a secure admin session, assign anonymous visitor and session identifiers, and collect usage statistics. Our first-party analytics may record the page an anonymous visitor is currently viewing for a short live-activity window. The website may also use services such as Vercel Analytics, Vercel Speed Insights, and, when configured, Google Tag Manager. These providers may process technical information under their own privacy terms. You can clear or limit browser storage through your browser settings, although some features may work differently.</p>

        <h2>How We Share Information</h2>
        <p>We do not sell or rent personal information. We may share only what is necessary with employees, contractors, editors, designers, hosting and analytics providers, payment processors, professional advisers, or other service providers helping us operate the business or complete your project. We may also disclose information when required by law, to protect legal rights or safety, or as part of a business reorganization.</p>

        <h2>Confidentiality, Manuscripts, and Ownership</h2>
        <p>Unpublished manuscripts, interviews, project files, and communications are treated as confidential and are shared only with people who need access to perform the agreed services. We do not publicly identify you as a client or display your work without permission. Ownership of completed work is governed by the applicable service agreement; Storybound House makes no claim to the client’s final manuscript after the agreed transfer conditions are met.</p>

        <h2>Originality and Source Material</h2>
        <p>We create original material for each engagement and expect clients to provide only material they are entitled to use. Research-derived information is written and cited as appropriate to the project. Automated similarity checks or editorial review may be used as quality-control tools, but no tool can replace the author’s responsibility to confirm permissions, citations, and final factual accuracy.</p>

        <h2>Security and Retention</h2>
        <p>We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. Access is limited to people who need it for their work. No internet transmission or storage system is completely secure, so absolute security cannot be guaranteed.</p>
        <p>We retain information only as long as reasonably necessary for the purposes described here, including project delivery, recordkeeping, dispute resolution, security, and legal compliance. Retention periods vary by the type of information and our obligations.</p>

        <h2>Your Access and Control</h2>
        <p>Subject to applicable law, you may ask us to:</p>
        <ul>
          <li>Confirm whether we hold personal information about you.</li>
          <li>Provide access to or correct inaccurate information.</li>
          <li>Delete information that we are not legally required to retain.</li>
          <li>Restrict or object to certain uses of your information.</li>
          <li>Withdraw consent or unsubscribe from marketing communications.</li>
        </ul>
        <p>We may need to verify your identity before completing a request. Some rights depend on your location and may be limited by contractual, security, recordkeeping, or legal requirements.</p>

        <h2>Third-Party Links and International Processing</h2>
        <p>The website may link to services we do not control. Their privacy practices are governed by their own policies. Our providers may process information in countries other than yours, subject to the safeguards required by applicable law.</p>

        <h2>Children’s Privacy</h2>
        <p>This website and our services are not directed to children under 13, and we do not knowingly collect their personal information through the website. If you believe a child has provided information, please contact us so we can review and remove it where appropriate.</p>

        <h2>Changes and Contact</h2>
        <p>We may update this policy as our practices, technology, or legal requirements change. The latest version will appear on this page with its effective date. To ask a privacy question or exercise a privacy right, email <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>.</p>
      </div>
    </section>
  );
}
