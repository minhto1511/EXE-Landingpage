"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Copy, CheckCircle, Wand2, Info } from 'lucide-react';
import { generateExcelFormula } from '../services/geminiService';
import { cn } from '../lib/utils';

const FormulaGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<{formula: string, explanation: string} | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setResult(null);
    try {
      const data = await generateExcelFormula(prompt);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result.formula);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="formula-generator" className="py-32 bg-[#030712] px-4 relative">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Công cụ Tạo Công thức
          </motion.h2>
          <p className="text-gray-400 text-lg">Mô tả logic của bạn bằng tiếng Việt, chúng tôi sẽ lo phần cú pháp.</p>
        </div>

        {/* The Magic Field */}
        <div className="relative group p-1 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent hover:from-emerald-500/20 transition-all duration-500 shadow-2xl">
          <div className="bg-[#0f172a] rounded-[2.3rem] p-4 flex flex-col md:flex-row items-center gap-4 border border-white/5">
            <div className="flex-grow w-full relative">
              <input 
                type="text"
                value={prompt}
                readOnly
                placeholder="Chọn từ các gợi ý bên dưới để xem demo..."
                className="w-full bg-transparent text-white text-xl p-4 outline-none placeholder:text-gray-600 font-medium cursor-default"
              />
            </div>
            
            <button 
              onClick={handleGenerate}
              disabled={isLoading || !prompt.trim()}
              className={cn(
                "w-full md:w-auto px-8 py-4 rounded-3xl font-black flex items-center justify-center gap-3 transition-all",
                isLoading || !prompt.trim() 
                  ? "bg-gray-800 text-gray-500" 
                  : "bg-emerald-500 text-black hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              )}
            >
              {isLoading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-5 h-5 border-2 border-black border-t-transparent rounded-full" />
              ) : (
                <Wand2 className="w-5 h-5" />
              )}
              TẠO CÔNG THỨC
            </button>
          </div>
        </div>

        {/* Advanced Result Display */}
        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mt-12 group relative"
            >
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10" />
              <div className="bg-[#0f172a]/80 backdrop-blur-3xl rounded-[3rem] p-10 border border-emerald-500/20 shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="flex-grow space-y-6">
                    <div className="flex items-center gap-3 opacity-50">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-widest">Công thức Tối ưu</span>
                    </div>
                    <code className="text-3xl md:text-4xl font-mono font-black text-emerald-400 block break-all leading-tight">
                      {result.formula}
                    </code>
                    
                    <div className="pt-8 border-t border-white/5">
                      <h4 className="flex items-center gap-2 text-white font-bold mb-3">
                        <Info className="w-4 h-4 text-blue-400" />
                        Giải thích logic:
                      </h4>
                      <p className="text-gray-400 leading-relaxed italic text-lg">&quot;{result.explanation}&quot;</p>
                    </div>
                  </div>

                  <button 
                    onClick={copyToClipboard}
                    className="flex-shrink-0 flex items-center gap-2 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold rounded-2xl hover:bg-emerald-500 hover:text-black transition-all"
                  >
                    {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    {copied ? 'ĐÃ SAO CHÉP' : 'SAO CHÉP'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Suggestion Chips - Extra Minimal */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            'Logic VLOOKUP', 
            'Tính tổng cột', 
            'Tách Họ Tên', 
            'So sánh 2 cột', 
            'Tính Thuế TNCN',
            'Đếm có điều kiện', 
            'Định dạng màu',
            'Xóa khoảng trắng',
            'Trích xuất Email'
          ].map((tag) => (
            <button key={tag} onClick={() => {setPrompt(tag); setTimeout(handleGenerate, 100);}} className="px-4 py-2 rounded-full border border-white/5 bg-white/5 text-gray-400 text-[10px] font-bold hover:border-emerald-500 hover:text-emerald-400 transition-all uppercase tracking-widest">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormulaGenerator;
