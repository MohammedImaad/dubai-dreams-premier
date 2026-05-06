import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import team1 from '@/assets/team-1.jpg';
import team2 from '@/assets/team-2.jpg';
import team3 from '@/assets/team-3.jpg';
import team4 from '@/assets/team-4.jpg';
import team5 from '@/assets/team-5.jpg';
import team6 from '@/assets/team-6.jpg';
import team7 from '@/assets/team-7.jpg';

const team = [
  {
    id: 1,
    name: 'Khalid Al-Mansoori',
    role: 'Founder & CEO',
    bio: 'Three decades shaping Dubai’s most coveted addresses and private portfolios.',
    image: team1,
  },
  {
    id: 2,
    name: 'Isabella Laurent',
    role: 'Luxury Property Advisor',
    bio: 'Curating signature residences across Palm Jumeirah and Emirates Hills.',
    image: team2,
  },
  {
    id: 3,
    name: 'Rohan Kapoor',
    role: 'Investment Consultant',
    bio: 'Strategic advisor to institutional and ultra-high-net-worth investors.',
    image: team3,
  },
  {
    id: 4,
    name: 'Mei-Lin Zhao',
    role: 'Client Relations Director',
    bio: 'Concierge-grade representation for an international private clientele.',
    image: team4,
  },
  {
    id: 5,
    name: 'Marcus Adeyemi',
    role: 'Waterfront Property Specialist',
    bio: 'Authority on beachfront villas, marina residences and island estates.',
    image: team5,
  },
  {
    id: 6,
    name: 'Sofia Marquez',
    role: 'International Sales Advisor',
    bio: 'Bridging European, Latin American and Gulf private capital.',
    image: team6,
  },
  {
    id: 7,
    name: 'Layla Al-Hashimi',
    role: 'Architecture & Design Consultant',
    bio: 'Bespoke interiors and architectural curation for trophy assets.',
    image: team7,
  },
];

export const Team = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-[0.15em] mb-4 text-foreground">
              {t.team.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl font-light">
              {t.team.subtitle}
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group flex-shrink-0 w-[300px] animate-slideUp opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden border border-primary/20 group-hover:border-primary/60 transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <h3 className="text-xl font-light tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-light tracking-wider uppercase mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
                {member.bio}
              </p>

              <div className="flex gap-3">
                <button aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button aria-label="Email" className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
