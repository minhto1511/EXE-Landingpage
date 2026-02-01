import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tải xuống - Cài đặt EOfficial Tutor AI",
  description: "Tải và cài đặt EOfficial Tutor AI - Trợ lý Excel thông minh. Miễn phí dùng thử 3 ngày. Hỗ trợ Excel Online và sắp ra mắt phiên bản Desktop.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "Tải EOfficial Tutor AI - Trợ lý Excel thông minh",
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
