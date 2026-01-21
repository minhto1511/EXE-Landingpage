import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu chuyện - Hành trình sáng tạo EOffice Tutor AI",
  description: "Khám phá hành trình từ ý tưởng đến sản phẩm của EOffice Tutor AI. Biến nỗi sợ Excel thành siêu năng lực với trí tuệ nhân tạo.",
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
