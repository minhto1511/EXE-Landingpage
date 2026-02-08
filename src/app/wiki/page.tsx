import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { excelTopics } from '@/data/excel-wiki';
import { Book, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wiki Excel - Tra cứu hàm & Thủ thuật Excel',
  description: 'Thư viện hướng dẫn chi tiết các hàm Excel phổ biến như VLOOKUP, IF, SUMIF... kèm ví dụ minh họa và giải thích dễ hiểu.',
  openGraph: {
    title: 'Wiki Excel - Tra cứu hàm & Thủ thuật Excel',
    description: 'Thư viện hướng dẫn chi tiết các hàm Excel phổ biến.',
  },
};

export default function WikiIndexPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest mb-4 border border-blue-500/20">
              Kiến thức
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Wiki <span className="text-emerald-500">Excel</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Tra cứu nhanh cách sử dụng các hàm Excel thông dụng. Giải thích chi tiết, ví dụ thực tế và công thức mẫu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {excelTopics.map((topic) => (
              <Link 
                key={topic.slug} 
                href={`/wiki/${topic.slug}`}
                className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                    <Book className="w-6 h-6 text-emerald-400" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {topic.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                  {topic.content.intro}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {topic.seoKeywords.slice(0, 3).map((kw, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      {kw}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
