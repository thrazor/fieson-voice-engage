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
      <ProblemPromiseSection />
      
      {/* Core Value Blocks */}
      <ValueBlocksSection />
      
      {/* How It Works */}
      <HowItWorksSection />
      
      {/* Tech Specs */}
      <TechSpecsSection />
      
      {/* Case Studies */}
      <CaseStudiesSection />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* Integrations */}
      <IntegrationsSection />
      
      {/* FAQ */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
};

export default Index;
