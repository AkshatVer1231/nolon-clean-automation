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
      achievements: ["Global Supply Chain expert", "17 years robotics experience", "IIIT Alumni"],
      expertise: "Global Supply Chain"
    },
    {
      name: "Raushan Kumar",
      role: "CTO", 
      image: raushankumarImg,
      achievements: ["Deployed 150+ robots", "ex-Samsung", "Alumni IIIT"],
      expertise: "Robotics Development"
    },
    {
      name: "Vijeth Rai",
      role: "CRO",
      image: vijethraiImg,
      achievements: ["MS & PhD in Robotics", "Vision expert", "Robotic arms expert"],
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
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-accent p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-8 w-12 h-12 bg-white/15 rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
                Our Vision
              </h3>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Our vision is to give physical form to AI and the freedom humanity deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="relative bg-surface rounded-2xl p-10 border border-border overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.5)_1px,transparent_1px),linear-gradient(180deg,rgba(59,130,246,0.5)_1px,transparent_1px)] bg-[length:40px_40px] animate-pulse"></div>
            </div>
            
            {/* Gradient Orbs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 animate-fade-in-up">
                World-Class Founding Team
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Three co-founders with complementary expertise in robotics, business operations, and AI systems, backed by industry-leading advisors.
              </p>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="card-elevated p-8 text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary p-1">
                <img 
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-muted items-center justify-center text-2xl font-bold text-primary" style={{ display: 'none' }}>
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-foreground">{founder.name}</h3>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-sm text-accent font-medium mb-4">{founder.expertise}</p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                {founder.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <Award className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Advisory Team */}
        <div className="bg-background rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Advisory Team & Mentors</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className="p-6 rounded-lg border border-border hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-3">
                  <GraduationCap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{advisor.name}</h4>
                    <p className="text-sm text-primary">{advisor.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{advisor.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Philosophy</h3>
            <blockquote className="text-lg italic mb-4 text-white/90">
              "I want AI to do my laundry and dishes so that I can do art and writing"
            </blockquote>
            <p className="text-sm text-white/75">—Joanna Maciejewska</p>
            <p className="mt-6 text-white/90">
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