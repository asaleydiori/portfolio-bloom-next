
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, TrendingUp, Home, FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useEffect } from 'react';

const ProjectDetails = () => {
  const { id } = useParams();

  // Animations de scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-up');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Project data - in a real app, this would come from an API
  const projects = [
    {
      id: 'pneumonie-detection',
      title: "Système de détection de pneumonie",
      description: "Solution d'intelligence artificielle de niveau enterprise pour le diagnostic médical automatisé à partir d'images radiographiques pulmonaires. Ce système utilise des algorithmes de deep learning avancés pour analyser les radiographies et fournir des diagnostics précis en temps réel.",
      images: ["/memo.png", "/image_original.png", "/plan.png", "/drive.png"],
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
      images: ["/image_original.png", "/drive.png", "/memo.png", "/plan.png"],
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
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Projet non trouvé</h1>
          <Link to="/">
            <Button className="enterprise-gradient">Retour à l'accueil</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">Accueil</span>
              </Link>
              <Link to="/#portfolio" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <FolderOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Projets</span>
              </Link>
              <Link to="/#contact" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="border-b border-gray-100 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="scroll-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-primary mb-4 premium-text">{project.title}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex gap-4 flex-shrink-0">
                <Button asChild className="enterprise-gradient hover:shadow-lg transition-all duration-300 text-white">
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
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Image carousel */}
            <div className="scroll-slide-left">
              <h2 className="text-3xl font-bold text-primary mb-8 premium-text">Aperçu du projet</h2>
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>

            {/* Features */}
            <div className="scroll-fade-in">
              <h2 className="text-3xl font-bold text-primary mb-8 premium-text">Fonctionnalités principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-300 hover-lift">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-primary font-medium">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="scroll-slide-right">
              <h2 className="text-3xl font-bold text-primary mb-8 premium-text">Défis techniques relevés</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-primary font-medium">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project stats */}
            <div className="premium-card scroll-scale-up">
              <h3 className="text-2xl font-bold text-primary mb-8 premium-text">Informations du projet</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Impact</p>
                    <p className="font-bold text-primary text-lg">{project.impact}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Durée</p>
                    <p className="font-bold text-primary text-lg">{project.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl bg-primary/5">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Équipe</p>
                    <p className="font-bold text-primary text-lg">{project.team}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="premium-card scroll-scale-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-primary mb-8 premium-text">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, index) => (
                  <Badge 
                    key={index}
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 px-4 py-2 text-sm font-medium"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.technologies}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
