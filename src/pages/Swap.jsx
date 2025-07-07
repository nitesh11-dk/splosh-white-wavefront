import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpDown, Wallet } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';

const Swap = () => {
  const [sploshAmount, setSploshAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [swapDirection, setSwapDirection] = useState('splosh-to-usdt');
  const { toast } = useToast();

  const EXCHANGE_RATE = 2.73; // 1 SPLOSH = $2.73 USDT

  useEffect(() => {
    if (swapDirection === 'splosh-to-usdt' && sploshAmount) {
      const usdt = (parseFloat(sploshAmount) * EXCHANGE_RATE).toFixed(2);
      setUsdtAmount(usdt);
    } else if (swapDirection === 'usdt-to-splosh' && usdtAmount) {
      const splosh = (parseFloat(usdtAmount) / EXCHANGE_RATE).toFixed(6);
      setSploshAmount(splosh);
    }
  }, [sploshAmount, usdtAmount, swapDirection]);

  const handleSploshChange = (value) => {
    setSploshAmount(value);
    setSwapDirection('splosh-to-usdt');
    if (value) {
      const usdt = (parseFloat(value) * EXCHANGE_RATE).toFixed(2);
      setUsdtAmount(usdt);
    } else {
      setUsdtAmount('');
    }
  };

  const handleUsdtChange = (value) => {
    setUsdtAmount(value);
    setSwapDirection('usdt-to-splosh');
    if (value) {
      const splosh = (parseFloat(value) / EXCHANGE_RATE).toFixed(6);
      setSploshAmount(splosh);
    } else {
      setSploshAmount('');
    }
  };

  const handleSwapDirection = () => {
    const tempSplosh = sploshAmount;
    const tempUsdt = usdtAmount;
    
    setSwapDirection(swapDirection === 'splosh-to-usdt' ? 'usdt-to-splosh' : 'splosh-to-usdt');
    setSploshAmount(tempUsdt ? (parseFloat(tempUsdt) / EXCHANGE_RATE).toFixed(6) : '');
    setUsdtAmount(tempSplosh ? (parseFloat(tempSplosh) * EXCHANGE_RATE).toFixed(2) : '');
  };

  const handleSwap = async () => {
    if (!sploshAmount || !usdtAmount) {
      toast({
        title: "Invalid Amount",
        description: "Please enter an amount to swap",
        variant: "destructive",
      });
      return;
    }

    setIsSwapping(true);
    
    // Simulate swap process
    setTimeout(() => {
      toast({
        title: "Swap Successful!",
        description: `Swapped ${swapDirection === 'splosh-to-usdt' ? sploshAmount + ' SPLOSH for ' + usdtAmount + ' USDT' : usdtAmount + ' USDT for ' + sploshAmount + ' SPLOSH'}`,
      });
      setSploshAmount('');
      setUsdtAmount('');
      setIsSwapping(false);
    }, 2000);
  };

  const handleConnectWallet = () => {
    toast({
      title: "Wallet Connection",
      description: "Wallet connection feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Swap anytime,
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              anywhere.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exchange your SPLOSH tokens for USDT instantly with our decentralized swap platform
          </p>
        </div>

        {/* Swap Interface */}
        <div className="max-w-md mx-auto">
          <Card className="border-border/50 shadow-glow bg-background/80 backdrop-blur">
            <CardContent className="p-6 space-y-6">
              {/* From Token */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-sm text-muted-foreground">Balance: 0</span>
                </div>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0"
                    value={sploshAmount}
                    onChange={(e) => handleSploshChange(e.target.value)}
                    className="text-2xl font-semibold h-16 pr-20 border-border/50 focus:border-primary/50"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">S</span>
                    </div>
                    <span className="font-semibold text-foreground">SPLOSH</span>
                  </div>
                </div>
              </div>

              {/* Swap Direction Button */}
              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSwapDirection}
                  className="rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5"
                >
                  <ArrowUpDown className="w-5 h-5" />
                </Button>
              </div>

              {/* To Token */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">To</span>
                  <span className="text-sm text-muted-foreground">Balance: 0</span>
                </div>
                <div className="relative">
                  <Input
                    type="number"
                    placeholder="0"
                    value={usdtAmount}
                    onChange={(e) => handleUsdtChange(e.target.value)}
                    className="text-2xl font-semibold h-16 pr-20 border-border/50 focus:border-primary/50"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">₮</span>
                    </div>
                    <span className="font-semibold text-foreground">USDT</span>
                  </div>
                </div>
              </div>

              {/* Exchange Rate */}
              <div className="text-center text-sm text-muted-foreground">
                1 SPLOSH = ${EXCHANGE_RATE} USDT
              </div>

              {/* Swap Button */}
              <Button
                onClick={handleSwap}
                disabled={isSwapping || !sploshAmount || !usdtAmount}
                className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300"
              >
                {isSwapping ? 'Swapping...' : 'Swap'}
              </Button>

              {/* Connect Wallet Button */}
              <Button
                variant="glow"
                onClick={handleConnectWallet}
                className="w-full h-12 font-medium"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>

              {/* Additional Info */}
              <div className="text-center text-xs text-muted-foreground">
                Swap your SPLOSH here anytime anywhere
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <ArrowUpDown className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Instant Swaps</h3>
              <p className="text-muted-foreground text-sm">Exchange tokens instantly with competitive rates</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Secure</h3>
              <p className="text-muted-foreground text-sm">Your funds are always safe with our security protocols</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:shadow-card transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">24/7</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Always Available</h3>
              <p className="text-muted-foreground text-sm">Trade anytime, anywhere, 24 hours a day</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Swap;