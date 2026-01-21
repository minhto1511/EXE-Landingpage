import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EOffice Tutor AI - Trợ Lý Excel Thông Minh",
  description: "Tạo công thức Excel và học các bước thực hiện bằng AI. Công cụ hỗ trợ Excel & Google Sheets mạnh mẽ nhất.",
  keywords: "excel ai, tạo công thức excel, học excel, eoffice tutor ai, gemini excel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-emerald-100 selection:text-emerald-900`}>
        {children}
      </body>
    </html>
  );
}
