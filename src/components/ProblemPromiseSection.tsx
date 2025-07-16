import { Clock, Euro, Zap } from "lucide-react";

const ProblemPromiseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Problem Statement */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
              Cart abandonment costs you €millions annually
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Average e-commerce sites lose 70% of potential sales to cart abandonment. 
              Traditional email recovery captures just 10-15% of those lost sales.
            </p>
          </div>

          {/* Promise - Comparison */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-space-grotesk text-primary">
                Human constraints vs Fieson 24/7
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    ✗
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Traditional approach</p>
                    <p className="text-muted-foreground">Limited hours, slow response, language barriers</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Fieson AI</p>
                    <p className="text-muted-foreground">24/7 availability, instant response, 30+ languages</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-card p-6 rounded-xl shadow-card hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Euro className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-primary">€0.04/min</span>
                </div>
                <p className="text-muted-foreground">Ultra-low cost per call minute</p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-primary">&lt;700ms latency</span>
                </div>
                <p className="text-muted-foreground">Real-time conversation flow</p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-card hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-primary">24/7 reach</span>
                </div>
                <p className="text-muted-foreground">Never miss a recovery opportunity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemPromiseSection;