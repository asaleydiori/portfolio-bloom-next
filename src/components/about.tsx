
import { Section } from '@/components/ui/section';
import { BadgeCustom } from '@/components/ui/badge-custom';

export const About = () => {
  const personalInfo = [
    { label: "Date de naissance", value: "31/10/2000" },
    { label: "Nationalité", value: "Nigérienne" },
    { label: "Lieu de résidence", value: "Niamey" },
    { label: "État civil", value: "Célibataire" },
  ];

  const languages = [
    { name: "Haoussa", level: "Langue maternelle" },
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Zarma", level: "Natif" },
  ];

  return (
    <Section id="about" title="À propos de moi" delay={100}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="opacity-0 animate-fade-in animate-once delay-200">
          <div className="space-y-6">
            <p className="text-lg">
              Passionné par la technologie et les solutions innovantes, je suis spécialisé dans la sécurité des réseaux et systèmes ainsi que le développement d'applications web et mobiles.
            </p>
            <p className="text-lg">
              Mon parcours académique en informatique, complété par une formation en cybersécurité, m'a permis de développer une expertise technique polyvalente ainsi qu'une approche méthodique de la résolution de problèmes.
            </p>
            <p className="text-lg">
              Je suis constamment à la recherche de nouveaux défis qui me permettent d'appliquer mes compétences techniques et d'élargir mes connaissances dans un environnement en constante évolution.
            </p>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in animate-once delay-300">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Informations personnelles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm text-muted-foreground mb-1">{info.label}</span>
                    <span className="font-medium">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Langues</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((language, index) => (
                  <BadgeCustom 
                    key={index} 
                    variant={index === 0 ? "default" : "secondary"}
                    className="px-3 py-1.5"
                  >
                    {language.name} - {language.level}
                  </BadgeCustom>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
