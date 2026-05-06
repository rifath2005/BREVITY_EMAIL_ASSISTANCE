import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is Brevity really free?",
    a: "Yes, 100% free forever. There are no subscriptions, hidden fees, or premium tiers. You only pay for your own AI API usage (e.g., OpenAI or Google), which you control directly.",
  },
  {
    q: "How do I set up my API key?",
    a: "After installing the extension, click the Brevity icon and go to Settings. Paste your OpenAI or Google AI API key — it's stored locally in your browser and never sent anywhere else.",
  },
  {
    q: "Does Brevity read or store my emails?",
    a: "No. Brevity processes email content locally in your browser and sends only the necessary text to the AI provider you chose (via your own API key). We have zero access to your data.",
  },
  {
    q: "Which email providers are supported?",
    a: "Brevity currently works with Gmail in Chrome-based browsers (Chrome, Edge, Brave, Arc). Support for Outlook and other providers is planned.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. All processing happens locally. Your emails and API key never touch Brevity's servers. The extension requests only the minimum permissions needed to function.",
  },
  {
    q: "How accurate is the risk detection?",
    a: "Brevity uses AI to analyze sender reputation, link patterns, and content signals. It flags emails as Safe (green), Suspicious (yellow), or Scam (red) with detailed reasoning you can review.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-foreground">{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
