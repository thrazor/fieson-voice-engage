import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6 leading-tight">
            Stop losing carts.<br />
            <span className="text-accent">Start talking.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of e-commerce brands already using AI voice to recover lost revenue.
          </p>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">30%</div>
              <p className="text-white/80">Average recovery lift</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">&lt;30s</div>
              <p className="text-white/80">Time to first call</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">30+</div>
              <p className="text-white/80">Languages supported</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-4 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 mr-2" />
              Get started today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary text-lg px-10 py-4 h-auto font-semibold transition-all duration-300"
            >
              Book a demo
            </Button>
          </div>

          {/* Trust Statement */}
          <p className="text-white/70 text-sm">
            Enterprise-grade AI • Trusted by 500+ brands • Setup in 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;