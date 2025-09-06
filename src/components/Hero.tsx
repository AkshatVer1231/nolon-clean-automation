import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Professional Background Overlay */}
      <div className="absolute inset-0 bg-primary/95" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.4),rgba(0,0,0,0.1))]" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-12 lg:py-20">
          {/* Professional Content */}
          <div className="animate-fade-in-up text-white order-2 lg:order-1 px-4 lg:px-0">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 lg:mb-8 text-center lg:text-left">
              PHYSICAL AI
              <br />
              <span className="text-accent">AGENT</span>
              <br />
              WORKFORCE
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-8 lg:mb-12 leading-relaxed max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              We are an AI Robotics company solving repetitive & mundane physical tasks, at scale, starting with the cleaning services market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-8 lg:mb-16 justify-center lg:justify-start">
              <Button 
                className="bg-white text-primary hover:bg-white/90 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-lg transition-all duration-500 hover:shadow-2xl w-full sm:w-auto hover:scale-105 hover:-translate-y-2 btn-hover-slide"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                GET FREE QUOTES
              </Button>
              
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-lg transition-all duration-500 w-full sm:w-auto hover:scale-105 hover:-translate-y-2"
                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ABOUT US
              </Button>
            </div>
            
            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 pt-8 lg:pt-12 border-t border-white/20 stagger-animation">
              <div className="text-center lg:text-left hover-scale-gentle">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2 text-shimmer">$445B</div>
                <div className="text-white/80 font-medium text-sm lg:text-base">Global Market</div>
              </div>
              <div className="text-center lg:text-left hover-scale-gentle">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2 text-shimmer">24/7</div>
                <div className="text-white/80 font-medium text-sm lg:text-base">Operations</div>
              </div>
              <div className="text-center lg:text-left hover-scale-gentle">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2 text-shimmer">100%</div>
                <div className="text-white/80 font-medium text-sm lg:text-base">Reliability</div>
              </div>
            </div>
          </div>
          
          {/* Professional Hero Image */}
          <div className="relative animate-slide-in-right order-1 lg:order-2 px-4 lg:px-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-brand transition-all duration-500 hover:scale-105 card-tilt">
              <img 
                src={heroRobot} 
                alt="Professional autonomous cleaning solution in commercial environment"
                className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            
            {/* Professional Floating Elements */}
            <div className="absolute -top-4 lg:-top-8 -left-4 lg:-left-8 w-16 lg:w-32 h-16 lg:h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 w-20 lg:w-40 h-20 lg:h-40 bg-white/10 rounded-full blur-3xl animate-bounce-gentle" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;