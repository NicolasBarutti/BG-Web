"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Check, ChevronLeft, Star } from "lucide-react";

export default function AutomacaoPage() {
  const router = useRouter();

  // Função para ir ao cadastro com o plano escolhido
  function handleEscolherPlano(plano: string) {
    router.push(`/pages/cadastro?plano=${encodeURIComponent(plano)}`);
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white shadow-sm">
        <button onClick={() => window.history.back()} className="flex items-center gap-2 text-blue-700 font-semibold hover:underline">
          <ChevronLeft size={20} /> Voltar
        </button>
        <span className="font-extrabold text-2xl text-gray-900">
          <span className="text-blue-600">BG</span>Solutions
        </span>
      </div>

      {/* Hero */}
      <section className="flex flex-col md:flex-row gap-8 items-center justify-between py-16 px-8 max-w-7xl mx-auto">
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Automação de <span className="text-blue-600">WhatsApp</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8 max-w-lg">
            Transforme seu atendimento com IA avançada que converte visitantes em clientes automaticamente
          </p>
          <ul className="flex flex-wrap gap-6 text-lg text-gray-700 mb-8">
            <li className="flex items-center gap-2"><Check className="text-green-600" size={22} /> Setup em 24h</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={22} /> Sem mensalidade de setup</li>
            <li className="flex items-center gap-2"><Check className="text-green-600" size={22} /> Suporte especializado</li>
          </ul>
        </div>
        {/* Hero Video/Imagem */}
        <div className="flex-1 flex flex-col items-center">
          <div className="relative w-[420px] h-[270px] rounded-2xl overflow-hidden shadow-xl bg-white">
            {/* Substitua pelo seu vídeo ou imagem */}
            <Image
              src="/demo-automacao.jpg" // Salve a imagem no public/ ou troque para o caminho do vídeo
              alt="Demonstração Automação"
              fill
              className="object-cover"
            />
            {/* Overlay para vídeo */}
            <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl font-semibold backdrop-blur-sm">
              ▶ Ver Demonstração
            </button>
          </div>
          <span className="block mt-3 text-gray-600 text-base">Veja como nossa automação funciona na prática</span>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="bg-white py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-3">Por que escolher nossa automação?</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Nossa solução vai além de um chatbot simples – é uma IA completa que entende seu negócio</p>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-10">
          <CardIcon title="Economia de Tempo" icon="clock">
            Reduza em até 70% o tempo gasto com atendimento manual
          </CardIcon>
          <CardIcon title="Atendimento 24/7" icon="user">
            Seus clientes são atendidos a qualquer hora do dia
          </CardIcon>
          <CardIcon title="Aumento de Vendas" icon="arrow-up">
            Converta mais leads com respostas rápidas e precisas
          </CardIcon>
          <CardIcon title="Respostas Instantâneas" icon="zap">
            Resposta imediata aumenta satisfação do cliente
          </CardIcon>
        </div>
        {/* Cards horizontais com imagem */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <CardImg
            title="Interface Intuitiva"
            desc="Design limpo e fácil de usar para seus clientes"
            img="/demo-automacao.jpg"
          />
          <CardImg
            title="Relatórios Detalhados"
            desc="Acompanhe métricas e performance em tempo real"
            img="/dashboard-automacao.jpg"
          />
          <CardImg
            title="Integrações Poderosas"
            desc="Conecte com CRM, e-commerce e outras ferramentas"
            img="/integracao-automacao.jpg"
          />
        </div>
      </section>

      {/* Planos */}
      <section className="bg-slate-50 py-16 px-8">
        <h2 className="text-4xl font-bold text-center mb-3">Escolha seu plano</h2>
        <p className="text-xl text-center text-gray-600 mb-10">Preços transparentes, sem taxas ocultas</p>
        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto mb-10">
          <PlanoCard
            title="Plano Mensal"
            price="169,99"
            list={[
              "Chatbot personalizado para WhatsApp",
              "Respostas automáticas inteligentes",
              "Integração com CRM",
              "Relatórios básicos",
              "Suporte por email",
              "Até 1.000 mensagens/mês",
            ]}
            onClick={() => handleEscolherPlano("mensal")}
          />
          <PlanoCard
            title="Plano Trimestral"
            price="139,99"
            destaque
            list={[
              "Tudo do plano mensal",
              "Até 3.000 mensagens/mês",
              "Automações avançadas",
              "Integração com múltiplas plataformas",
              "Suporte prioritário",
              "Relatórios detalhados",
              "Backup automático",
            ]}
            onClick={() => handleEscolherPlano("trimestral")}
          />
          <PlanoCard
            title="Plano Anual"
            price="119,99"
            list={[
              "Tudo dos planos anteriores",
              "Mensagens ilimitadas",
              "IA avançada personalizada",
              "Suporte 24/7",
              "Consultoria mensal inclusa",
              "Integrações ilimitadas",
              "API personalizada",
              "Treinamento da equipe",
            ]}
            onClick={() => handleEscolherPlano("anual")}
          />
        </div>
        <p className="text-center text-gray-600">Precisa de algo personalizado? Entre em contato conosco</p>
        <div className="flex justify-center mt-3">
          <button className="px-5 py-2 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-700 hover:text-white font-semibold transition">
            Falar com Especialista
          </button>
        </div>
      </section>

      {/* CTA */}
   <section className="bg-blue-700 py-16 text-center text-white rounded-b-2xl">
  {/* NOVO BLOCO: Dúvida e botão WhatsApp */}
  <div className="flex flex-col items-center justify-center gap-2 mb-7">
    <span className="text-lg font-semibold">Não sabe qual plano escolher?</span>
    <span className="text-base text-white/80">Fale agora no WhatsApp e tire suas dúvidas com um especialista.</span>
  </div>
  <div className="flex justify-center">
    <a
      href="https://wa.me/SEUNUMERO?text=Tenho%20dúvidas%20sobre%20os%20planos%20de%20automação"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-blue-700 px-8 py-4 rounded-xl text-lg font-bold shadow hover:bg-blue-50 transition flex items-center gap-2"
    >
      <svg width={24} height={24} fill="none" viewBox="0 0 32 32"><path fill="#25D366" d="M16 .16A15.89 15.89 0 0 0 1.57 22.57l-1.5 5.47a2.2 2.2 0 0 0 2.73 2.72l5.46-1.49A15.89 15.89 0 1 0 16 .16Zm7.6 23.2c-.4 1.12-2.02 2.08-2.8 2.18-.75.1-1.7.14-2.72-.17-3.28-.95-5.3-3.72-5.47-3.89-.16-.17-1.29-1.71-1.29-3.27 0-1.56.82-2.31 1.1-2.63.28-.32.6-.4.8-.4.2 0 .4 0 .56.01.18.01.42-.07.66.5.25.6.85 2.04.92 2.2.08.17.13.37.02.6-.11.22-.17.36-.34.56-.17.2-.34.44-.48.59-.16.18-.33.37-.14.71.2.34.89 1.46 1.9 2.37 1.3 1.18 2.4 1.56 2.77 1.73.37.17.59.15.82-.09.23-.24.94-1.09 1.2-1.46.25-.36.5-.3.85-.18.35.12 2.12 1 2.48 1.19.36.18.6.27.68.42.09.17.09.97-.3 2.09Z"/></svg>
      Falar no WhatsApp
    </a>
  </div>
</section>

    </div>
  );
}

// Componentes auxiliares

function CardIcon({ title, icon, children }: any) {
  const icons: any = {
    clock: <svg className="w-8 h-8 mx-auto text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    user: <svg className="w-8 h-8 mx-auto text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4" /><path d="M5.5 21h13a2 2 0 0 0 2-2v-2a7 7 0 0 0-14 0v2a2 2 0 0 0 2 2z" /></svg>,
    "arrow-up": <svg className="w-8 h-8 mx-auto text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></svg>,
    zap: <svg className="w-8 h-8 mx-auto text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  };
  return (
    <div className="bg-slate-50 rounded-2xl shadow p-7 flex flex-col items-center hover:scale-105 transition">
      {icons[icon]}
      <h4 className="font-bold text-xl mt-3 mb-1 text-center">{title}</h4>
      <p className="text-gray-600 text-center">{children}</p>
    </div>
  );
}

function CardImg({ title, desc, img }: any) {
  return (
    <div className="bg-white rounded-2xl shadow flex flex-col items-start">
      <div className="w-full h-48 relative rounded-2xl overflow-hidden mb-4">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>
      <h4 className="font-bold text-lg px-4">{title}</h4>
      <p className="text-gray-600 px-4 pb-4">{desc}</p>
    </div>
  );
}

function PlanoCard({ title, price, list, onClick, destaque }: any) {
  return (
    <div className={`bg-white rounded-2xl shadow-xl px-8 py-8 min-w-[320px] flex-1 flex flex-col items-center border-2 relative ${destaque ? "border-blue-600 scale-105 z-10" : "border-transparent"}`}>
      {destaque && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold rounded-full px-4 py-1 text-xs shadow flex items-center gap-2">
          <Star size={16} /> Mais Popular
        </span>
      )}
      <h4 className="font-bold text-2xl mb-2">{title}</h4>
      <span className="text-4xl font-extrabold text-blue-700 mb-1">R$ {price} <span className="text-xl font-semibold text-gray-600">/mês</span></span>
      <ul className="text-gray-700 text-base mt-4 mb-6 flex-1 list-disc list-inside text-left">
        {list.map((item: any, i: number) => (
          <li key={i} className="flex items-center gap-2 mb-2">
            <Check className="text-green-600" size={18} /> {item}
          </li>
        ))}
      </ul>
      <button
        className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition mt-auto cursor-pointer`}
        onClick={onClick}
      >
        Escolher {title}
      </button>
    </div>
  );
}

