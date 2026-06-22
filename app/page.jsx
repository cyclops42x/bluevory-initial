import React from 'react';

export const metadata = {
  title: 'Bluevory | Soluciones Digitales Premium',
  description: 'Desarrollo de páginas web, sistemas a medida y automatizaciones de procesos para escalar tu negocio.',
};

export default function LandingPage() {
  // Construcción limpia y segura del mensaje personalizado de WhatsApp
  const whatsappMessage = `Hola Bluevory! 👋 Vengo de su página web. Me interesa potenciar mi negocio y me gustaría recibir una asesoría para:

📌 Tipo de negocio: 
💻 Lo que necesito (Web / Sistema / Automatización): 

¿Cuáles son los siguientes pasos para agendar una breve llamada?`;

  const whatsappUrl = `https://wa.me/51923117677?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-[#0B0F19] text-slate-200 antialiased min-h-screen font-sans overflow-x-hidden scroll-smooth">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19]/70 backdrop-blur-md border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
            Bluevory<span className="text-blue-500">.</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
            <a href="#proceso" className="hover:text-white transition-colors">Proceso</a>
          </nav>

          <div>
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20"
            >
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Soluciones Digitales Inteligentes
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Transformamos tu negocio con <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-white">
              software y automatizaciones
            </span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseñamos páginas web de alto impacto, sistemas a medida y flujos automáticos para que dejes de perder tiempo en tareas repetitivas y escales tus ventas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={whatsappUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
            >
              Iniciar Conversación por WhatsApp
            </a>
            <a 
              href="#servicios" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white transition-all duration-300"
            >
              Ver qué hacemos
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 border-t border-slate-900 bg-[#090D16]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ingeniería digital para todo tipo de negocio</h2>
            <p className="text-slate-400">Creamos herramientas robustas y optimizadas para que tu operación sea eficiente desde el primer día.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-slate-800/60 hover:border-blue-500/40 transition-all duration-300 group shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Páginas Web & Landing Pages</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Sitios ultrarrápidos, visualmente impactantes y 100% optimizados para convertir visitantes en clientes habituales.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-slate-800/60 hover:border-blue-500/40 transition-all duration-300 group shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Sistemas & Plataformas a Medida</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Paneles administrativos, gestión de inventarios (Kardex), intranets y arquitecturas escalables adaptadas a tus reglas de negocio.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#0B0F19] border border-slate-800/60 hover:border-blue-500/40 transition-all duration-300 group shadow-[0_0_40px_-10px_rgba(59,130,246,0.1)]">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automatización de Procesos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Conectamos tus herramientas cotidianas. Integración de APIs, bots de WhatsApp, alertas automáticas y optimización de flujos de trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-24 border-t border-slate-900 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">¿Por qué trabajar con nosotros?</h2>
            <p className="text-slate-400">Desarrollamos tecnología pensando en el retorno de inversión y la robustez técnica.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#090D16] border border-slate-800/50">
              <h4 className="text-white font-semibold text-lg mb-2">Código Limpio y Escalable</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Estructuras sólidas pensadas para crecer sin limitaciones ni lentitud a futuro.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#090D16] border border-slate-800/50">
              <h4 className="text-white font-semibold text-lg mb-2">Seguridad Avanzada</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Protección robusta de datos, rate-limiting y arquitecturas estables contra accesos no autorizados.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#090D16] border border-slate-800/50">
              <h4 className="text-white font-semibold text-lg mb-2">Interfaces Fluidas</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Experiencias de usuario de alto nivel (UX/UI), rápidas y adaptables a cualquier dispositivo.</p>
            </div>
            <div className="p-6 rounded-xl bg-[#090D16] border border-slate-800/50">
              <h4 className="text-white font-semibold text-lg mb-2">Enfoque de Negocio</h4>
              <p className="text-slate-400 text-sm leading-relaxed">No solo tiramos código; analizamos tus procesos para resolver ineficiencias de verdad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO DE TRABAJO */}
      <section id="proceso" className="py-24 border-t border-slate-900 bg-[#090D16]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Cómo trabajamos?</h2>
            <p className="text-slate-400">Un camino claro, ágil y sin fricciones desde la idea inicial hasta el despliegue en producción.</p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="text-xl font-bold text-blue-500 bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Entendimiento & Diagnóstico</h3>
                <p className="text-slate-400 text-sm">Analizamos tu modelo de negocio actual, identificamos cuellos de botella y definimos el alcance técnico ideal.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="text-xl font-bold text-indigo-500 bg-indigo-500/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Arquitectura & Desarrollo Ágil</h3>
                <p className="text-slate-400 text-sm">Construimos el software utilizando código limpio, interfaces fluidas, seguridad avanzada y APIs estables.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="text-xl font-bold text-emerald-500 bg-emerald-500/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Despliegue & Monitoreo</h3>
                <p className="text-slate-400 text-sm">Lanzamos tu plataforma al entorno de producción de forma segura y garantizamos su correcto funcionamiento con soporte continuo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CONVERSIÓN EN ALTA (CTA) */}
      <section className="py-24 relative overflow-hidden bg-[#090D16] border-t border-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[120px] mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            ¿Listo para llevar tu operación <br class="hidden sm:inline" />al siguiente nivel?
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-10">
            Hablemos por WhatsApp. Cuéntame qué necesita tu negocio y diseñemos una solución robusta, moderna y escalable.
          </p>

          {/* BOTÓN DE WHATSAPP CON MENSAJE SEGURO Y PERSONALIZADO */}
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-emerald-950/20 group"
          >
            <svg className="w-6 h-6 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.179.001 6.169 1.24 8.419 3.496 2.25 2.256 3.487 5.245 3.485 8.426-.005 6.617-5.343 11.964-11.913 11.964-2.006-.001-3.974-.506-5.729-1.46L0 24zm6.57-4.059l.375.223c1.51.896 3.247 1.369 5.023 1.37h.005c5.485 0 9.948-4.464 9.952-9.952.002-2.66-1.033-5.159-2.908-7.037C17.143 2.668 14.643 1.63 11.972 1.63c-5.491 0-9.954 4.465-9.959 9.954-.002 1.834.48 3.623 1.396 5.2l.245.422L2.651 21.3l4.015-1.053z"/>
            </svg>
            Escríbenos por WhatsApp
          </a>
          
          <span className="block text-xs text-slate-500 mt-4">Respuesta rápida • Disponible para todo el Perú y LATAM</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-900 bg-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>
            © 2026 Bluevory. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <span className="text-slate-400">Lima, Perú</span>
          </div>
        </div>
      </footer>

    </div>
  );
}