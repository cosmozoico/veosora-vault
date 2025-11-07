import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Video, TrendingUp, Shield, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(258,90%,66%,0.1),transparent)]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-bold px-4 py-2">
            ⚡ BLACK FRIDAY - OFERTA EXCLUSIVA
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Domine <span className="text-primary">Veo 3 e Sora 2</span> e Crie Vídeos Ultra-Realistas Que <span className="text-accent">Viralizarão!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
            A Estratégia de <span className="text-primary font-bold">168 Milhões de Visualizações</span> Revelada. Do Básico ao Avançado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-glow"
              onClick={scrollToCTA}
            >
              QUERO MEU GUIA BLACK FRIDAY
              <Sparkles className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10"
              onClick={scrollToCTA}
            >
              Ver Conteúdo Completo
            </Button>
          </div>

          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">168M+</div>
              <div className="text-sm text-muted-foreground">Visualizações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Módulos Completos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground">IAs de Ponta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Star className="w-4 h-4 mr-1 fill-primary" />
                ESTRATÉGIA VALIDADA
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                168 Milhões de Visualizações no Instagram
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
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <div className="text-6xl font-bold text-primary mb-2">168M</div>
                <div className="text-xl font-semibold mb-4">Visualizações Comprovadas</div>
                <p className="text-muted-foreground">
                  Esta não é teoria. São resultados reais de um criador que dominou a arte de criar vídeos ultra-realistas com IA.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tudo Que Você Vai <span className="text-primary">Receber</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Coleção Completa de E-books do Básico ao Avançado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card hover:shadow-glow transition-all duration-300 border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Fundamentos de Vídeos com IA</h3>
              <p className="text-muted-foreground mb-4">
                Comece do zero e entenda como funcionam as principais ferramentas de criação de vídeos com Inteligência Artificial.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Introdução ao Veo 3 e Sora 2</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Primeiros passos práticos</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-glow transition-all duration-300 border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Prompts Avançados</h3>
              <p className="text-muted-foreground mb-4">
                Aprenda a criar prompts que geram vídeos ultra-realistas. Os mesmos usados para alcançar 168M de views.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Templates de prompts comprovados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Técnicas de otimização</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-glow transition-all duration-300 border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Edição e Pós-Produção</h3>
              <p className="text-muted-foreground mb-4">
                Transforme vídeos gerados por IA em conteúdo profissional com técnicas avançadas de edição.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Ferramentas de edição recomendadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Fluxo de trabalho otimizado</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-card hover:shadow-glow transition-all duration-300 border-border">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-accent fill-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">O Segredo da Viralização</h3>
              <p className="text-muted-foreground mb-4">
                A estratégia completa por trás das 168 milhões de visualizações. Roteiro, distribuição e otimização.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Caso de sucesso detalhado</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  <span className="text-sm">Estratégias de distribuição</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cta-section" className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              🔥 OFERTA BLACK FRIDAY
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Oferta Exclusiva <span className="text-accent">Hoje</span>
            </h2>
          </div>

          <Card className="p-8 md:p-12 bg-card border-primary/30 shadow-glow">
            <div className="text-center mb-8">
              <div className="text-muted-foreground line-through text-2xl mb-2">De R$ 497,00</div>
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">12x R$ 9,70</div>
              <div className="text-xl text-muted-foreground">ou R$ 97,00 à vista</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>4 E-books Completos (Básico ao Avançado)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Estratégia dos 168M de Visualizações</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Templates de Prompts Exclusivos</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Acesso Vitalício</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Atualizações Gratuitas</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xl py-8 shadow-glow"
            >
              GARANTIR MINHA VAGA AGORA
              <Sparkles className="ml-2" />
            </Button>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias ou seu dinheiro de volta</span>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-accent font-semibold">⏰ Oferta válida apenas durante a Black Friday</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Perguntas <span className="text-primary">Frequentes</span>
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
      <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Não Deixe Essa <span className="text-accent">Oportunidade</span> Passar
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A Black Friday é sua chance de dominar a criação de vídeos com IA pelo menor preço do ano. Comece hoje mesmo sua jornada rumo à viralização.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-8 shadow-glow"
            onClick={scrollToCTA}
          >
            COMEÇAR AGORA
            <Sparkles className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>© 2024 Guia Prático de Vídeos com IA. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
