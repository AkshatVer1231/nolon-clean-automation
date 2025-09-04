import { Award, MapPin, GraduationCap } from "lucide-react";

const Team = () => {
  const founders = [
    {
      name: "Raushan Kumar",
      role: "Co-founder",
      image: "/placeholder.svg",
      achievements: ["Forbes 30 under 30 (2018)", "Global operations across 10+ countries", "12+ years Engineering & Business"],
      expertise: "Business & Supply Chain"
    },
    {
      name: "Sathya Narayanan R",
      role: "Co-founder", 
      image: "/placeholder.svg",
      achievements: ["MS & PhD in Robotics from US", "17 years robotics experience", "IIIT Alumni"],
      expertise: "Robotics Navigation & Training"
    },
    {
      name: "Vijeth Rai",
      role: "Co-founder",
      image: "/placeholder.svg", 
      achievements: ["Samsung cleaning robot developer", "150+ robots developed & deployed", "IIIT Alumni"],
      expertise: "Arms, Vision & Perception"
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
    <section id="team" className="section-padding bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            World-Class{" "}
            <span className="text-gradient-primary">Founding Team</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Three co-founders with complementary expertise in robotics, business operations, 
            and AI systems, backed by industry-leading advisors.
          </p>
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
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-2xl font-bold text-primary">
                  {founder.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-sm text-accent font-medium mb-4">{founder.expertise}</p>
              
              <div className="space-y-2 text-sm text-muted">
                {founder.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <Award className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                    <span>{achievement}</span>
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
                    <h4 className="font-semibold">{advisor.name}</h4>
                    <p className="text-sm text-primary">{advisor.title}</p>
                  </div>
                </div>
                <p className="text-sm text-muted">{advisor.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
            <blockquote className="text-lg italic mb-4 opacity-90">
              "I want AI to do my laundry and dishes so that I can do art and writing. Not the other way around."
            </blockquote>
            <p className="text-sm opacity-75">— Joanna Maciejewska, Author</p>
            <p className="mt-6 opacity-90">
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