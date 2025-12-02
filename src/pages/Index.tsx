import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Video, TrendingUp, Shield, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContainerScroll } from "@/components/ui/container-scroll";
import header1Img from "@/assets/header1.png";
import reelsImg from "@/assets/print_reels.png";
import metricasImg from "@/assets/metricas.png";
const Index = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-x-clip py-12 md:py-20">
        <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
          {/* Background Image - Right Top Corner */}
          <div className="absolute top-0 right-0 w-[120%] md:w-2/3 h-full">
            <img 
              src={header1Img} 
              alt="Métricas de visualizações - 146.244.155 visualizações" 
              className="w-full h-full object-cover object-right-top" 
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-20% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent via-90% to-transparent"></div>

            {/* Content Over Image */}
            <div className="relative z-10 max-w-2xl container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Aprenda a criar <span className="text-primary">vídeos virais</span> com IA e ganhe em <span className="text-primary">dólar</span> $
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Aprenda a criar vídeos ultra-realistas com as IAs mais avançadas do mercado. A mesma estratégia que gerou <span className="text-primary font-semibold">168 milhões de visualizações</span>.
              </p>

              <div className="flex gap-3 mb-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 shadow-lg" onClick={() => window.location.href = 'https://pay.kirvano.com/e6d73d44-a8cc-4539-b24a-4bb7e688c42e'}>
                  Começar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary" onClick={scrollToCTA}>
                  Ver Mais
                </Button>
              </div>

              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-bold text-foreground">168M+</div>
                  <div className="text-xs text-muted-foreground">Visualizações</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">10</div>
                  <div className="text-xs text-muted-foreground">E-books</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-xs text-muted-foreground">Prático</div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/y95ZsCes6A0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Star className="w-4 h-4 mr-1 fill-primary" />
                ESTRATÉGIA VALIDADA
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                168 Milhões de Visualizações no Instagram em um único vídeo!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Todo o conhecimento do perfil <span className="text-primary font-bold">@vlogsensato</span> que conquistou resultados extraordinários criando vídeos com IA está neste guia completo.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Video className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Estratégia Completa de Roteiro</div>
                    <div className="text-sm text-muted-foreground">Aprenda os prompts exatos usados</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Técnicas de Viralização</div>
                    <div className="text-sm text-muted-foreground">Distribuição e otimização comprovadas</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Veo 3 e Sora 2</div>
                    <div className="text-sm text-muted-foreground">Domine as IAs mais avançadas</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <img src={reelsImg} alt="Print do Reels com 168 milhões de visualizações" className="w-full max-w-xs h-auto rounded-lg shadow-lg mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Aprenda as <span className="text-primary">estratégias</span> e habilidades que me fizeram ter múltiplas <span className="text-primary">fontes de renda</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Quando entrei no digital eu não fazia ideia do que estava fazendo. Fui aprendendo na prática, tentando, errando e estudando até entender o que realmente funciona. Com o tempo descobri que usar IA para criar personagens que conectam com a audiência é o que torna qualquer projeto mais sólido e lucrativo.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mt-4">
                O "Vlog Viral com IA" nasceu dessa experiência. Nada de promessas fáceis, apenas o que realmente funciona. Você vai aprender estratégias aplicáveis, vai precisar de dedicação, e vai receber a base necessária para começar a trabalhar de casa criando conteúdo e personagens digitais com inteligência artificial.
              </p>
            </div>
            <div className="relative">
              <img 
                src={metricasImg} 
                alt="Criadores de conteúdo digital com IA" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              O que você vai aprender
            </h2>
            <p className="text-muted-foreground">
              8 E-books completos do básico ao avançado
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Module Cards */}
            {[{
            icon: "✓",
            text: "Fundamentos de Vídeos com IA",
            color: "primary"
          }, {
            icon: "✓",
            text: "Prompts Avançados para Veo 3",
            color: "primary"
          }, {
            icon: "✓",
            text: "Domínio Completo do Sora 2",
            color: "primary"
          }, {
            icon: "✓",
            text: "Consistência de Personagem (Exclusivo)",
            color: "accent"
          }, {
            icon: "✓",
            text: "Estratégia de Viralização 168M",
            color: "accent"
          }, {
            icon: "✓",
            text: "Templates de Prompts Prontos",
            color: "primary"
          }, {
            icon: "✓",
            text: "Otimização para Redes Sociais",
            color: "primary"
          }, {
            icon: "✓",
            text: "Monetização de Conteúdo",
            color: "accent"
          }].map((item, i) => <Card key={i} className="p-4 bg-card border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.color === 'accent' ? 'bg-accent/20' : 'bg-primary/20'} flex items-center justify-center flex-shrink-0`}>
                    <Check className={`w-5 h-5 ${item.color === 'accent' ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cta-section" className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Garanta sua vaga hoje
            </h2>
            <p className="text-muted-foreground text-sm">Oferta por tempo limitado</p>
          </div>

          <Card className="p-6 md:p-10 bg-card/50 backdrop-blur-sm border-border">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left - Price */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <div className="text-muted-foreground text-sm mb-1">De <span className="line-through">R$ 99,90</span> por</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-accent">R$ 49,90</span>
                  </div>
                  <div className="text-accent/80 text-sm font-medium mt-1">50% OFF</div>
                </div>

                <div className="mb-3 text-accent text-xs font-bold">
                  PAGAMENTO ÚNICO!
                </div>

                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 shadow-lg text-lg mb-4" onClick={() => window.location.href = 'https://pay.kirvano.com/e6d73d44-a8cc-4539-b24a-4bb7e688c42e'}>
                  Comprar Agora
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Garantia de 7 dias</span>
                </div>
              </div>

              <div className="space-y-3">
                {["8 E-books Completos", "Estratégia dos 168M de Views", "Técnica Exclusiva de Consistência", "Templates de Prompts", "Acesso Vitalício", "Atualizações Gratuitas"].map((feature, i) => <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>)}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                O que são Veo 3 e Sora 2?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Veo 3 e Sora 2 são as mais avançadas inteligências artificiais para criação de vídeos ultra-realistas. Neste guia, você aprenderá a dominar ambas as ferramentas do zero ao avançado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Preciso ter experiência prévia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não! O guia começa do absoluto básico e te leva até técnicas avançadas. Mesmo que você nunca tenha criado um vídeo, conseguirá acompanhar e aplicar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Como terei acesso ao material?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Imediatamente após a compra, você receberá um email com acesso à área de membros onde estão todos os e-books e materiais complementares. O acesso é vitalício.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                A estratégia de 168M visualizações realmente funciona?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Toda a estratégia está documentada e foi aplicada pelo perfil @vlogsensato. Você terá acesso aos roteiros, prompts e técnicas de distribuição exatas que geraram esses resultados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Existe garantia?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece agora sua jornada
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aprenda a criar vídeos ultra-realistas com IA e domine as técnicas que geraram 168 milhões de visualizações.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 shadow-lg" onClick={() => window.location.href = 'https://pay.kirvano.com/e6d73d44-a8cc-4539-b24a-4bb7e688c42e'}>
            COMEÇAR AGORA
            <Sparkles className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 Vlog Viral com IA. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;