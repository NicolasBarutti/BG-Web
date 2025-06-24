'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSenha, setShowSenha] = useState(false);
  const router = useRouter();

  // Mapeia mensagens de erro do Supabase para português
  function getErrorMessage(error: any) {
    if (!error) return '';
    const msg = error.message?.toLowerCase() || '';
    if (msg.includes('email not confirmed')) return 'Seu e-mail ainda não foi confirmado! Verifique sua caixa de entrada.';
    if (msg.includes('invalid login')) return 'E-mail ou senha inválidos!';
    if (msg.includes('user not found')) return 'Usuário não encontrado!';
    if (msg.includes('network error')) return 'Erro de conexão. Tente novamente.';
    return error.message || 'Erro ao tentar fazer login. Tente novamente.';
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    setLoading(true);

    // Validação rápida
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      setLoading(false);
      return;
    }

    // Login Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha
    });

    if (error || !data.user) {
      setErro(getErrorMessage(error));
      setLoading(false);
      return;
    }

    // Confere pagamento confirmado
    const { data: userData, error: userError } = await supabase
      .from('usuarios')
      .select('pagamento_confirmado')
      .eq('id', data.user.id)
      .single();

    if (userError) {
      setErro('Erro ao verificar status do pagamento.');
      setLoading(false);
      return;
    }
    if (!userData?.pagamento_confirmado) {
      setErro('Seu pagamento ainda não foi confirmado. Complete o pagamento para acessar o painel.');
      setLoading(false);
      return;
    }

    router.push('/pages/painel');
  }

  // Suporte a tecla Enter
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter') handleLogin(e as any);
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-700 to-blue-400 items-center justify-center animate-fadein">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md flex flex-col items-center relative">
        <img src="/logo-bgsolutions.png" alt="BG Solutions" className="mb-4 w-20 h-20 rounded-full shadow-lg border-2 border-blue-100" />
        <h2 className="text-2xl font-bold text-blue-700 mb-1 tracking-tight">Área do Cliente</h2>
        <p className="text-gray-600 mb-8 text-center">Acesse seu painel exclusivo de automação WhatsApp</p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleLogin} autoComplete="on">
          <div>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="border w-full p-3 rounded-lg focus:outline-none focus:border-blue-700 transition shadow-sm"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              required
              autoComplete="username"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="relative">
            <input
              type={showSenha ? "text" : "password"}
              placeholder="Sua senha"
              className="border w-full p-3 rounded-lg focus:outline-none focus:border-blue-700 transition shadow-sm pr-12"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
              autoComplete="current-password"
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              aria-label={showSenha ? "Ocultar senha" : "Mostrar senha"}
              className="absolute right-4 top-3 text-gray-400 hover:text-blue-700"
              tabIndex={-1}
              onClick={() => setShowSenha(s => !s)}
            >
              {showSenha ? (
                <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
              ) : (
                <svg width={22} height={22} fill="none" viewBox="0 0 24 24"><path d="M1 1l22 22M17.94 17.94C16.09 19.27 14.12 20 12 20c-7 0-11-8-11-8a21.74 21.74 0 0 1 5.18-6.37M8.46 8.46A3 3 0 0 0 12 15a3 3 0 0 0 3-3" stroke="currentColor" strokeWidth="2"/><path d="M12 5c2.11 0 4.08.73 5.93 2.07A21.72 21.72 0 0 1 23 12a21.82 21.82 0 0 1-3.07 4.93" stroke="currentColor" strokeWidth="2"/></svg>
              )}
            </button>
          </div>
          {erro && (
            <div className="text-red-600 text-sm py-2 bg-red-50 rounded border border-red-200 text-center animate-shake">
              {erro}
            </div>
          )}
          <button
            type="submit"
            className={`bg-blue-700 text-white font-bold py-3 rounded-lg mt-2 hover:bg-blue-800 transition flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none"/>
                <path className="opacity-70" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4A8 8 0 104 12z"/>
              </svg>
            )}
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <a href="/" className="text-blue-500 mt-6 hover:underline text-sm">Voltar para o site</a>
        <span className="mt-4 text-gray-400 text-xs text-center">© 2025 BG Solutions</span>
      </div>
      <style jsx global>{`
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 0.7s; }
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
          100% { transform: translateX(0); }
        }
        .animate-shake { animation: shake 0.35s; }
      `}</style>
    </div>
  );
}
