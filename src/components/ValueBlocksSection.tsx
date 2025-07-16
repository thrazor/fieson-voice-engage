import { PhoneCall, Headphones, MessageCircle } from "lucide-react";

const ValueBlocksSection = () => {
  const valueBlocks = [
    {
      icon: PhoneCall,
      title: "Outbound Cart Recovery",
      description: "Dynamic discounting, 24/7 reach, 30% win-back average",
      features: [
        "Instant cart abandonment triggers",
        "AI-powered discount negotiation",
        "Personalised recovery scripts",
        "Multi-timezone coverage"
      ]
    },
    {
      icon: Headphones,
      title: "Inbound Product & WISMO",
      description: "Zero wait time, upsell mid-call",
      features: [
        "Where Is My Order automation",
        "Product recommendation engine",
        "Live order status updates",
        "Cross-sell opportunities"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Voice",
      description: "Higher pickup in EMEA/LATAM, end-to-end encrypted",
      features: [
        "85% pickup rate improvement",
        "Native WhatsApp integration",
        "Voice message capabilities",
        "GDPR-compliant encryption"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            Three ways Fieson grows your revenue
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete voice AI solution for every stage of your customer journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueBlocks.map((block, index) => (
            <div key={index} className="bg-card p-8 rounded-xl shadow-card hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                  <block.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-space-grotesk text-primary">
                  {block.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {block.description}
              </p>

              <ul className="space-y-3">
                {block.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueBlocksSection;