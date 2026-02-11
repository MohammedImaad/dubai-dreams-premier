import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { PropertyModal } from '@/components/PropertyModal';
import propertiesData from '@/data/properties.json';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const imageMap: Record<string, string> = {
  '/property-1.jpg': property1,
  '/property-2.jpg': property2,
  '/property-3.jpg': property3,
};

const ITEMS_PER_PAGE = 3;

export const FeaturedProperties = () => {
  const { t, language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState<typeof propertiesData[0] | null>(null);

  const totalPages = Math.ceil(propertiesData.length / ITEMS_PER_PAGE);
  const currentProperties = propertiesData.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const getTitle = (property: typeof propertiesData[0]) => {
    switch (language) {
      case 'ar': return property.titleAr;
      case 'zh': return property.titleZh;
      case 'de': return property.titleDe;
      default: return property.titleEn;
    }
  };

  const getDescription = (property: typeof propertiesData[0]) => {
    switch (language) {
      case 'ar': return property.descriptionAr;
      case 'zh': return property.descriptionZh;
      case 'de': return property.descriptionDe;
      default: return property.descriptionEn;
    }
  };

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
          {currentProperties.map((property, index) => (
            <div
              key={property.id}
              onClick={() => setSelectedProperty(property)}
              className="group bg-card/60 border border-primary/20 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-card hover:border-primary/60 animate-slideUp opacity-0 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={imageMap[property.image] || property1}
                  alt={getTitle(property)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                {property.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider">
                    {t.featured.featured}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-light tracking-wide mb-2 text-foreground group-hover:text-primary transition-colors">
                  {getTitle(property)}
                </h3>
                <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  {property.location}
                </p>

                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4 text-primary" /> {property.beds} {t.featured.bed}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4 text-primary" /> {property.baths} {t.featured.bath}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4 text-primary" /> {property.sqft.toLocaleString()} {t.featured.sqft}
                  </span>
                </div>

                <p className="text-2xl font-light text-primary mb-4">{property.price}</p>

                <p className="text-muted-foreground text-sm mb-2 line-clamp-2 font-light">
                  {getDescription(property)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Numeric Pagination */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                currentPage === i
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-primary/20 text-muted-foreground hover:border-primary/60 hover:text-foreground'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyModal
        property={selectedProperty}
        open={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
};
