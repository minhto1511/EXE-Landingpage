"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Languages, Zap, Globe, Layout } from 'lucide-react';
import { cn } from '../lib/utils';

const FeaturesSection = () => {
  const cards = [
    {
      title: "Độ chính xác",
      desc: "Trí tuệ nhân tạo được đào tạo chuyên sâu về cấu trúc Excel.",
      icon: ShieldCheck,
      className: "md:col-span-2 md:row-span-1 bg-emerald-500/10 border-emerald-500/20",
      iconColor: "text-emerald-400"
    },
    {
      title: "Giải thích",
      desc: "Nhận lời giải chi tiết cho từng tham số.",
      icon: Layout,
      className: "md:col-span-1 md:row-span-2 bg-blue-500/10 border-blue-500/20",
      iconColor: "text-blue-400"
    },
    {
      title: "Hỗ trợ Tiếng Việt",
      desc: "Hiểu tiếng Việt tự nhiên.",
      icon: Languages,
      className: "md:col-span-1 md:row-span-1 bg-purple-500/10 border-purple-500/20",
      iconColor: "text-purple-400"
    },
    {
      title: "Tốc độ",
      desc: "Phản hồi chỉ trong vài giây.",
      icon: Zap,
      className: "md:col-span-1 md:row-span-1 bg-orange-500/10 border-orange-500/20",
      iconColor: "text-orange-400"
    },
    {
      title: "Đa nền tảng",
      desc: "Excel Online và App.",
      icon: Globe,
      className: "md:col-span-1 md:row-span-1 bg-cyan-500/10 border-cyan-500/20",
      iconColor: "text-cyan-400"
    },
  ];

  return (
    <section className="py-32 bg-[#030712] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Sức mạnh Toàn diện.</h2>
            <p className="text-gray-500 text-lg">Giao diện lưới hiện đại giúp bạn bao quát toàn bộ sức mạnh của EOffice Tutor AI trong một cái nhìn.</p>
          </div>
          <div className="text-emerald-400 font-mono text-sm uppercase tracking-widest hidden md:block">
            Tính năng // 001
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "p-8 rounded-[2.5rem] border backdrop-blur-3xl flex flex-col justify-between group cursor-default transition-all duration-500",
                card.className
              )}
            >
              <card.icon className={cn("w-10 h-10 mb-8 transition-transform group-hover:rotate-12", card.iconColor)} />
              <div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight">{card.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
