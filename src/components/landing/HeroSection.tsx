import { motion } from "framer-motion";
import { ArrowDown, Globe } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import popupMockup from "@/assets/popup-mockup.png";

const CHROME_STORE_URL = "#";

const HeroSection = () => (
  <section className="relative min-h-screen overflow-hidden pt-24">
    {/* Background */}
    <div className="absolute inset-0 -z-10">
      <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>

    {/* Glow effect */}
    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2" style={{ background: "var(--gradient-glow)" }} />

    <div className="container mx-auto flex flex-col items-center px-6 pt-16 lg:flex-row lg:pt-24">
      {/* Copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl text-center lg:text-left"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
          <Zap className="h-3.5 w-3.5" /> Free forever · No subscription
        </div>

        <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Cut the noise.
          <br />
          <span className="text-gradient glow-text">Read the signal.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          The AI email assistant that saves hours every week while keeping your data completely private. Summarize, detect risks, and draft replies — all locally in your browser.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all hover:brightness-110 glow-green"
          >
            <Globe className="h-5 w-5" />
            Download Extension
          </a>
          <span className="text-sm text-muted-foreground">Works with Gmail · 100% free</span>
        </div>

        {/* Stats */}
        <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
          {[
            { value: "80%", label: "Faster processing" },
            { value: "$0", label: "Forever" },
            { value: "100%", label: "Private" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16 lg:mt-0 lg:ml-auto"
      >
        <div className="relative animate-float">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={popupMockup}
            alt="Brevity extension popup showing email summary, risk detection, and action items"
            className="relative w-[320px] rounded-2xl shadow-2xl md:w-[380px]"
            width={640}
            height={960}
          />
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
    </motion.div>
  </section>
);

export default HeroSection;
