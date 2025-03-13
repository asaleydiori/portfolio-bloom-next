
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
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[30%] w-[80%] h-[80%] rounded-full bg-primary/5 animate-float blur-3xl"></div>
        <div className="absolute -bottom-[40%] -left-[30%] w-[80%] h-[80%] rounded-full bg-primary/5 animate-float blur-3xl" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <BadgeCustom 
            variant="secondary" 
            className={`mb-5 opacity-0 ${loaded ? 'animate-fade-in animate-once' : ''}`}
          >
            Développeur & Spécialiste en Sécurité
          </BadgeCustom>

          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight leading-tight opacity-0 ${
              loaded ? 'animate-fade-in animate-once delay-100' : ''
            }`}
          >
            Abdoul Rahim <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">SALEY DIORI</span>
          </h1>

          <p 
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance opacity-0 ${
              loaded ? 'animate-fade-in animate-once delay-200' : ''
            }`}
          >
            Développeur full-stack et spécialiste en sécurité des réseaux et systèmes, je transforme des idées en solutions numériques sécurisées et innovantes.
          </p>

          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 ${
              loaded ? 'animate-fade-in animate-once delay-300' : ''
            }`}
          >
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Me contacter
              </a>
            </Button>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <a 
            href="#about" 
            className={`inline-flex items-center justify-center opacity-0 ${
              loaded ? 'animate-fade-in animate-once delay-500' : ''
            } animate-bounce`}
            style={{
              animationDuration: '2s',
              animationIterationCount: 'infinite'
            }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};
