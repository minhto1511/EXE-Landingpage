import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn cài đặt Excel Desktop - EOfficial Tutor AI",
  description: "Hướng dẫn chi tiết 4 bước để cài đặt EOfficial Tutor AI vào phiên bản Excel Desktop thông qua Shared Folder (Sideloading).",
  alternates: {
    canonical: "/desktop-guide",
  },
  openGraph: {
    title: "Hướng dẫn cài đặt Excel Desktop - EOfficial Tutor AI",
    description: "Cài đặt trợ lý AI vào Excel Desktop chỉ trong vài phút.",
    url: "https://eofficeai.io.vn/desktop-guide",
  },
};

export default function DesktopGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
