import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn cài đặt Excel Add-in - Excel Online & Desktop",
  description: "Hướng dẫn chi tiết cách cài đặt Excel Add-in AI (EOfficial Tutor AI) vào Excel Online & Desktop chỉ trong 2 phút. Tải file manifest và bắt đầu ngay.",
  alternates: {
    canonical: "/install-guide",
  },
  openGraph: {
    title: "Hướng dẫn cài đặt EOfficial Tutor AI",
    description: "Cài đặt trợ lý AI vào Excel chỉ trong 2 phút với hướng dẫn chi tiết.",
    url: "https://eofficeai.io.vn/install-guide",
  },
};

export default function InstallGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
