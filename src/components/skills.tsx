
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { CardHover } from '@/components/ui/card-hover';
import { BadgeCustom } from '@/components/ui/badge-custom';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Langages de programmation",
      skills: ["JavaScript", "Python", "C", "C#", "Dart", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Technologies",
      skills: ["Next js","React", "ASP.NET Core", "Flutter", "Django", "SQL", "NoSQL"],
    },
    {
      title: "Cybersécurité",
      skills: ["Audit de sécurité", "Protection des données", "Sécurité des réseaux", "Gestion des vulnérabilités"],
    },
    {
      title: "Compétences complementaires",
      skills: ["Analyse de données", "UI/UX Design", "Référencement SEO", "Design Figma", "Office 365"],
    },
  ];

  const softSkills = [
    "Travail autonome et en équipe",
    "Communication écrite et orale",
    "Organisation et gestion des priorités",
    "Adaptabilité",
    "Résistance à la pression",
    "Créativité",
  ];

  return (
    <Section id="skills" title="Compétences" subtitle="Mon expertise professionnelle et technique" delay={100}>
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <CardHover 
              key={catIndex} 
              className="p-6 border bg-card/50 shadow-sm" 
              delay={(catIndex + 1) * 100}
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <BadgeCustom 
                    key={skillIndex} 
                    variant="secondary"
                    className="mb-1"
                  >
                    {skill}
                  </BadgeCustom>
                ))}
              </div>
            </CardHover>
          ))}
        </div>

        <CardHover className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/10 delay-500">
          <h3 className="text-xl font-semibold mb-4">Compétences interpersonnelles</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <BadgeCustom 
                key={index} 
                variant="outline"
                className="py-1.5 border-primary/20"
              >
                {skill}
              </BadgeCustom>
            ))}
          </div>
        </CardHover>
      </div>
    </Section>
  );
};
