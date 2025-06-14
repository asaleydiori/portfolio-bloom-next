
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { CardHover } from '@/components/ui/card-hover';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Portfolio = () => {
  const projects = [
    {
      title: "Système de détection de pneumonie",
      description: "Système utilisant l'intelligence artificielle pour détecter la pneumonie à partir d'images radiographiques.",
      image: "/memo.png",
      tags: ["Python", "TensorFlow", "API REST", "Machine Learning"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Application Desktop de gestion de stock",
      description: "Application mobile permettant la gestion des stocks et des ventes dans les magazins Karma Logistique",
      image: "/image_original6.png",
      tags: ["HTML/CSS", "JS", "PHP", "UI/MySql"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Plateforme e-commerce",
      description: "Site web de commerce en ligne pour mikishop",
      image: "/image_original.png",
      tags: ["React", "Js", "MySql"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Site de gestion de planning",
      description: "Tableau de bord interactif pour visualiser le planning et analyser les performances des employées",
      image: "/plan.png",
      tags: ["Next.js", "Supabase", "Chad CDN", "Next API"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Site d'administration e-commerce",
      description: "Tableau de bord interactif pour administrer une plateforme e-commerce",
      image: "/drive.png",
      tags: ["Next.js", "Supabase", "Chad CDN", "Next API"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Site vitrine Likita Care",
      description: "Site web vitrine moderne pour la plateforme de soins Likita Care",
      image: "/lkt.png",
      tags: ["Next.js", "Supabase", "Chad CDN", "Next API"],
      links: {
        demo: "#",
        github: "#"
      }
    }
  ];

  return (
    <Section 
      id="portfolio" 
      title="Portfolio" 
      subtitle="Une sélection de mes projets les plus significatifs"
      delay={100}
      className="modern-gradient rounded-3xl p-8 mx-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <CardHover 
            key={index}
            className="modern-card flex flex-col h-full group"
            delay={(index + 2) * 100}
          >
            <div className="relative aspect-video w-full mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-3 text-secondary group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  asChild
                >
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-secondary/30 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
                  asChild
                >
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </CardHover>
        ))}
      </div>
    </Section>
  );
};
