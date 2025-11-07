import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, X, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    handleFileSelect(droppedFile);
  };

  const handleFileSelect = (selectedFile: File) => {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'video/mp4', 'video/webm'];
    
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image (JPG, PNG) or video (MP4, WebM)",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 50MB)
    if (selectedFile.size > 50 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 50MB",
        variant: "destructive",
      });
      return;
    }

    setFile(selectedFile);
    toast({
      title: "File uploaded",
      description: `${selectedFile.name} ready for analysis`,
    });
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      handleFileSelect(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const analyzeFile = () => {
    if (!file) return;
    
    toast({
      title: "Analysis started",
      description: "Your media is being analyzed...",
    });
    
    // Simulate analysis - in real app, this would call an API
    setTimeout(() => {
      toast({
        title: "Analysis complete",
        description: "Check results below",
      });
    }, 2000);
  };

  return (
    <section id="upload-section" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Upload Media for Analysis</h2>
          <p className="text-lg text-muted-foreground">
            Upload an image or video to detect potential deepfake manipulation
          </p>
        </div>

        <Card 
          className={`p-8 transition-all duration-300 ${
            isDragging 
              ? 'border-accent shadow-accent scale-[1.02]' 
              : 'border-border shadow-soft hover:shadow-medium'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!file ? (
            <div className="text-center">
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10">
                <Upload className="w-10 h-10 text-accent" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Drop your file here</h3>
              <p className="text-muted-foreground mb-6">
                or click to browse from your device
              </p>

              <label htmlFor="file-upload">
                <Button variant="accent" size="lg" className="cursor-pointer" asChild>
                  <span>
                    Choose File
                  </span>
                </Button>
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*,video/*"
                onChange={handleFileInput}
              />

              <div className="mt-8 flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-medium mb-1">Supported formats:</p>
                  <p>Images: JPG, PNG • Videos: MP4, WebM • Max size: 50MB</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <File className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeFile}
                  className="flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <Button 
                variant="hero" 
                className="w-full"
                onClick={analyzeFile}
              >
                Analyze for Deepfakes
              </Button>
            </div>
          )}
        </Card>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Fast Analysis",
              description: "Get results in seconds with our optimized AI models"
            },
            {
              title: "Detailed Reports",
              description: "Comprehensive breakdown of authenticity indicators"
            },
            {
              title: "Privacy First",
              description: "Your files are processed securely and never stored"
            }
          ].map((item, idx) => (
            <Card key={idx} className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UploadSection;
