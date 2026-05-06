import { motion } from "framer-motion";
import { Briefcase, Users, ShieldCheck } from "lucide-react";

const personas = [
  {
    icon: Briefcase,
    title: "Busy Professionals",
    desc: "Process your inbox 80% faster. Focus on work that matters, not email triage.",
  },
  {
    icon: Users,
    title: "Sales & Support Teams",
    desc: "Extract action items and draft replies instantly across dozens of threads daily.",
  },
  {
    icon: ShieldCheck,
    title: "Security-Conscious Users",
    desc: "Catch phishing and scam emails before they cause damage — with color-coded risk alerts.",
  },
];

const UseCasesSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Built for people who <span className="text-gradient">value their time</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {personas.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl p-8"
          >
            <p.icon className="mb-4 h-8 w-8 text-primary" />
            <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
