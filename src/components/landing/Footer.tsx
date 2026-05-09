import { ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/brevitylogo.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Brevity Logo" className="h-6 w-6 object-contain" />
          <span className="font-heading text-sm font-bold text-foreground">Brevity</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link to="/install" className="text-muted-foreground hover:text-foreground transition-colors">
            Installation Guide
          </Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <a
            href="https://github.com/rifath2005/BREVITY_EMAIL_ASSISTANCE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="mailto:brevitysupport@gmail.com"
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Brevity. Free and open-source AI email assistant.
          <br />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
