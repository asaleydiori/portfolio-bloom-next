
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 py-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-display font-bold text-xl mb-2">Abdoul Rahim SALEY DIORI</h3>
            <p className="text-muted-foreground">
              Développeur & Spécialiste en Sécurité
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:asaleydiori@gmail.com" 
              className="p-2 rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {year} Abdoul Rahim SALEY DIORI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
