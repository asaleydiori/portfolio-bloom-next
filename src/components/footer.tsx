
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-bold text-2xl mb-3 text-secondary">
              Abdoul Rahim SALEY DIORI
            </h3>
            <p className="text-muted-foreground text-lg">
              Développeur & Spécialiste en Sécurité
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/asaleydiori/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-200 hover:border-primary/30"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdoul-rahim-saley-diori-4a19b5240/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-200 hover:border-primary/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:asaleydiori@gmail.com" 
              className="p-3 rounded-full bg-gray-50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-200 hover:border-primary/30"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-muted-foreground">
            © {year} Abdoul Rahim SALEY DIORI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
