import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, BookOpen, Shield } from 'lucide-react';
import aboutImage from '@/assets/about-illustration.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: TrendingUp,
      title: "Instant Profit-Sharing",
      description: "Automated distribution based on community participation"
    },
    {
      icon: BookOpen,
      title: "Learning-Based Earning",
      description: "Earn rewards while expanding your Web3 knowledge"
    },
    {
      icon: Shield,
      title: "Immutable & Community-Driven",
      description: "Fully decentralized governance and transparent operations"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">SPLOSH</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                SPLOSH represents the future of decentralized autonomous organizations, combining cutting-edge blockchain technology with community-driven innovation to create a truly democratic financial ecosystem.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:shadow-card transition-all duration-300 hover:border-primary/20">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <div className="w-12 h-12 bg-gradient-glow rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="About SPLOSH" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-glow opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;