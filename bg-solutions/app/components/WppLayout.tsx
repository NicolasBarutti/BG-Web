import { useState, useEffect } from 'react'
import { WppSidebar } from './WppSidebar'
import { WppHeader } from './WppHeader'
import { WppMessages } from './WppMessages'
import { WppInput } from './WppInput'

interface Message {
  id: string
  sender: string
  text: string
  timestamp?: number
}

const userId = 'default'

export default function WppLayout() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [contactName, setContactName] = useState<string>('')
  const [erro, setErro] = useState<string>('')

  // Atualiza mensagens e nome do contato ao trocar de chat
  useEffect(() => {
    if (!selectedChat) {
      setMessages([])
      setContactName('')
      setErro('')
      return
    }

    // Buscar mensagens do chat selecionado
    fetch(`http://localhost:5000/messages/${selectedChat}?userId=${userId}`)
      .then(res => {
        if (!res.ok) throw new Error('Erro ao buscar mensagens.')
        return res.json()
      })
      .then(msgs => {
        setMessages(Array.isArray(msgs) ? msgs : [])
        setErro('')
      })
      .catch(() => {
        setMessages([])
        setErro('Erro ao buscar mensagens.')
      })

    // Buscar nome do contato/grupo
    fetch(`http://localhost:5000/chats/${userId}`)
      .then(res => res.json())
      .then(chats => {
        const c = chats.find((c: any) => c.id === selectedChat)
        setContactName(c?.name || selectedChat.split('@')[0] || '')
      })
      .catch(() => setContactName(selectedChat.split('@')[0] || ''))
  }, [selectedChat])

  // Atualiza mensagens ao enviar
  function handleSend(text: string, system?: boolean) {
    if (!selectedChat) return

    // Adiciona mensagem localmente (optimistic UI)
    setMessages(m => [
      ...m,
      {
        id: Math.random().toString(36).slice(2),
        sender: system ? 'system' : 'me',
        text,
        timestamp: Math.floor(Date.now() / 1000),
      }
    ])

    // Envia mensagem real para o backend (se não for mensagem do sistema)
    if (!system) {
      fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          chatId: selectedChat,
          text,
        })
      }).catch(() => {})
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      <WppSidebar
        userId={userId}
        onSelectChat={setSelectedChat}
        selectedChat={selectedChat}
      />
      <div className="flex flex-col flex-1">
        <WppHeader contactName={contactName} />
        {selectedChat ? (
          <>
            {erro && (
              <div className="bg-red-50 text-red-700 text-center font-bold py-2">
                {erro}
              </div>
            )}
            <WppMessages messages={messages} />
            <WppInput onSend={handleSend} />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            Selecione uma conversa para começar
          </div>
        )}
      </div>
    </div>
  )
}
