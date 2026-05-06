import { motion } from "framer-motion";
import sidebarMockup from "@/assets/sidebar-mockup.png";

const SolutionSection = () => (
  <section className="relative py-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-16 lg:flex-row">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
            <img
              src={sidebarMockup}
              alt="Brevity sidebar integrated with Gmail showing thread summary, suspicious links, action items, and AI reply draft"
              className="relative w-full rounded-2xl shadow-2xl"
              loading="lazy"
              width={800}
              height={960}
            />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Meet Brevity.
            <br />
            <span className="text-gradient">Your inbox copilot.</span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Brevity sits right inside Gmail — as a compact popup or a full sidebar panel. It reads your emails, surfaces what matters, flags what's dangerous, and drafts replies for you. All without your data ever leaving your browser.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Summarizes entire threads in seconds",
              "Flags phishing links and suspicious senders",
              "Extracts deadlines and action items automatically",
              "Generates contextual replies with one click",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
