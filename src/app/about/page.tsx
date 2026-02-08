import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Về EOffice Tutor AI - Excel Add-in AI cho người Việt",
  description: "Tìm hiểu về sứ mệnh dân chủ hóa kiến thức Excel thông qua Excel Add-in AI của EOffice Tutor AI. Chúng tôi giúp bạn hiểu thuật toán và hàm Excel.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Về EOffice Tutor AI - Excel Add-in AI thông minh",
    description: "Tìm hiểu sứ mệnh giúp người Việt làm chủ Excel với trí tuệ nhân tạo.",
    url: "https://eofficeai.io.vn/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-gray-900 mb-8 border-l-8 border-emerald-500 pl-6">Về EOffice Tutor AI</h1>
        <div className="prose prose-emerald prose-lg max-w-none text-gray-600 space-y-6">
          <p className="text-xl">
            EOffice Tutor AI sinh ra với sứ mệnh dân chủ hóa kiến thức Excel thông qua trí tuệ nhân tạo.
          </p>
          <p>
            Chúng tôi hiểu rằng Excel là một công cụ mạnh mẽ nhưng cũng đầy thách thức. Thay vì phải nhớ hàng trăm công thức, 
            bạn chỉ cần nói với AI những gì bạn muốn, và chúng tôi sẽ không chỉ tạo công thức mà còn giúp bạn hiểu cách nó hoạt động.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-12">Tại sao chúng tôi khác biệt?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Tâm thế giáo dục:</strong> Luôn kèm theo giải thích và ví dụ thực tế.</li>
            <li><strong>Chính xác tuyệt đối:</strong> Sử dụng các model AI tiên tiến nhất hiện nay.</li>
            <li><strong>Giao diện bản địa:</strong> Hỗ trợ Tiếng Việt và các định dạng người Việt hay dùng.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
