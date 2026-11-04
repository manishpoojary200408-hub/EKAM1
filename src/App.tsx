import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MoreAboutModal } from './components/MoreAboutModal';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMoreAboutOpen, setIsMoreAboutOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (_serviceTitle: string) => {
    scrollToContact();
  };


  return (
    <div className="relative min-h-screen bg-[#080706] text-[#F8F0E4] selection:bg-[#F8F0E4] selection:text-[#080706] overflow-x-hidden font-sans">
      {/* Luxury Loading Screen with Staggered Curtain Reveal */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <CustomCursor />

      {/* Navigation in Black & Cream */}
      <Navbar onOpenContact={scrollToContact} />

      <main>
        {/* Hero Section in Deep Black */}
        <Hero
          onExploreServices={scrollToServices}
          onStartProject={scrollToContact}
        />

        {/* Marquee Credential Ticker in Black & Cream */}
        <Marquee />

        {/* 01 / About Section in Warm Cream */}
        <About onOpenMoreAbout={() => setIsMoreAboutOpen(true)} />

        {/* 02 / Services Section in Deep Black with Cream Accordion */}
        <Services onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 03 / Why EKAM Section in Deep Black */}
        <WhyUs />

        {/* 05 / Contact Section in Black & Cream */}
        <Contact />
      </main>

      {/* Footer in Black & Cream */}
      <Footer />

      <MoreAboutModal
        isOpen={isMoreAboutOpen}
        onClose={() => setIsMoreAboutOpen(false)}
        onStartProject={scrollToContact}
      />
    </div>
  );
}

export default App;
