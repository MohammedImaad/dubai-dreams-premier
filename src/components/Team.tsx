import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    nameEn: 'Ahmed Al-Rashid',
    nameAr: 'أحمد الراشد',
    nameZh: '艾哈迈德·拉希德',
    nameDe: 'Ahmed Al-Rashid',
    roleKey: 'ceo' as const,
  },
  {
    id: 2,
    nameEn: 'Sarah Mitchell',
    nameAr: 'سارة ميتشل',
    nameZh: '萨拉·米切尔',
    nameDe: 'Sarah Mitchell',
    roleKey: 'salesDirector' as const,
  },
  {
    id: 3,
    nameEn: 'Mohammed Hassan',
    nameAr: 'محمد حسن',
    nameZh: '穆罕默德·哈桑',
    nameDe: 'Mohammed Hassan',
    roleKey: 'seniorAgent' as const,
  },
  {
    id: 4,
    nameEn: 'Elena Volkov',
    nameAr: 'إيلينا فولكوف',
    nameZh: '埃琳娜·沃尔科夫',
    nameDe: 'Elena Volkov',
    roleKey: 'marketingHead' as const,
  },
];

export const Team = () => {
  const { t, language } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const getName = (member: typeof team[0]) => {
    switch (language) {
      case 'ar': return member.nameAr;
      case 'zh': return member.nameZh;
      case 'de': return member.nameDe;
      default: return member.nameEn;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
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
              className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
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
              className="group flex-shrink-0 w-[280px] text-center animate-slideUp opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Avatar */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-card border border-primary/30 flex items-center justify-center text-6xl font-extralight text-primary/50 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-glow">
                  {getName(member).charAt(0)}
                </div>
              </div>

              <h3 className="text-xl font-light tracking-wide text-foreground mb-1 group-hover:text-primary transition-colors">
                {getName(member)}
              </h3>
              <p className="text-primary text-sm font-light mb-4">
                {t.team[member.roleKey]}
              </p>

              {/* Social Icons - no background */}
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300">
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
