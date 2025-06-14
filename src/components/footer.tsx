
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="gradient-bg py-10 mt-20 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="font-display font-bold text-xl mb-2">Abdoul Rahim SALEY DIORI</h3>
            <p className="text-white/80">
              Développeur & Spécialiste en Sécurité
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/asaleydiori/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdoul-rahim-saley-diori-4a19b5240/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:asaleydiori@gmail.com" 
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>© {year} Abdoul Rahim SALEY DIORI. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
