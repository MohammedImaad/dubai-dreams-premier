import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 gradient-text">
              {t.bookCall.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t.bookCall.subtitle}
            </p>
          </div>

          <div className="bg-card/80 border border-primary/20 p-8 md:p-12 backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-12 animate-scale-in">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-xl font-bold text-foreground">{t.bookCall.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                    <label className="text-sm font-semibold text-foreground flex items-center gap-2">
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
                  <label className="text-sm font-semibold text-foreground">
                    {t.bookCall.message}
                  </label>
                  <Textarea
                    className="bg-background border-border focus:border-primary min-h-[120px]"
                    placeholder="Tell us about your property requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground font-bold uppercase tracking-wider text-sm py-6 hover:shadow-glow-lg transition-all duration-300"
                >
                  {t.bookCall.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
