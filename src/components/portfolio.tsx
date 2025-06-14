import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { CardHover } from '@/components/ui/card-hover';
import { ExternalLink, Github, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  const projects = [
    {
      id: 'pneumonie-detection',
      title: "Système de détection de pneumonie",
      description: "Solution d'intelligence artificielle de niveau enterprise pour le diagnostic médical automatisé à partir d'images radiographiques.",
      image: "/memo.png",
      tags: ["Python", "TensorFlow", "API REST", "Machine Learning", "IA Médicale"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: true,
      impact: "95% de précision diagnostique"
    },
    {
      id: 'ecommerce-platform',
      title: "Plateforme e-commerce enterprise",
      description: "Solution complète de commerce électronique avec architecture microservices et capacités de mise à l'échelle enterprise.",
      image: "/image_original.png",
      tags: ["React", "Node.js", "Microservices", "PostgreSQL", "Redis"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: true,
      impact: "1M+ transactions/mois"
    },
    {
      id: 'stock-management',
      title: "Application de gestion de stock",
      description: "Système de gestion d'inventaire en temps réel avec analytics avancés et intégration ERP pour Karma Logistique.",
      image: "/image_original6.png",
      tags: ["React Native", "Node.js", "MongoDB", "WebSockets"],
      links: {
        demo: "#",
        github: "#"
      },
      impact: "40% réduction des coûts"
    },
    {
      id: 'analytics-dashboard',
      title: "Tableau de bord analytique",
      description: "Dashboard interactif avec visualisations de données en temps réel et intelligence d'affaires intégrée.",
      image: "/plan.png",
      tags: ["Next.js", "D3.js", "PostgreSQL", "Redis", "WebSockets"],
      links: {
        demo: "#",
        github: "#"
      },
      impact: "60% gain productivité"
    },
    {
      id: 'admin-platform',
      title: "Plateforme d'administration",
      description: "Interface d'administration sécurisée avec gestion des rôles, audit trails et conformité enterprise.",
      image: "/drive.png",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
      links: {
        demo: "#",
        github: "#"
      },
      impact: "99.9% uptime"
    },
    {
      id: 'likita-care',
      title: "Plateforme Likita Care",
      description: "Solution de télémédecine avec conformité HIPAA, consultations vidéo sécurisées et dossiers médicaux électroniques.",
      image: "/lkt.png",
      tags: ["Next.js", "WebRTC", "HIPAA", "Encryption"],
      links: {
        demo: "#",
        github: "#"
      },
      featured: true,
      impact: "10K+ patients actifs"
    }
  ];

  return (
    <Section 
      id="portfolio" 
      title="Portfolio Enterprise" 
      subtitle="Solutions numériques de niveau mondial développées pour des entreprises leaders"
      delay={100}
      className="py-24 bg-white"
    >
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-8">
          <Award className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold premium-text">Projets Certifiés Enterprise</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <CardHover 
            key={index}
            className={`premium-card flex flex-col h-full group relative overflow-hidden ${
              project.featured ? 'lg:col-span-1 ring-2 ring-primary/20' : ''
            }`}
            delay={(index + 2) * 100}
          >
            {project.featured && (
              <div className="absolute top-4 right-4 z-10">
                <div className="px-3 py-1 rounded-full enterprise-gradient text-white text-xs font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Vedette
                </div>
              </div>
            )}

            <div className="relative aspect-video w-full mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Overlay content */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <TrendingUp className="w-4 h-4" />
                    {project.impact}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col flex-grow px-2">
              <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 premium-text">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 px-3 py-1 rounded-lg font-medium"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-2 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                  asChild
                >
                  <Link to={`/project/${project.id}`} className="flex items-center justify-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Voir détails
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-2 border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all duration-300 rounded-xl font-semibold hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1"
                  asChild
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Github className="h-4 w-4" />
                    Code source
                  </a>
                </Button>
              </div>
            </div>
          </CardHover>
        ))}
      </div>

      {/* Premium CTA section */}
      <div className="mt-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 premium-text text-foreground">
            Prêt à développer votre prochain projet ?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Collaborons pour créer des solutions innovantes qui transformeront votre entreprise.
          </p>
          <Button 
            size="lg" 
            className="enterprise-gradient hover:shadow-2xl text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-primary/25 transition-all duration-500 hover:-translate-y-1 hover:scale-105 font-semibold"
            asChild
          >
            <a href="#contact" className="flex items-center gap-3">
              Commencer maintenant
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
};
