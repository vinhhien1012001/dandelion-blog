
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";

const Donate = () => {
  const [amount, setAmount] = useState("5");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const presetAmounts = ["5", "10", "15", "25", "50"];

  const handleDonate = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast.success(`Thank you for your $${amount} donation!`);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="py-12">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="font-folklore text-4xl md:text-5xl mb-6">Buy Me a Coffee</h1>
            <p className="font-minion text-lg mb-8">
              If you enjoy my blog and would like to support my work, consider buying me a coffee. 
              Your donation helps keep this blog running and ad-free.
            </p>
            <Coffee size={48} className="mx-auto text-blog-dark" />
          </div>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {presetAmounts.map((preset) => (
                  <Button
                    key={preset}
                    variant={amount === preset ? "default" : "outline"}
                    onClick={() => setAmount(preset)}
                    className="min-w-[60px]"
                  >
                    ${preset}
                  </Button>
                ))}
                
                <div className="flex items-center w-full max-w-[120px]">
                  <span className="mr-1">$</span>
                  <Input
                    type="number"
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Custom"
                    className="text-center"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleDonate} 
                disabled={isProcessing || !amount || Number(amount) < 1}
                className="w-full"
              >
                <Coffee className="mr-2" />
                {isProcessing ? "Processing..." : `Donate $${amount}`}
              </Button>
              
              <p className="text-center text-blog-neutral mt-4 text-sm font-minion">
                All transactions are secure. Your support means the world to me!
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <h2 className="font-folklore text-2xl mb-4">Other Ways to Support</h2>
            <p className="font-minion text-lg">
              Share my articles, follow me on social media, or simply send a kind message. 
              Your support in any form is greatly appreciated!
            </p>
          </div>
        </div>
      </main>
      <Footer className="absolute bottom-0 w-full"/>
    </div>
  );
};

export default Donate;
