"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Github } from 'lucide-react';
import { cn } from '../lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-500 max-w-7xl mx-auto px-4",
      )}
    >
      <div className={cn(
        "flex items-center justify-between p-2 rounded-full border transition-all duration-500 overflow-hidden",
        scrolled 
          ? "bg-black/60 backdrop-blur-2xl border-white/10 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 pl-4 group">
          <div className="bg-emerald-500 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Sparkles className="w-5 h-5 text-black" fill="black" />
          </div>
          <span className="font-black text-lg tracking-tighter text-white uppercase italic">
            EOffice <span className="text-emerald-500">Tutor AI</span>
          </span>
        </Link>

        {/* Minimal Nav */}
        <nav className="hidden md:flex items-center gap-1 whitespace-nowrap flex-nowrap">
          {[
            { name: 'Tính năng', href: '/#features' },
            { name: 'Wiki Hàm', href: '/wiki' },
            { name: 'Hướng dẫn', href: '/#guide' },
            { name: 'Câu chuyện', href: '/story' },
            { name: 'Tạo công thức', href: '/#generator' }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white/50 hover:text-emerald-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="w-[1px] h-4 bg-white/10 mx-2" />
          <a 
            href="https://github.com/minhto1511/Excel-Add-in" 
            target="_blank" 
            rel="noopener noreferrer" 
            title="GitHub Repository"
            className="p-2 text-white/50 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>

        {/* Status Action */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          <Link 
            href="tel:0855118858"
            className="hidden lg:flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all text-[10px] uppercase tracking-widest group"
          >
            <div className="relative flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <div className="absolute inset-0 w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            </div>
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">Hotline: 085 511 8858</span>
          </Link>
          
          <Link 
            href="/download"
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-500 text-black font-black rounded-full hover:bg-emerald-400 transition-all text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            Bắt đầu
          </Link>

          {/* Mobile indicator for small screens */}
          <div className="lg:hidden w-8 h-8 flex items-center justify-center bg-white/5 rounded-full border border-white/10">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
