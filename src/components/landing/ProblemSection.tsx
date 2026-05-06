import { motion } from "framer-motion";
import { AlertTriangle, Clock, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Clock,
    stat: "28%",
    label: "of the workweek",
    desc: "The average professional spends over 11 hours per week reading and responding to emails.",
  },
  {
    icon: AlertTriangle,
    stat: "3.4B",
    label: "phishing emails / day",
    desc: "Email remains the #1 attack vector. Sophisticated scams slip past filters every day.",
  },
  {
    icon: ShieldAlert,
    stat: "60%",
    label: "of tasks are buried",
    desc: "Critical action items get lost in long threads, causing missed deadlines and follow-ups.",
  },
];

const ProblemSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Email is broken.
          <br />
          <span className="text-muted-foreground">Your inbox shouldn't be a full-time job.</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass rounded-2xl p-8"
          >
            <p.icon className="mb-4 h-8 w-8 text-primary" />
            <div className="font-heading text-4xl font-bold text-gradient">{p.stat}</div>
            <div className="mt-1 text-sm font-medium text-foreground">{p.label}</div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
