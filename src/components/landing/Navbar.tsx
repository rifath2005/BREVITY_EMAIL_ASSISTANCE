import { motion } from "framer-motion";
import { Download } from "lucide-react";
import logo from "../../assets/brevitylogo.png";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 glass-subtle"
  >
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Brevity Logo" className="h-8 w-8 object-contain" />
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
        href="/brevity-extension.zip"
        download="brevity-extension.zip"
        className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-green"
      >
        <Download className="h-4 w-4" />
        Download Free
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
