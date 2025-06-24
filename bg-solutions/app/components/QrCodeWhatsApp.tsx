import { useEffect, useState, useRef } from "react";

type StatusType = "loading" | "waiting" | "isLogged" | "expired" | "error";

interface QrCodeWppProps {
  usuarioId: string; // Passe o ID do usuário do Supabase!
}

export function QrCodeWpp({ usuarioId }: QrCodeWppProps) {
  const [qrcode, setQrcode] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusType>("loading");
  const [erro, setErro] = useState<string>("");
  const [phone, setPhone] = useState<string | null>(null);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // --- CRIAR SESSÃO ---
  const criarSessao = async () => {
    setStatus("loading");
    setQrcode(null);
    setErro("");
    try {
      const res = await fetch(`http://localhost:5000/usuarios/${usuarioId}/criar-sessao`, {
        method: "POST",
      });
      const data = await res.json();
      if (data.qr) {
        setQrcode(data.qr);
        setStatus("waiting");
      } else if (data.status === "Já existe sessão") {
        setQrcode(data.qr || null);
        setStatus("waiting");
      } else {
        setErro(data.error || "Erro ao gerar QR Code.");
        setStatus("error");
        return;
      }
      iniciarPolling();
    } catch (err) {
      setErro("Erro ao criar sessão.");
      setStatus("error");
    }
  };

  // --- CHECAR STATUS ---
  const checarStatus = async () => {
    try {
      const res = await fetch(`http://localhost:5000/usuarios/${usuarioId}/status`);
      const data = await res.json();

      if (data.qr) setQrcode(data.qr);
      if (data.number) setPhone(data.number);

      if (
        data.status === "isLogged" ||
        data.status === "CONNECTED" ||
        data.status === "qrReadSuccess"
      ) {
        setStatus("isLogged");
        pararPolling();
        return;
      }
      if (
        data.status === "autocloseCalled" ||
        data.status === "browserClose" ||
        data.status === "qrReadError" ||
        data.error
      ) {
        setStatus("expired");
        pararPolling();
        return;
      }
    } catch (err) {
      setErro("Erro ao checar status da sessão.");
      setStatus("error");
      pararPolling();
    }
  };

  // Polling (checa status a cada 2s)
  const iniciarPolling = () => {
    pararPolling();
    intervalRef.current = setInterval(checarStatus, 2000);
    timeoutRef.current = setTimeout(() => {
      setStatus("expired");
      pararPolling();
    }, 120000);
  };
  const pararPolling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Sempre que usuarioId mudar, cria sessão
  useEffect(() => {
    if (!usuarioId) return;
    criarSessao();
    return pararPolling;
    // eslint-disable-next-line
  }, [usuarioId]);

  // Botão de tentar de novo
  const handleRetry = () => {
    criarSessao();
  };

  // --- DESCONECTAR ---
  const handleDisconnect = async () => {
    setStatus("loading");
    setErro("");
    try {
      await fetch(`http://localhost:5000/usuarios/${usuarioId}/desconectar`, {
        method: "POST",
      });
      criarSessao();
    } catch {
      setErro("Erro ao desconectar.");
      setStatus("error");
    }
  };

  // ----------- CORREÇÃO DO QR CODE -------------
  let qrCodeImg = qrcode;
  if (qrCodeImg && !qrCodeImg.startsWith("data:image")) {
    qrCodeImg = "data:image/png;base64," + qrCodeImg;
  }
  // ---------------------------------------------

  // --- DESIGN / UI ---
  if (status === "error")
    return (
      <div className="p-6 bg-red-50 border border-red-200 text-red-700 font-bold rounded-xl flex flex-col items-center">
        {erro || "Erro ao gerar QR Code."}
        <button onClick={handleRetry} className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Tentar Novamente
        </button>
      </div>
    );

  if (status === "expired")
    return (
      <div className="p-6 bg-yellow-50 border border-yellow-200 text-yellow-700 font-bold rounded-xl flex flex-col items-center">
        QR Code expirado ou sessão fechada.<br />
        <button onClick={handleRetry} className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Gerar Novo QR Code
        </button>
      </div>
    );

  if (status === "isLogged")
    return (
      <div className="bg-white rounded-xl border border-green-200 shadow-md p-8 flex flex-col gap-3 items-start max-w-xl">
        <div className="flex items-center gap-3">
          <svg width={32} height={32} fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#dcfce7"/><path stroke="#16a34a" strokeWidth="2" d="M7 13.5l3 3 6-6"/></svg>
          <div>
            <div className="text-xl font-bold text-green-700">Automação está ligada</div>
            <div className="mt-1 text-gray-700 text-sm">
              O número de WhatsApp <span className="font-medium text-blue-700">{phone || "-"}</span> está conectado à sua conta.
            </div>
          </div>
        </div>
        <div className="text-gray-500 mt-2 mb-3 text-sm">
          Seu WhatsApp foi conectado com sucesso. Automação continuará funcionando mesmo com o celular desligado.
          <br />Porém, se não acessar o aplicativo do WhatsApp nos próximos 14 dias, seu telefone será desconectado automaticamente pelo WhatsApp por motivos de segurança.
        </div>
        <button
          className="self-end px-6 py-2 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition"
          onClick={handleDisconnect}
        >
          Desconectar
        </button>
      </div>
    );

  // Carregando ou esperando QR
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-blue-100 shadow max-w-lg">
      <div className="font-semibold text-blue-900 text-lg mb-2">
        {status === "loading" ? "Gerando QR code..." : "Escaneie o QR code com o WhatsApp"}
      </div>
      {qrCodeImg ? (
        <img src={qrCodeImg} alt="QR Code do WhatsApp" className="w-64 h-64 border rounded-xl" />
      ) : (
        <div className="text-gray-400 text-base">Aguardando QR code...</div>
      )}
      <div className="text-xs text-gray-400 mt-2">O QR code é atualizado automaticamente se expirar.</div>
    </div>
  );
}
