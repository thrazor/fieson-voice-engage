import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs = [
    {
      id: "caller-id",
      question: "Is caller-ID shown as spam?",
      answer: "No. Fieson uses STIR/SHAKEN authentication and maintains high-reputation phone numbers. We also integrate with major telecom spam databases to ensure legitimate caller verification."
    },
    {
      id: "gdpr-consent",
      question: "How do you handle GDPR consent?",
      answer: "Fieson only calls customers who have provided explicit consent through your checkout process. All data processing agreements are GDPR Article 28 compliant, with full audit trails and right-to-deletion capabilities."
    },
    {
      id: "script-customisation",
      question: "Can I customise the script?",
      answer: "Absolutely. Our no-code flow builder lets you create custom conversation paths, discount strategies, and brand voice guidelines. Advanced users can also upload custom training data."
    },
    {
      id: "setup-time",
      question: "How long does setup take?",
      answer: "Most Shopify integrations are live within 15 minutes. Custom platforms typically require 1-2 hours for API configuration. Our technical team provides white-glove onboarding for Enterprise plans."
    },
    {
      id: "success-rate",
      question: "What's the typical success rate?",
      answer: "Average cart recovery rates improve by 25-35% within the first month. Success varies by industry, but fashion/lifestyle brands typically see the highest conversion rates."
    },
    {
      id: "data-security",
      question: "Where is customer data stored?",
      answer: "All data is stored in EU-based data centres (Frankfurt and Dublin). We never transfer data outside the European region and maintain SOC 2 Type II compliance with regular third-party audits."
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about implementing Fieson
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-card rounded-xl shadow-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors"
                >
                  <h3 className="font-semibold text-primary pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@fieson.com" 
                className="text-accent hover:text-accent/80 font-medium"
              >
                Email support
              </a>
              <span className="hidden sm:inline text-muted-foreground">•</span>
              <a 
                href="tel:+31205679432" 
                className="text-accent hover:text-accent/80 font-medium"
              >
                +31 20 567 9432
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;