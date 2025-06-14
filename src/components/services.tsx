
import { Section } from '@/components/ui/section';
import { CardHover } from '@/components/ui/card-hover';
import { BadgeCustom } from '@/components/ui/badge-custom';
import { Monitor, Smartphone, Palette, LockKeyhole, Video, Server, Database, Shield, Code, Zap } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Développement Web Enterprise",
      description: "Applications web full-stack avec architecture microservices, optimisation des performances et SEO avancé",
      icon: <Monitor className="h-10 w-10 text-primary" />,
      tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Redis"],
      premium: true,
      deliverables: ["Architecture scalable", "Tests automatisés", "Documentation complète"]
    },
    {
      title: "Applications Mobile Natives",
      description: "Applications iOS et Android haute performance avec synchronisation cloud et analytics intégrés",
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      tags: ["React Native", "Flutter", "Firebase", "Analytics"],
      premium: true,
      deliverables: ["Apps natives", "Backend API", "Analytics dashboard"]
    },
    {
      title: "Design UI/UX Premium",
      description: "Interfaces utilisateur de niveau enterprise avec recherche utilisateur, prototypage et tests d'utilisabilité",
      icon: <Palette className="h-10 w-10 text-primary" />,
      tags: ["Figma", "Adobe Suite", "Prototyping", "User Research"],
      deliverables: ["Design system", "Prototypes interactifs", "Guide de style"]
    },
    {
      title: "Sécurité & Audit Enterprise",
      description: "Audits de sécurité complets, tests de pénétration et mise en conformité réglementaire",
      icon: <Shield className="h-10 w-10 text-primary" />,
      tags: ["Pentesting", "OWASP", "Conformité", "ISO 27001"],
      premium: true,
      deliverables: ["Rapport d'audit", "Plan de remediation", "Formation équipe"]
    },
    {
      title: "Infrastructure Cloud",
      description: "Architecture cloud scalable avec DevOps, CI/CD et monitoring avancé pour une disponibilité 99.9%",
      icon: <Server className="h-10 w-10 text-primary" />,
      tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
      deliverables: ["Infrastructure as Code", "Monitoring", "Backup automatisé"]
    },
    {
      title: "Solutions Blockchain",
      description: "Smart contracts, DApps et intégrations blockchain pour les entreprises innovantes",
      icon: <Database className="h-10 w-10 text-primary" />,
      tags: ["Solidity", "Web3", "Ethereum", "Smart Contracts"],
      premium: true,
      deliverables: ["Smart contracts", "DApp frontend", "Documentation technique"]
    },
    {
      title: "Production Vidéo Corporate",
      description: "Contenu vidéo professionnel, motion graphics et post-production pour communications d'entreprise",
      icon: <Video className="h-10 w-10 text-primary" />,
      tags: ["4K Production", "Motion Graphics", "Color Grading"],
      deliverables: ["Vidéos finales", "Assets graphiques", "Versions multiples"]
    },
    {
      title: "Consultation Technique",
      description: "Conseil en architecture logicielle, audit de code et optimisation des performances",
      icon: <Code className="h-10 w-10 text-primary" />,
      tags: ["Architecture", "Code Review", "Performance"],
      deliverables: ["Rapport d'analyse", "Recommandations", "Plan d'action"]
    }
  ];

  return (
    <Section 
      id="services" 
      title="Services Enterprise" 
      subtitle="Solutions complètes et personnalisées pour accompagner la transformation digitale de votre entreprise"
      delay={100}
      className="py-24 bg-white"
    >
      <div className="mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-8">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold premium-text">Certification Enterprise</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <CardHover 
            key={index} 
            className={`premium-card flex flex-col h-full relative overflow-hidden ${
              service.premium ? 'ring-2 ring-primary/20' : ''
            }`}
            delay={(index + 1) * 100}
          >
            {service.premium && (
              <div className="absolute top-4 right-4 z-10">
                <div className="px-2 py-1 rounded-full enterprise-gradient text-white text-xs font-semibold">
                  Premium
                </div>
              </div>
            )}

            <div className="mb-6 relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 premium-text text-foreground group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {service.tags.map((tag, tagIndex) => (
                <BadgeCustom 
                  key={tagIndex} 
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-200 text-xs px-2 py-1 rounded-md"
                >
                  {tag}
                </BadgeCustom>
              ))}
            </div>

            {service.deliverables && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-2">Livrables inclus :</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardHover>
        ))}
      </div>

      {/* Premium guarantee section */}
      <div className="mt-20 text-center">
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 premium-text text-foreground">
            Garantie Satisfaction Enterprise
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Chaque projet est livré avec notre garantie de qualité enterprise : support 24/7, 
            maintenance incluse pendant 3 mois, et satisfaction garantie à 100%.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Support 24/7
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              Livraison garantie
            </div>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-primary" />
              Code source inclus
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
