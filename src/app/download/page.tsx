"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Download, Monitor, ShieldCheck, Zap, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DownloadPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30">
      <Header />
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <main className="pt-40 pb-32 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Sparkles className="w-3 h-3" /> Trải nghiệm không giới hạn
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
              Sẵn Sàng Để <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Bứt Phá.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Chọn phiên bản phù hợp để bắt đồng hành cùng trợ lý AI thông minh nhất cho Excel. Miễn phí dùng thử 3 ngày cho mọi tài khoản.
            </p>
          </motion.div>

          {/* Download Cards */}
          <motion.div 
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
          >
            {/* Excel Online */}
            <motion.div 
              variants={fadeInUp}
              className="group relative p-12 rounded-[3.5rem] bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 backdrop-blur-3xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl -z-10 group-hover:bg-emerald-500/20 transition-all" />
              
              <div className="w-16 h-16 bg-emerald-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-black" />
              </div>
              
              <h2 className="text-3xl font-black mb-4 tracking-tight">Excel Online</h2>
              <p className="text-gray-400 mb-10 font-medium italic">Tối ưu cho Office 365 và trình duyệt.</p>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Tự động hóa bằng ngôn ngữ tự nhiên",
                  "Xử lý hàm phức tạp tức thì",
                  "Tiết kiệm 90% thời gian làm việc"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/install-guide"
                className="inline-flex w-full items-center justify-center gap-3 py-5 bg-emerald-500 text-black font-black rounded-2xl hover:bg-emerald-400 hover:scale-[1.02] transition-all shadow-xl shadow-emerald-500/10 uppercase tracking-widest text-xs"
              >
                <Download className="w-5 h-5" /> Xem hướng dẫn cài đặt
              </Link>
            </motion.div>

            {/* Excel App - Coming Soon */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/5 opacity-40 grayscale group overflow-hidden"
            >
              <div className="absolute top-8 right-8 px-4 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-widest">
                Sắp ra mắt
              </div>
              
              <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10">
                <Zap className="w-8 h-8 text-gray-500" />
              </div>
              
              <h2 className="text-3xl font-black mb-4 tracking-tight text-gray-500">Excel App</h2>
              <p className="text-gray-500 mb-10 font-medium italic">Phiên bản Desktop hiệu năng cao.</p>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Chạy mượt trên Windows & Mac",
                  "Hỗ trợ phím tắt nâng cao",
                  "Xử lý dữ liệu ngoại tuyến"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-600 font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-gray-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button disabled className="w-full py-5 bg-white/5 text-gray-600 font-black rounded-2xl border border-white/5 uppercase tracking-widest text-xs cursor-not-allowed">
                Đang phát triển...
              </button>
            </motion.div>
          </motion.div>

          {/* Pricing Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h2 className="text-4xl font-black text-center mb-16 underline decoration-emerald-500 decoration-4 underline-offset-8">Chọn Gói Phù Hợp</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Student Plan */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 flex flex-col hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter italic">Sinh Viên</h3>
                    <p className="text-gray-500 font-medium">Hỗ trợ học tập tối đa</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-emerald-500 tracking-tighter">79k</div>
                    <div className="text-[10px] text-gray-500 font-black uppercase tracking-widest">/ Tháng</div>
                    <div className="text-[10px] text-emerald-500/60 font-medium mt-1 italic">Hoặc 790k/năm</div>
                  </div>
                </div>
                
                <ul className="space-y-5 mb-12 flex-grow">
                  {['Tất cả tính năng AI', 'Giải thích từng bước', 'Trải nghiệm 3 ngày miễn phí', 'Hỗ trợ cộng đồng'].map((f, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-400">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Pro Plan */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative p-12 rounded-[3.5rem] bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border-2 border-emerald-500 shadow-2xl shadow-emerald-500/10 flex flex-col overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-8 py-3 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-bl-3xl">
                  Phổ biến nhất
                </div>
                
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter italic">Chuyên Nghiệp</h3>
                    <p className="text-emerald-400/60 font-medium">Sức mạnh AI tối thượng</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-black text-white tracking-tighter">99k</div>
                    <div className="text-[10px] text-gray-400 font-black uppercase tracking-widest">/ Tháng</div>
                    <div className="text-[10px] text-emerald-400 font-medium mt-1 italic font-black">Hoặc 890k/năm</div>
                  </div>
                </div>
                
                <ul className="space-y-5 mb-12 flex-grow">
                  {['Tính năng AI không giới hạn', 'Tối ưu theo ngành nghề', 'Ưu tiên cập nhật mới', 'Hỗ trợ 24/7 trực tiếp'].map((f, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold text-white">
                      <div className="w-2 h-2 bg-emerald-400 animate-pulse rounded-full" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Section */}
        </div>
      </main>

      <Footer />
    </div>
  );
}
