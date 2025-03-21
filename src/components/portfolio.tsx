
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
      title: "Application mobile de gestion",
      description: "Application mobile permettant la gestion des tâches et la coordination d'équipe pour les entreprises.",
      image: "/image_original6.png",
      tags: ["Flutter", "Dart", "Firebase", "UI/UX"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Plateforme e-commerce",
      description: "Site web de commerce électronique avec système de paiement intégré et gestion des stocks.",
      image: "/image_original.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        demo: "#",
        github: "#"
      }
    },
    {
      title: "Dashboard analytique",
      description: "Tableau de bord interactif pour visualiser et analyser des données commerciales en temps réel.",
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "Express", "SQL"],
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
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <CardHover 
            key={index}
            className="flex flex-col h-full"
            delay={(index + 2) * 100}
          >
            <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden bg-muted">
              <img 
                src={project.image} 
                alt={project.title} 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            {/* <div className="flex gap-3 mt-auto">
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Démo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            </div> */}
          </CardHover>
        ))}
      </div>
    </Section>
  );
};
