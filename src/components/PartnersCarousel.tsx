import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { COMPANY_ICONS } from '../../constants';

const PartnersCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'MetaMask', logo: COMPANY_ICONS.METAMASK },
    { name: 'SafePal', logo: COMPANY_ICONS.SAFEPAL },
    { name: 'Layer One', logo: COMPANY_ICONS.LAYER_ONE },
    { name: 'White Logo', logo: COMPANY_ICONS.WHITE_LOGO },
    { name: 'Dim Logo', logo: COMPANY_ICONS.DIM_LOGO },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      // Create infinite scroll animation
      const animation = gsap.to(carousel, {
        x: '-33.33%',
        duration: 15,
        ease: 'none',
        repeat: -1,
      });

      // Reset position when animation completes one cycle
      animation.eventCallback('onRepeat', () => {
        gsap.set(carousel, { x: '0%' });
      });

    }, carouselRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-screen bg-muted/30">
      <div className="w-full">
        <h3 className="text-center text-muted-foreground py-12 text-lg font-medium">
          Backed By Leading Blockchain Investors And Founders
        </h3>

        <div className="w-screen bg-slate-900 border-y border-slate-700 overflow-hidden py-8">
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex items-center gap-16 whitespace-nowrap"
              style={{ width: '300%' }}
            >
              {/* First set */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center min-w-[160px] h-20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
                >
                  <div className="w-40 flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Second set */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center min-w-[160px] h-20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
                >
                  <div className="w-40 flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Third set */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="flex items-center justify-center min-w-[160px] h-20 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 grayscale hover:grayscale-0"
                >
                  <div className="w-40 flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;