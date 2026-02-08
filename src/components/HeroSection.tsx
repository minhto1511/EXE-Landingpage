"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#030712] overflow-hidden pt-20">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-grid-pattern" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-[0.2em]">Trợ lý Excel Thế hệ mới</span>
        </motion.div>

        {/* Massive Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-[5rem] lg:text-[7rem] font-black text-white leading-none tracking-[-0.04em] mb-8"
        >
          Excel <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Đơn giản.</span><br />
          Nhờ Trí tuệ.
        </motion.h1>

        {/* Minimal Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-white font-light leading-relaxed mb-12"
        >
          Không còn vật lộn với công thức. **Trợ lý Excel thông minh** EOfficial Tutor AI giúp bạn làm việc nhanh hơn gấp 10 lần.
        </motion.p>

        {/* Premium CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="/download" className="group relative px-10 py-5 bg-emerald-500 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-3 text-lg font-black text-black">
              Bắt đầu miễn phí <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <a href="#guide" className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-bold hover:bg-white/10 transition-all active:scale-95">
            Xem Demo
          </a>
        </motion.div>

        {/* Social Proof / Stats - Minimal */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 flex flex-wrap justify-center gap-x-12 gap-y-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {[
            'Hỗ trợ Excel Online & App', 
            '100K+ Công thức đã tạo', 
            'Độ chính xác cực cao'
          ].map((stat) => (
            <span key={stat} className="text-sm font-bold text-white tracking-widest uppercase">{stat}</span>
          ))}
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-[#030712] to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
