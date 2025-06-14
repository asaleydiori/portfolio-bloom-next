
import { Github, Linkedin, Mail, MapPin, Phone, Clock } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-bold text-3xl mb-3 premium-text">
                <span className="text-foreground">Abdoul Rahim</span>
                <span className="text-premium"> SALEY DIORI</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-4">
                Développeur & Spécialiste en Sécurité
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Solutions numériques de niveau enterprise pour accompagner 
                la transformation digitale des entreprises leaders.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/asaleydiori/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-gray-50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                aria-label="Github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdoul-rahim-saley-diori-4a19b5240/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-gray-50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:asaleydiori@gmail.com" 
                className="p-3 rounded-2xl bg-gray-50 hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-foreground premium-text">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:asaleydiori@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    asaleydiori@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Téléphone</p>
                  <a href="tel:+227" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    +227 XX XX XX XX
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Localisation</p>
                  <p className="text-muted-foreground">
                    Niamey, Niger
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-foreground premium-text">Services</h4>
            <div className="space-y-3">
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Développement Web
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Applications Mobile
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Sécurité Informatique
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Infrastructure Cloud
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors duration-200">
                Consultation Technique
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © {year} Abdoul Rahim SALEY DIORI. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
