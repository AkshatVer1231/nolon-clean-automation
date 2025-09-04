import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <div className="text-2xl font-bold text-gradient-primary mb-4">
              Nolon AI
            </div>
            <p className="text-muted-foreground mb-4">
              Physical AI robots for commercial cleaning. 
              We CLEAN so you can DREAM.
            </p>
            <div className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-2" />
              hello@nolon.ai
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#product" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#product" className="hover:text-background transition-colors">Roadmap</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing</a></li>
              <li>Demo (Coming Soon)</li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#team" className="hover:text-background transition-colors">Team</a></li>
              <li>Careers (Coming Soon)</li>
              <li>Press Kit</li>
              <li>Investors</li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Case Studies</li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Nolon AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-background transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;