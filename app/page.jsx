"use client";
import React, { useState, useEffect } from 'react';

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
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  if (!mounted) return null;

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] text-slate-900 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* Fondo con gradientes suaves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-100/50 blur-[100px] rounded-full" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-indigo-50/50 blur-[80px] rounded-full" />
      </div>

      <div className="z-10 w-full max-w-2xl flex flex-col items-center">
        
        {/* Header Elegante */}
        <header className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">System Online</span>
          </div>
          <h1 className="text-5xl font-light tracking-[-0.04em] text-slate-900">
            bluevory<span className="font-bold text-blue-600">.</span>
          </h1>
          <p className="text-slate-400 text-sm mt-2 font-medium tracking-tight">Engineering Focus & Architecture</p>
        </header>

        {/* El Temporizador (Efecto Elevado) */}
        <section className="w-full bg-white/70 border border-white p-2 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] backdrop-blur-md mb-12">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-12 flex flex-col items-center shadow-sm">
            
            <div className="text-[120px] md:text-[160px] font-bold leading-none tracking-tighter text-slate-900 tabular-nums">
              {formatTime(seconds)}
            </div>
            
            <div className="flex gap-4 mt-10 w-full max-w-xs">
              <button 
                onClick={() => setIsActive(!isActive)}
                className={`flex-[2] py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-sm ${
                  isActive 
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                  : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200'
                }`}
              >
                {isActive ? 'PAUSE' : 'START FOCUS'}
              </button>
              
              <button 
                onClick={() => {setIsActive(false); setSeconds(25*60);}}
                className="flex-1 bg-white border border-slate-200 text-slate-400 py-4 rounded-2xl font-bold text-sm hover:border-slate-300 hover:text-slate-600 transition-all"
              >
                RESET
              </button>
            </div>
          </div>
        </section>

        {/* Footer Informativo */}
        <footer className="w-full grid grid-cols-2 gap-4">
          <div className="bg-white/50 border border-white p-4 rounded-2xl backdrop-blur-sm text-center shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Project</p>
            <p className="text-sm font-semibold text-slate-700 italic">Bluevory Solutions</p>
          </div>
          <div className="bg-white/50 border border-white p-4 rounded-2xl backdrop-blur-sm text-center shadow-sm">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Region</p>
            <p className="text-sm font-semibold text-slate-700">Lima, PE</p>
          </div>
        </footer>

      </div>

      {/* Copyright sutil */}
      <div className="mt-20 text-slate-300 text-[10px] font-medium tracking-[0.2em] uppercase">
        © 2026 Bluevory Studio
      </div>
    </div>
  );
}