import { motion } from "framer-motion";
import { ArrowLeft, Download, Settings, Globe, Key, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Install = () => (
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
      >
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">
          Installation Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-12">
          Get Brevity up and running in under 2 minutes
        </p>

        {/* Step 1 */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Step 1: Download the Extension
              </h2>
              <p className="text-muted-foreground mb-4">
                Download the Brevity extension ZIP file and extract it to a folder on your computer.
              </p>
              <a
                href="/brevity-extension.zip"
                download="brevity-extension.zip"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                <Download className="h-4 w-4" />
                Download Extension ZIP
              </a>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Step 2: Install in Developer Mode
              </h2>
              <p className="text-muted-foreground mb-4">
                Load the extension into your Chrome-based browser.
              </p>
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    1
                  </span>
                  <span>
                    Open your browser and navigate to <code className="rounded bg-muted px-2 py-1 text-sm">chrome://extensions/</code>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    2
                  </span>
                  <span>
                    Enable <strong>"Developer mode"</strong> using the toggle in the top-right corner
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    3
                  </span>
                  <span>
                    Click <strong>"Load unpacked"</strong> button
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    4
                  </span>
                  <span>
                    Select the extracted Brevity extension folder
                  </span>
                </li>
              </ol>
              <div className="mt-4 rounded-lg bg-primary/5 border border-primary/20 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Works with Chrome, Edge, Brave, Arc, and other Chromium-based browsers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Key className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Step 3: Add Your API Key
              </h2>
              <p className="text-muted-foreground mb-4">
                Configure Brevity with your AI provider API key.
              </p>
              <ol className="space-y-3 text-muted-foreground mb-4">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    1
                  </span>
                  <span>
                    Click the Brevity icon in your browser toolbar
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    2
                  </span>
                  <span>
                    Click the <Settings className="inline h-4 w-4" /> Settings icon
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    3
                  </span>
                  <span>
                    Paste your OpenAI or Google AI API key
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                    4
                  </span>
                  <span>
                    Save your settings
                  </span>
                </li>
              </ol>

              <div className="space-y-3">
                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="font-semibold text-foreground mb-2">Getting an OpenAI API Key:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Visit <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">platform.openai.com</a></li>
                    <li>Sign up or log in to your account</li>
                    <li>Navigate to the API Keys section</li>
                    <li>Click "Create new secret key"</li>
                    <li>Copy the key and paste it into Brevity</li>
                  </ol>
                </div>

                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className="font-semibold text-foreground mb-2">Getting a Google AI API Key:</h3>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Visit <a href="https://ai.google.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ai.google.dev</a></li>
                    <li>Sign up or log in with your Google account</li>
                    <li>Get your API key from the dashboard</li>
                    <li>Copy the key and paste it into Brevity</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                Step 4: Start Using Brevity
              </h2>
              <p className="text-muted-foreground mb-4">
                You're all set! Here's how to use Brevity:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Open Gmail and navigate to any email</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Click the Brevity icon in your toolbar or look for the sidebar panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Get instant summaries, risk analysis, action items, and reply drafts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="rounded-xl bg-muted/30 p-8 border border-border">
          <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
            Troubleshooting
          </h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Extension not showing up?</h3>
              <p className="text-muted-foreground">
                Make sure you've enabled Developer mode and selected the correct folder. The folder should contain a <code className="rounded bg-muted px-1">manifest.json</code> file.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">API key not working?</h3>
              <p className="text-muted-foreground">
                Double-check that you've copied the entire key without extra spaces. Make sure your API key has sufficient credits/quota.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Not seeing Brevity in Gmail?</h3>
              <p className="text-muted-foreground">
                Refresh your Gmail tab after installing the extension. Make sure you're on <code className="rounded bg-muted px-1">mail.google.com</code>.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Still need help?</h3>
              <p className="text-muted-foreground">
                Contact us at <a href="mailto:support@brevity.email" className="text-primary hover:underline">support@brevity.email</a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default Install;
