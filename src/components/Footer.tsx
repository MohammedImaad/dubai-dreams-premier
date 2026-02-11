import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-primary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="STARK." className="h-16 w-auto mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-light">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light text-foreground uppercase tracking-[0.2em] mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {[
                { href: '#properties', label: t.nav.properties },
                { href: '#about', label: t.nav.about },
                { href: '#team', label: t.nav.team },
                { href: '#book-call', label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-foreground uppercase tracking-[0.2em] mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm font-light">
                  Business Bay, Dubai<br />
                  United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+97145551234" className="text-muted-foreground hover:text-primary text-sm transition-colors font-light">
                  +971 4 555 1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@starkhome.ae" className="text-muted-foreground hover:text-primary text-sm transition-colors font-light">
                  info@starkhome.ae
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-light text-foreground uppercase tracking-[0.2em] mb-6">{t.footer.followUs}</h4>
            <p className="text-muted-foreground text-sm mb-4 font-light">
              Stay updated with the latest luxury properties and market insights.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 bg-background border border-border text-sm focus:outline-none focus:border-primary font-light"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-light hover:opacity-90 transition-all">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm font-light">
            © {new Date().getFullYear()} STARK. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};
