import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { SignatureProperties } from '@/components/SignatureProperties';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { BookCall } from '@/components/BookCall';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <Hero />
          <FeaturedProperties />
          {/* <SignatureProperties /> temporarily hidden */}
          <About />
          <Team />
          <Testimonials />
          <BookCall />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
