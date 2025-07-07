import { useEffect } from 'react';
import Header from '@/components/Header.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import PartnersCarousel from '@/components/PartnersCarousel.jsx';
import AboutSection from '@/components/AboutSection.jsx';
import TokenomicsSection from '@/components/TokenomicsSection.jsx';
import SmartContractsSection from '@/components/SmartContractsSection.jsx';
import FeaturesGrid from '@/components/FeaturesGrid.jsx';
import MissionStatement from '@/components/MissionStatement.jsx';
import FAQSection from '@/components/FAQSection.jsx';
import IKOSection from '@/components/IKOSection.jsx';
import EmailSubscription from '@/components/EmailSubscription.jsx';
import Footer from '@/components/Footer.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const elementId = target.href.split('#')[1];
        const element = document.getElementById(elementId);
        if (element) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: element, offsetY: 80 },
            ease: "power2.inOut"
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PartnersCarousel />
        <AboutSection />
        <TokenomicsSection />
        <SmartContractsSection />
        <FeaturesGrid />
        <MissionStatement />
        <FAQSection />
        <IKOSection />
        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
