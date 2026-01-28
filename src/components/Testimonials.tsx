import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonials.testimonial1,
      author: t.testimonials.author1,
      role: t.testimonials.role1,
    },
    {
      text: t.testimonials.testimonial2,
      author: t.testimonials.author2,
      role: t.testimonials.role2,
    },
    {
      text: t.testimonials.testimonial3,
      author: t.testimonials.author3,
      role: t.testimonials.role3,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 gradient-text">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card/60 border border-primary/20 p-8 transition-all duration-500 hover:border-primary/60 hover:shadow-card animate-slideUp opacity-0"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Quote Icon */}
              <Quote className="h-10 w-10 text-primary/30 mb-4" />

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-cyan-600/30 flex items-center justify-center text-xl font-bold text-primary">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
