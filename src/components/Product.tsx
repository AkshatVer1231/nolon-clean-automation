import { Zap, Clock, Shield, Target, Battery, Wrench } from "lucide-react";

const Product = () => {
  const features = [
    {
      icon: Target,
      title: "Best Cleaning Quality",
      description: "In-contact cleaning with appropriate chemicals following Sinner's circle compliance for industry-leading results."
    },
    {
      icon: Zap,
      title: "Faster Floor Cleaning",
      description: "Integrated wiper and suction system at bottom for efficient floor maintenance and debris removal."
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock availability with swappable battery and fast charging for extended operational time."
    },
    {
      icon: Shield,
      title: "Autonomous Navigation",
      description: "Advanced AI-driven navigation system with obstacle avoidance and precise route optimization."
    },
    {
      icon: Wrench,
      title: "Tool Change System",
      description: "Automated tool changing for specialized cleaning tasks including commode and urinal maintenance."
    },
    {
      icon: Battery,
      title: "Extended Runtime",
      description: "Swappable battery system with fast charging enables continuous operation without downtime."
    }
  ];

  const roadmap = [
    {
      phase: "MVP",
      date: "August 2025",
      status: "current",
      features: ["Manual operation", "Basic functionality", "Navigation & docking"]
    },
    {
      phase: "V1-A",
      date: "March 2026", 
      status: "planned",
      features: ["Semi-autonomous", "Improved coverage", "Tool changing"]
    },
    {
      phase: "V1-B",
      date: "June 2026",
      status: "planned", 
      features: ["Fully autonomous", "Seat cleaning", "Wash area optimization"]
    },
    {
      phase: "V2-B",
      date: "December 2026",
      status: "planned",
      features: ["Commercial ready", "Complete feature set", "Fleet management"]
    }
  ];

  return (
    <section id="product" className="section-padding bg-background">
      <div className="container-custom">
        {/* Product Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Autonomous AI Robots for{" "}
            <span className="text-gradient-primary">Commercial Cleaning</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            End-to-end washroom cleaning with AI-driven autonomy. 
            Specialized for commercial spaces including offices, hospitals, and factories.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-feature hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold ml-3 text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Product Roadmap */}
        <div className="bg-surface rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-12">Development Roadmap</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {roadmap.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex flex-col md:flex-row w-full">
                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="flex items-center mb-4">
                        <div className={`w-8 h-8 rounded-full border-4 ${
                          milestone.status === 'current' 
                            ? 'bg-primary border-primary' 
                            : 'bg-background border-border'
                        } flex items-center justify-center`}>
                          {milestone.status === 'current' && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-foreground">{milestone.phase}</h4>
                          <p className="text-sm text-muted-foreground">{milestone.date}</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:block md:w-1/2 md:pr-8 text-right">
                      {index % 2 === 0 && (
                        <div className="bg-background p-6 rounded-lg shadow-soft">
                          <h4 className="text-lg font-semibold mb-2 text-foreground">{milestone.phase}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{milestone.date}</p>
                          <ul className="text-sm space-y-1">
                            {milestone.features.map((feature, i) => (
                              <li key={i} className="text-muted-foreground">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <div className={`w-8 h-8 rounded-full border-4 ${
                        milestone.status === 'current' 
                          ? 'bg-primary border-primary' 
                          : 'bg-background border-border'
                      } flex items-center justify-center`}>
                        {milestone.status === 'current' && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                    </div>

                    <div className="hidden md:block md:w-1/2 md:pl-8">
                      {index % 2 === 1 && (
                        <div className="bg-background p-6 rounded-lg shadow-soft">
                          <h4 className="text-lg font-semibold mb-2 text-foreground">{milestone.phase}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{milestone.date}</p>
                          <ul className="text-sm space-y-1">
                            {milestone.features.map((feature, i) => (
                              <li key={i} className="text-muted-foreground">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Mobile Content */}
                    <div className="md:hidden bg-background p-6 rounded-lg shadow-soft ml-12">
                      <ul className="text-sm space-y-1">
                        {milestone.features.map((feature, i) => (
                          <li key={i} className="text-muted-foreground">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;