import { useRef, useState } from "react";
import { X, User } from "lucide-react";

interface WppHeaderProps {
  contactName: string;
  status?: string;
  phone?: string;
  email?: string;
  photoUrl?: string;
}

export function WppHeader({
  contactName,
  status,
  phone,
  email,
  photoUrl,
}: WppHeaderProps) {
  const [showContact, setShowContact] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Utilitário para mostrar iniciais
  function getInitials(name: string) {
    return name
      ? name
          .split(" ")
          .map((w) => w[0]?.toUpperCase())
          .join("")
          .slice(0, 2)
      : "?";
  }

  // Fecha o painel ao clicar fora
  function handleClickOutside(e: MouseEvent) {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      setShowContact(false);
    }
  }

  // Adiciona/remover listener ao abrir/fechar painel
  if (showContact) {
    window.addEventListener("mousedown", handleClickOutside);
  } else {
    window.removeEventListener("mousedown", handleClickOutside);
  }

  return (
    <header className="h-16 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center px-6 justify-between shadow relative">
      <div className="flex items-center gap-3">
        {/* Botão: Detalhes do contato */}
        <button
          onClick={() => setShowContact(true)}
          className="rounded-full w-10 h-10 bg-blue-600 flex items-center justify-center font-bold text-white text-xl uppercase select-none overflow-hidden focus:ring-2 ring-white"
          title="Ver detalhes do contato"
          aria-label="Ver detalhes do contato"
        >
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={contactName}
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "";
              }}
            />
          ) : contactName ? (
            getInitials(contactName)
          ) : (
            <User size={24} />
          )}
        </button>
        <span className="font-bold text-white text-lg block truncate max-w-xs">
          {contactName || "Contato"}
        </span>
      </div>
      <div className="flex gap-3">{/* Botões extra, se quiser */}</div>

      {/* Painel lateral do contato */}
      {showContact && (
        <div
          ref={panelRef}
          className="absolute top-16 left-6 z-30 bg-white shadow-2xl rounded-xl border w-80 p-6 animate-fade-in"
        >
          <div className="font-bold text-lg mb-2">
            {contactName || "Contato"}
          </div>
          {status && (
            <div className="text-xs text-green-700 mb-2">{status}</div>
          )}
          {(phone || email) && (
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              {phone && (
                <div>
                  <b>Telefone:</b> {phone}
                </div>
              )}
              {email && (
                <div>
                  <b>Email:</b> {email}
                </div>
              )}
            </div>
          )}
          <button
            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100"
            onClick={() => setShowContact(false)}
            title="Fechar"
            aria-label="Fechar detalhes do contato"
          >
            <X size={20} />
          </button>
        </div>
      )}
    </header>
  );
}
