import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://eofficeai.io.vn";

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "Excel Add-in AI - EOfficial Tutor AI | Trợ Lý Excel Thông Minh",
    template: "%s | EOfficial Tutor AI",
  },
  description:
    "Excel Add-in AI mạnh mẽ nhất cho người Việt. Tạo công thức Excel, Google Sheets và học các bước thực hiện tự động bằng trí tuệ nhân tạo.",
  keywords: [
    "excel add-in",
    "excel add-in ai",
    "ai excel add-in",
    "tạo công thức excel",
    "học excel",
    "eofficial tutor ai",
    "eoffice tutor ai",
    "gemini excel",
    "công thức excel",
    "trợ lý excel",
    "trợ lý excel thông minh",
    "trợ lý excel thế hệ mới",
    "ai excel việt nam",
    "hàm excel",
    "google sheets ai",
    "excel automation",
  ],
  authors: [{ name: "EOfficial Tutor AI Team" }],
  creator: "EOfficial Tutor AI",
  publisher: "EOfficial Tutor AI",

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
    siteName: "EOfficial Tutor AI",
    title: "Excel Add-in AI - EOfficial Tutor AI | Trợ Lý Excel Thông Minh",
    description:
      "Excel Add-in AI mạnh mẽ nhất cho người Việt. Tạo công thức Excel, Google Sheets và học các bước thực hiện tự động bằng trí tuệ nhân tạo.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Excel Add-in AI - EOfficial Tutor AI Logo",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Excel Add-in AI - EOfficial Tutor AI",
    description:
      "Excel Add-in AI mạnh mẽ nhất cho người Việt. Tạo công thức Excel, Google Sheets và học các bước thực hiện tự động.",
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
  name: "EOfficial Tutor AI",
  applicationCategory: "BusinessApplication, OfficeAddin",
  operatingSystem: "Windows, macOS, Web Browser",
  softwareHelp: "https://eofficeai.io.vn/install-guide",
  downloadUrl: "https://eofficeai.io.vn/download",
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
  description:
    "Excel Add-in AI thông minh giúp tạo công thức Excel và học các bước thực hiện tự động. Hỗ trợ tiếng Việt 100%.",
  url: siteUrl,
  image: `${siteUrl}/icon.png`,
  author: {
    "@type": "Organization",
    name: "EOfficial Tutor AI Team",
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
      <body
        className={`${inter.className} antialiased selection:bg-emerald-100 selection:text-emerald-900`}
      >
        {children}
      </body>
    </html>
  );
}
