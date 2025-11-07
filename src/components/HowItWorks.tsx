import { Card } from "@/components/ui/card";
import { Upload, Brain, BarChart3, Shield } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Media",
      description: "Upload any image or video file you want to verify for authenticity"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced neural networks analyze multiple deepfake indicators"
    },
    {
      icon: BarChart3,
      title: "Generate Report",
      description: "Receive a detailed confidence score with breakdown of all factors"
    },
    {
      icon: Shield,
      title: "Stay Protected",
      description: "Make informed decisions based on comprehensive verification results"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered detection system uses state-of-the-art technology to identify manipulated media
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Card 
              key={idx}
              className="p-6 text-center shadow-soft hover:shadow-medium transition-all hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="mb-2 text-sm font-bold text-accent">
                Step {idx + 1}
              </div>
              
              <h3 className="font-bold text-lg mb-3">{step.title}</h3>
              
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Technical Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">99.2%</div>
            <p className="text-muted-foreground">Detection Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">&lt;5s</div>
            <p className="text-muted-foreground">Average Analysis Time</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <p className="text-muted-foreground">Detection Indicators</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
