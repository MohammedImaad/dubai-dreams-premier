import { useLanguage } from '@/contexts/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Bed, Bath, Maximize, Calendar, Home } from 'lucide-react';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const imageMap: Record<string, string> = {
  '/property-1.jpg': property1,
  '/property-2.jpg': property2,
  '/property-3.jpg': property3,
};

interface Property {
  id: number;
  titleEn: string;
  titleAr: string;
  titleZh: string;
  titleDe: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  price: string;
  descriptionEn: string;
  descriptionAr: string;
  descriptionZh: string;
  descriptionDe: string;
  featured: boolean;
  image: string;
  type: string;
  year: number;
}

interface PropertyModalProps {
  property: Property | null;
  open: boolean;
  onClose: () => void;
}

export const PropertyModal = ({ property, open, onClose }: PropertyModalProps) => {
  const { language, t } = useLanguage();

  if (!property) return null;

  const getTitle = () => {
    switch (language) {
      case 'ar': return property.titleAr;
      case 'zh': return property.titleZh;
      case 'de': return property.titleDe;
      default: return property.titleEn;
    }
  };

  const getDescription = () => {
    switch (language) {
      case 'ar': return property.descriptionAr;
      case 'zh': return property.descriptionZh;
      case 'de': return property.descriptionDe;
      default: return property.descriptionEn;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-card border-primary/20 p-0 overflow-hidden">
        <div className="relative h-72 md:h-80">
          <img
            src={imageMap[property.image] || property1}
            alt={getTitle()}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-3xl font-bold text-primary">{property.price}</p>
          </div>
          {property.featured && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              {t.featured.featured}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light tracking-wide text-foreground">
              {getTitle()}
            </DialogTitle>
          </DialogHeader>

          <p className="flex items-center gap-1.5 text-muted-foreground text-sm mt-2 mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            {property.location}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bed className="h-5 w-5 text-primary" />
              <span>{property.beds} {t.featured.bed}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bath className="h-5 w-5 text-primary" />
              <span>{property.baths} {t.featured.bath}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Maximize className="h-5 w-5 text-primary" />
              <span>{property.sqft.toLocaleString()} {t.featured.sqft}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Home className="h-5 w-5 text-primary" />
              <span>{property.type}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Built {property.year}</span>
          </div>

          <p className="text-muted-foreground leading-relaxed">
            {getDescription()}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
