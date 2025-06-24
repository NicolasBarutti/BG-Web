import { useEffect, useState } from "react";

interface Conversation {
  id: string;
  name?: string;
  lastMessage?: string;
  unreadCount?: number;
}

interface WppSidebarProps {
  userId: string; // Aqui é o sessionId usado no backend!
  onSelectChat: (chatId: string) => void;
  selectedChat: string | null;
}

export function WppSidebar({
  userId,
  onSelectChat,
  selectedChat
}: WppSidebarProps) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string>("");

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    setErro("");
    setConversations([]);

    // Usa sessionId (userId) corretamente na rota
    fetch(`http://localhost:5000/chats/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar conversas.");
        return res.json();
      })
      .then(data => {
        // Pode vir array de objetos do WhatsApp Web!
        // Adapte se quiser padronizar os campos exibidos:
        setConversations(
          Array.isArray(data)
            ? data.map((chat: any) => ({
                id: chat.id,
                name: chat.name || chat.formattedTitle || chat.id.split("@")[0],
                lastMessage: chat.lastMessage?.body || "",
                unreadCount: chat.unreadCount || 0,
              }))
            : []
        );
        setLoading(false);
      })
      .catch((err) => {
        setErro("Falha ao carregar conversas.");
        setLoading(false);
        console.error("Erro ao buscar conversas:", err);
      });
  }, [userId]);

  return (
    <aside className="w-72 bg-white border-r border-blue-200 flex flex-col">
      <header className="p-4 border-b border-blue-200 font-bold text-blue-700 text-xl bg-gradient-to-r from-blue-100 to-blue-200">
        BGConversas
      </header>
      <ul className="flex-1 overflow-y-auto">
        {loading ? (
          <li className="p-4 text-blue-400">Carregando conversas...</li>
        ) : erro ? (
          <li className="p-4 text-red-600">{erro}</li>
        ) : conversations.length === 0 ? (
          <li className="p-4 text-gray-400">Nenhuma conversa encontrada.</li>
        ) : (
          conversations.map(conv => (
            <li
              key={conv.id}
              onClick={() => onSelectChat(conv.id)}
              className={`p-4 border-b border-blue-50 hover:bg-blue-50 cursor-pointer transition ${
                selectedChat === conv.id ? "bg-blue-100" : ""
              }`}
            >
              <div className="font-semibold text-blue-800 truncate">
                {conv.name || conv.id.split("@")[0]}
              </div>
              {conv.lastMessage && (
                <div className="text-sm text-blue-400 truncate">
                  {conv.lastMessage}
                </div>
              )}
              {!!conv.unreadCount && (
                <span className="ml-2 text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                  {conv.unreadCount}
                </span>
              )}
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}
