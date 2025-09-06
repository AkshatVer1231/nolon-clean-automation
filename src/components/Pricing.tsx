import { Check, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const comparison = [
    {
      feature: "Monthly Cost",
      traditional: "$3,000",
      nolon: "$2,500",
      advantage: "nolon"
    },
    {
      feature: "Availability", 
      traditional: "9 hours/day",
      nolon: "24/7 operation",
      advantage: "nolon"
    },
    {
      feature: "Hiring Difficulty",
      traditional: "Very High",
      nolon: "Easy deployment",
      advantage: "nolon"
    },
    {
      feature: "Service Tracking",
      traditional: "Manual",
      nolon: "Automated",
      advantage: "nolon"
    },
    {
      feature: "Predictability",
      traditional: "High churn risk",
      nolon: "100% reliable",
      advantage: "nolon"
    },
    {
      feature: "Scalability",
      traditional: "Limited by hiring",
      nolon: "Instant scaling",
      advantage: "nolon"
    }
  ];

  const projections = [
    { period: "FY 27 H2", revenue: "$150K", bots: "5 bots" },
    { period: "FY 28 H1", revenue: "$300K", bots: "10 bots" },
    { period: "FY 28 H2", revenue: "$1.5M", bots: "50 bots" },
    { period: "FY 29 H2", revenue: "$3.0M", bots: "100 bots" }
  ];

  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gradient-primary">Robot as a Service</span>
            {" "}Pricing Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Predictable costs, superior performance, and 24/7 reliability. 
            See how Nolon AI robots compare to traditional janitorial services.
          </p>
        </div>

        {/* Cost Comparison */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Traditional Janitor */}
          <div className="card-elevated p-6 lg:p-8">
            <div className="text-center mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Traditional Janitor</h3>
              <div className="text-3xl lg:text-4xl font-bold text-warning mb-2">$3,000</div>
              <p className="text-muted-foreground">per month</p>
            </div>
            
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start sm:items-center">
                <X className="h-5 w-5 text-destructive mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-muted-foreground text-sm lg:text-base">Difficult to hire & retain</span>
              </div>
              <div className="flex items-start sm:items-center">
                <X className="h-5 w-5 text-destructive mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-muted-foreground text-sm lg:text-base">Limited to 9 hours daily</span>
              </div>
              <div className="flex items-start sm:items-center">
                <X className="h-5 w-5 text-destructive mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-muted-foreground text-sm lg:text-base">Manual service tracking</span>
              </div>
              <div className="flex items-start sm:items-center">
                <X className="h-5 w-5 text-destructive mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-muted-foreground text-sm lg:text-base">High churn & unpredictability</span>
              </div>
            </div>
          </div>

          {/* Nolon AI Robot */}
          <div className="card-elevated p-6 lg:p-8 border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 lg:px-4 py-1 rounded-full text-xs lg:text-sm font-medium">
              Recommended
            </div>
            
            <div className="text-center mb-6 lg:mb-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Nolon AI Robot</h3>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">$2,500</div>
              <p className="text-muted-foreground">per month (RaaS)</p>
            </div>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start sm:items-center">
                <Check className="h-5 w-5 text-success mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">Easy deployment & setup</span>
              </div>
              <div className="flex items-start sm:items-center">
                <Check className="h-5 w-5 text-success mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">24/7 autonomous operation</span>
              </div>
              <div className="flex items-start sm:items-center">
                <Check className="h-5 w-5 text-success mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">Automated tracking & reports</span>
              </div>
              <div className="flex items-start sm:items-center">
                <Check className="h-5 w-5 text-success mr-3 mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="text-foreground text-sm lg:text-base">100% predictable service</span>
              </div>
            </div>
            
            <Button className="btn-primary w-full text-sm lg:text-base btn-hover-slide hover:scale-105 hover:-translate-y-1 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-surface rounded-xl p-4 lg:p-8 mb-12 lg:mb-20">
          <h3 className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-8">Feature Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 lg:py-4 font-semibold text-sm lg:text-base">Feature</th>
                  <th className="text-center py-3 lg:py-4 font-semibold text-sm lg:text-base">Traditional Janitor</th>
                  <th className="text-center py-3 lg:py-4 font-semibold text-sm lg:text-base">Nolon AI Robot</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-3 lg:py-4 font-medium text-sm lg:text-base">{item.feature}</td>
                    <td className={`text-center py-3 lg:py-4 text-sm lg:text-base ${item.advantage === 'traditional' ? 'text-success font-medium' : 'text-muted-foreground'}`}>
                      {item.traditional}
                    </td>
                    <td className={`text-center py-3 lg:py-4 text-sm lg:text-base ${item.advantage === 'nolon' ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                      {item.nolon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Projections */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Revenue Projections</h3>
            <div className="space-y-3 lg:space-y-4">
              {projections.map((projection, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 lg:p-4 bg-surface rounded-lg gap-2 sm:gap-0">
                  <div>
                    <div className="font-semibold text-sm lg:text-base">{projection.period}</div>
                    <div className="text-xs lg:text-sm text-muted-foreground">{projection.bots}</div>
                  </div>
                  <div className="text-lg lg:text-xl font-bold text-primary">{projection.revenue}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-primary rounded-xl p-6 lg:p-8 text-white">
            <Zap className="h-6 lg:h-8 w-6 lg:w-8 mb-3 lg:mb-4 text-white" />
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">Market Potential</h3>
            <div className="space-y-3 lg:space-y-4 text-xs lg:text-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-white/90">US Restrooms (est.)</span>
                <span className="font-bold text-white">25-40 million</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-white/90">Deployment Potential</span>
                <span className="font-bold text-white">1 million robots</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-white/90">Paid Pilots Start</span>
                <span className="font-bold text-white">2027</span>
              </div>
            </div>
            <p className="mt-4 lg:mt-6 text-xs lg:text-sm text-white/90">
              Partner with distributors for nationwide US deployment and scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;