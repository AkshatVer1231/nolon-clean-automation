import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Product", href: "#product" },
    { label: "Team", href: "#team" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium border-b border-border' 
          : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Professional Logo */}
          <div className="flex items-center">
            <div className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'} transition-colors duration-300`}>
              <span className="font-light">Nolon</span>
              <span className="text-accent">AI</span>
            </div>
          </div>

          {/* Professional Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'text-muted-foreground hover:text-primary' 
                    : 'text-white/90 hover:text-white'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isScrolled ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Professional CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className={`font-semibold px-6 py-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-brand' 
                  : 'bg-white text-primary hover:bg-white/90 hover:shadow-2xl'
              }`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Professional Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mobile-menu-backdrop border-t border-border nav-menu-enter active">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 font-medium nav-item-slide visible hover:translate-x-2"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-primary text-white hover:bg-primary/90 w-full mt-4 font-semibold px-6 py-3 rounded-lg hover-lift"
                style={{ 
                  animationDelay: `${navItems.length * 0.1}s`,
                  animation: `fadeInUp 0.6s ease-out ${navItems.length * 0.1}s forwards`
                }}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;