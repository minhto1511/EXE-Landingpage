import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tải Excel Add-in AI - Cài đặt EOffice Tutor AI",
  description: "Tải và cài đặt Excel Add-in AI - EOffice Tutor AI. Trợ lý Excel thông minh nhất cho người Việt. Hỗ trợ Excel Online và Desktop.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Tải EOffice Tutor AI - Trợ lý Excel thông minh",
    description: "Tải và cài đặt miễn phí. Dùng thử 3 ngày không giới hạn.",
    url: "https://eofficeai.io.vn/download",
  },
};

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
