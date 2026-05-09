import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-slate dark:prose-invert max-w-none"
      >
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Our Commitment</h2>
          <p className="text-muted-foreground leading-relaxed">
            Brevity is built with privacy as its foundation. We believe your email data is yours alone. 
            This policy explains how Brevity handles your information — or more accurately, how it doesn't.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Data We Don't Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Brevity does not collect, store, transmit, or have access to:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li>Your email content or metadata</li>
            <li>Your Gmail account credentials</li>
            <li>Your AI API keys (stored locally in your browser only)</li>
            <li>Your browsing history or behavior</li>
            <li>Any personally identifiable information (PII)</li>
            <li>Usage analytics or telemetry data</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">How Brevity Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            All processing happens locally in your browser:
          </p>
          <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
            <li>You open an email in Gmail</li>
            <li>Brevity reads the email content from the DOM (Document Object Model)</li>
            <li>The content is processed locally and sent to your chosen AI provider (OpenAI, Google, etc.) using YOUR API key</li>
            <li>The AI response is displayed in the extension interface</li>
            <li>No data passes through Brevity servers — we don't have any</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When you use Brevity, your email content is sent directly to the AI provider you configure (e.g., OpenAI, Google AI). 
            This communication happens between your browser and the AI provider — Brevity acts only as a client-side interface.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Please review the privacy policies of your chosen AI provider:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
            <li><a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OpenAI Privacy Policy</a></li>
            <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Browser Permissions</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Brevity requests the following Chrome permissions:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2">
            <li><strong>activeTab:</strong> To read email content from the current Gmail tab</li>
            <li><strong>storage:</strong> To save your settings and API key locally in your browser</li>
            <li><strong>host permissions (mail.google.com):</strong> To inject the extension interface into Gmail</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            These are the minimum permissions required for Brevity to function. We do not request access to all websites or your browsing history.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your API key and settings are stored using Chrome's local storage API, which is encrypted and sandboxed to your browser. 
            Only the Brevity extension can access this data — no other websites or extensions can read it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Open Source</h2>
          <p className="text-muted-foreground leading-relaxed">
            Brevity's code is open source and available for audit. You can verify our privacy claims by reviewing the source code yourself.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-muted-foreground leading-relaxed">
            If we make changes to this privacy policy, we will update the "Last updated" date at the top of this page. 
            Continued use of Brevity after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground mt-8 mb-4">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have questions about this privacy policy, please contact us at:{" "}
            <a href="mailto:privacy@brevity.email" className="text-primary hover:underline">
              privacy@brevity.email
            </a>
          </p>
        </section>
      </motion.div>
    </div>
  </div>
);

export default Privacy;
