import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PartnersCarousel = () => {
  const carouselRef = useRef(null);

  const partners = [
    { name: 'Trust Wallet', logo: 'TW' },
    { name: 'MetaMask', logo: 'MM' },
    { name: 'SafePal', logo: 'SP' },
    { name: 'Polygon', logo: 'PG' },
    { name: 'Binance', logo: 'BN' },
    { name: 'Coinbase', logo: 'CB' },
    { name: 'WalletConnect', logo: 'WC' },
    { name: 'Uniswap', logo: 'UN' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      gsap.to(carousel, {
        x: '-50%',
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <h3 className="text-center text-muted-foreground mb-12 text-lg font-medium">
          Trusted by leading wallets and platforms
        </h3>
        
        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex items-center gap-16 whitespace-nowrap"
            style={{ width: '200%' }}
          >
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center min-w-[120px] h-16 bg-background rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
              >
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">
                    {partner.logo}
                  </span>
                </div>
                <span className="font-medium text-foreground text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center min-w-[120px] h-16 bg-background rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
              >
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                  <span className="text-primary-foreground font-bold text-sm">
                    {partner.logo}
                  </span>
                </div>
                <span className="font-medium text-foreground text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;