"use client";

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Download, Monitor, Sparkles, Globe, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DesktopGuidePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const desktopSteps = [
    {
      title: "Tải & Chuẩn bị",
      desc: "Tải file manifest.xml và lưu vào một thư mục cố định (ví dụ C:\\Addin).",
      icon: <Download className="w-6 h-6 text-blue-500" />,
      action: (
        <a 
          href="https://excel-add-in-six.vercel.app/manifest.xml" 
          download 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-500/20 transition-all mt-4"
        >
          <Download className="w-4 h-4" /> Tải Manifest.xml
        </a>
      )
    },
    {
      title: "Chia sẻ thư mục",
      desc: "Chuột phải vào thư mục -> Properties -> Sharing -> Share. Copy đường dẫn 'Network Path'.",
      icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: "Cấu hình Excel",
      desc: "Options -> Trust Center -> Trusted Add-in Catalogs. Dán đường dẫn -> Add Catalog -> Chọn 'Show in Menu'.",
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Cài đặt hoàn tất",
      desc: "Vào tab Chèn (Insert) -> Tiện ích (Add-ins) -> Thư mục dùng chung (Shared Folder) -> Chọn EOfficial Tutor AI.",
      icon: <Sparkles className="w-6 h-6 text-blue-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30">
      <Header />
      
      <main className="pt-40 pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              Hướng Dẫn <span className="text-blue-500">Cài Đặt</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Làm theo 4 bước dưới đây để tích hợp trợ lý EOfficial Tutor AI vào phiên bản Excel cài trên máy tính của bạn.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-16">
            <div className="p-1 bg-white/5 border border-white/10 rounded-2xl flex gap-1">
              <Link 
                href="/install-guide"
                className="px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 text-white/50 hover:text-white"
              >
                <Globe className="w-4 h-4" /> Bản Excel Online (Web)
              </Link>
              <div 
                className="px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 bg-blue-500 text-black shadow-lg shadow-blue-500/20"
              >
                <Monitor className="w-4 h-4" /> 
                Excel Desktop
              </div>
            </div>
          </div>

          <div className="space-y-12 mb-20">
            {desktopSteps.map((step, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-20 group"
              >
                {index !== desktopSteps.length - 1 && (
                  <div className="absolute left-[31px] top-16 bottom-[-48px] w-[2px] bg-white/5 group-hover:bg-emerald-500/20 transition-colors" />
                )}
                
                <div className="absolute left-0 top-0 w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-emerald-500/50 transition-all shadow-xl">
                  <span className="text-sm font-black text-white/20 group-hover:text-emerald-500 absolute -top-4 -left-4">0{index + 1}</span>
                  {step.icon}
                </div>
                
                <div className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 group-hover:bg-white/[0.04] transition-all">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                  {step.action}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Help CTA */}
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-blue-600 text-white text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <ExternalLink className="w-32 h-32" />
            </div>
            <h2 className="text-3xl font-black mb-4 uppercase italic">Cần hỗ trợ trực tiếp?</h2>
            <p className="font-bold mb-8 opacity-80 max-w-md mx-auto">
              Hotline 24/7 luôn sẵn sàng hỗ trợ bạn cài đặt qua Teamviewer hoặc Ultraview.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="tel:0855118858"
                className="px-8 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                085 511 8858
              </Link>
              <a 
                href="https://www.facebook.com/EOfficialTutorAI" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-400/20 border border-white/10 text-white font-black rounded-2xl hover:bg-blue-400/30 transition-all flex items-center justify-center gap-2"
              >
                Nhắn tin Fanpage
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
