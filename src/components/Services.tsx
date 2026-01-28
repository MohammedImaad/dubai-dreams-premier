import { useLanguage } from '@/contexts/LanguageContext';
import { Handshake, TrendingUp, BarChart3, Building, Briefcase, Settings } from 'lucide-react';

const services = [
  { icon: Handshake, key: 'buyerConsultation' },
  { icon: TrendingUp, key: 'sellerRepresentation' },
  { icon: BarChart3, key: 'investmentAnalysis' },
  { icon: Building, key: 'offPlan' },
  { icon: Briefcase, key: 'corporateRelocation' },
  { icon: Settings, key: 'propertyManagement' },
] as const;

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 gradient-text">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const titleKey = service.key as keyof typeof t.services;
            const descKey = `${service.key}Desc` as keyof typeof t.services;
            return (
              <div
                key={service.key}
                className="group relative bg-card/60 border border-primary/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-card animate-slideUp opacity-0"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-gold-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-gold-600/20 flex items-center justify-center mb-6 border border-primary/30 group-hover:shadow-glow transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {t.services[titleKey]}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t.services[descKey]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
