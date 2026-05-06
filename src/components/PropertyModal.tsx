import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { MapPin, Home, Calendar, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import type { Property } from '@/data/properties';

interface PropertyModalProps {
  property: Property | null;
  open: boolean;
  onClose: () => void;
}

export const PropertyModal = ({ property, open, onClose }: PropertyModalProps) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (open) setActiveImage(0);
  }, [open, property?.id]);

  if (!property) return null;

  const images = property.gallery?.length ? property.gallery : [property.hero];
  const next = () => setActiveImage((i) => (i + 1) % images.length);
  const prev = () => setActiveImage((i) => (i - 1 + images.length) % images.length);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl bg-card border-primary/20 p-0 overflow-hidden max-h-[92vh] overflow-y-auto">
        {/* Hero / Gallery */}
        <div className="relative h-72 md:h-[440px] bg-background group">
          <img
            src={images[activeImage]}
            alt={property.title}
            loading="lazy"
            className="w-full h-full object-cover transition-opacity duration-500"
            key={activeImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/60 backdrop-blur border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/60 backdrop-blur border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {property.price && (
            <div className="absolute bottom-6 left-6">
              <p className="text-3xl font-light text-primary">{property.price}</p>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em]">
            {property.highlight}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 px-6 md:px-8 pt-4 overflow-x-auto scrollbar-hide">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`flex-shrink-0 w-20 h-14 overflow-hidden border transition-all ${
                  i === activeImage ? 'border-primary opacity-100' : 'border-primary/20 opacity-60 hover:opacity-90'
                }`}
              >
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-extralight tracking-wide text-foreground">
            {property.title}
          </h2>

          <p className="flex items-center gap-1.5 text-muted-foreground text-sm mt-2 mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            {property.location}
          </p>

          {/* Specs row */}
          <div className="flex flex-wrap gap-2 mb-6">
            {property.specs.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 border border-primary/30 text-xs uppercase tracking-wider text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-primary" />
              <span>{property.propertyType}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{property.completionYear}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed font-light mb-8">
            {property.description}
          </p>

          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary mb-4">
              Feature Highlights
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {property.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
