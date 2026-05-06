import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const CHROME_STORE_URL = "#";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 glass-subtle"
  >
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
          <Zap className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-heading text-xl font-bold text-foreground">Brevity</span>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {["Features", "How It Works", "Privacy", "FAQ"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href={CHROME_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-green"
      >
        Download Free
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
