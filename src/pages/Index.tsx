import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Video, TrendingUp, Shield, Star, BookOpen, Zap, Brain, Target, FileText, Share2, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContainerScroll } from "@/components/ui/container-scroll";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import header1Img from "@/assets/header1.webp";
import lurdinha2 from "@/assets/lurdinha2.webp";
import metricasImg from "@/assets/metricas.jpg";
import bgJpg from "@/assets/bgjpg.jpg";

const BentoGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`grid w-full auto-rows-[16rem] grid-cols-3 gap-4 ${className || ''}`}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: React.ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl border border-gray-800 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu ${className}`}
    style={{ backgroundColor: '#0F1114' }}
  >
    <div className="absolute inset-0" style={{ backgroundColor: '#0F1114', zIndex: 1 }}></div>
    <div style={{ position: 'relative', zIndex: 2 }}>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10" style={{ position: 'relative', zIndex: 3 }}>
      <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>
      <p className="max-w-lg text-gray-400">{description}</p>
    </div>

    <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <span className="ml-2">→</span>
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

const Index = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background text-foreground relative">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={bgJpg} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative overflow-x-clip">
        <div className="relative min-h-[600px] md:min-h-[700px] flex items-center">
          {/* Background Image - Right Top Corner */}
          <div className="absolute top-0 right-0 w-[120%] md:w-2/3 h-full">
            <img 
              src={header1Img} 
              alt="Métricas de visualizações - 146.244.155 visualizações" 
              className="w-full h-full object-cover object-right-top" 
            />
          </div>

          {/* Mobile Hero Text Overlay */}
          <div className="md:hidden absolute top-0 right-0 w-full h-full flex flex-col justify-start items-end p-4 pt-16 text-right">
            <div className="max-w-[200px]">
              <h1 className="text-3xl font-bold leading-tight text-white mb-2">
                Aprenda a criar vídeos <span className="text-[#BB33FF]">virais</span> com IA e ganhe em <span className="text-[#BB33FF]">dólar</span> $
              </h1>
              <p className="text-sm text-muted-foreground text-white">
                Aprenda a criar vídeos ultra-realistas com as IAs mais avançadas do mercado. A mesma estratégia que gerou <span className="font-semibold text-yellow-400">168 milhões de visualizações</span>.
              </p>
            </div>
          </div>

            {/* Content Over Image */}
            <div className="relative z-10 max-w-xl container mx-auto px-4 mr-auto ml-4 md:ml-8 hidden md:block">
              <div className="mb-6">
                <TypewriterEffect 
                  words={[
                    { text: "Aprenda" },
                    { text: "a" },
                    { text: "criar" },
                    { text: "vídeos", className: "text-[#BB33FF]" },
                    { text: "virais", className: "text-[#BB33FF]" },
                    { text: "com" },
                    { text: "IA" },
                    { text: "e" },
                    { text: "ganhe" },
                    { text: "em" },
                    { text: "dólar", className: "text-[#BB33FF]" },
                    { text: "$", className: "text-white" }
                  ]}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-left"
                  cursorClassName="bg-[#BB33FF]"
                />
              </div>
              
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Aprenda a criar vídeos ultra-realistas com as IAs mais avançadas do mercado. A mesma estratégia que gerou <span className="font-semibold text-white">168 milhões de visualizações</span>.
              </p>

              <div className="flex gap-3 mb-8">
                <InteractiveHoverButton 
                  text="Começar Agora" 
                  className="bg-gradient-to-r from-[#ba15c5] to-[#4586ff] text-white px-8 shadow-lg border-transparent hover:from-[#1afb65] hover:to-[#0dd0c6] hover:text-white w-auto min-w-40 flex justify-center transition-all duration-300" style={{ boxShadow: '0 0 20px rgba(186, 21, 197, 0.5)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(26, 251, 101, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(186, 21, 197, 0.5)'}
                  onClick={() => window.location.href = 'https://pay.kirvano.com/e6d73d44-a8cc-4539-b24a-4bb7e688c42e'}
                />
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full" onClick={scrollToCTA}>
                  Ver Mais
                </Button>
              </div>

              {/* Mobile Stats */}
              <div className="md:hidden absolute bottom-8 left-4 right-4">
                <div className="flex gap-6 justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">168M+</div>
                    <div className="text-xs text-white">Visualizações</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">10</div>
                    <div className="text-xs text-white">E-books</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-white">Prático</div>
                  </div>
                </div>
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

      {/* Mobile Stats */}
      <div className="md:hidden absolute top-[550px] left-4 right-4 z-20">
        <div className="flex gap-6 justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">168M+</div>
            <div className="text-xs text-white">Visualizações</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10</div>
            <div className="text-xs text-white">E-books</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-white">Prático</div>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <section className="py-8 md:py-12 px-4 relative z-50">
        <div className="container mx-auto max-w-5xl">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl relative z-50">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/JRJUp__RkiE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full relative z-50"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:block">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Star className="w-4 h-4 mr-1 fill-primary" />
                ESTRATÉGIA VALIDADA
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span style={{ color: '#BB33FF' }}>168 Milhões</span> de Visualizações no <span style={{ color: '#BB33FF' }}>Instagram</span> em um único vídeo!
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Todo o conhecimento do perfil <a href="https://www.instagram.com/vlogsensato/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: '#F0D91E' }}>@vlogsensato</a> que conquistou resultados extraordinários criando vídeos com IA está neste guia completo.
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
            <div className="md:hidden relative w-full h-full min-h-[700px] order-1">
              <img 
                src={lurdinha2} 
                alt="Lurdinha" 
                className="absolute inset-0 w-full h-full object-cover scale-350 top-40"
              />
              {/* Side Gradient Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
              </div>
              {/* Mobile Text Overlay */}
              <div className="absolute top-2 left-0 right-0 max-w-[300px] mx-auto text-center relative z-10">
                <h2 className="text-2xl font-bold mb-3 text-white">
                  <span style={{ color: '#BB33FF' }}>168 Milhões</span> de Visualizações no <span style={{ color: '#BB33FF' }}>Instagram</span>
                </h2>
                <p className="text-sm text-white mb-4">
                  Todo o conhecimento do perfil <a href="https://www.instagram.com/vlogsensato/" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline" style={{ color: '#F0D91E' }}>@vlogsensato</a> que conquistou resultados extraordinários criando vídeos com IA está neste guia completo.
                </p>
              </div>
            </div>
            <div className="hidden md:block relative w-full h-full min-h-[500px]">
              <img 
                src={lurdinha2} 
                alt="Lurdinha" 
                className="absolute inset-0 w-full h-full object-contain scale-150"
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
              10 E-books completos do básico ao avançado
            </p>
          </div>

          <BentoGrid className="max-w-6xl mx-auto">
            <BentoCard
              name="Fundamentos de Vídeos com IA"
              className="col-span-3 md:col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-10"></div>}
              Icon={BookOpen}
              description="Aprenda os conceitos básicos de criação de vídeos com inteligência artificial do zero."
              href="#cta-section"
              cta="Aprender mais"
            />
            <BentoCard
              name="Prompts Avançados para Veo 3"
              className="col-span-3 md:col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-10"></div>}
              Icon={Zap}
              description="Domine os prompts mais avançados para extrair o máximo do Veo 3."
              href="#cta-section"
              cta="Aprender mais"
            />
            <BentoCard
              name="Domínio Completo do Sora 2"
              className="col-span-3 md:col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 opacity-10"></div>}
              Icon={Brain}
              description="Torne-se mestre na ferramenta mais poderosa de criação de vídeos com IA."
              href="#cta-section"
              cta="Aprender mais"
            />
            <BentoCard
              name="Consistência de Personagem (Exclusivo)"
              className="col-span-3 md:col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 opacity-10"></div>}
              Icon={Target}
              description="Técnica exclusiva para manter personagens consistentes em todos os vídeos."
              href="#cta-section"
              cta="Aprender mais"
            />
            <BentoCard
              name="Templates de Prompts Prontos"
              className="col-span-3 md:col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800 opacity-10"></div>}
              Icon={FileText}
              description="Coleção de templates prontos para usar imediatamente em seus projetos."
              href="#cta-section"
              cta="Aprender mais"
            />
            <BentoCard
              name="Monetização de Conteúdo"
              className="col-span-3 md:col-span-1"
              background={<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-10"></div>}
              Icon={DollarSign}
              description="Transforme seus vídeos em fontes de renda com estratégias comprovadas."
              href="#cta-section"
              cta="Aprender mais"
            />
          </BentoGrid>
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

      {/* Pricing Section */}
      <section id="cta-section" className="py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Garanta sua vaga hoje
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Oferta por tempo limitado. Aprenda a criar vídeos ultra-realistas com IA e domine as técnicas que geraram 168 milhões de visualizações.
              </p>
            </div>
            
            {/* Right - Pricing Card */}
            <div className="bg-[#0F1114] rounded-2xl p-8 shadow-2xl border border-gray-800 text-white">
              <div className="text-center mb-6">
                <Badge className="mb-4 bg-purple-400/20 text-purple-400 border-purple-400/30">
                  <Star className="w-4 h-4 mr-1 fill-purple-400" />
                  VAGAS LIMITADAS
                </Badge>
                <div className="text-purple-400 text-sm mb-1">De <span className="line-through">R$ 99,90</span> por</div>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-white">R$ 49,90</span>
                </div>
                <div className="text-purple-400 text-sm font-bold mt-2">10% de desconto no Pix</div>
              </div>

              <div className="mb-6 text-white text-sm font-bold bg-gray-700 rounded-full px-6 py-2 text-center mx-auto w-fit">
                PAGAMENTO ÚNICO!
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#0F1114]" />
                  </div>
                  <span className="text-gray-300">10 E-books Completos</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#0F1114]" />
                  </div>
                  <span className="text-gray-300">Estratégia dos 168M de Views</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#0F1114]" />
                  </div>
                  <span className="text-gray-300">Técnica Exclusiva de Consistência</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#0F1114]" />
                  </div>
                  <span className="text-gray-300">Acesso Vitalício</span>
                </div>
              </div>

              <div className="mb-4 text-center">
                <div className="text-purple-400 text-sm font-bold">
                  
                </div>
              </div>

              <InteractiveHoverButton 
                text="COMPRAR AGORA" 
                className="bg-gradient-to-r from-[#ba15c5] to-[#4586ff] text-white py-4 shadow-lg text-lg font-bold border-transparent hover:from-[#1afb65] hover:to-[#0dd0c6] hover:text-white w-full transition-all duration-300" style={{ boxShadow: '0 0 20px rgba(186, 21, 197, 0.5)' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(26, 251, 101, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 20px rgba(186, 21, 197, 0.5)'}
                onClick={() => window.location.href = 'https://pay.kirvano.com/e6d73d44-a8cc-4539-b24a-4bb7e688c42e'}
              />

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-6">
                <Shield className="w-4 h-4" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
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
                Imediatamente após a compra, você receberá um email com acesso à área de membros onde estão todos os e-books e materiais complementares. O acesso é vitalício. Além disso, você também receberá atualizações periódicas com novos conteúdos e recursos para ajudá-lo a melhorar suas habilidades.
              </AccordionContent>
            </AccordionItem>

            
            <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-left hover:no-underline">
                Consigo ganhar dinheiro com inteligência artificial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Sim é possível ganhar dinheiro com IA, seja com monetização do tiktok, youtube, fazendo parcerias pagas e publicidades para empresas no instagram, ou até mesmo prestando serviços de criação de vídeos personalizados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
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

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div> 2024 Vlog Viral com IA. Todos os direitos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
};
export default Index;