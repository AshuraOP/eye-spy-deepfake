import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

const ResultsSection = () => {
  // Mock data - in real app, this would come from analysis
  const confidenceScore = 92;
  const isAuthentic = confidenceScore > 70;

  const indicators = [
    { name: "Facial Consistency", score: 95, status: "pass" },
    { name: "Lighting Analysis", score: 88, status: "pass" },
    { name: "Edge Detection", score: 91, status: "pass" },
    { name: "Pixel Artifacts", score: 85, status: "warning" },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Analysis Results</h2>
          <p className="text-lg text-muted-foreground">
            AI-powered deepfake detection analysis
          </p>
        </div>

        {/* Main Result Card */}
        <Card className="p-8 mb-8 shadow-medium animate-fade-in">
          <div className="flex items-start gap-6 mb-8">
            <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
              isAuthentic ? 'bg-green-500/10' : 'bg-destructive/10'
            }`}>
              {isAuthentic ? (
                <CheckCircle className="w-8 h-8 text-green-500" />
              ) : (
                <AlertTriangle className="w-8 h-8 text-destructive" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold">
                  {isAuthentic ? 'Likely Authentic' : 'Potential Deepfake Detected'}
                </h3>
                <Badge variant={isAuthentic ? "secondary" : "destructive"}>
                  {confidenceScore}% Confidence
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {isAuthentic 
                  ? 'Our AI analysis suggests this media is likely authentic with no significant manipulation detected.'
                  : 'Our analysis has detected anomalies that suggest this media may be manipulated or artificially generated.'}
              </p>
            </div>
          </div>

          {/* Confidence Score */}
          <div className="space-y-2 mb-8">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Overall Confidence Score</span>
              <span className="text-muted-foreground">{confidenceScore}%</span>
            </div>
            <Progress value={confidenceScore} className="h-3" />
          </div>

          {/* Detailed Indicators */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Info className="w-4 h-4 text-accent" />
              Detailed Analysis Indicators
            </h4>
            
            {indicators.map((indicator, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{indicator.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{indicator.score}%</span>
                      {indicator.status === "pass" ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                  </div>
                  <Progress value={indicator.score} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Info Note */}
        <Card className="p-6 bg-accent/5 border-accent/20 animate-fade-in">
          <div className="flex gap-3">
            <Info className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium mb-1">About This Analysis</p>
              <p className="text-sm text-muted-foreground">
                Our AI model analyzes multiple factors including facial consistency, lighting patterns, 
                edge artifacts, and pixel-level anomalies. While highly accurate, no automated system 
                is perfect. Use these results as one factor in your verification process.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ResultsSection;
