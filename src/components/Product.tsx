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


  return (
    <section id="product" className="section-padding bg-background">
      <div className="container-custom">
        {/* Product Overview */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Autonomous AI Robots for{" "}
            <span className="text-gradient-primary">Commercial Cleaning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end washroom cleaning with AI-driven autonomy. 
            Specialized for commercial spaces including offices, hospitals, and factories.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-feature hover-lift hover-scale hover-shadow hover-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                <div className="p-3 rounded-lg bg-primary/10 mb-3 sm:mb-0">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-base lg:text-lg font-semibold sm:ml-3 text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm lg:text-base">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Product;