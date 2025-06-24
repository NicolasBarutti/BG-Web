"use client";

import { ChevronLeft, Star, Code, Palette, Monitor, Search, Zap, Globe, CheckCircle } from "lucide-react";

export default function CriacaoSites() {
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

      {/* HERO */}
      <div className="py-20 bg-blue-700 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Criação de Sites e Landing Pages</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Transforme sua presença digital com sites profissionais que convertem visitantes em clientes
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-full text-lg font-medium">
            <Star size={20} className="text-yellow-300" /> Design Personalizado
          </span>
          <span className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-full text-lg font-medium">
            <Code size={20} /> Tecnologia Moderna
          </span>
          <span className="flex items-center gap-2 bg-blue-600/80 px-5 py-2 rounded-full text-lg font-medium">
            <Palette size={20} /> Identidade Visual
          </span>
        </div>
      </div>

      {/* POR QUE ESCOLHER */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Por que escolher nossos sites?
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Desenvolvemos sites que não apenas impressionam visualmente, mas também geram resultados reais para o seu negócio
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <Monitor size={32} className="text-blue-600" />
            </span>
            <h4 className="font-bold text-xl mb-2 text-center">Design Responsivo</h4>
            <p className="text-gray-600 text-center text-lg">
              Sites que funcionam perfeitamente em todos os dispositivos
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <Search size={32} className="text-blue-600" />
            </span>
            <h4 className="font-bold text-xl mb-2 text-center">SEO Otimizado</h4>
            <p className="text-gray-600 text-center text-lg">
              Estrutura otimizada para aparecer no Google
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <Zap size={32} className="text-blue-600" />
            </span>
            <h4 className="font-bold text-xl mb-2 text-center">Alta Performance</h4>
            <p className="text-gray-600 text-center text-lg">
              Carregamento ultra-rápido para melhor experiência
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-center">
            <span className="bg-blue-100 p-4 rounded-full mb-4">
              <Globe size={32} className="text-blue-600" />
            </span>
            <h4 className="font-bold text-xl mb-2 text-center">Domínio Profissional</h4>
            <p className="text-gray-600 text-center text-lg">
              Configuração completa de domínio e hospedagem
            </p>
          </div>
        </div>
      </section>

      {/* EXEMPLOS DE TRABALHO */}
      <section className="py-14 bg-slate-100">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          Exemplos de Nossos Trabalhos
        </h2>
        <p className="text-xl text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Veja alguns projetos que desenvolvemos para nossos clientes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-blue-100 rounded-2xl shadow p-10 flex flex-col items-center">
            <Monitor size={48} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2 text-center">E-commerce Moderno</h4>
            <p className="text-gray-700 text-center">
              Loja virtual completa com carrinho e pagamentos
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl shadow p-10 flex flex-col items-center">
            <Monitor size={48} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2 text-center">Landing Page Corporativa</h4>
            <p className="text-gray-700 text-center">
              Página de conversão para geração de leads
            </p>
          </div>
          <div className="bg-blue-100 rounded-2xl shadow p-10 flex flex-col items-center">
            <Monitor size={48} className="text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2 text-center">Site Institucional</h4>
            <p className="text-gray-700 text-center">
              Presença digital profissional para empresas
            </p>
          </div>
        </div>
      </section>

      {/* O QUE ESTÁ INCLUÍDO */}
      <section className="py-20">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-900">
          O que está incluído
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Cada projeto é desenvolvido com atenção aos detalhes e foco em resultados
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-lg">
          <ul className="space-y-5">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Design moderno e profissional
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Formulários de contato funcionais
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Certificado SSL incluído
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Suporte técnico incluso
            </li>
          </ul>
          <ul className="space-y-5">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Integração com redes sociais
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Painel administrativo intuitivo
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Backup automático
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" /> Analytics e métricas de acesso
            </li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-4">Pronto para ter seu site profissional?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Cada projeto é único e personalizado para suas necessidades específicas. Entre em contato conosco para receber um orçamento sob medida.
        </p>
        <div className="mx-auto bg-blue-600/80 p-8 rounded-2xl max-w-xl">
          <div className="flex flex-col items-center gap-2 mb-4">
            <span className="text-2xl font-bold flex items-center gap-2">
              <span className="bg-yellow-300 text-yellow-900 px-2 py-1 rounded-full">💰</span>
              Valores Personalizados
            </span>
          </div>
          <p className="mb-6">
            Nossos orçamentos são pensados especificamente no que você deseja. Cada projeto tem um valor justo baseado na complexidade e recursos necessários.
          </p>
          <a
            href="https://wa.me/seunumeroaqui"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold px-8 py-3 rounded-lg text-lg shadow hover:bg-green-600 transition inline-flex items-center gap-2"
          >
            <span>Chamar no WhatsApp</span>
          </a>
          <div className="text-xs text-blue-100 mt-2 flex items-center gap-2 justify-center">
            <span className="text-yellow-300">📱</span> Resposta rápida garantida
          </div>
        </div>
      </section>
    </div>
  );
}
