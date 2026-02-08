import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Mail, MessageSquare, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên hệ Hỗ trợ Excel Add-in - EOffice Tutor AI 24/7",
  description: "Liên hệ đội ngũ EOffice Tutor AI để được hỗ trợ cài đặt Excel Add-in AI qua Hotline, Email hoặc Zalo nhanh nhất.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Hỗ trợ Excel Add-in AI - EOffice Tutor AI 24/7",
    description: "Liên hệ đội ngũ hỗ trợ cài đặt và sử dụng Excel Add-in AI.",
    url: "https://eofficeai.io.vn/contact",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-8 border-l-8 border-emerald-500 pl-6">Liên hệ với chúng tôi</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-emerald-50 rounded-3xl text-center border border-emerald-100">
            <Mail className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-bold text-emerald-900 mb-2">Email</h3>
            <p className="text-emerald-800/70 text-sm">support@eofficial.ai</p>
          </div>
          <div className="p-8 bg-blue-50 rounded-3xl text-center border border-blue-100">
            <MessageSquare className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-blue-900 mb-2">Zalo</h3>
            <p className="text-blue-800/70 text-sm">085 511 8858</p>
          </div>
          <div className="p-8 bg-purple-50 rounded-3xl text-center border border-purple-100">
            <Phone className="w-10 h-10 text-purple-600 mx-auto mb-4" />
            <h3 className="font-bold text-purple-900 mb-2">Hotline</h3>
            <p className="text-purple-800/70 text-sm">085 511 8858</p>
          </div>
        </div>
        
        <form className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-emerald-500/5 border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold text-gray-700 ml-1">Họ tên</label>
              <input id="name" type="text" placeholder="Nguyễn Văn A" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email</label>
              <input id="email" type="email" placeholder="example@gmail.com" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-bold text-gray-700 ml-1">Lời nhắn</label>
            <textarea id="message" placeholder="Chúng tôi có thể giúp gì cho bạn?" className="w-full p-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-emerald-500 outline-none min-h-[160px] transition-all" />
          </div>
          <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-lg rounded-2xl shadow-lg transition-all active:scale-95">
            Gửi Tin Nhắn Ngay
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
