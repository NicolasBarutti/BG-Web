// app/components/Dashboard.tsx
import { BarChart3, Users, MessageCircle, Zap, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Visão Geral</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-10">
        {/* Card: Clientes Ativos */}
        <div className="bg-white rounded-xl shadow p-7 flex items-center gap-4">
          <div className="bg-blue-100 p-4 rounded-full">
            <Users size={30} className="text-blue-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Clientes Ativos</p>
            <span className="text-2xl font-bold text-blue-700">18</span>
          </div>
        </div>
        {/* Card: Mensagens no Mês */}
        <div className="bg-white rounded-xl shadow p-7 flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-full">
            <MessageCircle size={30} className="text-green-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Mensagens (Mês)</p>
            <span className="text-2xl font-bold text-green-700">12.400</span>
          </div>
        </div>
        {/* Card: Status de Conexão */}
        <div className="bg-white rounded-xl shadow p-7 flex items-center gap-4">
          <div className="bg-indigo-100 p-4 rounded-full">
            <CheckCircle size={30} className="text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status WhatsApp</p>
            <span className="text-2xl font-bold text-indigo-700 flex items-center gap-2">
              Conectado <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
            </span>
          </div>
        </div>
      </div>

      {/* Gráfico ou métricas (placeholder) */}
      <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
        <BarChart3 size={44} className="text-blue-600 mb-2" />
        <h2 className="text-lg font-semibold mb-2">Resumo de Atendimentos</h2>
        <p className="text-gray-500 mb-6">Em breve: gráficos de crescimento, volume de mensagens e desempenho do atendimento ao cliente.</p>
        <div className="h-32 w-full flex items-center justify-center text-gray-300">
          {/* Aqui pode entrar seu gráfico ou KPI */}
          [ Gráfico aqui ]
        </div>
      </div>
    </div>
  );
}
