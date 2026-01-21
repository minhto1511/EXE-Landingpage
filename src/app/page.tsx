import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FormulaGenerator from "../components/FormulaGenerator";
import FeaturesSection from "../components/FeaturesSection";
import StepByStepGuide from "../components/StepByStepGuide";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] selection:bg-emerald-500 selection:text-black">
      <Header />
      <main>
        <HeroSection />
        <div className="relative">
          {/* Subtle separator glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          
          <div id="features">
            <FeaturesSection />
          </div>

          <div id="generator">
            <FormulaGenerator />
          </div>

          <div id="guide">
            <StepByStepGuide />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
