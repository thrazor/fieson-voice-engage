import { useState } from "react";
import { ChevronDown, ChevronUp, Cpu, Globe, Euro, Server } from "lucide-react";

const TechSpecsSection = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const specs = [
    {
      id: "voice-engine",
      icon: Cpu,
      title: "Voice Engine",
      content: "GPT-4o-mini reasoning with advanced context awareness, OpenAI TTS for natural speech synthesis, Deepgram ASR with <300ms latency for real-time understanding"
    },
    {
      id: "languages",
      icon: Globe,
      title: "Languages",
      content: "30+ languages including 🇩🇪 German, 🇫🇷 French, 🇪🇸 Spanish, 🇳🇱 Dutch, 🇵🇹 Portuguese, 🇸🇪 Swedish, 🇮🇹 Italian, 🇵🇱 Polish, and more"
    },
    {
      id: "cost-model",
      icon: Euro,
      title: "Cost Model",
      content: "€0.04-0.07 per call-minute with volume discounts available. No setup fees, no hidden charges, pay only for successful connections"
    },
    {
      id: "deployment",
      icon: Server,
      title: "Deployment",
      content: "EU-hosted infrastructure, data never leaves European region. GDPR-compliant with SOC 2 Type II certification and ISO 27001 compliance"
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
              Technical specifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade infrastructure built for scale and reliability
            </p>
          </div>

          <div className="space-y-4">
            {specs.map((spec) => (
              <div key={spec.id} className="bg-card rounded-xl shadow-card overflow-hidden">
                <button
                  onClick={() => toggleAccordion(spec.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                      <spec.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-space-grotesk text-primary">
                      {spec.title}
                    </h3>
                  </div>
                  {openAccordion === spec.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
                
                {openAccordion === spec.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {spec.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Tech Highlights */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h4 className="font-bold text-primary mb-3">Security & Compliance</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• End-to-end encryption (AES-256)</li>
                <li>• GDPR Article 28 compliant</li>
                <li>• Regular penetration testing</li>
                <li>• 24/7 security monitoring</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card">
              <h4 className="font-bold text-primary mb-3">Performance Guarantees</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 99.9% uptime SLA</li>
                <li>• Sub-300ms response time</li>
                <li>• Auto-scaling infrastructure</li>
                <li>• Redundant failover systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecsSection;