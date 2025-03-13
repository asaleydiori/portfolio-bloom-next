
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CardHover } from '@/components/ui/card-hover';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "asaleydiori@gmail.com",
      link: "mailto:asaleydiori@gmail.com"
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "82121177 - 88903292",
      link: "tel:+22782121177"
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "Niamey, Niger",
      link: "https://maps.google.com/?q=Niamey,Niger"
    }
  ];

  return (
    <Section 
      id="contact" 
      title="Contact" 
      subtitle="Discutons de vos projets et de comment je pourrais vous aider"
      delay={100}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="opacity-0 animate-fade-in animate-once delay-200">
          <div className="space-y-6 max-w-md">
            <p className="text-lg">
              Je suis toujours intéressé par de nouveaux défis et opportunités de collaboration. N'hésitez pas à me contacter pour discuter de vos projets.
            </p>
            
            <div className="space-y-6 mt-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  className="flex items-start space-x-4 group"
                  target={item.icon === MapPin ? "_blank" : ""}
                  rel={item.icon === MapPin ? "noopener noreferrer" : ""}
                >
                  <div className="p-3 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <CardHover 
          className="p-6 bg-card/50 rounded-xl border shadow-sm"
          delay={300}
        >
          <h3 className="text-xl font-semibold mb-4">Envoyez-moi un message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <Input id="name" placeholder="Votre nom" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Sujet
              </label>
              <Input id="subject" placeholder="Sujet de votre message" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Votre message"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full">
              Envoyer le message
            </Button>
          </form>
        </CardHover>
      </div>
    </Section>
  );
};
