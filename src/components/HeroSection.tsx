import { Button } from "@/components/ui/button";
import { PhoneCall, Shield, Lock, CheckCircle } from "lucide-react";
import Navigation from "./Navigation";

const HeroSection = () => {
  return (
    <>
      <Navigation />
      <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <PhoneCall className="w-5 h-5 text-brand-teal" />
            <span className="text-brand-teal font-medium">AI-Powered Voice Commerce</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk mb-6 leading-tight">
            Recover <span className="text-brand-teal">30%</span> more sales with real-time Voice AI
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fieson calls your shoppers within seconds, answers product questions, closes orders – in 30+ languages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-10 py-4 h-auto"
              onClick={() => window.open('https://cal.com/bart-rosier/session-bart', '_blank')}
            >
              Get started
            </Button>
            <Button 
              size="lg" 
              className="btn-secondary text-lg px-10 py-4 h-auto"
              onClick={() => window.open('https://cal.com/bart-rosier/session-bart', '_blank')}
            >
              Book a demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>PCI-DSS</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4" />
              <span>STIR/SHAKEN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;