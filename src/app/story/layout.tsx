import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Câu chuyện - Hành trình sáng tạo EOfficial Tutor AI",
  description: "Khám phá hành trình từ ý tưởng đến sản phẩm của EOfficial Tutor AI. Biến nỗi sợ Excel thành siêu năng lực với trí tuệ nhân tạo.",
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Câu chuyện EOfficial Tutor AI",
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
