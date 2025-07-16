import { Button } from "@/components/ui/button";

const IntegrationsSection = () => {
  const integrations = [
    { name: "Shopify", logo: "🛍️" },
    { name: "WooCommerce", logo: "🌐" },
    { name: "BigCommerce", logo: "🏪" },
    { name: "Zapier", logo: "⚡" },
    { name: "Segment", logo: "📊" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Twilio", logo: "📞" },
    { name: "Telnyx", logo: "📡" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            Seamless integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect Fieson to your existing tech stack in minutes, not hours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover-lift text-center"
              >
                <div className="text-4xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold text-primary">{integration.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Don't see your platform? We support 500+ integrations via API.
            </p>
            <Button className="btn-outline">
              View all integrations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;