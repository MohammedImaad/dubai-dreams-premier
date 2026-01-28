import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/dubai-hero.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dubai Skyline with Burj Khalifa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-6 animate-slideUp gradient-text leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slideUp opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
            <a href="#properties">
              <Button className="bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground font-bold uppercase tracking-wider text-sm px-8 py-6 hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto">
                {t.hero.viewProperties}
              </Button>
            </a>
            <a href="#book-call">
              <Button variant="outline" className="border-2 border-foreground/30 text-foreground font-bold uppercase tracking-wider text-sm px-8 py-6 hover:bg-foreground/10 hover:border-primary hover:text-primary transition-all duration-300 w-full sm:w-auto">
                {t.hero.scheduleConsultation}
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#properties" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
            <ChevronDown className="h-8 w-8" />
          </div>
        </a>
      </div>
    </section>
  );
};
