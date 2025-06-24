import { useEffect, useRef } from "react";

interface Message {
  id: string;
  sender: string; // 'me', 'system' ou nome/número do contato
  text: string;
  timestamp?: number;
}

export function WppMessages({ messages }: { messages: Message[] }) {
  const ref = useRef<HTMLDivElement>(null);

  // Sempre rola até o fim ao atualizar as mensagens
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  function formatTime(ts?: number) {
    if (!ts) return "";
    const date = new Date(ts * 1000);
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",      
    });
  }

  if (!messages || messages.length === 0) {
    return (
      <main className="flex-1 overflow-y-auto p-6 flex items-center justify-center text-gray-400 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        Nenhuma mensagem encontrada
      </main>
    );
  }

  return (
    <main
      ref={ref}
      className="flex-1 overflow-y-auto p-4 flex flex-col gap-2 bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {messages.map((msg, i) => (
        <div
          key={msg.id || `msg-${i}`}
          className={`
            max-w-[90%] md:max-w-xs p-3 rounded-2xl shadow group break-words
            ${
              msg.sender === "me"
                ? "bg-blue-200 self-end text-right"
                : msg.sender === "system"
                ? "bg-gray-200 text-gray-600 self-center text-center text-sm font-medium"
                : "bg-white self-start border text-left"
            }
          `}
        >
          {msg.sender !== "me" && msg.sender !== "system" && (
            <div className="text-xs font-bold text-blue-500 mb-1 truncate max-w-full">
              {msg.sender}
            </div>
          )}
          <div>{msg.text}</div>
          {msg.timestamp && (
            <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-500 transition">
              {formatTime(msg.timestamp)}
            </div>
          )}
        </div>
      ))}
    </main>
  );
}
