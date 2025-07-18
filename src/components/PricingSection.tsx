import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
const pricingTiers = [
    {
      name: "Start",
      price: "€99",
      period: "/month",
      includedMins: "600",
      extraMinPrice: "€0.07",
      features: [
        "No-code flow builder",
        "Email support",
        "Basic analytics",
        "Cart recovery calls",
        "GDPR compliance"
      ],
      limitations: [
        "Standard voice quality",
        "Email support only"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "€349",
      period: "/month",
      includedMins: "3,000",
      extraMinPrice: "€0.05",
      features: [
        "WhatsApp voice integration",
        "A/B discount engine",
        "Advanced analytics",
        "Priority support",
        "Custom voice training",
        "Multi-language support"
      ],
      limitations: [],
      popular: true
    },
    {
      name: "Scale",
      price: "€1,099",
      period: "/month",
      includedMins: "10,000",
      extraMinPrice: "€0.04",
      features: [
        "Dedicated cluster",
        "SOC 2 compliance report",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Advanced security features"
      ],
      limitations: [],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            Transparent pricing, no surprises
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your call volume. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl shadow-card overflow-hidden transition-all hover-lift ${
                tier.popular ? 'ring-2 ring-accent relative' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tier.includedMins} included minutes
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Extra minutes: {tier.extraMinPrice}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  
                  {tier.limitations.map((limitation, limitIndex) => (
                    <div key={limitIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted-foreground/50">×</div>
                      <span className="text-sm text-muted-foreground/70 line-through">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${tier.popular ? 'btn-primary' : 'btn-outline'}`}
                  size="lg"
                >
                  {tier.name === 'Scale' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-xl shadow-card max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold font-space-grotesk text-primary mb-3">
              Enterprise-grade voice AI for modern commerce
            </h3>
            <p className="text-muted-foreground">
              Join hundreds of businesses using Fieson to increase sales and reduce costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;