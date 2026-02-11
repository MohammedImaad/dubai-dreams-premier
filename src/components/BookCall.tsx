import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, Phone, Mail, User, CheckCircle } from 'lucide-react';

export const BookCall = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="book-call" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Large "S" Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[40rem] font-extralight text-primary/[0.04] leading-none">
          S
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight uppercase tracking-[0.15em] mb-4 text-foreground">
              {t.bookCall.title}
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              {t.bookCall.subtitle}
            </p>
          </div>

          <div className="bg-card/80 border border-primary/20 p-8 md:p-12 backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-light text-foreground">{t.bookCall.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground flex items-center gap-2 tracking-wide">
                      <User className="h-4 w-4 text-primary" />
                      {t.bookCall.name}
                    </label>
                    <Input
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground flex items-center gap-2 tracking-wide">
                      <Mail className="h-4 w-4 text-primary" />
                      {t.bookCall.email}
                    </label>
                    <Input
                      type="email"
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground flex items-center gap-2 tracking-wide">
                      <Phone className="h-4 w-4 text-primary" />
                      {t.bookCall.phone}
                    </label>
                    <Input
                      type="tel"
                      required
                      className="bg-background border-border focus:border-primary"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground flex items-center gap-2 tracking-wide">
                      <Calendar className="h-4 w-4 text-primary" />
                      {t.bookCall.preferredDate}
                    </label>
                    <Input
                      type="date"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-light text-foreground flex items-center gap-2 tracking-wide">
                      <Clock className="h-4 w-4 text-primary" />
                      {t.bookCall.preferredTime}
                    </label>
                    <Input
                      type="time"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-light text-foreground tracking-wide">
                    {t.bookCall.message}
                  </label>
                  <Textarea
                    className="bg-background border-border focus:border-primary min-h-[120px]"
                    placeholder="Tell us about your property requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-light uppercase tracking-[0.2em] text-sm py-4 hover:opacity-90 transition-all duration-300"
                >
                  {t.bookCall.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
