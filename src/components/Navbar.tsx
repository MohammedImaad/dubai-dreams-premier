import { useState } from 'react';
import { Globe, Menu, X, Phone } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'العربية', flag: '🇦🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(l => l.code === language);

  const navLinks = [
    { href: '#properties', label: t.nav.properties },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#team', label: t.nav.team },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20 shadow-lg shadow-primary/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="STARK." className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(187,100%,50%)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side - Language & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-medium">{currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card border-border z-50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex items-center gap-2 cursor-pointer ${language === lang.code ? 'text-primary' : ''}`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
            <a href="#book-call">
              <Button className="bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground font-bold uppercase tracking-wider text-xs px-6 py-3 hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.contact}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slideDown">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="flex gap-2 pt-4 border-t border-border">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`px-3 py-2 text-sm rounded ${language === lang.code ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'}`}
                  >
                    {lang.flag}
                  </button>
                ))}
              </div>

              <a href="#book-call" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground font-bold uppercase tracking-wider mt-2">
                  {t.nav.contact}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
