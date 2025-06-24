import { LogOut } from 'lucide-react';

export default function Header({ user, onLogout }: { user?: string, onLogout?: () => void }) {
  return (
    <header className="w-full bg-white shadow flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-3">
        <img src="/logo-bgsolutions.png" alt="Logo" className="w-8 h-8 rounded-full" />
        <span className="font-bold text-xl text-blue-700">BG Solutions</span>
      </div>
      <div className="flex items-center gap-4">
        {user && <span className="text-gray-700">Bem-vindo, {user.split(' ')[0]}</span>}
        {onLogout && (
          <button
            className="flex items-center gap-2 text-blue-600 hover:underline"
            onClick={onLogout}
          >
            <LogOut size={18} /> Sair
          </button>
        )}
      </div>
    </header>
  );
}
