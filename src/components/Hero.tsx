import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/5),transparent)]" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Stealth Mode - August 2025 MVP Launch
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              We{" "}
              <span className="text-gradient-primary">CLEAN</span>
              <br />
              so you can{" "}
              <span className="text-gradient-primary">DREAM</span>
            </h1>
            
            <p className="text-xl text-muted mb-8 leading-relaxed max-w-lg">
              Autonomous AI robots for commercial cleaning services. 
              Give your human workforce the freedom to focus on creative and meaningful work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn-primary group">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button className="btn-secondary group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">$445B</div>
                <div className="text-sm text-muted">Global Cleaning Market</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted">Operation Capability</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$2.5K</div>
                <div className="text-sm text-muted">Monthly Cost vs $3K</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-strong hover-lift">
              <img 
                src={heroRobot} 
                alt="Nolon AI autonomous cleaning robot in commercial washroom"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;