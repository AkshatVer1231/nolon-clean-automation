import { Mail, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform{" "}
              <span className="text-gradient-primary">Your Cleaning Operations?</span>
            </h2>
            
            <p className="text-xl text-muted mb-8">
              Join facility management companies who are preparing for the future of autonomous cleaning. 
              Request a demo to see Nolon AI robots in action.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-muted">hello@nolon.ai</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-primary/10 mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">MVP Launch</p>
                  <p className="text-muted">August 2025</p>
                </div>
              </div>
            </div>
            
            {/* Customer Criteria */}
            <div className="bg-surface p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-4">Ideal Customer Profile</h3>
              <ul className="space-y-2 text-sm text-muted">
                <li>• Facility management companies with 100+ employees</li>
                <li>• $10M+ yearly revenue</li>
                <li>• Services offices, hospitals, convention centers</li>
                <li>• Operating in California, New York, or Texas</li>
                <li>• Requires frequent washroom cleaning services</li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-elevated p-8">
            <h3 className="text-2xl font-bold mb-6">Request Demo Access</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input placeholder="Your Company Name" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Company Size</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>Select company size</option>
                  <option>50-100 employees</option>
                  <option>100-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <select className="w-full p-3 border border-border rounded-lg bg-background">
                  <option>Select primary location</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell us about your cleaning operations and specific needs..."
                  rows={4}
                />
              </div>
              
              <Button className="btn-primary w-full group">
                Request Demo Access
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-primary rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Be Part of the Physical AI Revolution
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join forward-thinking facility management companies preparing for autonomous cleaning solutions. 
            Early access available for qualifying partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-accent">
              Partnership Inquiry
            </Button>
            <Button className="btn-secondary bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
              Download Pitch Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;