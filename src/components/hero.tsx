
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { BadgeCustom } from '@/components/ui/badge-custom';
import { Mail, Github, Linkedin, ArrowDown, Sparkles, Globe } from 'lucide-react';

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-white">
      {/* Premium background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Geometric patterns */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/10 to-transparent floating-element blur-sm"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary/8 to-transparent floating-element"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-primary/5 to-transparent floating-element blur-lg"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(242,175,5,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(242,175,5,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Radial gradients */}
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-radial from-primary/3 via-transparent to-transparent"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-radial from-secondary/2 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">
          {/* Main content */}
          <div className="max-w-4xl lg:flex-1">
            {/* Premium badge */}
            <div className={`inline-flex items-center gap-2 mb-8 opacity-0 ${loaded ? 'animate-fade-in animate-once delay-100' : ''}`}>
              <BadgeCustom 
                variant="secondary" 
                className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 px-4 py-2 text-sm font-medium"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Développeur & Spécialiste en Sécurité
              </BadgeCustom>
              <BadgeCustom 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 px-3 py-1 text-xs"
              >
                <Globe className="w-3 h-3 mr-1" />
                Niveau Enterprise
              </BadgeCustom>
            </div>

            {/* Main title with premium typography */}
            <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight leading-[0.9] opacity-0 ${loaded ? 'animate-fade-in animate-once delay-200' : ''}`}>
              <span className="block premium-text text-foreground">Abdoul Rahim</span>
              <span className="block text-premium enterprise-pulse">SALEY DIORI</span>
            </h1>

            {/* Enhanced subtitle */}
            <div className={`mb-12 opacity-0 ${loaded ? 'animate-fade-in animate-once delay-300' : ''}`}>
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 max-w-4xl leading-relaxed premium-text">
                Développeur full-stack et spécialiste en sécurité des réseaux et systèmes
              </p>
              <p className="text-lg md:text-xl text-muted-foreground/80 max-w-3xl leading-relaxed">
                Je transforme des idées en{' '}
                <span className="text-premium font-semibold">solutions numériques sécurisées</span>{' '}
                et innovantes de niveau entreprise.
              </p>
            </div>

            {/* Premium CTA section */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16 opacity-0 ${loaded ? 'animate-fade-in animate-once delay-400' : ''}`}>
              <Button 
                asChild 
                size="lg" 
                className="enterprise-gradient hover:shadow-2xl text-white px-10 py-4 text-lg rounded-2xl shadow-xl hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-1 hover:scale-105 font-medium"
              >
                <a href="mailto:asaleydiori@gmail.com" className="flex items-center gap-3">
                  <Mail className="h-5 w-5" /> 
                  Démarrer un projet
                </a>
              </Button>
              
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-2xl border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 w-14 h-14 hover-lift" 
                  asChild
                >
                  <a href="https://github.com/asaleydiori/" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-2xl border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 w-14 h-14 hover-lift" 
                  asChild
                >
                  <a href="https://www.linkedin.com/in/abdoul-rahim-saley-diori-4a19b5240/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Premium logo section */}
          <div className={`relative opacity-0 ${loaded ? 'animate-fade-in animate-once delay-500' : ''}`}>
            <div className="w-72 h-72 lg:w-80 lg:h-80 relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-white to-primary/5 blur-3xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/5 via-transparent to-primary/10 blur-2xl"></div>
              
              {/* Main logo container */}
              <div className="relative w-full h-full premium-card rounded-full flex items-center justify-center hover-lift border-2 border-primary/10">
                <div className="text-center p-8">
                  <div className="w-48 h-48 lg:w-52 lg:h-52 rounded-full enterprise-gradient flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden">
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    <div className="relative text-6xl lg:text-7xl font-bold text-white premium-text">
                      AS
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary premium-text">
                      Créateur de Solutions
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Niveau Enterprise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium scroll indicator */}
        <div className="text-center mt-20">
          <a 
            href="#about" 
            className={`inline-flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-white/80 border border-primary/10 hover:bg-primary/5 hover:border-primary/20 transition-all duration-300 opacity-0 ${loaded ? 'animate-fade-in animate-once delay-700' : ''} group shadow-lg hover:shadow-xl`}
          >
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
              Découvrir
            </span>
            <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
