import { ShoppingCart, Phone, Bot, Database } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Shopify Flow trigger",
      description: "Checkout_exit event automatically detected",
      detail: "Real-time monitoring of cart abandonment across all channels"
    },
    {
      icon: Phone,
      title: "Fieson AI dials",
      description: "Via Telnyx EU PoP within seconds",
      detail: "Low-latency European infrastructure ensures instant connection"
    },
    {
      icon: Bot,
      title: "Live conversation",
      description: "GPT-4o-mini + Deepgram handle dialogue",
      detail: "Natural language processing with sub-300ms response times"
    },
    {
      icon: Database,
      title: "Outcome tracking",
      description: "Transcript & results pushed to CRM",
      detail: "Complete audit trail and performance analytics"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            How it works in 4 steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From cart abandonment to revenue recovery in under 30 seconds
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent transform translate-x-4 z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold font-space-grotesk text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-card p-8 rounded-xl shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">&lt;30s</div>
              <p className="text-muted-foreground">Time to first call</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">98.9%</div>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">30+</div>
              <p className="text-muted-foreground">Languages supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;