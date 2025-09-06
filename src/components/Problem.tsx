import { Users, TrendingDown, AlertTriangle } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: Users,
      title: "Labor Shortage Crisis",
      description: "Janitor job growth exceeds the rate of workers entering the field. 29% of 2.5M janitorial employees are foreign-born, with 17% of illegal immigrants working in cleaning.",
      stats: "2.5M workers, 29% foreign-born"
    },
    {
      icon: TrendingDown, 
      title: "Service Unpredictability",
      description: "High employee churn due to immigration policies and shrinking labor pool affects service reliability and makes it difficult to maintain consistent quality.",
      stats: "High churn rates"
    },
    {
      icon: AlertTriangle,
      title: "Dignity of Work",
      description: "Perception of cleaning jobs as mundane creates high attrition rates. Workers seek more meaningful opportunities, creating a cycle of instability.",
      stats: "High attrition in entry-level"
    }
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            The Cleaning Industry's{" "}
            <span className="text-gradient-primary">Critical Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three fundamental problems are disrupting the $445 billion global cleaning industry,
            creating an urgent need for autonomous solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="card-feature group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                <div className="p-3 rounded-lg bg-destructive/10 group-hover:bg-destructive/20 transition-colors duration-300 mb-3 sm:mb-0">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <div className="sm:ml-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">{problem.title}</h3>
                  <p className="text-sm text-accent font-medium">{problem.stats}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-12 lg:mt-16 grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Market Impact</h3>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 lg:p-4 bg-background rounded-lg border border-border gap-2 sm:gap-0">
                <span className="font-medium text-foreground text-sm lg:text-base">US Cleaning Services Market</span>
                <span className="text-xl lg:text-2xl font-bold text-primary">$83B</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 lg:p-4 bg-background rounded-lg border border-border gap-2 sm:gap-0">
                <span className="font-medium text-foreground text-sm lg:text-base">Target Market (CA, NY, TX)</span>
                <span className="text-xl lg:text-2xl font-bold text-primary">$2.01B</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 lg:p-4 bg-background rounded-lg border border-border gap-2 sm:gap-0">
                <span className="font-medium text-foreground text-sm lg:text-base">Traditional Janitor Cost</span>
                <span className="text-xl lg:text-2xl font-bold text-warning">$3,000/mo</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-primary rounded-xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">Why Physical AI Now?</h3>
            <p className="mb-4 lg:mb-6 text-white/90 text-sm lg:text-base">
              Six technological advances have created the perfect inflection point for robotics adoption.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 text-xs lg:text-sm text-white/95">
              <div>• Advanced ML & Neural Networks</div>
              <div>• Transformer Architecture</div>
              <div>• Accessible Cloud Computing</div>
              <div>• Improved Manipulation Systems</div>
              <div>• Large Language Models</div>
              <div>• Advanced Control Systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;