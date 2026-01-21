"use client";

import React, { useState } from 'react';
import { Sparkles, CheckCircle, ChevronRight, Lightbulb, PlayCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { generateStepByStep, Step } from '../services/geminiService';

const StepByStepGuide = () => {
  const [task, setTask] = useState('');
  const [steps, setSteps] = useState<Step[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');

  const exampleTasks = [
    'Tạo biểu đồ doanh thu',
    'Sử dụng VLOOKUP',
    'Tạo Pivot Table',
    'Conditional Formatting'
  ];

  const handleGenerate = async () => {
    if (!task.trim()) return;
    setIsLoading(true);
    setSteps([]);
    setActiveStep(0);
    setError('');
    try {
      const result = await generateStepByStep(task);
      setSteps(result.steps);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Đã xảy ra lỗi!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="step-by-step" className="py-24 bg-[#030712] px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-500/5 blur-[100px] -z-10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Hướng Dẫn Từng Bước</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Mô tả task bạn muốn thực hiện, AI sẽ hướng dẫn từng bước chi tiết để bạn làm chủ Excel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Input Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl">
              <label className="block text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Dự án Excel của bạn
              </label>
              
              <textarea
                className="w-full min-h-[160px] p-6 text-lg bg-black/40 border border-white/10 rounded-2xl focus:border-emerald-500 transition-all outline-none resize-none text-white placeholder:text-gray-600 shadow-inner"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Ví dụ: Tôi muốn tạo biểu đồ cột hiển thị doanh thu theo tháng từ dữ liệu có sẵn..."
              />

              <button
                onClick={handleGenerate}
                disabled={isLoading || !task.trim()}
                className={`mt-6 w-full py-4 text-white font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg ${
                  isLoading || !task.trim() 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98]'
                }`}
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Sparkles className="w-6 h-6" />
                )}
                {isLoading ? 'Đang soạn bài học...' : 'Tạo hướng dẫn'}
              </button>

              <div className="mt-8">
                <p className="text-xs font-bold text-white/30 mb-3 uppercase tracking-widest">Gợi ý từ AI:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleTasks.map((ex, i) => (
                    <button 
                      key={i} 
                      onClick={() => setTask(ex)}
                      className="px-4 py-2 bg-white/5 text-gray-400 hover:bg-emerald-500/10 hover:text-emerald-400 rounded-xl text-xs font-bold transition-all border border-white/10"
                    >
                      {ex}
                    </button>
                  ))}
                </div>
              </div>
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-medium">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Steps Side */}
          <div className="lg:col-span-7">
            {steps.length > 0 ? (
              <div className="space-y-6">
                {/* Progress Bar */}
                <div className="p-6 bg-emerald-600 rounded-3xl text-white shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-lg">Tiến độ của bạn</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold">
                      {activeStep}/{steps.length} Bước
                    </span>
                  </div>
                  <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                    <div 
                      className="bg-white h-full transition-all duration-500 ease-out"
                      style={{ width: `${(activeStep / steps.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Step List */}
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`group transition-all duration-300 rounded-[2rem] border ${
                        activeStep === index 
                          ? 'border-emerald-500/50 bg-emerald-500/5' 
                          : 'border-white/5 bg-white/5 hover:border-white/10'
                      }`}
                    >
                      <button 
                        onClick={() => setActiveStep(index)}
                        className="w-full text-left p-6 flex items-start gap-4"
                      >
                        <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-lg transition-colors ${
                          activeStep === index ? 'bg-emerald-500 text-black' : 'bg-white/5 text-gray-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-grow">
                          <h3 className={`font-bold text-lg transition-colors ${
                            activeStep === index ? 'text-white' : 'text-gray-400'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-gray-500 text-sm mt-1">{step.description}</p>
                        </div>
                        <ChevronRight className={`w-6 h-6 text-gray-600 transition-transform ${activeStep === index ? 'rotate-90 text-emerald-500' : ''}`} />
                      </button>

                      {activeStep === index && (
                        <div className="px-6 pb-8 pt-2 animate-in slide-in-from-top-4 duration-300">
                          <div className="bg-black/20 rounded-2xl p-6 border border-white/5 space-y-4">
                            <h4 className="font-bold text-emerald-400 border-b border-white/5 pb-3 flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Chi tiết thực hiện:
                            </h4>
                            <ul className="space-y-3">
                              {step.details.map((detail, idx) => (
                                <li key={idx} className="flex gap-3 text-gray-400 leading-relaxed text-base">
                                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>

                            {step.tips && (
                              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 flex gap-3 text-sm italic">
                                <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-blue-200/70">{step.tips}</span>
                              </div>
                            )}

                            {activeStep === steps.length - 1 ? (
                              <button 
                                onClick={() => setActiveStep(steps.length)}
                                className="w-full mt-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
                              >
                                Hoàn thành tất cả
                              </button>
                            ) : (
                              <div className="flex gap-3 mt-6">
                                {index > 0 && (
                                  <button 
                                    onClick={(e) => { e.stopPropagation(); setActiveStep(index - 1); }}
                                    className="flex-1 py-3 bg-white/5 border border-white/10 text-gray-400 rounded-xl font-bold hover:bg-white/10 flex items-center justify-center gap-2"
                                  >
                                    <ArrowLeft className="w-4 h-4" /> Quay lại
                                  </button>
                                )}
                                <button 
                                  onClick={(e) => { e.stopPropagation(); setActiveStep(index + 1); }}
                                  className="flex-[2] py-3 bg-emerald-500 text-black rounded-xl font-black hover:bg-emerald-400 flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20"
                                >
                                  Bước tiếp theo <ArrowRight className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Congrats Card */}
                {activeStep === steps.length && (
                  <div className="p-12 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl text-white text-center shadow-2xl animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-14 h-14" />
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4">Tuyệt vời!</h3>
                    <p className="text-emerald-50 text-xl font-light mb-8 max-w-md mx-auto">
                      Bạn đã hoàn thành toàn bộ lộ trình làm chủ task này. Áp dụng ngay vào Excel của bạn thôi!
                    </p>
                    <button 
                      onClick={() => setActiveStep(0)}
                      className="px-8 py-3 bg-white text-emerald-600 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg"
                    >
                      Bắt đầu lại
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 border-2 border-dashed border-white/10 rounded-[3rem] bg-white/5">
                <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8">
                  <Sparkles className="w-12 h-12 text-white/20" />
                </div>
                <h3 className="text-xl font-bold text-gray-500">Đang chờ nhiệm vụ của bạn...</h3>
                <p className="text-gray-600 text-center max-w-xs mt-2 font-light">
                  Hãy mô tả task Excel bạn muốn làm bên trái để AI lập giáo án chi tiết.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStepGuide;
