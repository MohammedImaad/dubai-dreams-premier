import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const properties = [
  {
    id: 1,
    image: property1,
    titleEn: 'Modern Villa - Emirates Hills',
    titleAr: 'فيلا حديثة - إمارات هيلز',
    titleZh: '现代别墅 - 酋长山',
    titleDe: 'Moderne Villa - Emirates Hills',
    location: 'Emirates Hills, Dubai',
    beds: 4,
    baths: 5,
    sqft: 8500,
    price: 'AED 5.2M',
    descriptionEn: 'Stunning contemporary villa with smart home integration, resort-style amenities, and panoramic desert views.',
    descriptionAr: 'فيلا معاصرة مذهلة مع تكامل المنزل الذكي ومرافق على طراز المنتجعات وإطلالات بانورامية على الصحراء.',
    descriptionZh: '令人惊叹的现代别墅，配备智能家居集成、度假村式设施和全景沙漠景观。',
    descriptionDe: 'Atemberaubende zeitgenössische Villa mit Smart-Home-Integration, Resort-Stil Annehmlichkeiten und Panoramablick auf die Wüste.',
    featured: true,
  },
  {
    id: 2,
    image: property2,
    titleEn: 'Premium Penthouse - Downtown',
    titleAr: 'بنتهاوس فاخر - وسط المدينة',
    titleZh: '高级顶层公寓 - 市中心',
    titleDe: 'Premium Penthouse - Downtown',
    location: 'Downtown Dubai, Dubai',
    beds: 3,
    baths: 4,
    sqft: 6200,
    price: 'AED 3.8M',
    descriptionEn: 'Iconic tower residence with Burj Khalifa views, premium finishes, and access to world-class amenities.',
    descriptionAr: 'إقامة في برج أيقوني مع إطلالات على برج خليفة وتشطيبات فاخرة ووصول إلى مرافق عالمية المستوى.',
    descriptionZh: '标志性塔楼住宅，可欣赏哈利法塔景观，高级装修，享有世界级设施。',
    descriptionDe: 'Ikonische Turmresidenz mit Blick auf den Burj Khalifa, Premium-Ausstattung und Zugang zu erstklassigen Annehmlichkeiten.',
    featured: false,
  },
  {
    id: 3,
    image: property3,
    titleEn: 'Waterfront Villa - Palm Jumeirah',
    titleAr: 'فيلا على الواجهة البحرية - نخلة جميرا',
    titleZh: '滨水别墅 - 棕榈岛',
    titleDe: 'Wasserfront Villa - Palm Jumeirah',
    location: 'Palm Jumeirah, Dubai',
    beds: 5,
    baths: 6,
    sqft: 10000,
    price: 'AED 7.5M',
    descriptionEn: 'Exceptional waterfront mansion with private beach access, infinity pool, and stunning Arabian Gulf views.',
    descriptionAr: 'قصر استثنائي على الواجهة البحرية مع وصول خاص للشاطئ ومسبح لا متناهي وإطلالات رائعة على الخليج العربي.',
    descriptionZh: '卓越的海滨豪宅，配有私人海滩通道、无边泳池和壮丽的阿拉伯湾景观。',
    descriptionDe: 'Außergewöhnliche Wasserfront-Villa mit privatem Strandzugang, Infinity-Pool und atemberaubendem Blick auf den Arabischen Golf.',
    featured: false,
  },
];

export const FeaturedProperties = () => {
  const { t, language } = useLanguage();

  const getTitle = (property: typeof properties[0]) => {
    switch (language) {
      case 'ar': return property.titleAr;
      case 'zh': return property.titleZh;
      case 'de': return property.titleDe;
      default: return property.titleEn;
    }
  };

  const getDescription = (property: typeof properties[0]) => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 gradient-text">
            {t.featured.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.featured.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className="group bg-card/60 border border-primary/20 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-card hover:border-primary/60 animate-slideUp opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={property.image}
                  alt={getTitle(property)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                {property.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground px-4 py-2 text-xs font-bold uppercase tracking-wider">
                    {t.featured.featured}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {getTitle(property)}
                </h3>
                <p className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  {property.location}
                </p>

                <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" /> {property.beds} {t.featured.bed}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" /> {property.baths} {t.featured.bath}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" /> {property.sqft.toLocaleString()} {t.featured.sqft}
                  </span>
                </div>

                <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>

                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {getDescription(property)}
                </p>

                <Button className="w-full bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground font-bold uppercase tracking-wider text-xs hover:shadow-glow transition-all duration-300">
                  {t.featured.viewDetails}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
