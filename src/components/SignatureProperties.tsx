import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import propertiesData from '@/data/properties.json';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';

const imageMap: Record<string, string> = {
  '/property-1.jpg': property1,
  '/property-2.jpg': property2,
  '/property-3.jpg': property3,
};

export const SignatureProperties = () => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const properties = propertiesData.filter(p => p.featured || p.id <= 5);

  const getTitle = (p: typeof propertiesData[0]) => {
    switch (language) {
      case 'ar': return p.titleAr;
      case 'zh': return p.titleZh;
      case 'de': return p.titleDe;
      default: return p.titleEn;
    }
  };

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, properties.length - 1));
    setActiveIndex(clamped);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.children;
    if (cards[activeIndex]) {
      const card = cards[activeIndex] as HTMLElement;
      const containerCenter = container.offsetWidth / 2;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      container.scrollTo({ left: cardCenter - containerCenter, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Dark luxury background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-card/50" />

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-widest mb-4 text-foreground">
            Signature <span className="text-primary">Collection</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            Our most exclusive and distinguished properties
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4">
          {/* Arrows */}
          <button
            onClick={() => scrollTo(activeIndex - 1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scrollTo(activeIndex + 1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/80 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden px-[calc(50%-180px)] md:px-[calc(50%-220px)] scroll-smooth"
          >
            {properties.map((property, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={property.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-700 ease-out overflow-hidden ${
                    isActive
                      ? 'w-[340px] md:w-[420px] scale-100 opacity-100'
                      : 'w-[280px] md:w-[340px] scale-90 opacity-70'
                  }`}
                >
                  <div className="relative h-[400px] md:h-[480px] overflow-hidden">
                    <img
                      src={imageMap[property.image] || property1}
                      alt={getTitle(property)}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isActive ? 'grayscale-0' : 'grayscale'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className={`text-lg md:text-xl font-light tracking-wide mb-1 transition-colors duration-500 ${
                        isActive ? 'text-primary' : 'text-foreground/60'
                      }`}>
                        {getTitle(property)}
                      </h3>
                      <p className="text-muted-foreground text-sm">{property.location}</p>
                      <p className={`text-xl font-bold mt-2 transition-colors duration-500 ${
                        isActive ? 'text-primary' : 'text-foreground/50'
                      }`}>
                        {property.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
