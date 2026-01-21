import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://eofficeai.io.vn";

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "EOffice Tutor AI - Trợ Lý Excel Thông Minh",
    template: "%s | EOffice Tutor AI",
  },
  description: "Tạo công thức Excel và học các bước thực hiện bằng AI. Công cụ hỗ trợ Excel & Google Sheets mạnh mẽ nhất cho người Việt.",
  keywords: [
    "excel ai",
    "tạo công thức excel",
    "học excel",
    "eoffice tutor ai",
    "gemini excel",
    "công thức excel",
    "excel add-in",
    "trợ lý excel",
    "ai excel việt nam",
    "hàm excel",
    "vlookup",
    "sumif",
    "google sheets ai"
  ],
  authors: [{ name: "EOffice Tutor AI Team" }],
  creator: "EOffice Tutor AI",
  publisher: "EOffice Tutor AI",
  
  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteUrl,
    siteName: "EOffice Tutor AI",
    title: "EOffice Tutor AI - Trợ Lý Excel Thông Minh",
    description: "Tạo công thức Excel và học các bước thực hiện bằng AI. Công cụ hỗ trợ Excel & Google Sheets mạnh mẽ nhất cho người Việt.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "EOffice Tutor AI Logo",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "EOffice Tutor AI - Trợ Lý Excel Thông Minh",
    description: "Tạo công thức Excel và học các bước thực hiện bằng AI. Công cụ hỗ trợ Excel & Google Sheets mạnh mẽ nhất.",
    images: ["/icon.png"],
    creator: "@eofficeai",
  },
  
  // Icons
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification (thêm sau khi đăng ký Google Search Console)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "EOffice Tutor AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "79000",
    priceCurrency: "VND",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  description: "Trợ lý AI thông minh giúp tạo công thức Excel và học các bước thực hiện. Hỗ trợ tiếng Việt 100%.",
  url: siteUrl,
  image: `${siteUrl}/icon.png`,
  author: {
    "@type": "Organization",
    name: "EOffice Tutor AI Team",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased selection:bg-emerald-100 selection:text-emerald-900`}>
        {children}
      </body>
    </html>
  );
}
