
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCustom } from '@/components/ui/badge-custom';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background elements modernisés */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[30%] w-[60%] h-[60%] rounded-full bg-primary/5 animate-float blur-3xl"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[60%] h-[60%] rounded-full bg-secondary/5 animate-float blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full bg-primary/3 animate-float blur-2xl" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between mb-12">
          <div className="max-w-4xl">
            <BadgeCustom 
              variant="secondary" 
              className={`mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all duration-300 opacity-0 ${loaded ? 'animate-fade-in animate-once' : ''}`}
            >
              🚀 Développeur & Spécialiste en Sécurité
            </BadgeCustom>

            <h1 
              className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-tight leading-tight opacity-0 ${
                loaded ? 'animate-fade-in animate-once delay-100' : ''
              }`}
            >
              Abdoul Rahim{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent animate-pulse">
                SALEY DIORI
              </span>
            </h1>

            <p 
              className={`text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl text-balance leading-relaxed opacity-0 ${
                loaded ? 'animate-fade-in animate-once delay-200' : ''
              }`}
            >
              Développeur full-stack et spécialiste en sécurité des réseaux et systèmes, 
              je transforme des idées en{' '}
              <span className="text-primary font-semibold">solutions numériques sécurisées</span>{' '}
              et innovantes.
            </p>

            <div 
              className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-6 mb-16 opacity-0 ${
                loaded ? 'animate-fade-in animate-once delay-300' : ''
              }`}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a href="mailto:asaleydiori@gmail.com">
                  <Mail className="mr-3 h-5 w-5" /> 
                  Me contacter
                </a>
              </Button>
              
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 w-12 h-12" 
                  asChild
                >
                  <a href="https://github.com/asaleydiori/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-2 border-primary/30 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 w-12 h-12" 
                  asChild
                >
                  <a href="https://www.linkedin.com/in/abdoul-rahim-saley-diori-4a19b5240/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Zone logo modernisée */}
          <div 
            className={`w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary/10 via-white to-secondary/10 rounded-3xl flex items-center justify-center border-2 border-primary/10 mt-8 md:mt-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:rotate-3 opacity-0 ${
              loaded ? 'animate-fade-in animate-once delay-400' : ''
            }`}
          >
            <div className="text-center p-6">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 shadow-inner">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  AS
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Créateur de Contenu
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a 
            href="#about" 
            className={`inline-flex items-center justify-center p-4 rounded-full bg-white/80 border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 opacity-0 ${
              loaded ? 'animate-fade-in animate-once delay-500' : ''
            } animate-bounce shadow-lg`}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite'
            }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};
