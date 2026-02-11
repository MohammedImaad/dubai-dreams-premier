import { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useTheme, ThemeColor } from '@/contexts/ThemeContext';
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

const themes: { id: ThemeColor; label: string; color: string }[] = [
  { id: 'champagne-gold', label: 'Gold', color: 'bg-[hsl(43,74%,49%)]' },
  { id: 'tiffany-blue', label: 'Tiffany', color: 'bg-[hsl(174,60%,51%)]' },
  { id: 'copper-ivory', label: 'Copper', color: 'bg-[hsl(25,65%,52%)]' },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentLanguage = languages.find(l => l.code === language);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#properties', label: t.nav.properties },
    { href: '#about', label: t.nav.about },
    { href: '#team', label: t.nav.team },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-[hsl(0,0%,4%)] border-b border-primary/20 shadow-lg shadow-primary/5'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} alt="STARK." className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-light uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Switcher */}
            <div className="flex items-center gap-1.5 mr-2">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`w-5 h-5 rounded-full transition-all duration-300 ${t.color} ${
                    theme === t.id ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                  title={t.label}
                />
              ))}
            </div>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 text-foreground/70 hover:text-foreground hover:bg-transparent">
                  <Globe className="h-4 w-4" />
                  <span className="text-sm font-light">{currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}</span>
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

            {/* Phone Icon */}
            <a href="tel:+97145551234" className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary transition-colors">
              <Phone className="h-5 w-5" />
            </a>

            {/* WhatsApp Icon */}
            <a href="https://wa.me/97145551234" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary transition-colors">
              <WhatsAppIcon className="h-5 w-5" />
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
          <div className="lg:hidden py-4 border-t border-border/30 animate-slideDown bg-[hsl(0,0%,4%)]/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Theme Switcher */}
              <div className="flex gap-3 pt-4 border-t border-border/30">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-8 h-8 rounded-full transition-all ${t.color} ${
                      theme === t.id ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background' : 'opacity-60'
                    }`}
                  />
                ))}
              </div>
              
              {/* Mobile Language Selector */}
              <div className="flex gap-2 pt-4 border-t border-border/30">
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

              {/* Mobile Contact Icons */}
              <div className="flex gap-3 pt-4 border-t border-border/30">
                <a href="tel:+97145551234" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors">
                  <Phone className="h-5 w-5" />
                </a>
                <a href="https://wa.me/97145551234" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:text-primary transition-colors">
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
