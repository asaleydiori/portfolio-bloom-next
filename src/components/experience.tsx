
import { Section } from '@/components/ui/section';
import { CardHover } from '@/components/ui/card-hover';
import { BadgeCustom } from '@/components/ui/badge-custom';

export const Experience = () => {
  const experiences = [
    {
      period: "Depuis Juillet 2024",
      position: "Collaborateur",
      company: "YayiMake",
      location: "Niamey",
      responsibilities: [
        "Modélisation de bases de données",
        "Développement mobile et web",
        "Design UI/UX avec Figma"
      ]
    },
    {
      period: "Mars 2023 - Juillet 2023",
      position: "Stagiaire",
      company: "YayiMake",
      location: "Niamey",
      responsibilities: [
        "Développement d'un système de détection de pneumonie via IA",
        "Modélisation et création d'une API"
      ]
    },
    {
      period: "Août 2021 - Juin 2022",
      position: "Stagiaire puis Collaborateur mi-temps",
      company: "Gabera Software Solutions",
      location: "Niamey",
      responsibilities: [
        "Développement de logiciels",
        "Gestion de bases de données",
        "Relations clients"
      ]
    },
    {
      period: "Février 2021 - Janvier 2024",
      position: "Community Manager et Cofondateur",
      company: "Mikia",
      location: "Niamey",
      responsibilities: [
        "Gestion des médias sociaux",
        "Interaction avec la communauté"
      ]
    },
    {
      period: "2019",
      position: "Chargé à l'information",
      company: "Club d'anglais du lycée d'excellence",
      location: "Niamey",
      responsibilities: [
        "Gestion des communications internes",
        "Élaboration de contenus pédagogiques"
      ]
    }
  ];

  return (
    <Section 
      id="experience" 
      title="Expérience professionnelle" 
      subtitle="Mon parcours et mes réalisations professionnelles"
      delay={100}
    >
      <div className="relative border-l-2 border-muted pl-6 ml-1.5 space-y-10">
        {experiences.map((experience, index) => (
          <CardHover 
            key={index} 
            className="relative"
            delay={(index + 2) * 100}
          >
            <div className="absolute -left-[37px] w-5 h-5 rounded-full bg-primary/10 border-2 border-primary"></div>
            <BadgeCustom className="mb-2">{experience.period}</BadgeCustom>
            <h4 className="text-lg font-medium">{experience.position}</h4>
            <p className="text-muted-foreground">
              {experience.company}, {experience.location}
            </p>
            <ul className="mt-2 space-y-1">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </CardHover>
        ))}
      </div>
    </Section>
  );
};
