import { Zap } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
      <div className="flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
          <Zap className="h-3 w-3 text-primary-foreground" />
        </div>
        <span className="font-heading text-sm font-bold text-foreground">Brevity</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Brevity. Free and open-source AI email assistant.
      </p>
    </div>
  </footer>
);

export default Footer;
