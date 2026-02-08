import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Sparkles, AlertTriangle, BookOpen, Quote } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { excelTopics } from '@/data/excel-wiki';

// Force static generation for these paths
export async function generateStaticParams() {
  return excelTopics.map((topic) => ({
    slug: topic.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

// Start of Selection
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = excelTopics.find((t) => t.slug === slug);

  if (!topic) {
    return {
      title: 'Không tìm thấy trang',
    };
  }

  return {
    title: topic.seoTitle,
    description: topic.description,
    keywords: topic.seoKeywords,
    openGraph: {
      title: topic.seoTitle,
      description: topic.description,
      type: 'article',
      url: `https://eofficeai.io.vn/wiki/${topic.slug}`,
    },
    alternates: {
      canonical: `/wiki/${topic.slug}`,
    },
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;
  const topic = excelTopics.find((t) => t.slug === slug);

  if (!topic) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-emerald-500/30">
      <Header />
      
      <main className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Quay về trang chủ
          </Link>

          {/* Title Header */}
          <header className="mb-12 border-b border-white/10 pb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-black uppercase tracking-widest mb-4 border border-emerald-500/20">
              Excel Wiki
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              {topic.title}
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl">
              {topic.content.intro}
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Syntax Section */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                  </div>
                  Cú pháp hàm
                </h2>
                
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl font-mono text-emerald-400 text-sm md:text-base break-all shadow-inner">
                  {topic.content.syntax}
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed text-base">
                  <div className="prose prose-invert max-w-none">
                    <ul className="list-disc pl-5 space-y-2 marker:text-emerald-500">
                      {topic.content.syntaxExplain.split('\n- ').map((item, idx) => {
                         const cleanItem = item.replace(/^- /, '');
                         if(!cleanItem.trim()) return null;
                         const [bold, ...rest] = cleanItem.split(':');
                         return (
                           <li key={idx}>
                             <span className="font-bold text-white">{bold.replace(/\*\*/g, '')}:</span> {rest.join(':')}
                           </li>
                         )
                      })}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Examples Section */}
              <section className="space-y-8">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Quote className="w-4 h-4 text-emerald-400" />
                  </div>
                  Ví dụ minh hoạ
                </h2>

                <div className="space-y-6">
                  {topic.content.examples.map((ex, idx) => (
                    <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all">
                      <h3 className="text-xl font-bold mb-3 text-white">{ex.title}</h3>
                      <p className="text-gray-400 mb-6 italic">{ex.scenario}</p>
                      
                      <div className="bg-black/30 p-4 rounded-xl border border-white/5 font-mono text-sm text-emerald-300 mb-4 flex items-center justify-between">
                         <span>{ex.formula}</span>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4 mt-4">
                        <span className="font-bold text-emerald-500">Giải thích:</span> {ex.explanation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Errors */}
              {topic.content.commonErrors && (
                <section className="space-y-6">
                   <h2 className="text-2xl font-bold flex items-center gap-3 text-white">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    </div>
                    Các lỗi thường gặp
                  </h2>
                  <ul className="space-y-3">
                    {topic.content.commonErrors.map((err, idx) => (
                      <li key={idx} className="flex gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-red-200/80 text-sm">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        {err}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            </div>

            {/* Sidebar / CTA */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24">
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-600 to-emerald-800 text-white text-center shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                  
                  <Sparkles className="w-12 h-12 mx-auto mb-6 text-emerald-200 animate-pulse" />
                  <h3 className="text-2xl font-black mb-4 leading-tight">Quá phức tạp?</h3>
                  <p className="text-emerald-100 mb-8 font-medium">
                    Đừng nhớ công thức. Hãy để AI viết hộ bạn ngay trong Excel.
                  </p>
                  
                  <Link 
                    href="/download"
                    className="block w-full py-4 bg-white text-emerald-700 font-black rounded-xl hover:bg-emerald-50 transition-all shadow-lg text-sm uppercase tracking-widest"
                  >
                    Tải Excel Add-in AI
                  </Link>
                  <p className="mt-4 text-[10px] text-emerald-200 uppercase font-bold tracking-widest opacity-70">Dùng thử miễn phí</p>
                </div>

                {/* Related Topics */}
                {topic.related && topic.related.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest mb-4">Bài viết liên quan</h4>
                    <div className="space-y-2">
                       {topic.related.map(slug => {
                          const relatedTopic = excelTopics.find(t => t.slug === slug);
                          if (!relatedTopic) return null;
                          return (
                            <Link 
                              key={slug} 
                              href={`/wiki/${slug}`}
                              className="block p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-sm font-bold text-gray-300 hover:text-white"
                            >
                              {relatedTopic.title}
                            </Link>
                          )
                       })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
