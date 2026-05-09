import { motion } from "framer-motion";
import { Download } from "lucide-react";
import logo from "../../assets/brevitylogo.png";

const CTASection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass glow-green mx-auto max-w-3xl rounded-3xl p-12 text-center md:p-16"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
          <img src={logo} alt="Brevity Logo" className="h-12 w-12 object-contain" />
        </div>

        <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
          Ready to reclaim your inbox?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Join thousands of professionals who process email 80% faster with Brevity. Free forever, fully private, no sign-up required.
        </p>

        <a
          href="/brevity-extension.zip"
          download="brevity-extension.zip"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-green"
        >
          <Download className="h-5 w-5" />
          Download Extension — It's Free
        </a>

        <p className="mt-4 text-xs text-muted-foreground">
          Chrome, Edge, Brave, Arc · Install in developer mode
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
