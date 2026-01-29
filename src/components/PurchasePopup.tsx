import { useState, useEffect } from "react";
import { X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PurchasePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    const showPopup = () => {
      setIsVisible(true);
      setHasBeenClosed(false);
    };

    // Show popup every 15 seconds
    const intervalTimer = setInterval(showPopup, 15000);

    return () => {
      clearInterval(intervalTimer);
    };
  }, [hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleBuy = () => {
    window.open("https://pay.cakto.com.br/w443b7o_747017", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl shadow-2xl max-w-[280px] relative">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white text-gray-600 rounded-full p-1 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/20 p-2 rounded-full">
            <ShoppingCart className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-sm">🔥 Oferta Especial!</p>
            <p className="text-xs opacity-90">Últimas vagas disponíveis</p>
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-sm mb-1">CNH em 3 Dias por apenas:</p>
          <div className="flex items-center gap-2">
            <span className="text-xs line-through opacity-70">R$ 97,00</span>
            <span className="text-2xl font-bold">R$ 9,99</span>
          </div>
        </div>
        
        <Button 
          onClick={handleBuy}
          className="w-full bg-white text-green-600 hover:bg-gray-100 font-bold text-sm py-2"
        >
          GARANTIR AGORA!
        </Button>
      </div>
    </div>
  );
};

export default PurchasePopup;
