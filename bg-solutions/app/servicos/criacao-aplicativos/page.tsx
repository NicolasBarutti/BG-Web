"use client";
import {
  ChevronLeft,
  Smartphone,
  MonitorSmartphone,
  Code2,
  Rocket,
  TrendingUp,
  Users,
  CheckCircle,
  MessageCircle,
  Activity,
  LayoutDashboard,
  Star,
} from "lucide-react";

export default function CriacaoApp() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white shadow-sm">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-blue-700 font-semibold hover:underline"
        >
          <ChevronLeft size={20} /> Voltar ao site
        </button>
        <span className="font-extrabold text-2xl text-gray-900">
          <span className="text-blue-600">BG</span>Solutions
        </span>
      </div>

      {/* Banner */}
      <div className="bg-blue-700 text-white py-16 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Criação de Aplicativos Sob Medida
        </h1>
        <p className="text-2xl mb-8">
          Apps Android, iOS e WebApps — tecnologia, performance e design para transformar seu negócio!
        </p>
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-xl text-lg font-medium">
            <Smartphone className="text-yellow-400" size={22} />
            Mobile First
          </div>
          <div className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-xl text-lg font-medium">
            <MonitorSmartphone size={22} />
            Multiplataforma
          </div>
          <div className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-xl text-lg font-medium">
            <Rocket size={22} />
            Performance e Escalabilidade
          </div>
        </div>
      </div>

      {/* Como transformamos sua ideia em app */}
      <div className="py-16 bg-slate-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Como transformamos sua ideia em aplicativo?
        </h2>
        <p className="text-xl text-center mb-10 text-gray-600 max-w-3xl mx-auto">
          Desenvolvemos aplicativos completos, do planejamento ao lançamento, com acompanhamento total em cada etapa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <Activity size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Briefing & Estratégia</h3>
            <p className="text-gray-600 text-center">
              Entendemos o seu objetivo, público e necessidades para criar um projeto assertivo
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <Code2 size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Desenvolvimento Ágil</h3>
            <p className="text-gray-600 text-center">
              Utilizamos tecnologias modernas para apps rápidos, seguros e escaláveis
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <LayoutDashboard size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Design de Alto Impacto</h3>
            <p className="text-gray-600 text-center">
              Interface moderna, intuitiva e com experiência de usuário acima da média
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <TrendingUp size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Lançamento & Suporte</h3>
            <p className="text-gray-600 text-center">
              Publicação nas lojas, acompanhamento de métricas e suporte pós-lançamento
            </p>
          </div>
        </div>
      </div>

      {/* Planos de Desenvolvimento */}
      <div className="py-16 bg-slate-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Nossos Planos de Desenvolvimento</h2>
        <p className="text-xl text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Escolha a solução ideal para seu projeto, desde MVP até apps completos e personalizados.
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-center">
          {/* MVP Express */}
          <div className="bg-white shadow rounded-2xl p-8 flex-1 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">MVP Express</h3>
            <p className="text-blue-700 text-4xl font-bold mb-1">R$ 2.997 <span className="text-lg font-medium text-gray-600">/ projeto</span></p>
            <p className="text-gray-600 text-center mb-4">
              Para testar sua ideia de app em poucos dias, com o essencial para validar no mercado.
            </p>
            <ul className="space-y-2 text-gray-700 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Desenvolvimento rápido (até 15 dias)</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> App Android/Web</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Layout profissional</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Publicação Play Store</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte por 15 dias</li>
            </ul>
            <button className="mt-6 bg-gray-900 text-white rounded-xl px-8 py-3 font-bold flex items-center gap-2 hover:bg-gray-800">
              <MessageCircle size={22} /> Contratar Agora
            </button>
          </div>

          {/* App Premium */}
          <div className="bg-white shadow-2xl border-4 border-blue-600 rounded-2xl p-8 flex-1 flex flex-col items-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow">Mais Popular</span>
            <h3 className="text-2xl font-bold mb-2">App Premium</h3>
            <p className="text-blue-700 text-4xl font-bold mb-1">R$ 6.997 <span className="text-lg font-medium text-gray-600">/ projeto</span></p>
            <p className="text-gray-600 text-center mb-4">
              Ideal para quem quer um app completo, moderno e pronto para escalar.
            </p>
            <ul className="space-y-2 text-gray-700 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Android, iOS e WebApp</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Design exclusivo</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Backend integrado</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Painel de gestão incluso</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Integrações com APIs e pagamentos</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte por 60 dias</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Publicação nas lojas</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white rounded-xl px-8 py-3 font-bold flex items-center gap-2 hover:bg-blue-700">
              <MessageCircle size={22} /> Contratar Agora
            </button>
          </div>

          {/* App Enterprise */}
          <div className="bg-white shadow rounded-2xl p-8 flex-1 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">App Enterprise</h3>
            <p className="text-blue-700 text-4xl font-bold mb-1">R$ 14.997 <span className="text-lg font-medium text-gray-600">/ projeto</span></p>
            <p className="text-gray-600 text-center mb-4">
              Solução robusta para grandes empresas e projetos inovadores.
            </p>
            <ul className="space-y-2 text-gray-700 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Multiplataforma avançado</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Infraestrutura cloud</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte dedicado</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Integrações customizadas</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Relatórios e analytics</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Treinamento para equipes</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> SLA garantido</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte 90 dias pós entrega</li>
            </ul>
            <button className="mt-6 bg-gray-900 text-white rounded-xl px-8 py-3 font-bold flex items-center gap-2 hover:bg-gray-800">
              <MessageCircle size={22} /> Contratar Agora
            </button>
          </div>
        </div>
      </div>

      {/* Casos de Sucesso */}
      <div className="py-16 bg-slate-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Casos de Sucesso</h2>
        <p className="text-xl text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Veja como nossos apps geram resultados para negócios de verdade:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col items-center">
            <Smartphone size={54} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">App de Delivery</h3>
            <p className="text-gray-600 text-center">
              +100 mil downloads e integração completa com sistema de pedidos, entregas e pagamentos.
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col items-center">
            <Star size={54} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Plataforma Educacional</h3>
            <p className="text-gray-600 text-center">
              Ensino a distância acessível em todo o Brasil, com apps nativos para alunos e professores.
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col items-center">
            <LayoutDashboard size={54} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Dashboard Corporativo</h3>
            <p className="text-gray-600 text-center">
              Gestão e visualização de dados em tempo real com integração multiplataforma.
            </p>
          </div>
        </div>
      </div>

      {/* Consultoria personalizada para Apps */}
      <div className="py-16 bg-blue-700 px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-4">Tem um projeto diferente?</h2>
        <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
          Criamos soluções 100% sob medida. Apps exclusivos, integrações, automações, seja o que for: o desafio é nosso!
        </p>
        <div className="max-w-lg mx-auto bg-blue-600/70 rounded-2xl p-8 text-center shadow">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-2">
            🚀 Solicite um Orçamento Personalizado
          </div>
          <p className="mb-6 text-lg">
            Conte sua ideia e receba uma proposta detalhada, sem compromisso!
          </p>
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl text-xl"
          >
            <MessageCircle size={22} /> Falar no WhatsApp
          </a>
          <div className="mt-2 text-sm text-white/70 flex items-center gap-1 justify-center">
            <span>📱</span> Atendimento rápido e personalizado
          </div>
        </div>
      </div>
    </div>
  );
}