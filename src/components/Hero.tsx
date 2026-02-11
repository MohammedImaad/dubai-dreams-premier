import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import heroVideo from '@/assets/dubai-hero-video.mp4';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight uppercase tracking-[0.15em] mb-6 animate-slideUp text-foreground leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto animate-slideUp opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] font-light">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Scroll Indicator */}
        <a href="#properties" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-foreground/40 hover:text-primary transition-colors cursor-pointer">
            <ChevronDown className="h-8 w-8" />
          </div>
        </a>
      </div>
    </section>
  );
};
