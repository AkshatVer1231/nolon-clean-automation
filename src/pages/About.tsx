import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary mb-8">
                About Us
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are pioneering the future of physical AI robotics, revolutionizing how repetitive and mundane tasks are handled across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe in creating a world where human potential is unleashed by automating repetitive physical tasks. Our AI-powered robotic solutions are designed to work alongside humans, enhancing productivity and allowing people to focus on what matters most.
                </p>
                <p className="text-lg text-muted-foreground">
                  Starting with the cleaning services market, we're building scalable solutions that operate 24/7 with 100% reliability, transforming entire industries one robot at a time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Why We Started</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Labor shortages in essential services
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Need for consistent, reliable operations
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Human workers deserve better opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    Technology can solve real-world problems
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <Team />

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">I</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Pushing the boundaries of what's possible with AI and robotics
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">R</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Reliability</h3>
                <p className="text-muted-foreground">
                  Building systems you can depend on, 24/7, 365 days a year
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">E</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Delivering the highest quality in everything we create
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">I</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Impact</h3>
                <p className="text-muted-foreground">
                  Making a meaningful difference in people's lives and work
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;