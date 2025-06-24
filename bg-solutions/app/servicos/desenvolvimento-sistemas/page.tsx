"use client";
import { ChevronLeft, Star, Cpu, Users, Database, Code2, Network, Shield, Lightbulb, MessageSquare } from "lucide-react";

export default function DesenvolvimentoSistemas() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-6 bg-white shadow-sm">
        <button onClick={() => window.history.back()} className="flex items-center gap-2 text-blue-700 font-semibold hover:underline">
          <ChevronLeft size={20} /> Voltar ao site
        </button>
        <span className="font-extrabold text-2xl text-gray-900">
          <span className="text-blue-600">BG</span>Solutions
        </span>
      </div>

      {/* Hero */}
      <section className="bg-blue-700 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Desenvolvimento de Sistemas<br />Personalizados</h1>
        <p className="text-2xl mb-8">Softwares sob medida para escalar operações, automatizar processos e aumentar a produtividade da sua empresa</p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <span className="flex items-center gap-2 bg-blue-600 bg-opacity-60 rounded-full px-5 py-2 text-lg font-medium">
            <Star className="text-yellow-300" size={22} /> Totalmente Personalizado
          </span>
          <span className="flex items-center gap-2 bg-blue-600 bg-opacity-60 rounded-full px-5 py-2 text-lg font-medium">
            <Cpu className="text-green-300" size={22} /> Alta Performance
          </span>
          <span className="flex items-center gap-2 bg-blue-600 bg-opacity-60 rounded-full px-5 py-2 text-lg font-medium">
            <Users className="text-pink-200" size={22} /> Multi-usuário
          </span>
        </div>
      </section>

      {/* Soluções */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Soluções Tecnológicas Avançadas</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Desenvolvemos sistemas que se adaptam perfeitamente às necessidades do seu negócio, proporcionando eficiência e crescimento sustentável
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
            <Database className="w-12 h-12 text-blue-600 mb-4 bg-blue-100 rounded-full p-2" />
            <h4 className="font-bold text-xl mb-2">Sistemas de Gestão</h4>
            <p className="text-gray-600 text-center">ERPs, CRMs e sistemas administrativos personalizados</p>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
            <Code2 className="w-12 h-12 text-blue-600 mb-4 bg-blue-100 rounded-full p-2" />
            <h4 className="font-bold text-xl mb-2">Aplicações Web</h4>
            <p className="text-gray-600 text-center">Plataformas web robustas e escaláveis</p>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
            <Network className="w-12 h-12 text-blue-600 mb-4 bg-blue-100 rounded-full p-2" />
            <h4 className="font-bold text-xl mb-2">Integrações</h4>
            <p className="text-gray-600 text-center">Conecte seus sistemas e automatize processos</p>
          </div>
          <div className="bg-white rounded-xl shadow flex flex-col items-center p-8">
            <Shield className="w-12 h-12 text-blue-600 mb-4 bg-blue-100 rounded-full p-2" />
            <h4 className="font-bold text-xl mb-2">Segurança Avançada</h4>
            <p className="text-gray-600 text-center">Proteção de dados e controle de acesso</p>
          </div>
        </div>
      </section>

      {/* Veja Como Funciona */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Veja Como Funciona</h2>
        <p className="text-lg text-gray-600 mb-12">Demonstração dos nossos sistemas em funcionamento</p>
        <div className="bg-blue-100 rounded-2xl shadow flex flex-col items-center justify-center py-20">
          <Database className="w-16 h-16 text-blue-600 mb-4" />
          <h4 className="font-bold text-2xl mb-2">Vídeo Demonstrativo</h4>
          <p className="text-gray-700 text-lg">Sistemas personalizados em ação</p>
        </div>
      </section>

      {/* Projetos Desenvolvidos */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Projetos Desenvolvidos</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Alguns dos sistemas que desenvolvemos para nossos clientes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-100 rounded-xl flex flex-col items-center p-10">
            <Cpu className="w-16 h-16 text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2">Sistema de Gestão Empresarial</h4>
            <p className="text-gray-700 text-center">ERP completo para controle financeiro, estoque e vendas</p>
          </div>
          <div className="bg-blue-100 rounded-xl flex flex-col items-center p-10">
            <Cpu className="w-16 h-16 text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2">Plataforma de E-learning</h4>
            <p className="text-gray-700 text-center">Sistema de ensino online com vídeos e certificados</p>
          </div>
          <div className="bg-blue-100 rounded-xl flex flex-col items-center p-10">
            <Cpu className="w-16 h-16 text-blue-600 mb-4" />
            <h4 className="font-bold text-xl mb-2">Sistema de Agendamento</h4>
            <p className="text-gray-700 text-center">Plataforma para agendamento de consultas e serviços</p>
          </div>
        </div>
      </section>

      {/* O que está incluído */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">O que está incluído no desenvolvimento</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Cada sistema é desenvolvido com foco em qualidade, segurança e performance
        </p>
        <div className="grid md:grid-cols-2 gap-12 justify-items-center">
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Análise completa de requisitos
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Interface intuitiva e moderna
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Banco de dados otimizado
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Controle de usuários e permissões
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Treinamento da equipe
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Documentação completa
            </li>
          </ul>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Arquitetura personalizada
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Integração com sistemas existentes
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Relatórios e dashboards
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Backup automático e segurança
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Suporte técnico especializado
            </li>
            <li className="flex items-center gap-2 text-gray-800">
              <span className="text-green-500">✔</span> Manutenção e atualizações
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Pronto para ter seu sistema personalizado?</h2>
        <p className="text-xl mb-10 max-w-3xl mx-auto">
          Cada projeto é único e desenvolvido especificamente para suas necessidades. Entre em contato para discutirmos sua ideia e recebermos um orçamento personalizado.
        </p>
        <div className="flex flex-col items-center max-w-md mx-auto bg-blue-600 bg-opacity-50 p-8 rounded-2xl shadow">
          <span className="flex items-center justify-center text-3xl mb-4 font-bold gap-2">
            <Lightbulb className="text-yellow-400" size={32} /> Valores Personalizados
          </span>
          <p className="mb-6 text-lg">Nossos orçamentos são pensados especificamente no que você deseja. Cada sistema tem um valor justo baseado na complexidade e funcionalidades necessárias.</p>
          <a
            href="https://wa.me/55SEUNUMEROAQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 transition text-white font-bold px-8 py-4 rounded-xl flex items-center text-lg mb-2"
          >
            <MessageSquare className="mr-2" size={24} /> Chamar no WhatsApp
          </a>
          <div className="text-xs text-blue-100 mt-2 flex items-center gap-2 justify-center">
            <span className="text-yellow-300">📱</span> Resposta rápida garantida
          </div>
        </div>
      </section>
    </div>
  );
}
