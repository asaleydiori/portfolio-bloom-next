
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Download, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const isMobile = useIsMobile();

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    // { name: 'Éducation', href: '#education' },
    // { name: 'Expérience', href: '#experience' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Get all sections
      const sections = document.querySelectorAll('section[id]');
      
      // Find the section that is currently in the viewport
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.getBoundingClientRect().height;
        if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigationClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-semibold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Abdoul Rahim
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                activeSection === link.href.substring(1) 
                  ? "text-primary after:w-full" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" className="ml-4" asChild>
            <a href="/CV_AbdoulRahim_SALEY-DIORI.pdf" download>
              <Download className="mr-2 h-4 w-4" /> CV
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-transform duration-300 ease-in-out", 
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ top: '60px' }}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-muted",
                activeSection === link.href.substring(1) ? "text-primary" : ""
              )}
              onClick={handleNavigationClick}
            >
              {link.name}
            </a>
          ))}
          <Button className="mt-6 w-full" asChild>
            <a href="/CV_AbdoulRahim_SALEY-DIORI.pdf" download onClick={handleNavigationClick}>
              <Download className="mr-2 h-4 w-4" /> Télécharger CV
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};
