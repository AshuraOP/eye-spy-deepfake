import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UploadSection from "@/components/UploadSection";
import ResultsSection from "@/components/ResultsSection";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      <main className="pt-16">
        <Hero />
        <UploadSection />
        <ResultsSection />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Index;
