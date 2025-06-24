import { useState, useRef, useEffect, useCallback } from 'react'
import { Smile, Plus, Send, Bot, User, Paperclip, FileImage, Video } from 'lucide-react'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'

export function WppInput({ onSend }: { onSend: (msg: string, system?: boolean) => void }) {
  const [message, setMessage] = useState('')
  const [human, setHuman] = useState(false)
  const [showAttach, setShowAttach] = useState(false)
  const [showEmoji, setShowEmoji] = useState(false)

  const attachRef = useRef<HTMLDivElement>(null)
  const emojiRef = useRef<HTMLDivElement>(null)
  const emojiButtonRef = useRef<HTMLButtonElement>(null)
  const attachButtonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fecha menus ao clicar fora
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        showAttach &&
        attachRef.current &&
        !attachRef.current.contains(event.target as Node) &&
        attachButtonRef.current &&
        !attachButtonRef.current.contains(event.target as Node)
      ) {
        setShowAttach(false)
      }
      if (
        showEmoji &&
        emojiRef.current &&
        !emojiRef.current.contains(event.target as Node) &&
        emojiButtonRef.current &&
        !emojiButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmoji(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [showAttach, showEmoji])

  // Alterna menus (nunca ambos abertos)
  const toggleAttach = useCallback(() => {
    setShowAttach(a => {
      if (!a) setShowEmoji(false)
      return !a
    })
  }, [])

  const toggleEmoji = useCallback(() => {
    setShowEmoji(e => {
      if (!e) setShowAttach(false)
      return !e
    })
    setTimeout(() => inputRef.current?.focus(), 120)
  }, [])

  // Envia mensagem ao apertar Enter (Shift+Enter quebra linha)
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend(e)
    }
  }

  function handleSend(e: React.FormEvent | React.KeyboardEvent) {
    e.preventDefault?.()
    if (message.trim()) {
      onSend(message)
      setMessage('')
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  function toggleHuman() {
    setHuman(h => {
      const novoModo = !h
      onSend(
        novoModo
          ? 'Atendimento humano ativado!'
          : 'Atendimento automático (robô) ativado.',
        true
      )
      return novoModo
    })
  }

  function handleAttach(type: string) {
    setShowAttach(false)
    onSend(`[Arquivo de ${type} enviado]`, true)
  }

  function handleEmojiMart(emoji: any) {
    setMessage(m => m + emoji.native)
    setShowEmoji(false)
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  return (
    <form
      onSubmit={handleSend}
      className="flex items-center gap-2 p-4 border-t bg-white relative"
      autoComplete="off"
    >
      {/* Botão "+" para anexos */}
      <div className="relative">
        <button
          ref={attachButtonRef}
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          title="Anexar arquivo"
          onClick={toggleAttach}
        >
          <Plus size={24} />
        </button>
        {showAttach && (
          <div
            ref={attachRef}
            className="absolute z-20 bottom-12 left-0 bg-white border shadow-xl rounded-xl min-w-[170px] flex flex-col animate-fade-in"
          >
            <button className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50" type="button" onClick={() => handleAttach('imagem')}>
              <FileImage size={20} /> Imagem
            </button>
            <button className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50" type="button" onClick={() => handleAttach('vídeo')}>
              <Video size={20} /> Vídeo
            </button>
            <button className="flex items-center gap-2 px-4 py-3 hover:bg-blue-50" type="button" onClick={() => handleAttach('documento')}>
              <Paperclip size={20} /> Documento
            </button>
          </div>
        )}
      </div>

      {/* Botão Emoji */}
      <div className="relative">
        <button
          ref={emojiButtonRef}
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 transition"
          title="Emoji"
          onClick={toggleEmoji}
        >
          <Smile size={24} />
        </button>
        {showEmoji && (
          <div
            ref={emojiRef}
            className="absolute z-20 bottom-12 left-0 animate-fade-in"
            style={{ minWidth: 320, maxWidth: 380 }}
          >
            <Picker
              data={data}
              onEmojiSelect={handleEmojiMart}
              theme="light"
              searchPosition="top"
              emojiSize={24}
              emojiButtonSize={36}
            />
          </div>
        )}
      </div>

      {/* Campo de mensagem */}
      <input
        ref={inputRef}
        className="flex-1 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200 transition"
        placeholder="Digite uma mensagem"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />

      {/* Botão Atendimento Humano/Robô */}
      <button
        type="button"
        onClick={toggleHuman}
        className={`p-2 rounded-full border ${human ? 'bg-blue-100 border-blue-400' : 'bg-gray-100 border-gray-300'} transition`}
        title={human ? 'Atendimento Humano' : 'Atendimento Automático'}
      >
        {human ? <User size={22} /> : <Bot size={22} />}
      </button>

      {/* Botão Enviar */}
      <button
        type="submit"
        disabled={!message.trim()}
        className={`bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 flex items-center justify-center transition ${!message.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
        title="Enviar"
      >
        <Send size={22} />
      </button>
    </form>
  )
}
