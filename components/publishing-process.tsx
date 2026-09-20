import Link from "next/link";
import { QuotePopupButton } from "@/components/contact-popup";

const publishingSteps = [
  "Speak to us about your book idea",
  "Plan your book with a ghostwriter",
  "Approve the outline",
  "Review the first draft",
  "Share your comprehensive feedback",
  "Review the final draft",
  "Launch your book",
];

export function PublishingProcess() {
  return (
    <section className="publishingProcess" aria-labelledby="publishing-process-title">
      <div className="publishingProcessInner">
        <div className="publishingPitch">
          <p className="publishingKicker">Get your incredible story published by <span /></p>
          <h2 id="publishing-process-title">Storybound House</h2>
          <div className="publishingCopy">
            <p>Whether your manuscript is already complete or your idea is still taking shape, Storybound House helps you move confidently toward publication. Our specialists bring writing, editing, design, and publishing support together around your goals.</p>
            <p>With thoughtful strategy, careful coordination, and a clear understanding of your audience, we make each stage easier to navigate—so your book can reach readers with the professional finish it deserves.</p>
          </div>
          <div className="publishingActions">
            <QuotePopupButton />
            <Link href="/contact">Live chat</Link>
          </div>
        </div>

        <div className="publishingSteps">
          <p className="processKicker">Ghostwriting process <span /></p>
          <h2><strong>7 Steps</strong> to Getting<br />Published</h2>
          <ul>
            {publishingSteps.map(step => <li key={step}>{step}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
