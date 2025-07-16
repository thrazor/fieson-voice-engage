import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Users, Star } from "lucide-react";

const CaseStudiesSection = () => {
  const [currentCase, setCurrentCase] = useState(0);
  
  const caseStudies = [
    {
      company: "ElectroLuxuria",
      industry: "Consumer Electronics",
      result: "29.7% cart recovery lift",
      timeframe: "14 days",
      description: "Premium electronics retailer saw immediate impact on abandoned cart recovery with personalised AI voice calls.",
      metrics: [
        { label: "Recovery rate increase", value: "29.7%" },
        { label: "Average order value", value: "€247" },
        { label: "Call pickup rate", value: "68%" }
      ],
      quote: "Fieson helped us recover nearly 30% more abandoned carts in just two weeks. The AI conversations feel natural and our customers love the personal touch.",
      author: "Marcus Weber, Head of E-commerce"
    },
    {
      company: "AlpenGear",
      industry: "Outdoor Equipment",
      result: "70% support FTE reduction",
      timeframe: "3 months",
      description: "Mountain sports equipment specialist automated customer support while dramatically improving satisfaction scores.",
      metrics: [
        { label: "Support staff reduction", value: "70%" },
        { label: "NPS improvement", value: "+34 points" },
        { label: "Resolution time", value: "-85%" }
      ],
      quote: "We went from 10 support agents to 3, while our NPS jumped to 71. Fieson handles routine queries flawlessly, letting our team focus on complex issues.",
      author: "Sarah Hoffman, Customer Success Director"
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentStudy = caseStudies[currentCase];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            Real results from real businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how leading e-commerce brands are using Fieson to grow revenue and reduce costs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl shadow-card overflow-hidden">
            <div className="p-8">
              {/* Company Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">
                      {currentStudy.company.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-space-grotesk text-primary">
                      {currentStudy.company}
                    </h3>
                    <p className="text-muted-foreground">{currentStudy.industry}</p>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevCase}
                    className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextCase}
                    className="w-10 h-10 bg-muted/50 hover:bg-muted rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Key Result */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-accent mb-2">
                  {currentStudy.result}
                </div>
                <p className="text-muted-foreground">in {currentStudy.timeframe}</p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground text-center mb-8 leading-relaxed">
                {currentStudy.description}
              </p>

              {/* Metrics */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {currentStudy.metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {metric.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-muted/30 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-primary italic mb-3 leading-relaxed">
                      "{currentStudy.quote}"
                    </blockquote>
                    <cite className="text-sm text-muted-foreground font-medium">
                      {currentStudy.author}
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCase(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCase ? 'bg-accent' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;