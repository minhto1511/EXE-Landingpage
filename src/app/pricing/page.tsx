import type { Metadata } from "next";
import { Suspense } from "react";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Nâng Cấp Pro - Bảng Giá",
  description:
    "Nâng cấp tài khoản Pro để sử dụng AI không giới hạn. Thanh toán nhanh chóng qua QR Banking.",
  robots: {
    index: false,
    follow: false,
  },
};

function PricingFallback() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function PricingPage() {
  return (
    <Suspense fallback={<PricingFallback />}>
      <PricingClient />
    </Suspense>
  );
}
