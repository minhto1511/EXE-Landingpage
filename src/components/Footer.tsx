"use client";

import React from 'react';
import { Sparkles, Facebook, Github, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#030712] py-8 px-6 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-500 flex-shrink-0">
          <div className="bg-emerald-500 p-1 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Sparkles className="w-4 h-4 text-black" fill="black" />
          </div>
          <span className="font-black text-xs tracking-tighter text-white uppercase italic">
            EOfficial <span className="text-emerald-500">Tutor AI</span>
          </span>
        </div>

        {/* Middle: Contact Info (Inline) */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-white/30 whitespace-nowrap">
          <a href="tel:0855118858" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
            <Phone className="w-3 h-3" /> 085 511 8858
          </a>
          <div className="w-1 h-1 bg-white/10 rounded-full hidden sm:block" />
          <a href="mailto:eofficialtutorai@gmail.com" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
            <Mail className="w-3 h-3" /> eofficialtutorai@gmail.com
          </a>
          <div className="w-1 h-1 bg-white/10 rounded-full hidden sm:block" />
          <a href="https://www.facebook.com/EOfficialTutorAI" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Facebook className="w-3 h-3" /> Fanpage
          </a>
          <div className="w-1 h-1 bg-white/10 rounded-full hidden sm:block" />
          <a href="https://github.com/minhto1511/Excel-Add-in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Github className="w-3 h-3" /> GitHub
          </a>
        </div>

        {/* Right: Copyright */}
        <p className="text-[9px] font-black text-white/15 tracking-[0.2em] uppercase whitespace-nowrap flex-shrink-0">
          © 2025 EOfficial Tutor AI.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
