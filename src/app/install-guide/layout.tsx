import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn cài đặt - Excel Online & Desktop",
  description: "Hướng dẫn chi tiết cách cài đặt EOffice Tutor AI vào Excel Online chỉ trong 2 phút. Tải file manifest và làm theo các bước đơn giản.",
  alternates: {
    canonical: "/install-guide",
  },
  openGraph: {
    title: "Hướng dẫn cài đặt EOffice Tutor AI",
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
