import { motion } from "framer-motion";
import { HardDrive, EyeOff, KeyRound } from "lucide-react";

const points = [
  {
    icon: HardDrive,
    title: "100% Local Storage",
    desc: "All data stays in your browser. Nothing is sent to Brevity servers — ever.",
  },
  {
    icon: KeyRound,
    title: "Your API Key",
    desc: "You provide your own AI key. We never see it, store it remotely, or share it.",
  },
  {
    icon: EyeOff,
    title: "Zero Tracking",
    desc: "No analytics, no telemetry, no user profiling. Your inbox stays yours.",
  },
];

const PrivacySection = () => (
  <section id="privacy" className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Privacy isn't a feature.
          <br />
          <span className="text-gradient">It's the architecture.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Brevity was designed from the ground up so your email data never leaves your device.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <p.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrivacySection;
