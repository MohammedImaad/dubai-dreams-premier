import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Sparkles } from 'lucide-react';
import { PropertyModal } from '@/components/PropertyModal';
import { PROPERTIES, type Property } from '@/data/properties';

export const FeaturedProperties = () => {
  const { t } = useLanguage();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  return (
    <section id="properties" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-[0.15em] mb-4 text-foreground">
            {t.featured.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            {t.featured.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property, index) => (
            <article
              key={property.id}
              onClick={() => setSelectedProperty(property)}
              className="group bg-card/60 border border-primary/20 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-card hover:border-primary/60 animate-slideUp opacity-0 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.hero}
                  alt={property.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                {property.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em]">
                    {t.featured.featured}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-light tracking-wide mb-2 text-foreground group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  {property.location}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {property.specs.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 border border-primary/25 text-[10px] uppercase tracking-wider text-foreground/70"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="flex items-center gap-1.5 text-primary text-sm font-light mb-4 uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" />
                  {property.highlight}
                </p>

                <p className="text-muted-foreground text-sm line-clamp-3 font-light">
                  {property.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <PropertyModal
        property={selectedProperty}
        open={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};
