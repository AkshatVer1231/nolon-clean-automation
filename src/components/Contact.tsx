import { Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    companySize: "",
    location: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (First Name, Last Name, Email, Company)",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5BNAIbZyY2q3Kt9M4Gb8HuQnfeg4B6jTQ3eg--O94rCnodES9p1SPGTuZD1IE07xBTQ/exec";
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Nolon AI Website"
        }),
      });

      toast({
        title: "Demo Request Submitted!",
        description: "Thank you for your interest. Our team will contact you within 24 hours to schedule your demo.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        companySize: "",
        location: "",
        message: ""
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your request. Please try again or email us directly at hello@nolon.ai",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center lg:text-left">
              Ready to Transform{" "}
              <span className="text-gradient-primary">Your Cleaning Operations?</span>
            </h2>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8 text-center lg:text-left">
              Join facility management companies who are preparing for the future of autonomous cleaning. 
              Request a demo to see Nolon AI robots in action.
            </p>
            
            <div className="space-y-4 lg:space-y-6 mb-6 lg:mb-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start">
                <div className="p-3 rounded-lg bg-primary/10 mb-3 sm:mb-0 sm:mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold">Email Us</p>
                  <p className="text-muted-foreground">hello@nolon.ai</p>
                </div>
              </div>
            </div>
            
            {/* Customer Criteria */}
            <div className="bg-surface p-4 lg:p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-3 lg:mb-4 text-center lg:text-left">Ideal Customer Profile</h3>
              <ul className="space-y-1 lg:space-y-2 text-xs lg:text-sm text-muted-foreground">
                <li>• Facility management companies with 100+ employees</li>
                <li>• $10M+ yearly revenue</li>
                <li>• Services offices, hospitals, convention centers</li>
                <li>• Operating in California, New York, or Texas</li>
                <li>• Requires frequent washroom cleaning services</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-elevated p-6 lg:p-8 order-1 lg:order-2">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-center lg:text-left">Request Demo Access</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John" 
                    required
                    className="text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Doe" 
                    required
                    className="text-sm lg:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@company.com" 
                  required
                  className="text-sm lg:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company *</label>
                <Input 
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Your Company Name" 
                  required
                  className="text-sm lg:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company Size</label>
                <select 
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  className="w-full p-2 lg:p-3 border border-border rounded-lg bg-background text-sm lg:text-base"
                >
                  <option value="">Select company size</option>
                  <option value="50-100 employees">50-100 employees</option>
                  <option value="100-500 employees">100-500 employees</option>
                  <option value="500+ employees">500+ employees</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <select 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-2 lg:p-3 border border-border rounded-lg bg-background text-sm lg:text-base"
                >
                  <option value="">Select primary location</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your cleaning operations and specific needs..."
                  rows={4}
                  className="text-sm lg:text-base"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-primary w-full group text-sm lg:text-base"
              >
                {isSubmitting ? "Submitting..." : "Request Demo Access"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="mt-12 lg:mt-20 bg-gradient-primary rounded-xl p-6 lg:p-8 text-center text-white">
          <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
            Be Part of the Physical AI Revolution
          </h3>
          <p className="text-sm lg:text-lg opacity-90 mb-4 lg:mb-6 max-w-2xl mx-auto">
            Join forward-thinking facility management companies preparing for autonomous cleaning solutions. 
            Early access available for qualifying partners.
          </p>
        </div>

        {/* Quote Section */}
        <div className="mt-12 lg:mt-16 text-center">
          <blockquote className="text-lg lg:text-xl italic mb-4 lg:mb-6 text-foreground max-w-4xl mx-auto">
            "The next wave of AI will be Physical AI. Everything that moves will be robotic someday, and it will be soon" - Jensen Huang
          </blockquote>
          
          <div className="bg-gradient-primary rounded-xl p-6 lg:p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-white">
              <a href="mailto:hello@nolon.ai" className="text-white hover:text-white/90 transition-colors">
                Join us
              </a>
            </h3>
            <p className="text-sm lg:text-lg text-white/90">
              We are building the future of Embodied AI agents. Come join us in this exciting journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;