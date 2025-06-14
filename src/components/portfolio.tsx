
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
      tags: ["React", "Js", "MySql", ""],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Site de gestion de planning",
      description: "Tableau de bord interactif pour visualiser le planning et analyser les performances des employées",
      image: "/plan.png",
      tags: ["Next js", "Supabase", "Chad cdn", "Next API"],
      links: {
        demo: "#",
        github: "#"
      },
      
    },
    {
      title: "Site d'administartion d'une plateforme e-commerce",
      description: "Tableau de bord interactif pour visualiser le planning et analyser les performances des employées",
      image: "/drive.png",
      tags: ["Next js", "Supabase", "Chad cdn", "Next API"],
      links: {
        demo: "#",
        github: "#"
      },
      
    },
    {
      title: "Site vitrine Likita Care",
      description: "Tableau de bord interactif pour visualiser le planning et analyser les performances des employées",
      image: "/lkt.png",
      tags: ["Next js", "Supabase", "Chad cdn", "Next API"],
      links: {
        demo: "#",
        github: "#"
      },
      
    }
  ];

  return (
    <Section 
      id="portfolio" 
      title="Portfolio" 
      subtitle="Une sélection de mes projets les plus significatifs"
      delay={100}
      className="bg-gradient-to-br from-white/50 to-accent/20 rounded-3xl p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <CardHover 
            key={index}
            className="flex flex-col h-full glass-panel border-2 border-primary/10 hover:border-primary/30"
            delay={(index + 2) * 100}
          >
            <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-medium mb-2 gradient-text">{project.title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} className="bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground border-primary/30 font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardHover>
        ))}
      </div>
    </Section>
  );
};
