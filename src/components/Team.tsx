import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    id: 1,
    nameEn: 'Ahmed Al-Rashid',
    nameAr: 'أحمد الراشد',
    nameZh: '艾哈迈德·拉希德',
    nameDe: 'Ahmed Al-Rashid',
    roleKey: 'ceo' as const,
    image: null,
  },
  {
    id: 2,
    nameEn: 'Sarah Mitchell',
    nameAr: 'سارة ميتشل',
    nameZh: '萨拉·米切尔',
    nameDe: 'Sarah Mitchell',
    roleKey: 'salesDirector' as const,
    image: null,
  },
  {
    id: 3,
    nameEn: 'Mohammed Hassan',
    nameAr: 'محمد حسن',
    nameZh: '穆罕默德·哈桑',
    nameDe: 'Mohammed Hassan',
    roleKey: 'seniorAgent' as const,
    image: null,
  },
  {
    id: 4,
    nameEn: 'Elena Volkov',
    nameAr: 'إيلينا فولكوف',
    nameZh: '埃琳娜·沃尔科夫',
    nameDe: 'Elena Volkov',
    roleKey: 'marketingHead' as const,
    image: null,
  },
];

export const Team = () => {
  const { t, language } = useLanguage();

  const getName = (member: typeof team[0]) => {
    switch (language) {
      case 'ar': return member.nameAr;
      case 'zh': return member.nameZh;
      case 'de': return member.nameDe;
      default: return member.nameEn;
    }
  };

  return (
    <section id="team" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 gradient-text">
            {t.team.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="group text-center animate-slideUp opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Avatar Placeholder */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-card border-2 border-primary/30 flex items-center justify-center text-6xl font-black text-primary/50 group-hover:border-primary/60 transition-all duration-300 group-hover:shadow-glow">
                  {getName(member).charAt(0)}
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {getName(member)}
              </h3>
              <p className="text-primary text-sm font-medium mb-4">
                {t.team[member.roleKey]}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-3">
                <button className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
