import HeroSection from "@/components/HeroSection";
import ProblemPromiseSection from "@/components/ProblemPromiseSection";
import ValueBlocksSection from "@/components/ValueBlocksSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TechSpecsSection from "@/components/TechSpecsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PricingSection from "@/components/PricingSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem → Promise */}
      <div className="section-white">
        <ProblemPromiseSection />
      </div>
      
      {/* Core Value Blocks */}
      <div className="section-gray">
        <ValueBlocksSection />
      </div>
      
      {/* How It Works */}
      <div className="section-white">
        <HowItWorksSection />
      </div>
      
      {/* Tech Specs */}
      <div className="section-gray">
        <TechSpecsSection />
      </div>
      
      {/* Case Studies */}
      <div className="section-white">
        <CaseStudiesSection />
      </div>
      
      {/* Pricing */}
      <div className="section-gray">
        <PricingSection />
      </div>
      
      {/* Integrations */}
      <div className="section-white">
        <IntegrationsSection />
      </div>
      
      {/* FAQ */}
      <div className="section-gray">
        <FAQSection />
      </div>
      
      {/* Final CTA */}
      <div className="section-dark">
        <FinalCTASection />
      </div>
    </div>
  );
};

export default Index;
