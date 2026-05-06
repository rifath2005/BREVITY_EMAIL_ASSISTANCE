import { motion } from "framer-motion";
import { Download, Key, Mail, Sparkles, ArrowRight } from "lucide-react";

const steps = [
  { icon: Download, title: "Install", desc: "Add Brevity from the Chrome Web Store in one click." },
  { icon: Key, title: "Add API Key", desc: "Paste your own AI API key. Your key, your control." },
  { icon: Mail, title: "Open Email", desc: "Navigate to any email in Gmail as you normally would." },
  { icon: Sparkles, title: "Get Analysis", desc: "Instant summary, risk score, action items, and reply draft." },
];

const flowSteps = [
  "Email Content",
  "AI Analysis",
  "Risk Detection",
  "Summary + Actions + Replies",
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Up and running in <span className="text-gradient">under a minute</span>
        </h2>
      </motion.div>

      {/* 4 Steps */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="mb-1 font-heading text-xs font-semibold uppercase tracking-wider text-primary">
              Step {i + 1}
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 flex flex-wrap items-center justify-center gap-3"
      >
        {flowSteps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <div className="glass rounded-xl px-5 py-3 text-sm font-medium text-foreground">
              {step}
            </div>
            {i < flowSteps.length - 1 && (
              <ArrowRight className="h-4 w-4 text-primary" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorksSection;
