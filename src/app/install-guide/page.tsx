"use client";

import React, { useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Info, CheckCircle2, Globe, Monitor, ExternalLink, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from "../../lib/utils";

export default function InstallGuidePage() {
  const [activeTab, setActiveTab] = useState<'web' | 'desktop'>('web');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const webSteps = [
    {
      title: "Tải file Manifest",
      desc: "Lưu file XML này vào máy tính của bạn. Bạn sẽ dùng file này để tải lên Excel Online.",
      icon: <Download className="w-6 h-6 text-emerald-500" />,
      action: (
        <a 
          href="https://excel-add-in-six.vercel.app/manifest.xml" 
          download 
          target="_blank"
          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-sm font-bold hover:bg-emerald-500/20 transition-all mt-4"
        >
          <Download className="w-4 h-4" /> Tải Manifest.xml
        </a>
      )
    },
    {
      title: "Mở Excel Online",
      desc: "Truy cập phiên bản Excel trên trình duyệt và chuẩn bị đăng nhập.",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      action: (
        <div className="flex flex-col items-start gap-3">
          <a 
            href="https://excel.cloud.microsoft/" 
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-sm font-bold hover:bg-blue-500/20 transition-all mt-4"
          >
            <ExternalLink className="w-4 h-4" /> Truy cập Excel Online
          </a>
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 mt-2">
            <p className="text-[10px] text-orange-400 font-bold uppercase tracking-wider mb-1">
              ⚠️ Lưu ý
            </p>
            <p className="text-[10px] text-gray-400 leading-relaxed italic">
              Tài khoản Microsoft cá nhân (@outlook.com, @hotmail.com) sẽ KHÔNG có menu tải lên Add-in. Hiện tại phương pháp này chỉ hỗ trợ tài khoản tổ chức (Tenant).
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Mở menu Office Add-ins",
      desc: "Chọn tab 'Chèn' (Insert) trên thanh công cụ -> Chọn 'Tiện ích bổ sung' (Office Add-ins).",
      icon: <MousePointer2 className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Tải lên Tiện ích (Upload)",
      desc: "Chọn 'Quản lý Tiện ích của tôi' (Manage My Add-ins) -> 'Tải lên Tiện ích của tôi' (Upload My Add-in) -> Chọn file manifest.xml đã tải ở Bước 1.",
      icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />
    }
  ];





  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              Hướng Dẫn <span className="text-emerald-500">Cài Đặt</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Chỉ mất 2 phút để tích hợp trí tuệ nhân tạo EOffice Tutor AI vào Excel của bạn.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-16">
            <div className="p-1 bg-white/5 border border-white/10 rounded-2xl flex gap-1">
              <button 
                onClick={() => setActiveTab('web')}
                className={cn(
                  "px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2",
                  activeTab === 'web' ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20" : "text-white/50 hover:text-white"
                )}
              >
                <Globe className="w-4 h-4" /> Bản Excel Online (Web)
              </button>
              <button 
                disabled
                className="px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 text-white/20 cursor-not-allowed group relative"
              >
                <Monitor className="w-4 h-4 opacity-30" /> 
                Excel Desktop
                <span className="absolute -top-2 -right-2 bg-gray-800 text-[8px] px-2 py-0.5 rounded-full text-white/50 uppercase tracking-tighter border border-white/5 whitespace-nowrap">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>

          {/* Quick Notice */}
          <motion.div 
            key={activeTab + "-notice"}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex gap-4 mb-16 items-start"
          >
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-400 mb-1 italic">Thông báo: Chỉ hỗ trợ cài đặt trên Excel Online</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Để đảm bảo trải nghiệm AI mượt mà nhất, hiện tại chúng tôi tập trung tối ưu cho phiên bản Web. Bản cài đặt cho Desktop (Windows/Mac) sẽ sớm ra mắt trong thời gian tới.
              </p>
            </div>
          </motion.div>

          {/* Steps Illustration */}
          <div className="space-y-12 mb-20 relative">
            <AnimatePresence mode="wait">
              {activeTab === 'web' ? (
                <motion.div 
                  key="web"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {webSteps.map((step, index) => (
                    <div key={index} className="relative pl-16 group mb-12 last:mb-0">
                      {/* Dot Line */}
                      {index !== webSteps.length - 1 && (
                        <div className="absolute left-[27px] top-14 bottom-[-48px] w-[2px] bg-white/5 group-hover:bg-emerald-500/20 transition-colors" />
                      )}
                      
                      <div className="absolute left-0 top-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-emerald-500/50 transition-all shadow-xl backdrop-blur-3xl">
                        {step.icon}
                      </div>
                      
                      <div className="pt-2">
                        <h3 className="text-xl font-black mb-3 text-white/90">Bước {index + 1}: {step.title}</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">
                          {step.desc}
                        </p>
                        {step.action}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="coming-soon"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-20 text-center"
                >
                   <Monitor className="w-16 h-16 text-white/10 mx-auto mb-6" />
                   <h3 className="text-2xl font-black text-white/30 italic">Tính năng cài đặt Desktop đang được phát triển...</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Help CTA */}
          <motion.div 
            {...fadeInUp}
            className="p-12 rounded-[3rem] bg-emerald-500 text-black text-center relative overflow-hidden group"
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
                className="px-8 py-4 bg-black text-white font-black rounded-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
              >
                085 511 8858
              </Link>
              <a 
                href="https://www.facebook.com/EOfficialTutorAI" 
                target="_blank"
                className="px-8 py-4 bg-white/20 border border-black/10 text-black font-black rounded-2xl hover:bg-white/30 transition-all flex items-center justify-center gap-2"
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
