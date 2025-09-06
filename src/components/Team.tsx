import { Award, MapPin, GraduationCap } from "lucide-react";
import raushankumarImg from "@/assets/raushan-headshot-2025.jpg";
import sathyanarayananImg from "@/assets/sathya-headshot-latest.jpg";
import vijethraiImg from "@/assets/vijeth-headshot.jpg";

const Team = () => {
  const founders = [
    {
      name: "Sathya Narayanan",
      role: "CEO",
      image: sathyanarayananImg,
      achievements: ["Global Supply Chain expert"],
      expertise: "Global Supply Chain"
    },
    {
      name: "Raushan Kumar",
      role: "CTO", 
      image: raushankumarImg,
      achievements: ["Deployed 150+ robots", "ex-Samsung, Alumni IIIT"],
      expertise: "Robotics Development"
    },
    {
      name: "Vijeth Rai",
      role: "CRO",
      image: vijethraiImg,
      achievements: ["MS & PhD in Robotics", "Vision, Robotic arms expert"],
      expertise: "Vision & Robotic Arms"
    }
  ];

  const advisors = [
    { name: "Shlok Sobti", title: "CEO of Xook", background: "Former Ola and Myntra executive" },
    { name: "Mehul Anand", title: "Robotics Specialist", background: "Ex-Canvas (US)" },
    { name: "Arvind Sairam", title: "Academic Advisor", background: "University of Bristol" },
    { name: "Marzan Alam", title: "Research Advisor", background: "University of New Hampshire" },
    { name: "Rajagopal N", title: "Technical Advisor", background: "IIT Roorkee" }
  ];

  return (
    <section id="team" className="pt-20 pb-16 bg-surface">
      <div className="container-custom">
        {/* Vision Statement */}
        <div className="mb-12 lg:mb-16 animate-fade-in-up">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-6 lg:p-12 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-2 lg:top-4 left-2 lg:left-4 w-12 lg:w-20 h-12 lg:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-3 lg:bottom-6 right-3 lg:right-6 w-8 lg:w-16 h-8 lg:h-16 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-4 lg:left-8 w-6 lg:w-12 h-6 lg:h-12 bg-white/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 lg:mb-6 animate-fade-in-up">
                Our Vision
              </h3>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Our vision is to give physical form to AI and the freedom humanity deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-12 lg:mb-16">
          <div className="relative bg-surface rounded-2xl p-6 lg:p-10 border border-border overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse"></div>
            </div>
            
            {/* Gradient Orbs */}
            <div className="absolute -top-5 lg:-top-10 -right-5 lg:-right-10 w-20 lg:w-40 h-20 lg:h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-5 lg:-bottom-10 -left-5 lg:-left-10 w-16 lg:w-32 h-16 lg:h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-in-up">
                World-Class Founding Team
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Three co-founders with complementary expertise in robotics, business operations, and AI systems, backed by industry-leading advisors.
              </p>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="card-elevated p-6 lg:p-8 text-center hover-lift hover-scale hover-shadow hover-smooth animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 lg:w-24 h-20 lg:h-24 mx-auto mb-4 lg:mb-6 rounded-full bg-gradient-primary p-1 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <img 
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full rounded-full object-cover transition-all duration-300 group-hover:brightness-110"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-muted items-center justify-center text-xl lg:text-2xl font-bold text-primary transition-all duration-300" style={{ display: 'none' }}>
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-foreground transition-colors duration-300 group-hover:text-primary">{founder.name}</h3>
              <p className="text-primary font-medium mb-3 lg:mb-4 transition-all duration-300 group-hover:scale-105 text-sm lg:text-base">{founder.role}</p>
              <p className="text-xs lg:text-sm text-accent font-medium mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-primary">{founder.expertise}</p>
              
              <div className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-muted-foreground transition-all duration-300 group-hover:transform group-hover:scale-105">
                {founder.achievements.map((achievement, i) => (
                  <div key={i} className="text-center transform transition-all duration-300 hover:text-primary">
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Advisory Team */}
        <div className="bg-background rounded-xl p-6 lg:p-8 animate-fade-in-up transition-all duration-500 hover:shadow-lg" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl lg:text-2xl font-bold text-center mb-6 lg:mb-8 transition-colors duration-300 hover:text-primary">Advisory Team & Mentors</h3>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="p-4 lg:p-6 rounded-lg border border-border hover-shadow hover-smooth hover:scale-105"
              >
                <div className="flex items-start mb-2 lg:mb-3">
                  <GraduationCap className="h-4 lg:h-5 w-4 lg:w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm lg:text-base">{advisor.name}</h4>
                    <p className="text-xs lg:text-sm text-primary">{advisor.title}</p>
                  </div>
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground">{advisor.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="bg-gradient-primary rounded-xl p-6 lg:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">Our Philosophy</h3>
            <blockquote className="text-base lg:text-lg italic mb-3 lg:mb-4 text-white/90">
              "I want AI to do my laundry and dishes so that I can do art and writing"
            </blockquote>
            <p className="text-xs lg:text-sm text-white/75">—Joanna Maciejewska</p>
            <p className="mt-4 lg:mt-6 text-white/90 text-sm lg:text-base">
              We believe in giving physical form to AI and the freedom humanity deserves. 
              Our mission is to be the Physical AI engine layer between Hardware and real-world problems, at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;