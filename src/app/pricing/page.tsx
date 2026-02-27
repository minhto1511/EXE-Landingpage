import type { Metadata } from "next";
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

export default function PricingPage() {
  return <PricingClient />;
}
