"use client";
import { ChevronLeft, Star, LineChart, Brain, Target, TrendingUp, Users, CheckCircle, MessageCircle } from "lucide-react";

export default function ConsultoriaEstrategia() {
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
          Consultoria e Estratégia Digital
        </h1>
        <p className="text-2xl mb-8">
          Transforme sua visão em realidade com orientação especializada para acelerar o crescimento do seu negócio
        </p>
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-xl text-lg font-medium">
            <Star className="text-yellow-400" size={22} />
            Estratégia Personalizada
          </div>
          <div className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-xl text-lg font-medium">
            <LineChart size={22} />
            Resultados Comprovados
          </div>
          <div className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-xl text-lg font-medium">
            <TrendingUp size={22} />
            ROI Garantido
          </div>
        </div>
      </div>

      {/* Como transformamos seu negócio */}
      <div className="py-16 bg-slate-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Como podemos transformar seu negócio?
        </h2>
        <p className="text-xl text-center mb-10 text-gray-600 max-w-3xl mx-auto">
          Nossa consultoria vai além de conselhos. Criamos estratégias práticas e acompanhamos a implementação para garantir resultados reais.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <Brain size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Análise Estratégica</h3>
            <p className="text-gray-600 text-center">
              Diagnóstico completo dos processos e identificação de oportunidades
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <Target size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Planejamento Digital</h3>
            <p className="text-gray-600 text-center">
              Roadmap personalizado para transformação digital da empresa
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <TrendingUp size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Otimização de Processos</h3>
            <p className="text-gray-600 text-center">
              Melhoria contínua e automação de fluxos de trabalho
            </p>
          </div>
          <div className="bg-white shadow rounded-2xl p-8 flex flex-col items-center">
            <Users size={48} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Capacitação de Equipes</h3>
            <p className="text-gray-600 text-center">
              Treinamento e mentoria para maximizar resultados
            </p>
          </div>
        </div>
      </div>

      {/* Planos de Consultoria */}
      <div className="py-16 bg-slate-50 px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Planos de Consultoria</h2>
        <p className="text-xl text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Escolha o nível de acompanhamento ideal para suas necessidades
        </p>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto justify-center">
          {/* Básico */}
          <div className="bg-white shadow rounded-2xl p-8 flex-1 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">Consultoria Básica</h3>
            <p className="text-blue-700 text-4xl font-bold mb-1">R$ 497 <span className="text-lg font-medium text-gray-600">/ sessão única</span></p>
            <p className="text-gray-600 text-center mb-4">
              Ideal para esclarecer dúvidas pontuais e direcionamentos iniciais
            </p>
            <ul className="space-y-2 text-gray-700 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> 1 sessão de 2 horas</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análise inicial do negócio</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Identificação de oportunidades</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Plano de ação básico</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Relatório executivo</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte por 7 dias</li>
            </ul>
            <button className="mt-6 bg-gray-900 text-white rounded-xl px-8 py-3 font-bold flex items-center gap-2 hover:bg-gray-800">
              <MessageCircle size={22} /> Contratar Agora
            </button>
          </div>

          {/* Estratégia Completa */}
          <div className="bg-white shadow-2xl border-4 border-blue-600 rounded-2xl p-8 flex-1 flex flex-col items-center relative">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow">Mais Popular</span>
            <h3 className="text-2xl font-bold mb-2">Estratégia Completa</h3>
            <p className="text-blue-700 text-4xl font-bold mb-1">R$ 1.497 <span className="text-lg font-medium text-gray-600">/ pacote mensal</span></p>
            <p className="text-gray-600 text-center mb-4">
              Acompanhamento completo para transformação digital estruturada
            </p>
            <ul className="space-y-2 text-gray-700 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> 4 sessões de consultoria</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Diagnóstico completo</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Planejamento estratégico detalhado</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Roadmap de implementação</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análise de ROI e métricas</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Treinamento da equipe</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte por 30 dias</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Revisões e ajustes inclusos</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white rounded-xl px-8 py-3 font-bold flex items-center gap-2 hover:bg-blue-700">
              <MessageCircle size={22} /> Contratar Agora
            </button>
          </div>

          {/* Mentoria Executiva */}
          <div className="bg-white shadow rounded-2xl p-8 flex-1 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2">Mentoria Executiva</h3>
            <p className="text-blue-700 text-4xl font-bold mb-1">R$ 2.997 <span className="text-lg font-medium text-gray-600">/ pacote trimestral</span></p>
            <p className="text-gray-600 text-center mb-4">
              Acompanhamento contínuo com foco em resultados e crescimento
            </p>
            <ul className="space-y-2 text-gray-700 text-left w-full max-w-xs">
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> 12 sessões distribuídas</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análise profunda e diagnóstico</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Estratégia de longo prazo</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Implementação acompanhada</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Otimização contínua</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Capacitação completa da equipe</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Análise de concorrência</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Relatórios mensais de progresso</li>
              <li className="flex items-center gap-2"><CheckCircle className="text-green-500" /> Suporte ilimitado por 90 dias</li>
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
          Veja como nossa consultoria transformou negócios reais
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col items-center">
            <LineChart size={54} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Transformação Digital - E-commerce</h3>
            <p className="text-gray-600 text-center">
              Aumento de 300% nas vendas online através de estratégia integrada
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col items-center">
            <TrendingUp size={54} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Otimização de Processos - Clínica</h3>
            <p className="text-gray-600 text-center">
              Redução de 60% no tempo de atendimento com automação
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl p-10 flex flex-col items-center">
            <Star size={54} className="text-blue-600 mb-3" />
            <h3 className="font-bold text-2xl mb-1">Estratégia Digital - Indústria</h3>
            <p className="text-gray-600 text-center">
              Implementação de ERP que gerou economia de R$ 500k/ano
            </p>
          </div>
        </div>
      </div>

      {/* Consultoria personalizada */}
      <div className="py-16 bg-blue-700 px-4 text-white">
        <h2 className="text-4xl font-bold text-center mb-4">Precisa de algo mais específico?</h2>
        <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
          Criamos planos de consultoria 100% personalizados para desafios únicos. Cada empresa tem suas particularidades e merece uma estratégia sob medida.
        </p>
        <div className="max-w-lg mx-auto bg-blue-600/70 rounded-2xl p-8 text-center shadow">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold mb-2">
            🎯 Consultoria Personalizada
          </div>
          <p className="mb-6 text-lg">
            Desenvolvemos uma proposta única baseada nos seus objetivos específicos, orçamento disponível e prazo para implementação.
          </p>
          <a
            href="https://wa.me/SEUNUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-xl text-xl"
          >
            <MessageCircle size={22} /> Chamar no WhatsApp
          </a>
          <div className="mt-2 text-sm text-white/70 flex items-center gap-1 justify-center">
            <span>📱</span> Resposta rápida garantida
          </div>
        </div>
      </div>
    </div>
  );
}
