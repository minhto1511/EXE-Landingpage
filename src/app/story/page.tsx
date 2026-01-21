"use client";

import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { motion } from 'framer-motion';
import { Sparkles, Brain, Rocket, Heart, Zap, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function StoryPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30">
      <Header />
      
      <main className="pt-32 pb-24 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-32 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -z-10" />
            
            <motion.div {...fadeInUp}>
              <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block">
                Hành Trình Của Chúng Tôi
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                Biến Nỗi Sợ <span className="text-emerald-500">Excel</span> <br />
                Thành Siêu Năng Lực.
              </h1>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed italic">
                &quot;Chúng tôi không chỉ xây dựng một phần mềm, chúng tôi đang xây dựng một người thầy tận tâm.&quot;
              </p>
            </motion.div>
          </section>

          {/* The Problem Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            <motion.div 
              {...fadeInUp} transition={{ delay: 0.2 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nỗi ám ảnh hàm</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                Từng mất hàng giờ chỉ để tìm một dấu phẩy đặt sai trong hàm VLOOKUP? Chúng tôi cũng vậy. Đó là lúc chúng tôi quyết định phải thay đổi.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp} transition={{ delay: 0.3 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group lg:scale-110 relative z-10"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sức mạnh của trí tuệ</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                Tại sao con người phải làm việc như máy móc? AI ra đời để hiểu ý định của bạn và chuyển hóa nó thành công thức hoàn hảo chỉ trong tích tắc.
              </p>
            </motion.div>

            <motion.div 
              {...fadeInUp} transition={{ delay: 0.4 }}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Coffee className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Dành cho người Việt</h3>
              <p className="text-gray-500 leading-relaxed font-medium text-sm">
                Hầu hết công cụ AI đều dùng tiếng Anh. Chúng tôi muốn tạo ra thứ gì đó mượt mà, hiểu từng từ ngữ Việt Nam để mọi dân văn phòng Việt đều có thể dùng.
              </p>
            </motion.div>
          </section>

          {/* The Vision Section */}
          <section className="mb-40 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div {...fadeInUp} className="space-y-8">
                <h2 className="text-4xl font-black tracking-tight">
                  Tầm nhìn <span className="text-emerald-500">2026</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center font-black text-emerald-500">01</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Đơn giản hoá tối đa</h4>
                      <p className="text-gray-500 leading-relaxed">Mọi tác vụ phức tạp nhất đều phải được giải quyết qua một câu lệnh ngôn ngữ tự nhiên.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center font-black text-emerald-500">02</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Đào tạo thế hệ mới</h4>
                      <p className="text-gray-500 leading-relaxed">Không chỉ làm hộ, chúng tôi giúp người dùng hiểu bản chất của Excel thông qua các giáo án AI.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center font-black text-emerald-500">03</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Hệ sinh thái thông minh</h4>
                      <p className="text-gray-500 leading-relaxed">Mở rộng ra toàn bộ bộ công cụ Google Sheets và các nền tảng văn phòng phổ biến.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10" />
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 rounded-[4rem] p-12 aspect-square flex flex-col justify-center items-center text-center shadow-2xl backdrop-blur-3xl"
                >
                  <Rocket className="w-24 h-24 text-emerald-500 mb-8 animate-bounce" />
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">Cất cánh cùng AI</h3>
                  <p className="text-gray-500 mb-8 max-w-xs font-medium">Hàng nghìn người dùng đã tin tưởng và thay đổi cách họ làm việc với bảng tính.</p>
                  <Link href="/download" className="px-10 py-4 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                    THAM GIA NGAY
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="text-center mb-40">
            <h2 className="text-3xl font-black mb-16 underline decoration-emerald-500 decoration-4 underline-offset-8">Giá trị cốt lõi</h2>
            <div className="flex flex-wrap justify-center gap-20">
              <div className="group">
                <Heart className="w-10 h-10 text-white/20 group-hover:text-red-500 transition-colors mx-auto mb-4" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Tận tâm</span>
              </div>
              <div className="group">
                <Sparkles className="w-10 h-10 text-white/20 group-hover:text-emerald-400 transition-colors mx-auto mb-4" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Sáng tạo</span>
              </div>
              <div className="group">
                <Rocket className="w-10 h-10 text-white/20 group-hover:text-blue-400 transition-colors mx-auto mb-4" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Tốc độ</span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
