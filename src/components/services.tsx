
import { Section } from '@/components/ui/section';
import { CardHover } from '@/components/ui/card-hover';
import { BadgeCustom } from '@/components/ui/badge-custom';
import { Monitor, Smartphone, Palette, LockKeyhole, Video, Music } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web sur mesure, responsive et optimisés pour le référencement",
      icon: <Monitor className="h-8 w-8 text-primary" />,
      price: "",
      tags: ["Next Js","React", "Django", "SEO", "UI/UX"]
    },
    {
      title: "Développement Mobile",
      description: "Applications mobiles natives et multiplateformes pour Android et iOS",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      price: "",
      tags: ["Flutter", "React Native", "Firebase"]
    },
    {
      title: "Design UI/UX",
      description: "Interfaces utilisateur intuitives et expériences utilisateur optimisées",
      icon: <Palette className="h-8 w-8 text-primary" />,
      price: "",
      tags: ["Figma"]
    },
    {
      title: "Sécurité Informatique",
      description: "Audit de sécurité, protection des données et sécurisation de réseaux",
      icon: <LockKeyhole className="h-8 w-8 text-primary" />,
      price: "",
      tags: ["Audit", "Pentesting", "Encryption"]
    },
    {
      title: "Production Vidéo",
      description: "Création de contenu vidéo professionnel, montage et post-production",
      icon: <Video className="h-8 w-8 text-primary" />,
      price: "",
      tags: ["Montage"]
    },
    // {
    //   title: "Production Audio",
    //   description: "Enregistrement, mixage et mastering pour podcasts, musique et voix off",
    //   icon: <Music className="h-8 w-8 text-primary" />,
    //   price: "À partir de 50,000 XOF",
    //   tags: ["Mixage", "Podcasts", "Sound Design"]
    // }
  ];

  return (
    <Section 
      id="services" 
      title="Mes Services" 
      subtitle="Des solutions complètes pour répondre à tous vos besoins numériques"
      delay={100}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <CardHover 
            key={index} 
            className="p-6 border bg-card/50 shadow-sm flex flex-col h-full" 
            delay={(index + 1) * 100}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {service.tags.map((tag, tagIndex) => (
                <BadgeCustom 
                  key={tagIndex} 
                  variant="secondary"
                  className="mb-1"
                >
                  {tag}
                </BadgeCustom>
              ))}
            </div>
            <p className="font-semibold text-primary mt-auto">{service.price}</p>
          </CardHover>
        ))}
      </div>
    </Section>
  );
};
