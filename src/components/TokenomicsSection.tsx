import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, Bell, Gift, Wallet, ChevronRight, PieChart, Cpu } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { COMPANY_ICONS } from '../../constants/index';

gsap.registerPlugin(ScrollTrigger);

const TokenomicsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const contractAddress = "0x054Eb75BB0159173B6Ac1bB66447463151F3CEBC";

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger animation for grid items
      gsap.fromTo(gridRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Tokenomics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent and community-focused token distribution
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Token Overview */}
          <Card className="bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-purple-500/20 group overflow-hidden">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">SPLOSH Token</h3>
                <p className="text-muted-foreground mb-4">A Web3 token on the Polygon network with community-driven utility</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <img src="/company-icons/logo-dim.svg" alt="Token" className="w-6 h-6" />
                  <span>Ticker: SPLOSH</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tokenomics Distribution */}
          <Card className="bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-red-500/20 group">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <PieChart className="w-6 h-6 text-red-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">Distribution</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Total Supply:</span>
                    <span className="font-semibold">500,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Locked (90%):</span>
                    <span className="font-semibold">450,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Liquidity (10%):</span>
                    <span className="font-semibold">50,000</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Wallet Support */}
          <Card className="bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-yellow-500/20 group">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-all duration-500" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Supported Wallets</h3>
                <div className="grid grid-cols-4 gap-4">
                  <img src={COMPANY_ICONS.METAMASK} alt="MetaMask" className="w-10 h-10" />
                  <img src={COMPANY_ICONS.SAFEPAL} alt="SafePal" className="w-10 h-10" />
                  <img src={COMPANY_ICONS.DIM_LOGO} alt="Trust Wallet" className="w-10 h-10" />
                  <Wallet className="w-10 h-10 text-yellow-400" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Connect to your favorite Web3 wallets</p>
              </div>
            </CardContent>
          </Card>

          {/* Contract Info */}
          <Card className="md:col-span-2 bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-green-500/20 group">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="w-6 h-6 text-green-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Smart Contract</h3>
                </div>
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4 mb-2">
                  <code className="text-sm font-mono text-foreground break-all flex-1 mr-4">
                    {contractAddress}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="flex-shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Network: Polygon (POL) | Decimal: 18</p>
              </div>
            </CardContent>
          </Card>

          {/* Utility */}
          <Card className="bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-orange-500/20 group">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-orange-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Utility</h3>
                </div>
                <p className="text-muted-foreground">Use SPLOSH in DeFi platforms, gifting dApps, and future DAO voting</p>
                <Button variant="ghost" className="mt-4 group">
                  Learn More <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="bg-card/50 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-blue-500/20 group">
            <CardContent className="p-6 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <Bell className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Alerts</h3>
                </div>
                <p className="text-muted-foreground">Never miss token unlocks, staking events, or governance updates</p>
                <Button variant="ghost" className="mt-4 group">
                  Set Alerts <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;