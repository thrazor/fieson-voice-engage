import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";

const PricingSection = () => {
const pricingTiers = [
    {
      name: "Start",
      description: "Automate basic calls with AI",
      price: "$99",
      period: "/mo",
      includedMins: "250",
      extraMinPrice: "$0.36/min",
      features: [
        "Automate phone calls with Seth",
        "Basic chat support",
        "14-day no-risk trial. Cancel anytime."
      ],
      limitations: [],
      popular: false,
      cta: "Start trial - $0 today"
    },
    {
      name: "Grow",
      description: "Powerful AI phone support built for your online store",
      price: "$349",
      period: "/mo",
      includedMins: "1000",
      extraMinPrice: "$0.19/min",
      features: [
        "Start plan features, plus:",
        "Seth keeps getting smarter",
        "Call insights", 
        "30-day priority onboarding",
        "14-day no-risk trial. Cancel anytime."
      ],
      limitations: [],
      popular: true,
      cta: "Start trial - $0 today"
    },
    {
      name: "Scale",
      description: "White-glove setup, custom integrations, volume discount",
      price: "$4,000",
      setupFee: "setup",
      period: "+ $1099/mo",
      includedMins: "Custom",
      extraMinPrice: "Custom price/min",
      features: [
        "Grow plan features, plus:",
        "Custom agent and integrations",
        "Monthly recommendations",
        "Private Slack channel"
      ],
      limitations: [],
      popular: false,
      cta: "Contact sales"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            Less than one agent's salary.<br />But you get an entire phone team.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include our AI phone agent.
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
                
                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-primary">{tier.price}</span>
                    {tier.setupFee && <span className="text-sm text-muted-foreground">{tier.setupFee}</span>}
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {tier.includedMins} mins, then {tier.extraMinPrice}
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
                  {tier.cta}
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
              AI phone support that works 24/7
            </h3>
            <p className="text-muted-foreground">
              Join 1,600+ online stores using AI phone agents to automate customer support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;