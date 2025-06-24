'use client';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { User, Mail, Phone, Lock, Loader2, ChevronLeft, CheckCircle2 } from 'lucide-react';

// Função segura para formatar telefone Brasil no padrão internacional
function formatPhone(phone: string): string {
  if (!phone) return '';
  let cleaned = phone.replace(/\D/g, '');
  while (cleaned.startsWith('0')) cleaned = cleaned.slice(1);
  if (!cleaned.startsWith('55')) cleaned = '55' + cleaned;
  return cleaned;
}

export default function Cadastro() {
  const [form, setForm] = useState({ nome: '', email: '', whatsapp: '', senha: '' });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [plano, setPlano] = useState('');
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planoParam = params.get('plano');
    if (planoParam) setPlano(planoParam);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErro('');
    setSucesso(false);

    // Formatar o WhatsApp para padrão internacional
    const formattedWhatsapp = formatPhone(form.whatsapp);

    // Validação básica de telefone
    if (!/^\d{12,13}$/.test(formattedWhatsapp)) {
      setErro('Digite um número de WhatsApp válido (com DDD, só números)');
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.senha,
    });

    if (error) {
      setErro(error.message);
      setLoading(false);
      return;
    }

    const userId = data.user?.id;
    if (userId) {
      const { error: errorInsert } = await supabase.from('usuarios').insert([
        { id: userId, nome: form.nome, whatsapp: formattedWhatsapp, plano }
      ]);
      if (errorInsert) {
        setErro('Erro ao salvar dados extras.');
        setLoading(false);
        return;
      }
    }

    setSucesso(true);
    setLoading(false);

    setTimeout(() => {
      window.location.href = '/pagamento';
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 px-2">
      {/* Top Bar - Voltar */}
      <div className="w-full max-w-md mx-auto pt-10 pb-2">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-blue-700 font-semibold hover:underline transition"
        >
          <ChevronLeft size={22} /> Voltar
        </button>
      </div>
      {/* Card de cadastro */}
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md relative">
        <div className="flex flex-col items-center mb-8">
          <span className="font-extrabold text-3xl text-gray-900 tracking-tight mb-2">
            <span className="text-blue-600">BG</span>Solutions
          </span>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">Criar Conta</h1>
          <p className="text-gray-500 text-center text-base max-w-xs">
            {plano
              ? `Cadastro rápido para o plano ${plano.charAt(0).toUpperCase() + plano.slice(1)}`
              : 'Preencha os dados para começar a automatizar seu atendimento'}
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-blue-500" size={20} />
            <input
              name="nome"
              placeholder="Nome completo"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none text-base transition"
              onChange={handleChange}
              disabled={loading || sucesso}
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-blue-500" size={20} />
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none text-base transition"
              onChange={handleChange}
              disabled={loading || sucesso}
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 text-blue-500" size={20} />
            <input
              name="whatsapp"
              placeholder="WhatsApp (com DDD, só números)"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none text-base transition"
              onChange={handleChange}
              disabled={loading || sucesso}
              pattern="[0-9]{10,13}"
              title="Digite apenas números, com DDD"
              autoComplete="tel"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-blue-500" size={20} />
            <input
              name="senha"
              type="password"
              placeholder="Crie uma senha"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:border-blue-600 focus:ring-1 focus:ring-blue-100 outline-none text-base transition"
              onChange={handleChange}
              disabled={loading || sucesso}
            />
          </div>
          {erro && (
            <div className="bg-red-50 border border-red-300 text-red-700 p-3 rounded-lg text-center">
              {erro}
            </div>
          )}
          {sucesso && (
            <div className="flex flex-col items-center gap-2 bg-green-50 border border-green-300 text-green-700 p-3 rounded-lg text-center font-semibold animate-fade-in">
              <CheckCircle2 size={28} /> Cadastro realizado com sucesso! Redirecionando...
            </div>
          )}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 transition text-white text-base font-bold rounded-lg shadow"
            disabled={loading || sucesso}
          >
            {loading && <Loader2 size={20} className="animate-spin" />}
            {loading ? 'Cadastrando...' : 'Cadastrar e ir para pagamento'}
          </button>
        </form>
        <div className="mt-8 text-center text-xs text-gray-400">
          Ao se cadastrar você concorda com nossos <a href="#" className="underline text-blue-600">Termos de Uso</a>.
        </div>
      </div>
    </div>
  );
}
