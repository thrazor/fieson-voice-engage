import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, MapPin, Calendar, Users, Trophy, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Bart Rosier",
      role: "Co-Founder & CEO",
      bio: "Former Shopify Plus engineer with 12+ years building scalable e-commerce infrastructure. Led voice AI initiatives at Meta and Google.",
      linkedin: "https://www.linkedin.com/in/bartrosier/",
      location: "Amsterdam, Netherlands",
      expertise: ["Voice AI", "E-commerce", "Product Strategy"],
      achievements: ["Scaled 500M+ GMV platforms", "50+ patents in conversational AI", "Forbes 30 Under 30"]
    },
    {
      name: "Pankaj Kumar", 
      role: "Co-Founder & CTO",
      bio: "ML researcher specializing in real-time speech processing. Previously Staff Engineer at DeepMind, architecting low-latency voice systems.",
      linkedin: "https://www.linkedin.com/in/pankaj4u4m/",
      location: "London, United Kingdom", 
      expertise: ["Machine Learning", "Speech Processing", "Infrastructure"],
      achievements: ["PhD in Neural Speech Synthesis", "300ms voice latency breakthrough", "10+ Nature publications"]
    }
  ];

  const companyStats = [
    { label: "Founded", value: "2023", icon: Calendar },
    { label: "Team Size", value: "12", icon: Users },
    { label: "Languages Supported", value: "30+", icon: Zap },
    { label: "Customer Success Rate", value: "97%", icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-space-grotesk text-primary">
            Fieson
          </Link>
          <Link to="/">
            <Button variant="outline">← Back to Home</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk text-white mb-6">
            Meet the team behind
            <span className="text-accent block">the voice AI revolution</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Two founders with a combined 20+ years in AI and e-commerce, 
            on a mission to transform how businesses connect with customers through voice.
          </p>
          
          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
              World-class expertise in voice AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our founding team combines deep technical expertise with real-world e-commerce experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover-lift">
                <div className="relative">
                  {/* Background Pattern */}
                  <div className="h-32 bg-gradient-to-br from-primary to-accent"></div>
                  
                  {/* Profile Content */}
                  <div className="p-8 -mt-16 relative">
                    {/* Avatar Placeholder */}
                    <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-white mb-6 flex items-center justify-center">
                      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-2xl font-bold font-space-grotesk text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-accent font-medium mb-4">{member.role}</p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-muted-foreground mb-6">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{member.location}</span>
                    </div>

                    {/* Bio */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-primary mb-3">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-primary mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-8">
              Our mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe every customer interaction should be instant, intelligent, and personal. 
              By combining cutting-edge AI with deep e-commerce expertise, we're building the 
              future where businesses can provide exceptional customer service at scale — 
              24/7, in any language, without compromise.
            </p>
            <div className="bg-card p-8 rounded-xl shadow-card">
              <blockquote className="text-lg text-primary italic">
                "Traditional customer service doesn't scale with modern e-commerce. 
                We're not just automating calls — we're reimagining what customer connection means."
              </blockquote>
              <div className="text-accent font-medium mt-4">— Bart & Pankaj, Co-Founders</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-primary mb-6">
            Ready to transform your customer experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of e-commerce businesses already using Fieson's voice AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="btn-primary">
              Get started today
            </Button>
            <Button size="lg" variant="outline">
              Book a demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;