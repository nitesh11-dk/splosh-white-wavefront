import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced title and stats animation
      gsap.fromTo([titleRef.current, statsRef.current],
        {
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      // Enhanced content cards animation
      gsap.fromTo(contentRef.current?.children,
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Stats Section */}
        <div ref={statsRef} className="mb-16">
          <Card className="bg-gradient-subtle border-none overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">5M</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Total Supply</p>
                </div>
                <div className="text-center group">
                  <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">90%</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Community Development</p>
                </div>
                <div className="text-center group">
                  <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10%</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Initial Liquidity</p>
                </div>
                <div className="text-center group">
                  <h3 className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">0.5%</h3>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Daily Reward</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Description */}
          <div ref={titleRef} className="space-y-8">
            <div>
              <h4 className="text-primary font-semibold mb-4">ABOUT US</h4>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                What Exactly Is{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  SPLOSH
                </span>
                ?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                SPLOSH is a global Cryptocurrency Ecosystem empowering members through Learning With Crypto Earning. Our decentralized platform uses smart contracts for instant profit distribution, ensuring a transparent, secure, and community-driven environment.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid gap-6" ref={contentRef}>
              <Card className="bg-card/50 hover:bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="w-32 rounded-2xl bg-gradient-subtle flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="/about-us-icons/network.png"
                      alt="Network Details"
                      className="w-full h-full scale-150 object-contain hover:rotate-3 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-300">Network Details</h3>
                    <p className="text-muted-foreground">Token Name: SPLOSH | Network: Polygon (POL) | Platform: Web3 Wallets</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 hover:bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="w-32 rounded-2xl bg-gradient-subtle flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-500">
                    <img
                      src="/about-us-icons/chart.png"
                      alt="Staking Benefits"
                      className="w-full h-full scale-150 object-contain hover:rotate-3 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-300">Staking Benefits</h3>
                    <p className="text-muted-foreground">5% Direct Referral Income on Staking Value | Package Value: 50$ - 100$ with 2x Benefits</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Images and Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <img
                  src="https://splosh.app/wp-content/uploads/2024/04/feature-card-thumb-2.png"
                  alt="SPLOSH Features"
                  className="w-full h-[200px] object-cover hover:scale-110 transition-transform duration-500"
                />
              </Card>
              <Card className="overflow-hidden bg-gradient-subtle p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-2">
                  <h4 className="font-semibold hover:text-primary transition-colors duration-300">Level Rewards</h4>
                  <p className="text-sm text-muted-foreground">Up to 3% Staking Rewards | 8-18 Direct Qualifications</p>
                </div>
              </Card>
            </div>
            <div className="space-y-6 pt-12">
              <Card className="overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                <img
                  src="https://iko.themegenix.net/blockchain/wp-content/uploads/2024/04/feature-card-thumb-3.png"
                  alt="Community Development"
                  className="w-full h-[250px] object-cover hover:scale-110 transition-transform duration-500"
                />
              </Card>
              <Card className="overflow-hidden bg-gradient-subtle p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="space-y-2">
                  <h4 className="font-semibold hover:text-primary transition-colors duration-300">Community Rewards</h4>
                  <p className="text-sm text-muted-foreground">Bronze to Gold Ranks | Up to 5,00,000$ Business Volume</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;