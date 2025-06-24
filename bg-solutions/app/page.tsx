'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


export default function Home() {

  const avaliacoes = [
  {
    nome: 'Julia Ramos',
    cargo: 'CMO, Agência Criativa',
    imagem: '/cliente1.png',
    texto: '“Nos entregaram uma solução visualmente incrível e funcional. Adoramos o resultado!”',
  },
  {
    nome: 'Rafael Souza',
    cargo: 'Diretor, Conecta Soluções',
    imagem: '/cliente1.png',
    texto: '“Equipe ágil, comprometida e técnica. Contrataria novamente sem dúvidas!”',
  },
  {
    nome: 'Ana Silva',
    cargo: 'CEO, Design Studio',
    imagem: '/cliente1.png',
    texto: '“A equipe entendeu perfeitamente o que precisávamos e entregou um site que superou nossas expectativas.”',
  },
  {
    nome: 'Carlos Mendes',
    cargo: 'Fundador, TechHub',
    imagem: '/cliente1.png',
    texto: '“Muito profissionais, prazo respeitado e excelente comunicação do início ao fim.”',
  },
];


  return (
    <main className="bg-white text-gray-900">
      {/* HEADER */}
      <header className="flex items-center justify-between p-6 shadow">
  <h1 className="text-2xl font-bold">
    <span className="text-blue-700">BG</span>Solutions
  </h1>
  <nav className="space-x-6 hidden md:block">
    <a href="#" className="text-blue-700 font-medium border-b-2 border-blue-700">Home</a>
    <a href="#sobre">Sobre</a>
    <a href="#servicos">Serviços</a>
    <a href="#portfolio">Portfólio</a>
    <a href="#depoimentos">Depoimentos</a>
    <a href="#contato">Contato</a>
  </nav>
  <div className="flex gap-2">
    <a
      href="/pages/login" // Troque pelo seu link de login
      className="border border-blue-700 text-blue-700 px-4 py-2 rounded-md font-semibold hover:bg-blue-50 transition"
    >
      Já sou cliente
    </a>
    <a
      href="#contato"
      className="bg-blue-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-800 shadow"
    >
      Fale Conosco
    </a>
  </div>
</header>

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 py-20 bg-gradient-to-br from-white to-slate-100">
        <div className="max-w-xl flex-1">
          <span className="bg-blue-100 text-blue-700 font-semibold text-sm px-3 py-1 rounded-full">Soluções Digitais de Alto Impacto</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-4 text-blue-800 drop-shadow">
            Soluções digitais que impulsionam resultados reais
          </h2>
          <p className="text-gray-600 mt-4">
            Desenvolvimento de sites, automações e sistemas sob medida para transformar seu negócio na era digital.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <a href="#contato" className="bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Solicitar orçamento →
            </a>
            <a href="#contato" className="border border-blue-700 text-blue-700 px-5 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Fale com um especialista →
            </a>
          </div>
          <div className="flex items-center mt-8 space-x-3">
            <span className="inline-block h-3 w-3 rounded-full bg-green-500 mr-2" />
            <span className="text-gray-700 text-sm font-medium">Projetos entregues no prazo</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image
            src="/Notebook-home.png"
            alt="Notebook"
            width={650}
            height={450}
            className="w-full max-w-2xl rounded-xl shadow-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="bg-slate-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-2">Sobre Nós</h3>
          <div className="h-1 w-20 bg-blue-700 mx-auto mb-6 rounded" />
          <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Somos uma <span className="font-semibold text-blue-700">agência de tecnologia especializada</span> em transformar desafios digitais em soluções eficientes. Nossa equipe combina experiência técnica com visão estratégica para entregar projetos que não apenas atendem, mas superam expectativas.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="bg-blue-100 p-3 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <h4 className="font-bold text-lg mb-2 text-center">Compromisso com Resultados</h4>
              <p className="text-gray-600 text-center">Desenvolvemos soluções que geram impacto mensurável para o seu negócio.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="bg-blue-100 p-3 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M5.5 21h13a2 2 0 0 0 2-2v-2a7 7 0 0 0-14 0v2a2 2 0 0 0 2 2z"></path>
                </svg>
              </span>
              <h4 className="font-bold text-lg mb-2 text-center">Soluções Sob Medida</h4>
              <p className="text-gray-600 text-center">Cada projeto é único e merece uma abordagem personalizada às suas necessidades.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="bg-blue-100 p-3 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 16h-1v-4h-1m2-4h.01"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </span>
              <h4 className="font-bold text-lg mb-2 text-center">Agilidade e Eficiência</h4>
              <p className="text-gray-600 text-center">Processos otimizados para entregar soluções de qualidade em prazos competitivos.</p>
            </div>
          </div>
          {/* Números */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-700">120+</span>
              <p className="text-gray-600">Projetos Entregues</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-700">98%</span>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-700">5+</span>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-700">24/7</span>
              <p className="text-gray-600">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <span className="bg-blue-100 text-blue-700 font-semibold text-xs px-3 py-1 rounded-full">NOSSOS SERVIÇOS</span>
          <h3 className="text-3xl font-bold mt-3 mb-2">Soluções Digitais Completas</h3>
          <div className="h-1 w-20 bg-blue-700 mb-6 rounded" />
          <p className="text-gray-600 mb-10 max-w-2xl">
            Desenvolvemos tecnologias que impulsionam o crescimento do seu negócio.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Serviço 1 */}
            <div className="bg-slate-50 rounded-xl shadow p-6">
              <div className="bg-blue-100 p-3 rounded-full mb-4 w-fit">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="M9 9h6v6H9z"></path>
                </svg>
              </div>
              <h4 className="font-bold mb-2">Criação de Sites e Landing Pages</h4>
              <ul className="text-gray-600 text-sm mb-3 list-disc pl-4">
                <li>Design responsivo</li>
                <li>Otimização SEO</li>
                <li>Integração com análise</li>
                <li>Velocidade otimizada</li>
              </ul>
              <a href="/servicos/criacao-sites" className="text-blue-700 font-medium hover:underline">Saiba mais →</a>
            </div>
            {/* Serviço 2 */}
            <div className="bg-slate-50 rounded-xl shadow p-6">
              <div className="bg-blue-100 p-3 rounded-full mb-4 w-fit">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                </svg>
              </div>
              <h4 className="font-bold mb-2">Automação de WhatsApp e Atendimento Digital</h4>
              <ul className="text-gray-600 text-sm mb-3 list-disc pl-4">
                <li>Chatbots personalizados</li>
                <li>Integração com CRM</li>
                <li>Respostas automáticas IA</li>
                <li>Métricas em tempo real</li>
              </ul>
              <a href="/servicos/automacao" className="text-blue-700 font-medium hover:underline">Saiba mais →</a>
            </div>
            {/* Serviço 3 */}
            <div className="bg-slate-50 rounded-xl shadow p-6">
              <div className="bg-blue-100 p-3 rounded-full mb-4 w-fit">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0z"></path>
                </svg>
              </div>
              <h4 className="font-bold mb-2">Desenvolvimento de Sistemas Personalizados</h4>
              <ul className="text-gray-600 text-sm mb-3 list-disc pl-4">
                <li>ERPs e gestão</li>
                <li>Web e mobile apps</li>
                <li>Integrações entre sistemas</li>
                <li>Painéis personalizados</li>
              </ul>
              <a href="/servicos/desenvolvimento-sistemas" className="text-blue-700 font-medium hover:underline">Saiba mais →</a>
            </div>
            {/* Serviço 4 */}
            <div className="bg-slate-50 rounded-xl shadow p-6">
              <div className="bg-blue-100 p-3 rounded-full mb-4 w-fit">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 16h-1v-4h-1m2-4h.01"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
              <h4 className="font-bold mb-2">Consultoria e Estratégia Digital</h4>
              <ul className="text-gray-600 text-sm mb-3 list-disc pl-4">
                <li>Análise de processos</li>
                <li>Planejamento digital</li>
                <li>Transformação digital</li>
                <li>Mentorias técnicas</li>
              </ul>
              <a href="/servicos/consultoria-estrategia" className="text-blue-700 font-medium hover:underline">Saiba mais →</a>
            </div>
          </div>
          {/* CTA FINAL */}
          <div className="mt-16 bg-blue-700 text-white p-10 rounded-xl shadow flex flex-col items-center">
            <h4 className="text-2xl font-bold mb-2">Não encontrou o serviço que precisa?</h4>
            <p className="mb-6 text-center max-w-lg">Entre em contato conosco para discutir soluções personalizadas para o seu negócio.</p>
            <a href="#contato" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Fale conosco →
            </a>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="bg-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-2">Projetos Realizados</h3>
          <div className="h-1 w-20 bg-blue-700 mx-auto mb-6 rounded" />
          <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e os resultados alcançados
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projeto 1 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image src="/portfolio1.png" width={800} height={450} alt="Projeto 1" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">E-commerce Premium</h4>
                <p className="text-gray-600 mb-3">Desenvolvimento completo de e-commerce com integração de pagamentos e gestão de estoque.</p>
                <a href="#" className="text-blue-700 font-semibold hover:underline">Ver detalhes</a>
              </div>
            </div>
            {/* Projeto 2 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image src="/portfolio2.png" width={800} height={450} alt="Projeto 2" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">App de Delivery</h4>
                <p className="text-gray-600 mb-3">Aplicativo de delivery com sistema de rastreamento em tempo real e pagamentos integrados.</p>
                <a href="#" className="text-blue-700 font-semibold hover:underline">Ver detalhes</a>
              </div>
            </div>
            {/* Projeto 3 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image src="/portfolio3.png" width={800} height={450} alt="Projeto 3" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">Plataforma Educacional</h4>
                <p className="text-gray-600 mb-3">Sistema completo de ensino online com aulas ao vivo, avaliações e certificados digitais.</p>
                <a href="#" className="text-blue-700 font-semibold hover:underline">Ver detalhes</a>
              </div>
            </div>
            {/* Projeto 4 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <Image src="/portfolio4.png" width={800} height={450} alt="Projeto 4" className="w-full h-72 object-cover" />
              <div className="p-6">
                <h4 className="font-bold text-xl mb-2">Dashboard Corporativo</h4>
                <p className="text-gray-600 mb-3">Painel administrativo para visualização e análise de dados empresariais em tempo real.</p>
                <a href="#" className="text-blue-700 font-semibold hover:underline">Ver detalhes</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <a href="#contato" className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Quero um projeto como esses
            </a>
          </div>
        </div>
      </section>


{/* SEÇÃO DE DEPOIMENTOS COM SWIPER */}
    <section id="avaliacoes" className="relative py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-2">Avaliações dos Clientes</h3>
        <div className="h-1 w-20 bg-blue-700 mx-auto mb-10 rounded" />

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-10"
        >
          {avaliacoes.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-100 rounded-xl shadow p-8 text-center h-full flex flex-col justify-between">
                <div>
                  <svg
                    className="w-8 h-8 text-blue-700 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17h6M8 21h8M7 7v4a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V7" />
                  </svg>
                  <p className="text-gray-700 mb-6">{item.texto}</p>
                </div>
                <div>
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    width={56}
                    height={56}
                    className="mx-auto rounded-full mb-2"
                  />
                  <p className="font-bold">{item.nome}</p>
                  <p className="text-sm text-gray-500">{item.cargo}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginação oculta, mas funcional */}
        <div className="custom-pagination hidden" />
      </div>
    </section>






{/* SEÇÃO DE CONTATO COM FUNDO PERSONALIZADO */}
<section className="bg-slate-200 py-20 px-6">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* CARD DÚVIDAS COM FUNDO AZUL */}
      <div className="bg-blue-700 text-white rounded-xl p-8 shadow">
        <h3 className="text-2xl font-bold mb-6">Principais Dúvidas</h3>
        <ul className="space-y-5 text-sm lg:text-base">
          <li>
            <strong className="text-white">Quais serviços vocês oferecem?</strong><br />
            Desenvolvimento de sites, sistemas personalizados e automações.
          </li>
          <li>
            <strong className="text-white">Como funciona o processo de orçamento?</strong><br />
            Após o envio do formulário, entraremos em contato com uma proposta personalizada.
          </li>
          <li>
            <strong className="text-white">Em quanto tempo meu projeto fica pronto?</strong><br />
            Projetos variam de 7 a 30 dias, dependendo da complexidade.
          </li>
          <li>
            <strong className="text-white">O atendimento é remoto?</strong><br />
            Sim, atendemos todo o Brasil via e-mail, WhatsApp e videochamada.
          </li>
        </ul>
      </div>

      {/* CARD CONTATO COM FUNDO BRANCO */}
      <div className="bg-white text-gray-800 rounded-xl p-8 shadow flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4">Fale Conosco</h3>
          <p className="mb-6">Entre em contato pelos nossos canais oficiais. Teremos prazer em atender você!</p>

          <div className="space-y-4 text-gray-700 text-sm lg:text-base">
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>(99) 99999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <span>bgsolutionsdigital@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <span>📍</span>
              <span>
                Av. Tecnologia, 123 - Centro<br />
                São Paulo, SP - 01234-567
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span>⏰</span>
              <span>
                Segunda a Sexta: 9h às 18h<br />
                Sábados: 9h às 13h
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <span className="text-sm text-gray-600 mb-2 block">Ou fale direto com a gente:</span>
          <a
            href="https://wa.me/5599999999999?text=Olá!%20Tenho%20interesse%20em%20uma%20solução%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 transition text-white font-semibold py-3 px-6 rounded-lg shadow-md w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
              <path d="M16 .5C7.5.5.5 7.5.5 16c0 2.9.8 5.6 2.2 8l-1.5 5.5L7 30c2.3 1.4 5 2.2 8 2.2 8.5 0 15.5-7 15.5-15.5S24.5.5 16 .5zm0 28c-2.4 0-4.7-.7-6.6-2l-.5-.3-3.9 1 1-3.8-.3-.6c-1.3-2-2-4.4-2-6.9C3.7 8.6 9.3 3 16 3s12.3 5.6 12.3 12.3S22.7 28.5 16 28.5zm7-9c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.7.9-.9 1.1-.3.2-.6.1c-1.6-.6-3-2-3.9-3.5-.1-.2 0-.4.1-.6.1-.1.3-.3.4-.4s.2-.3.3-.5 0-.3-.1-.5-.8-1.9-1.1-2.5c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.5.1-.7.4s-1 1-1 2.5 1 3 1.2 3.3c1.4 2.1 3.3 3.6 5.5 4.4.8.3 1.5.5 2.1.5.6 0 1.2-.2 1.6-.8s.6-1.1.7-1.5c.1-.4 0-.6-.2-.7z" />
            </svg>
            Conversar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





      {/* FOOTER */}
      <footer className="bg-black text-gray-100 py-10 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              <span className="text-blue-700">BG</span>Solutions
            </h1>
            <p className="max-w-xs mb-4">Soluções digitais que transformam ideias em resultados reais para o seu negócio.</p>
            <div className="flex gap-3 text-2xl">
              <a href="#" aria-label="Instagram">🌐</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Links Rápidos</h4>
            <ul>
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#sobre" className="hover:underline">Sobre</a></li>
              <li><a href="#servicos" className="hover:underline">Serviços</a></li>
              <li><a href="#portfolio" className="hover:underline">Portfólio</a></li>
              <li><a href="#contato" className="hover:underline">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Nossos Serviços</h4>
            <ul>
              <li>Criação de Sites</li>
              <li>Automação de WhatsApp</li>
              <li>Desenvolvimento de Sistemas</li>
              <li>Consultoria Digital</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <ul>
              <li>📱 (00) 00000-0000</li>
              <li>✉️ bgsolutionsdigital@gmail.com</li>
              <li>📍 Av. Tecnologia, 123 - SP</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-4">
          <span>© 2025 BG Solutions. Todos os direitos reservados.</span>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Termos de Uso</a>
            <a href="#" className="hover:underline">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
