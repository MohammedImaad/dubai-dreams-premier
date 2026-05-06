import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Globe2, Shield, Users } from 'lucide-react';

const features = [
  { icon: Building2, key: 'marketExpertise' },
  { icon: Users, key: 'exclusiveNetwork' },
  { icon: Shield, key: 'confidentiality' },
  { icon: Globe2, key: 'globalReach' },
] as const;

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-[0.15em] mb-4 text-foreground">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {t.about.subtitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.description2}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const titleKey = feature.key as keyof typeof t.about;
                const descKey = `${feature.key}Desc` as keyof typeof t.about;
                return (
                  <div
                    key={feature.key}
                    className="flex gap-4 animate-slideUp opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{t.about[titleKey]}</h4>
                      <p className="text-sm text-muted-foreground">{t.about[descKey]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats/Visual Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/60 border border-primary/20 p-8 text-center animate-slideUp opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">10+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="bg-card/60 border border-primary/20 p-8 text-center animate-slideUp opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Properties Sold</div>
              </div>
              <div className="bg-card/60 border border-primary/20 p-8 text-center animate-slideUp opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">500M+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">AED Transactions</div>
              </div>
              <div className="bg-card/60 border border-primary/20 p-8 text-center animate-slideUp opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Countries Served</div>
              </div>
            </div>
            
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-gold-600/10 to-primary/10 blur-3xl -z-10 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
