import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const coin1Ref = useRef<HTMLImageElement>(null);
  const coin2Ref = useRef<HTMLImageElement>(null);
  const coin3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animations
      const tl = gsap.timeline();

      // Initial coin settings
      gsap.set([coin1Ref.current, coin2Ref.current, coin3Ref.current], {
        y: 0,
        opacity: 0.9
      });

      // Coin animations
      gsap.to(coin1Ref.current, {
        y: "-40px",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(coin2Ref.current, {
        y: "-60px",
        duration: 4.5,
        delay: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      gsap.to(coin3Ref.current, {
        y: "-50px",
        duration: 3.8,
        delay: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Content animations
      tl.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      )
        .fromTo(subtitleRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        )
        .fromTo(buttonsRef.current,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative py-24 md:py-10 flex items-center bg-gradient-subtle overflow-hidden px-4 sm:px-8 lg:px-0"
    >
      {/* Content Container */}
      <div className="relative z-10 container  w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 relative">
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left relative z-10">
            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight"
            >
              Safe & Secure Technology
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-[600px] mx-auto lg:mx-0 line-clamp-2"
            >
              SPLOSH is a 100% decentralized DAO-driven community platform built with blockchain and smart contracts.
            </p>

            <div
              ref={buttonsRef}
              className="flex flex-row items-center justify-center lg:justify-start gap-4 pt-6"
            >
              <Button variant="glow" size="lg" className="min-w-[160px] sm:min-w-[180px] text-base sm:text-lg py-5 sm:py-6">
                Learn More
              </Button>
              <Button variant="hero" size="lg" className="min-w-[160px] sm:min-w-[180px] text-base sm:text-lg py-5 sm:py-6">
                Explore Ecosystem
              </Button>
            </div>
          </div>

          {/* Coins - Centered on mobile */}
          <div className="absolute lg:relative w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] -z-10 lg:z-0 opacity-25 lg:opacity-100">
            <div className="relative w-full h-full flex items-center justify-center lg:justify-end">
              <img
                ref={coin1Ref}
                src="/logo.png"
                alt="Splosh Coin 1"
                className="absolute w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] left-1/2 lg:left-auto lg:right-[30%] -translate-x-1/2 lg:translate-x-0 top-[10%] object-contain drop-shadow-2xl"
              />
              <img
                ref={coin2Ref}
                src="/logo.png"
                alt="Splosh Coin 2"
                className="absolute w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] left-1/2 lg:left-auto lg:right-[10%] -translate-x-1/2 lg:translate-x-0 top-[30%] object-contain drop-shadow-2xl"
              />
              <img
                ref={coin3Ref}
                src="/logo.png"
                alt="Splosh Coin 3"
                className="absolute w-[200px] sm:w-[240px] md:w-[280px] lg:w-[340px] left-1/2 lg:left-auto lg:right-[40%] -translate-x-1/2 lg:translate-x-0 top-[40%] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;