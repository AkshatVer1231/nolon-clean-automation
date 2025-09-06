import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

interface HeroProps {
  title?: {
    line1: string;
    line2: string;
    line3: string;
  };
  description?: string;
  stats?: {
    market: string;
    operations: string;
    reliability: string;
  };
}

const Hero = ({ 
  title = {
    line1: "PHYSICAL AI",
    line2: "AGENT", 
    line3: "WORKFORCE"
  },
  description = "We are an AI Robotics company solving repetitive & mundane physical tasks, at scale, starting with the cleaning services market.",
  stats = {
    market: "$445B",
    operations: "24/7",
    reliability: "100%"
  }
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden animate-divine-breathe">
      {/* Heavenly Background Layers */}
      <div className="absolute inset-0 bg-primary/95" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))]" />
      <div className="absolute inset-0 sacred-light opacity-30" />
      <div className="absolute inset-0 divine-beam opacity-20 animate-sacred-shimmer" />
      
      {/* Heavenly Floating Particles */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white/80 rounded-full animate-divine-ascend divine-glow" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-32 w-6 h-6 bg-accent/90 rounded-full animate-divine-ascend heavenly-aura" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 left-1/3 w-3 h-3 bg-white/70 rounded-full animate-divine-ascend divine-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-80 right-1/4 w-5 h-5 bg-accent/80 rounded-full animate-divine-ascend heavenly-aura" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-32 left-2/3 w-2 h-2 bg-white/90 rounded-full animate-divine-ascend divine-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Celestial Orbs */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 celestial-glow rounded-full animate-celestial-orbit opacity-40" />
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 celestial-glow rounded-full animate-celestial-orbit opacity-30" style={{ animationDelay: '5s', animationDirection: 'reverse' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Heavenly Content */}
          <div className="animate-fade-in-up text-white relative">
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-heavenly-pulse">
              <span className="inline-block animate-bounce-wild">{title.line1}</span>
              <br />
              <span className="text-accent inline-block animate-rainbow-pulse divine-glow">{title.line2}</span>
              <br />
              <span className="inline-block animate-glow-pulse">{title.line3}</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl divine-glow animate-heavenly-pulse transform hover:scale-110"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="animate-sacred-shimmer">GET FREE QUOTES</span>
              </Button>
              
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 heavenly-aura animate-glow-pulse transform hover:scale-110">
                <span className="animate-bounce-wild">ABOUT US</span>
              </Button>
            </div>
            
            {/* Heavenly Stats */}
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/20 relative">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-accent mb-2 animate-rainbow-pulse divine-glow">{stats.market}</div>
                <div className="text-white/80 font-medium animate-fade-in">Global Market</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-accent mb-2 animate-heavenly-pulse heavenly-aura">{stats.operations}</div>
                <div className="text-white/80 font-medium animate-fade-in" style={{ animationDelay: '0.5s' }}>Operations</div>
              </div>
              <div className="transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl font-bold text-accent mb-2 animate-glow-pulse divine-glow">{stats.reliability}</div>
                <div className="text-white/80 font-medium animate-fade-in" style={{ animationDelay: '1s' }}>Reliability</div>
              </div>
              
              {/* Divine light rays behind stats */}
              <div className="absolute inset-0 divine-beam opacity-10 animate-sacred-shimmer" />
            </div>
          </div>
          
          {/* Heavenly Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl divine-glow animate-heavenly-pulse">
              <img 
                src={heroRobot} 
                alt="Professional autonomous cleaning solution in commercial environment"
                className="w-full h-[600px] object-cover animate-divine-breathe"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute inset-0 sacred-light opacity-20" />
              
              {/* Heavenly Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl heavenly-aura animate-glow-pulse">
                <h3 className="text-lg font-bold text-primary mb-2 animate-bounce-wild">
                  Provide solutions for the reliable growth
                </h3>
                <p className="text-sm text-muted-foreground animate-fade-in">
                  A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune.
                </p>
              </div>
            </div>
            
            {/* Heavenly Floating Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 celestial-glow rounded-full blur-3xl animate-heavenly-pulse" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-divine-ascend divine-glow" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 -right-16 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-celestial-orbit heavenly-aura" />
            <div className="absolute top-20 -left-12 w-16 h-16 bg-white/40 rounded-full blur-xl animate-float divine-glow" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;