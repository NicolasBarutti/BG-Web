// app/components/Sidebar.tsx
import {
  Home,
  QrCode,
  MessageCircle,
  Users,
  GitBranch,
  Settings,
  LogOut
} from 'lucide-react';

const MENU = [
  { label: 'Dashboard', icon: <Home size={20} />, key: 'dashboard' },
  { label: 'Conectar WhatsApp', icon: <QrCode size={20} />, key: 'qrcode' },
  { label: 'WhatsApp', icon: <MessageCircle size={20} />, key: 'whatsapp' },
  { label: 'CRM', icon: <Users size={20} />, key: 'crm' },
  { label: 'Fluxograma', icon: <GitBranch size={20} />, key: 'fluxograma' },
  { label: 'Configurações', icon: <Settings size={20} />, key: 'config' },
];

type SidebarProps = {
  current: string;
  onSelect: (key: string) => void;
  onLogout?: () => void;
};

export default function Sidebar({ current, onSelect, onLogout }: SidebarProps) {
  return (
    <aside className="bg-blue-700 w-44 min-h-screen text-white flex flex-col py-8 px-2 shadow-lg">
      <span className="font-extrabold text-xl mb-10 tracking-tight px-3">
        <span className="text-white">BG</span>
        <span className="text-gray-300">Solutions</span>
      </span>
      <nav className="flex-1 space-y-1">
        {MENU.map(item => (
          <button
            key={item.key}
            className={`flex items-center w-full px-4 py-2.5 rounded-lg transition font-semibold ${
              current === item.key ? 'bg-blue-900' : 'hover:bg-blue-800'
            }`}
            onClick={() => onSelect(item.key)}
          >
            {item.icon}
            <span className="ml-2 text-[15px]">{item.label}</span>
          </button>
        ))}
      </nav>
      <button
        className="flex items-center gap-2 mt-10 mb-2 text-red-200 hover:text-red-400 transition px-3"
        onClick={onLogout || (() => {})}
      >
        <LogOut size={18} /> Sair
      </button>
    </aside>
  );
}
