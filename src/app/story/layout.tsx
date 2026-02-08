import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu chuyện EOffice Tutor AI - Sáng tạo Excel Add-in AI Việt",
  description: "Hành trình xây dựng Excel Add-in AI cho người Việt. Biến nỗi sợ hàm thành siêu năng lực với EOffice Tutor AI.",
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Câu chuyện EOffice Tutor AI",
    description: "Hành trình sáng tạo - Biến nỗi sợ Excel thành siêu năng lực.",
    url: "https://eofficeai.io.vn/story",
  },
};

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
