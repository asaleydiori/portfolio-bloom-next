
import { Section } from '@/components/ui/section';
import { CardHover } from '@/components/ui/card-hover';
import { BadgeCustom } from '@/components/ui/badge-custom';

export const Education = () => {
  const education = [
    {
      period: "2024-2025",
      degree: "Master 2 en Sécurité Réseaux et Système",
      institution: "École Polytechnique de Niamey",
      description: "Spécialisation en sécurité informatique, audit et protection des infrastructures numériques."
    },
    {
      period: "2022-2023",
      degree: "Bachelor (Bac+4) en Informatique",
      institution: "Université Islamique au Niger",
      description: "Formation approfondie en développement logiciel, systèmes d'information et bases de données."
    },
    {
      period: "2019-2022",
      degree: "Licence en Informatique",
      institution: "Université Abdou Moumouni de Niamey",
      description: "Fondamentaux de l'informatique, algorithmique, programmation et architecture des systèmes."
    },
    {
      period: "2016-2019",
      degree: "Baccalauréat série D",
      institution: "",
      description: "Formation scientifique avec spécialisation en sciences naturelles."
    }
  ];

  const additionalTraining = [
    "Leadership et prise de parole en public",
    "Microsoft Power BI Data Analyst (en cours - Coursera)",
    "Microsoft Cybersecurity Analyst (en cours - Coursera)",
    "Google Project Management (1/6 - Coursera)",
    "Développement d'applications mobiles (Udemy)",
    "Meta Front-End Development (Coursera)",
    "Marketing digital (OpenClassrooms)",
    "Gestion des médias sociaux (OpenClassrooms)"
  ];

  return (
    <Section 
      id="education" 
      title="Éducation" 
      subtitle="Mon parcours académique et formations complémentaires"
      delay={100}
    >
      <div className="space-y-10">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold opacity-0 animate-fade-in animate-once delay-200">
            Parcours académique
          </h3>

          <div className="relative border-l-2 border-muted pl-6 ml-1.5 space-y-10">
            {education.map((item, index) => (
              <CardHover 
                key={index} 
                className="relative"
                delay={(index + 3) * 100}
              >
                <div className="absolute -left-[37px] w-5 h-5 rounded-full bg-primary/10 border-2 border-primary"></div>
                <BadgeCustom className="mb-2">{item.period}</BadgeCustom>
                <h4 className="text-lg font-medium">{item.degree}</h4>
                {item.institution && (
                  <p className="text-muted-foreground">{item.institution}</p>
                )}
                <p className="mt-2">{item.description}</p>
              </CardHover>
            ))}
          </div>
        </div>

        <div className="opacity-0 animate-fade-in animate-once delay-700">
          <h3 className="text-xl font-semibold mb-4">Formations complémentaires</h3>
          <div className="bg-card p-6 rounded-lg border">
            <div className="flex flex-wrap gap-2">
              {additionalTraining.map((training, index) => (
                <BadgeCustom 
                  key={index} 
                  variant="secondary"
                  className="mb-1"
                >
                  {training}
                </BadgeCustom>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
