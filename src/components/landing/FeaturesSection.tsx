import { motion } from "framer-motion";
import { FileText, ShieldCheck, ListChecks, MessageSquareReply } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Instant Summarization",
    desc: "Long email threads distilled into clear, actionable bullet points. Get the gist in seconds, not minutes.",
    color: "text-primary",
  },
  {
    icon: ShieldCheck,
    title: "Smart Risk Detection",
    desc: "AI-powered scanning identifies phishing attempts, suspicious links, and scam patterns before you click.",
    color: "text-safe",
  },
  {
    icon: ListChecks,
    title: "Action Item Extraction",
    desc: "Automatically pulls deadlines, tasks, and follow-ups from your emails so nothing falls through the cracks.",
    color: "text-suspicious",
  },
  {
    icon: MessageSquareReply,
    title: "AI Reply Generation",
    desc: "Context-aware reply drafts that match your tone. Review, edit, and send — saving you time on every response.",
    color: "text-primary",
  },
];

const FeaturesSection = () => (
  <section id="features" className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Four features. <span className="text-gradient">Zero complexity.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to take back control of your inbox — nothing you don't.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass group rounded-2xl p-8 transition-all hover:border-primary/30"
          >
            <f.icon className={`mb-5 h-10 w-10 ${f.color}`} />
            <h3 className="font-heading text-xl font-semibold text-foreground">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
