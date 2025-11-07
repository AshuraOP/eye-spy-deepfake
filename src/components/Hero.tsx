import { Button } from "@/components/ui/button";
import { Shield, Zap, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToUpload = () => {
    document.getElementById('upload-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-6 shadow-soft">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">AI-Powered Detection</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight">
            Verify Media Authenticity with AI
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced deepfake detection technology to protect you from manipulated images and videos
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToUpload}
              className="group"
            >
              Analyze Media Now
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-background/50 backdrop-blur-sm"
            >
              Learn How It Works
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: CheckCircle, text: "99.2% Accuracy Rate" },
              { icon: Zap, text: "Real-time Analysis" },
              { icon: Shield, text: "Enterprise Security" },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2 text-muted-foreground"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <item.icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default Hero;
