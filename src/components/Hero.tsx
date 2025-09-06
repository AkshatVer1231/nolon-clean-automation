import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroRobot from "@/assets/hero-robot.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Professional Background Overlay */}
      <div className="absolute inset-0 bg-primary/95" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Professional Content */}
          <div className="animate-fade-in-up text-white">
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
              PHYSICAL AI
              <br />
              <span className="text-accent">AGENT</span>
              <br />
              WORKFORCE
            </h1>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              We are an AI Robotics company solving repetitive & mundane physical tasks, at scale, starting with the cleaning services market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                GET FREE QUOTES
              </Button>
              
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => navigate('/about')}
              >
                ABOUT US
              </Button>
            </div>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-accent mb-2">$445B</div>
                <div className="text-white/80 font-medium">Global Market</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-white/80 font-medium">Operations</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-white/80 font-medium">Reliability</div>
              </div>
            </div>
          </div>
          
          {/* Professional Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroRobot} 
                alt="Professional autonomous cleaning solution in commercial environment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            
            {/* Professional Floating Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;