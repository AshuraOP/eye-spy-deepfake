import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-accent">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">DeepVerify</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Technology
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              About
            </a>
          </nav>

          {/* CTA */}
          <Button variant="accent" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
