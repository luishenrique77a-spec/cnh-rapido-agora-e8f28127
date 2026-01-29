import { Card, CardContent } from "@/components/ui/card";
import { Crown, RefreshCw, Video, FileText, MessageCircle, Zap } from "lucide-react";

const PremiumContentSection = () => {
  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Videoaulas Exclusivas",
      description: "Conteúdo em vídeo passo a passo para você aprender no seu ritmo"
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Atualizações Semanais",
      description: "Novo conteúdo toda semana com as últimas novidades do DETRAN"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Material Completo",
      description: "PDFs, checklists e resumos para revisar antes da prova"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Suporte Premium",
      description: "Tire suas dúvidas diretamente com nossos especialistas"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Dicas Rápidas",
      description: "Macetes que vão te salvar no dia da prova prática"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Acesso Vitalício",
      description: "Comprou uma vez, seu para sempre. Sem mensalidades!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center mb-4 bg-primary/10 text-primary border border-primary/20 text-sm px-4 py-1 rounded-full">
            <Crown className="w-4 h-4 mr-2" />
            CONTEÚDO PREMIUM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Tudo Que Você Vai Receber
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acesso completo a todos os materiais premium com <strong>atualizações semanais</strong> para 
            garantir que você esteja sempre preparado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-6 py-3 rounded-full">
            <RefreshCw className="w-5 h-5" />
            <span className="font-semibold">Conteúdo atualizado toda semana!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContentSection;
