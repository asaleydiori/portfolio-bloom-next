
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Download, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Éducation', href: '#education' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
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
              className="text-lg font-medium py-2 border-b border-muted"
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
