
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProjectDetails = () => {
  const { id } = useParams();

  // Project data - in a real app, this would come from an API
  const projects = [
    {
      id: 'pneumonie-detection',
      title: "Système de détection de pneumonie",
      description: "Solution d'intelligence artificielle de niveau enterprise pour le diagnostic médical automatisé à partir d'images radiographiques pulmonaires. Ce système utilise des algorithmes de deep learning avancés pour analyser les radiographies et fournir des diagnostics précis en temps réel.",
      images: ["/memo.png", "/image_original.png", "/plan.png"],
      tags: ["Python", "TensorFlow", "API REST", "Machine Learning", "IA Médicale"],
      links: { demo: "#", github: "#" },
      impact: "95% de précision diagnostique",
      duration: "6 mois",
      team: "5 développeurs",
      technologies: "Python, TensorFlow, FastAPI, Docker, PostgreSQL",
      challenges: [
        "Traitement d'images médicales haute résolution",
        "Conformité aux normes médicales internationales",
        "Optimisation des performances pour le temps réel"
      ],
      features: [
        "Analyse automatisée d'images radiographiques",
        "Interface web intuitive pour les professionnels de santé",
        "API RESTful pour intégration avec systèmes existants",
        "Tableau de bord de statistiques et rapports",
        "Système d'audit et traçabilité complets"
      ]
    },
    {
      id: 'ecommerce-platform',
      title: "Plateforme e-commerce enterprise",
      description: "Solution complète de commerce électronique avec architecture microservices et capacités de mise à l'échelle enterprise. Gestion avancée des produits, commandes, paiements et analytics.",
      images: ["/image_original.png", "/drive.png", "/memo.png"],
      tags: ["React", "Node.js", "Microservices", "PostgreSQL", "Redis"],
      links: { demo: "#", github: "#" },
      impact: "1M+ transactions/mois",
      duration: "8 mois",
      team: "8 développeurs",
      technologies: "React, Node.js, PostgreSQL, Redis, Docker, Kubernetes",
      challenges: [
        "Architecture microservices scalable",
        "Gestion des transactions haute fréquence",
        "Sécurité des données de paiement"
      ],
      features: [
        "Catalogue produits avec recherche avancée",
        "Panier et processus de commande optimisés",
        "Intégration de multiples moyens de paiement",
        "Tableau de bord administrateur complet",
        "Analytics temps réel et rapports détaillés"
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projet non trouvé</h1>
          <Link to="/">
            <Button>Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Retour au portfolio
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2 premium-text">{project.title}</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">{project.description}</p>
            </div>
            
            <div className="flex gap-4">
              <Button asChild className="enterprise-gradient hover:shadow-lg transition-all duration-300">
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Voir le projet
                </a>
              </Button>
              <Button variant="outline" asChild className="border-2 border-primary/30 text-primary hover:bg-primary hover:text-white">
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  Code source
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Image carousel */}
            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 premium-text">Fonctionnalités principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 premium-text">Défis techniques relevés</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                    <Code className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project stats */}
            <div className="premium-card">
              <h3 className="text-xl font-bold text-foreground mb-6 premium-text">Informations du projet</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Impact</p>
                    <p className="font-semibold text-foreground">{project.impact}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Durée</p>
                    <p className="font-semibold text-foreground">{project.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Équipe</p>
                    <p className="font-semibold text-foreground">{project.team}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="premium-card">
              <h3 className="text-xl font-bold text-foreground mb-6 premium-text">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">{project.technologies}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
