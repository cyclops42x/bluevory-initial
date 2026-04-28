"use client";
import React, { useState, useEffect } from 'react';

// Logo corregido: BV con colores Azul y Marfil
const BluevoryLogo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 drop-shadow-sm">
    {/* Fondo blanco puro */}
    <rect width="100" height="100" rx="28" fill="#FFFFFF" />
    {/* La "B" en un Marfil oscuro (Beige cálido) */}
    <path d="M25 30V70H45C53.2843 70 60 63.2843 60 55C60 50.5 58 46.5 54 44.5C57 42.5 59 39.5 59 36C59 29.3726 53.6274 24 47 24H25V30Z" fill="#FFF9E6" />
    {/* La "V" integrada en Azul Real */}
    <path d="M50 45L62 72L74 45" stroke="#2563eb" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Detalle en BLANCO sobre la B para visibilidad */}
    <path d="M33 34H45C48 34 50 36 50 39C50 42 48 44 45 44H33V34ZM33 50H47C50 50 52 52 52 55C52 58 50 60 47 60H33V50Z" fill="#FFFFFF" />
  </svg>
);

export default function Home() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [isActive, seconds]);

  if (!mounted) return null;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    /* Fondo cambiado a un tono Marfil muy tenue para coherencia de marca */
    <div className="min-h-screen w-full bg-[#FAF9F6] text-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Gradientes sutiles con los nuevos colores */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-blue-100/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-amber-50/50 blur-[100px] rounded-full" />
      </div>

      <div className="z-10 w-full max-w-2xl flex flex-col items-center">
        
        <header className="mb-16 text-center flex flex-col items-center">
          <BluevoryLogo />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-500 animate-pulse' : 'bg-slate-300'}`} />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              {isActive ? 'System_Active' : 'System_Ready'}
            </span>
          </div>

          <h1 className="text-6xl font-light tracking-[-0.05em] text-slate-900">
            blue<span className="font-bold text-blue-600">vory</span>
          </h1>
          <p className="text-slate-400 text-sm mt-3 font-medium tracking-wide">High-Performance Backend Architecture</p>
        </header>

        {/* Panel principal (Blanco Marfil puro) */}
        <section className="w-full bg-white border border-slate-100 p-2 rounded-[3.5rem] shadow-[0_30px_60px_rgba(15,23,42,0.06)] mb-12 transition-all duration-500">
          <div className="bg-[#FFFFF0]/30 border border-white rounded-[3rem] p-12 flex flex-col items-center">
            
            <div className="text-[120px] md:text-[170px] font-black leading-none tracking-tighter text-slate-900 tabular-nums drop-shadow-sm">
              {formatTime(seconds)}
            </div>
            
            <div className="flex gap-4 mt-12 w-full max-w-sm">
              <button 
                onClick={() => setIsActive(!isActive)}
                className={`flex-[2] py-5 rounded-[2rem] font-bold text-xs tracking-[0.2em] transition-all active:scale-95 ${
                  isActive 
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200'
                }`}
              >
                {isActive ? 'PAUSE_ENGINE' : 'INITIALIZE_FOCUS'}
              </button>
              
              <button 
                onClick={() => {setIsActive(false); setSeconds(25*60);}}
                className="flex-1 bg-white border border-slate-200 text-slate-400 py-5 rounded-[2rem] font-bold text-[10px] tracking-widest hover:text-slate-600 hover:border-slate-300 transition-all"
              >
                RESET
              </button>
            </div>
          </div>
        </section>

        <footer className="w-full grid grid-cols-2 gap-6 max-w-lg">
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Concept</p>
            <p className="text-sm font-semibold text-blue-900/70">Bluevory</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
            <p className="text-sm font-semibold text-slate-700 uppercase">Lima, PE</p>
          </div>
        </footer>
      </div>

      <div className="mt-24 text-slate-300 text-[9px] font-bold tracking-[0.3em] uppercase">
        © 2026 Bluevory • Specialized Architecture
      </div>
    </div>
  );
}