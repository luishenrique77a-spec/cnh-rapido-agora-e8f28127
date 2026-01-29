import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Clock, Star, Lock, Award, ArrowRight } from "lucide-react";
import PurchasePopup from "@/components/PurchasePopup";
import QuizSection from "@/components/QuizSection";
import PremiumContentSection from "@/components/PremiumContentSection";

const Index = () => {
  const handleBuy = () => {
    window.open("https://pay.cakto.com.br/w443b7o_747017", "_blank");
  };

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "Incrível! Segui o método e consegui minha CNH em tempo recorde. O material é muito claro e objetivo. Recomendo demais!",
      rating: 5,
      avatar: "CS"
    },
    {
      name: "Maria Santos",
      location: "Rio de Janeiro, RJ",
      text: "Estava com muito medo da baliza, mas com esse guia entendi tudo que precisava. Passei de primeira! Vale cada centavo.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Oliveira",
      location: "Belo Horizonte, MG",
      text: "Já tinha reprovado 2 vezes. Depois de estudar esse material, passei sem nenhum problema. Método sensacional!",
      rating: 5,
      avatar: "JO"
    },
    {
      name: "Ana Paula Costa",
      location: "Curitiba, PR",
      text: "Comprei sem acreditar muito, mas me surpreendi. Conteúdo direto ao ponto e super didático. Aprovada!",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Roberto Lima",
      location: "Salvador, BA",
      text: "Melhor investimento que fiz! Por menos de 10 reais, economizei tempo e dinheiro. Super recomendo!",
      rating: 5,
      avatar: "RL"
    },
    {
      name: "Fernanda Souza",
      location: "Fortaleza, CE",
      text: "O passo a passo é muito fácil de seguir. Em poucos dias já estava preparada. Aprovei de primeira!",
      rating: 5,
      avatar: "FS"
    }
  ];

  const benefits = [
    "Método comprovado por +10.000 alunos aprovados",
    "Aprenda a passar na prova prática sem medo",
    "Dicas exclusivas que os instrutores não ensinam",
    "Técnicas para dominar a baliza em minutos",
    "Acesso imediato após a compra",
    "Suporte via WhatsApp incluso"
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <PurchasePopup />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-12 md:py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge className="mb-6 bg-destructive text-destructive-foreground text-sm px-4 py-2 animate-pulse">
            🔥 OFERTA ESPECIAL - ÚLTIMAS VAGAS
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            CNH EM 3 DIAS
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-8 opacity-95">
            Como Tirar Sua CNH Sem Baliza de Forma Rápida e Garantida!
          </h2>
          
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Descubra o método secreto que já aprovou <strong>mais de 10.000 pessoas</strong> na primeira tentativa. Chega de reprovar e gastar dinheiro à toa!
          </p>

          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-3 text-2xl">
              <span className="line-through opacity-60">R$ 97,00</span>
              <ArrowRight className="w-5 h-5" />
              <span className="text-5xl font-bold text-green-300">R$ 9,99</span>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              90% DE DESCONTO - APENAS HOJE!
            </Badge>
          </div>

          <Button 
            size="lg" 
            onClick={handleBuy}
            className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl px-8 md:px-10 py-6 md:py-7 rounded-full shadow-2xl w-full max-w-md"
          >
            🚗 QUERO MINHA CNH AGORA!
          </Button>

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Compra 100% Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>Pagamento Criptografado</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Acesso Imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <QuizSection />

      {/* Premium Content Section */}
      <PremiumContentSection />

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            O Que Você Vai Receber:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={handleBuy}
              className="bg-green-500 hover:bg-green-600 text-white text-base md:text-lg px-8 md:px-12 py-6 rounded-full shadow-xl w-full max-w-sm"
            >
              GARANTIR MINHA VAGA POR R$ 9,99
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-14 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold">+10.000</div>
              <div className="text-sm opacity-80 mt-2">Alunos Aprovados</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-sm opacity-80 mt-2">Taxa de Aprovação</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">4.9</div>
              <div className="text-sm opacity-80 mt-2">Avaliação Média</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">3 dias</div>
              <div className="text-sm opacity-80 mt-2">Tempo Médio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            Veja o Que Nossos Alunos Dizem:
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Depoimentos reais de pessoas que conquistaram a CNH com nosso método
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-8">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Garantia Incondicional de 7 Dias
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Se por qualquer motivo você não ficar satisfeito com o material, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. <strong>Risco zero para você!</strong>
          </p>
          
          <Button 
            size="lg" 
            onClick={handleBuy}
            className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl w-full max-w-md"
          >
            QUERO COMEÇAR AGORA - R$ 9,99
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-5">
            {[
              {
                q: "O material funciona mesmo?",
                a: "Sim! Nosso método já aprovou mais de 10.000 pessoas. Temos uma taxa de aprovação de 98% entre nossos alunos."
              },
              {
                q: "Recebo o acesso na hora?",
                a: "Sim! Após a confirmação do pagamento, você recebe acesso imediato ao material completo por e-mail."
              },
              {
                q: "E se eu não gostar?",
                a: "Sem problemas! Você tem 7 dias de garantia incondicional. Devolvemos 100% do seu dinheiro se não ficar satisfeito."
              },
              {
                q: "O pagamento é seguro?",
                a: "Totalmente seguro! Utilizamos a plataforma Hotmart, líder em vendas digitais no Brasil, com criptografia de ponta."
              },
              {
                q: "O conteúdo é atualizado?",
                a: "Sim! Toda semana adicionamos novos conteúdos e atualizações com as últimas mudanças do DETRAN."
              }
            ].map((faq, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3 text-lg">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <Award className="w-20 h-20 mx-auto mb-8 opacity-90" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Não Perca Mais Tempo!
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">
            Por apenas <strong>R$ 9,99</strong> você terá acesso ao método que vai te aprovar de primeira!
          </p>
          
          <Button 
            size="lg" 
            onClick={handleBuy}
            className="bg-green-500 hover:bg-green-600 text-white text-lg md:text-2xl px-10 md:px-14 py-6 md:py-10 rounded-full shadow-2xl w-full max-w-md"
          >
            🚗 QUERO MINHA CNH AGORA!
          </Button>

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Acesso Vitalício</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Suporte Incluso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 bg-muted text-center">
        <div className="container mx-auto">
          <div className="flex justify-center gap-6 mb-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/512px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-6 opacity-60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/200px-Mastercard_2019_logo.svg.png" alt="Mastercard" className="h-6 opacity-60" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 opacity-60" />
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 CNH em 3 Dias. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Este produto não garante aprovação. Os resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
