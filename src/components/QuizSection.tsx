import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Car, Truck, Bike } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { label: string; icon?: React.ReactNode }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qual categoria de CNH você deseja tirar?",
    options: [
      { label: "Categoria A (Moto)", icon: <Bike className="w-6 h-6" /> },
      { label: "Categoria B (Carro)", icon: <Car className="w-6 h-6" /> },
      { label: "Categoria AB (Moto e Carro)", icon: <Car className="w-6 h-6" /> },
      { label: "Categoria C/D/E (Caminhão/Ônibus)", icon: <Truck className="w-6 h-6" /> },
    ],
  },
  {
    id: 2,
    question: "Qual sua maior dificuldade na prova prática?",
    options: [
      { label: "Baliza (estacionamento)" },
      { label: "Controle de embreagem" },
      { label: "Nervosismo no dia da prova" },
      { label: "Ainda não sei, estou começando" },
    ],
  },
  {
    id: 3,
    question: "Quando você pretende tirar sua CNH?",
    options: [
      { label: "Urgente - Esta semana!" },
      { label: "Nas próximas 2 semanas" },
      { label: "No próximo mês" },
      { label: "Ainda estou planejando" },
    ],
  },
];

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Reset quiz when component mounts (page load) and on visibility change
  useEffect(() => {
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setAnswers([]);
      setIsCompleted(false);
    };

    // Reset on visibility change (when user returns to page)
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        resetQuiz();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBuy = () => {
    window.open("https://pay.hotmart.com/SEU_LINK_AQUI", "_blank");
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <section className="py-12 px-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Perfeito! Temos o método ideal para você!
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Baseado nas suas respostas, nosso material foi feito sob medida para suas necessidades. 
            Você terá acesso a:
          </p>
          
          <div className="grid gap-3 mb-8 text-left max-w-md mx-auto">
            <div className="flex items-center gap-3 bg-white dark:bg-card p-3 rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-foreground">Módulo específico para sua categoria</span>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-card p-3 rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-foreground">Técnicas anti-nervosismo exclusivas</span>
            </div>
            <div className="flex items-center gap-3 bg-white dark:bg-card p-3 rounded-lg shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-foreground">Atualizações semanais de conteúdo</span>
            </div>
          </div>

          <Button 
            size="lg" 
            onClick={handleBuy}
            className="bg-green-500 hover:bg-green-600 text-white text-lg px-10 py-6 rounded-full shadow-xl mb-4"
          >
            QUERO COMEÇAR AGORA - R$ 9,99
          </Button>
          
          <button 
            onClick={resetQuiz}
            className="text-sm text-muted-foreground hover:text-foreground underline"
          >
            Refazer quiz
          </button>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
            Descubra o Método Ideal Para Você
          </h2>
          <p className="text-muted-foreground">
            Responda 3 perguntas rápidas e veja como podemos te ajudar
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-8 justify-center">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-16 rounded-full transition-colors ${
                index <= currentQuestion ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Card className="border-2 shadow-xl">
          <CardContent className="p-6 md:p-8">
            <p className="text-sm text-muted-foreground mb-2">
              Pergunta {currentQuestion + 1} de {questions.length}
            </p>
            <h3 className="text-xl font-bold text-foreground mb-6">
              {question.question}
            </h3>

            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.label)}
                  className="flex items-center gap-4 p-4 bg-secondary/50 hover:bg-primary hover:text-primary-foreground rounded-xl text-left transition-all duration-200 group border border-transparent hover:border-primary"
                >
                  {option.icon && (
                    <div className="text-primary group-hover:text-primary-foreground">
                      {option.icon}
                    </div>
                  )}
                  <span className="font-medium flex-1">{option.label}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuizSection;
