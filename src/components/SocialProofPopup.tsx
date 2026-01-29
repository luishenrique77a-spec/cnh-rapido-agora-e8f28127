import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

const buyers = [
  { name: "Carlos S.", city: "São Paulo, SP" },
  { name: "Maria L.", city: "Rio de Janeiro, RJ" },
  { name: "João P.", city: "Belo Horizonte, MG" },
  { name: "Ana C.", city: "Curitiba, PR" },
  { name: "Roberto M.", city: "Salvador, BA" },
  { name: "Fernanda O.", city: "Fortaleza, CE" },
  { name: "Lucas R.", city: "Brasília, DF" },
  { name: "Juliana A.", city: "Porto Alegre, RS" },
  { name: "Pedro H.", city: "Recife, PE" },
  { name: "Camila F.", city: "Manaus, AM" },
  { name: "Bruno G.", city: "Goiânia, GO" },
  { name: "Patrícia N.", city: "Florianópolis, SC" },
];

const SocialProofPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBuyer, setCurrentBuyer] = useState(buyers[0]);

  useEffect(() => {
    const showPopup = () => {
      const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
      setCurrentBuyer(randomBuyer);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Show first popup after 3 seconds
    const initialTimer = setTimeout(showPopup, 3000);

    // Show popup every 15 seconds
    const intervalTimer = setInterval(showPopup, 15000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const minutesAgo = Math.floor(Math.random() * 5) + 1;

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white dark:bg-card text-foreground p-4 rounded-xl shadow-2xl max-w-[280px] relative border border-border">
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white dark:bg-card text-muted-foreground rounded-full p-1 shadow-lg hover:bg-muted transition-colors border border-border"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex items-start gap-3">
          <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-bold text-sm text-foreground">
              {currentBuyer.name}
            </p>
            <p className="text-xs text-muted-foreground mb-1">
              {currentBuyer.city}
            </p>
            <p className="text-sm text-foreground">
              Acabou de comprar o <span className="font-semibold text-green-600 dark:text-green-400">CNH em 3 Dias</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              há {minutesAgo} minuto{minutesAgo > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProofPopup;
