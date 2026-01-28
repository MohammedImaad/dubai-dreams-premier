import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturedProperties } from '@/components/FeaturedProperties';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { BookCall } from '@/components/BookCall';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <About />
        <Services />
        <Team />
        <Testimonials />
        <BookCall />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
