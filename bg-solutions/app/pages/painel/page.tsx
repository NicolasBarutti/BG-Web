'use client'
import { useEffect, useState } from "react"
import { supabase } from "@/utils/supabaseClient"
import Header from "@/app/components/Header"
import Sidebar from "@/app/components/sidebar"
import Dashboard from '@/app/components/Dashboard'
import { QrCodeWpp } from '@/app/components/QrCodeWhatsApp'
import WppLayout from "@/app/components/WppLayout"

export default function Painel() {
  const [userId, setUserId] = useState('')
  const [page, setPage] = useState('dashboard')

  useEffect(() => {
    async function getUserId() {
      try {
        const { data } = await supabase.auth.getUser()
        setUserId(data?.user?.id || '')
      } catch {
        setUserId('')
      }
    }
    getUserId()
  }, [])

  function renderContent() {
    switch (page) {
      case 'dashboard':
        return <Dashboard />
      case 'qrcode':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-3">Conectar WhatsApp</h2>
            <div className="bg-white shadow rounded-lg p-8 text-center">
              {/* Agora usa usuarioId corretamente */}
              {userId && <QrCodeWpp usuarioId={userId} />}
              {!userId && (
                <div className="text-red-600 font-semibold p-6">
                  Erro ao carregar usuário, faça login novamente.
                </div>
              )}
            </div>
          </div>
        )
      case 'whatsapp':
        return <WppLayout />
      case 'crm':
        return <div>CRM de Clientes</div>
      case 'fluxograma':
        return <div>Fluxograma</div>
      case 'config':
        return <div>Configurações</div>
      default:
        return <div>Bem-vindo ao painel!</div>
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header user="Gabriel" onLogout={() => {}} />
      <div className="flex flex-1">
        <Sidebar current={page} onSelect={setPage} />
        <main className="flex-1 bg-slate-50 p-0 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
