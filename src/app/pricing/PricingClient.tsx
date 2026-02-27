"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Shield,
  Star,
  Clock,
  QrCode,
  Copy,
  Check,
  AlertCircle,
  Rocket,
  ArrowLeft,
  RefreshCw,
  Loader2,
  Zap,
  Crown,
  CheckCircle2,
  X,
} from "lucide-react";
import { cn } from "../../lib/utils";

// ============================================================================
// CONFIG
// ============================================================================

const API_BASE_URL =
  "https://excel-add-in-production-141f.up.railway.app/api/v1";

// ============================================================================
// TYPES
// ============================================================================

interface PaymentIntent {
  id: string;
  plan: string;
  amount: number;
  currency: string;
  transferCode: string;
  expiresAt: string;
  remainingTime: number;
  qrData: {
    bankCode: string;
    accountNumber: string;
    accountName: string;
    description: string;
    qrCodeUrl: string;
  };
}

// ============================================================================
// API HELPERS
// ============================================================================

async function apiCall(endpoint: string, token: string, options: RequestInit = {}) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...((options.headers as Record<string, string>) || {}),
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `Lỗi API: ${response.status}`);
  }

  return data;
}

// ============================================================================
// COUNTDOWN HOOK
// ============================================================================

function useCountdown(targetTime: string | null) {
  const [remaining, setRemaining] = useState(() => {
    if (!targetTime) return 0;
    const diff = new Date(targetTime).getTime() - Date.now();
    return Math.max(0, Math.floor(diff / 1000));
  });

  useEffect(() => {
    if (!targetTime) return;

    const calculateRemaining = () => {
      const diff = new Date(targetTime).getTime() - Date.now();
      return Math.max(0, Math.floor(diff / 1000));
    };

    // Use interval only — initial value set by useState initializer
    const timer = setInterval(() => {
      const r = calculateRemaining();
      setRemaining(r);
      if (r <= 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return {
    remaining,
    formatted: `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
    isExpired: remaining <= 0 && targetTime !== null,
  };
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function PricingClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const urlPlan = searchParams.get("plan");

  // States
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    urlPlan?.includes("yearly") ? "yearly" : "monthly"
  );
  const [selectedPlan, setSelectedPlan] = useState(
    urlPlan || "pro_monthly"
  );
  const [intent, setIntent] = useState<PaymentIntent | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "pending" | "paid" | "expired" | "error" | "no-token"
  >(token ? "idle" : "no-token");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { formatted: countdownFormatted, isExpired } = useCountdown(
    intent?.expiresAt ?? null
  );

  // Auto-select plan based on billing cycle
  useEffect(() => {
    if (selectedPlan !== "student") {
      setSelectedPlan(billingCycle === "monthly" ? "pro_monthly" : "pro_yearly");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billingCycle]);

  // Handle expired intent
  useEffect(() => {
    if (isExpired && status === "pending") {
      setStatus("expired");
      if (pollingRef.current) clearTimeout(pollingRef.current);
    }
  }, [isExpired, status]);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollingRef.current) clearTimeout(pollingRef.current);
    };
  }, []);

  // ---- API Calls ----

  const handleCreateIntent = async () => {
    if (!token) return;
    setError("");
    setStatus("loading");

    try {
      const data = await apiCall("/payments/intents", token, {
        method: "POST",
        body: JSON.stringify({ plan: selectedPlan }),
      });
      setIntent(data.intent);
      setStatus("pending");
      startPolling(data.intent.id);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Không thể tạo yêu cầu thanh toán";
      setError(message);
      setStatus("error");
    }
  };

  const startPolling = useCallback(
    (intentId: string) => {
      if (!token) return;
      if (pollingRef.current) clearTimeout(pollingRef.current);

      let pollCount = 0;
      const maxPolls = 120;
      let isStopped = false;

      const pollOnce = async () => {
        if (isStopped) return;

        try {
          pollCount++;
          const cacheBuster = `t=${Date.now()}`;
          const statusData = await apiCall(
            `/payments/intents/${intentId}?${cacheBuster}`,
            token
          );

          if (statusData.status === "paid") {
            isStopped = true;
            pollingRef.current = null;
            setStatus("paid");
            return;
          } else if (statusData.status === "expired") {
            isStopped = true;
            pollingRef.current = null;
            setStatus("expired");
            return;
          }

          if (pollCount >= maxPolls) {
            isStopped = true;
            pollingRef.current = null;
            setError("Hết thời gian chờ. Nếu đã thanh toán, vui lòng liên hệ hỗ trợ.");
            return;
          }

          if (!isStopped) {
            pollingRef.current = setTimeout(pollOnce, 3000);
          }
        } catch {
          if (!isStopped) {
            pollingRef.current = setTimeout(pollOnce, 3000);
          }
        }
      };

      pollOnce();
    },
    [token]
  );

  const handleCopy = () => {
    if (intent?.transferCode) {
      navigator.clipboard.writeText(intent.transferCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRetry = () => {
    if (pollingRef.current) clearTimeout(pollingRef.current);
    setIntent(null);
    setStatus("idle");
    setError("");
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("vi-VN").format(price);

  // ============================================================================
  // RENDER: NO TOKEN
  // ============================================================================

  if (status === "no-token") {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        >
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-amber-500" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            Truy cập không hợp lệ
          </h2>
          <p className="text-white/60 mb-6">
            Vui lòng mở trang này từ bên trong ứng dụng Excel Add-in để thanh toán.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Về trang chủ
          </Link>
        </motion.div>
      </div>
    );
  }

  // ============================================================================
  // RENDER: PAYMENT SUCCESS
  // ============================================================================

  if (status === "paid") {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white/5 border border-emerald-500/30 rounded-2xl p-8 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Thanh toán thành công! 🎉
          </h2>
          <p className="text-white/60 mb-2">
            Tài khoản của bạn đã được nâng cấp lên <span className="text-emerald-400 font-semibold">Pro</span>.
          </p>
          <p className="text-white/40 text-sm mb-8">
            Bạn có thể quay lại Excel Add-in để sử dụng. Tài khoản sẽ tự động cập nhật.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-black font-bold rounded-full hover:bg-emerald-400 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Về trang chủ
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ============================================================================
  // RENDER: QR PAYMENT VIEW
  // ============================================================================

  if (status === "pending" || status === "expired") {
    return (
      <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-500/10 p-2 rounded-xl">
                  <QrCode className="w-5 h-5 text-emerald-500" />
                </div>
                <h2 className="text-lg font-bold text-white">
                  Quét mã QR để thanh toán
                </h2>
              </div>
              <button
                onClick={handleRetry}
                className="p-2 text-white/40 hover:text-white transition-colors"
                title="Đóng"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-5">
            {/* QR Code */}
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                {intent?.qrData?.qrCodeUrl ? (
                  <Image
                    src={intent.qrData.qrCodeUrl}
                    alt="QR Code Thanh Toán"
                    width={208}
                    height={208}
                    className="rounded-lg"
                    unoptimized
                  />
                ) : (
                  <div className="w-52 h-52 flex items-center justify-center bg-gray-100 rounded-lg">
                    <Loader2 className="w-8 h-8 text-gray-400 animate-spin" />
                  </div>
                )}
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Số tiền</span>
                <span className="text-emerald-400 font-bold text-lg">
                  {formatPrice(intent?.amount || 0)} VND
                </span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Nội dung CK</span>
                <div className="flex items-center gap-2">
                  <code className="text-emerald-400 font-mono font-bold bg-emerald-500/10 px-3 py-1 rounded-lg">
                    {intent?.transferCode}
                  </code>
                  <button
                    onClick={handleCopy}
                    className="p-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    title="Copy"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-white/60" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Countdown */}
            <div
              className={cn(
                "flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold",
                isExpired
                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
              )}
            >
              <Clock className="w-4 h-4" />
              {isExpired
                ? "Đã hết hạn"
                : `Hết hạn sau: ${countdownFormatted}`}
            </div>

            {/* Status */}
            {status === "pending" && (
              <div className="flex items-center justify-center gap-2 py-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                <span className="text-blue-400 text-sm font-medium">
                  Đang chờ thanh toán...
                </span>
              </div>
            )}

            {/* Instructions */}
            <div className="text-white/40 text-xs space-y-1">
              <p className="font-semibold text-white/60 mb-2">Hướng dẫn:</p>
              <p>1. Mở app ngân hàng, chọn Quét QR</p>
              <p>2. Kiểm tra số tiền và nội dung CK</p>
              <p>3. Xác nhận thanh toán</p>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 flex gap-3">
            {status === "pending" && (
              <>
                <button
                  onClick={handleRetry}
                  className="flex-1 py-3 bg-white/5 border border-white/10 text-white/70 font-medium rounded-xl hover:bg-white/10 transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={() => intent && startPolling(intent.id)}
                  className="flex-1 py-3 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Tôi đã thanh toán
                </button>
              </>
            )}
            {status === "expired" && (
              <button
                onClick={handleRetry}
                className="flex-1 py-3 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors"
              >
                Thử lại
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // ============================================================================
  // RENDER: PLAN SELECTION (idle, loading, error)
  // ============================================================================

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Rocket className="w-8 h-8 text-emerald-500" />
          </motion.div>
          <h1 className="text-3xl font-black text-white mb-2">
            Nâng cấp <span className="text-emerald-500">Pro</span>
          </h1>
          <p className="text-white/50">
            Mở khóa sức mạnh AI không giới hạn
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/5 border border-white/10 p-1 rounded-full flex gap-1">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all",
                billingCycle === "monthly"
                  ? "bg-emerald-500 text-black shadow-lg"
                  : "text-white/50 hover:text-white/80"
              )}
            >
              Hàng tháng
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-bold transition-all relative",
                billingCycle === "yearly"
                  ? "bg-emerald-500 text-black shadow-lg"
                  : "text-white/50 hover:text-white/80"
              )}
            >
              Hàng năm
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="space-y-3 mb-6">
          {/* Pro Plan */}
          <button
            onClick={() =>
              setSelectedPlan(
                billingCycle === "monthly" ? "pro_monthly" : "pro_yearly"
              )
            }
            className={cn(
              "w-full p-5 rounded-2xl border-2 text-left transition-all",
              selectedPlan ===
                (billingCycle === "monthly" ? "pro_monthly" : "pro_yearly")
                ? "border-emerald-500 bg-emerald-500/5"
                : "border-white/10 bg-white/5 hover:border-white/20"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                    selectedPlan ===
                      (billingCycle === "monthly"
                        ? "pro_monthly"
                        : "pro_yearly")
                      ? "border-emerald-500 bg-emerald-500"
                      : "border-white/30"
                  )}
                >
                  {selectedPlan ===
                    (billingCycle === "monthly"
                      ? "pro_monthly"
                      : "pro_yearly") && (
                    <Check className="w-3 h-3 text-black" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">
                      {billingCycle === "monthly"
                        ? "Gói Pro (Tháng)"
                        : "Gói Pro (Năm)"}
                    </span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Phổ thông
                    </span>
                  </div>
                  <p className="text-white/40 text-sm mt-0.5">
                    Thanh toán qua QR Banking
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-emerald-400 font-black text-xl">
                  {billingCycle === "monthly" ? "49.000" : "470.000"} ₫
                </span>
              </div>
            </div>
          </button>

          {/* Student Plan */}
          <button
            onClick={() => setSelectedPlan("student")}
            className={cn(
              "w-full p-5 rounded-2xl border-2 text-left transition-all",
              selectedPlan === "student"
                ? "border-blue-500 bg-blue-500/5"
                : "border-white/10 bg-white/5 hover:border-white/20"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                    selectedPlan === "student"
                      ? "border-blue-500 bg-blue-500"
                      : "border-white/30"
                  )}
                >
                  {selectedPlan === "student" && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">
                      {billingCycle === "monthly"
                        ? "Gói Sinh Viên (Tháng)"
                        : "Gói Sinh Viên (Năm)"}
                    </span>
                    <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Ưu đãi
                    </span>
                  </div>
                  <p className="text-white/40 text-sm mt-0.5">
                    Liên hệ Fanpage để mua
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-blue-400 font-black text-xl">
                  {billingCycle === "monthly" ? "39.000" : "468.000"} ₫
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Features */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-6">
          <p className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Quyền lợi Pro
          </p>
          <div className="space-y-2.5">
            {[
              { icon: Zap, text: "Không giới hạn AI prompts" },
              { icon: Shield, text: "Phân tích dữ liệu nâng cao" },
              { icon: Star, text: "Hỗ trợ ưu tiên 24/7" },
            ].map((feature) => (
              <div
                key={feature.text}
                className="flex items-center gap-3"
              >
                <feature.icon className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-white/70 text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href="/"
            className="flex-1 py-3.5 bg-white/5 border border-white/10 text-white/70 font-bold rounded-xl hover:bg-white/10 transition-colors text-center"
          >
            Để sau
          </Link>
          {selectedPlan === "student" ? (
            <a
              href="https://www.facebook.com/EOfficialTutorAI"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3.5 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition-colors flex items-center justify-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Liên hệ Fanpage
            </a>
          ) : (
            <button
              onClick={handleCreateIntent}
              disabled={status === "loading"}
              className="flex-1 py-3.5 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Đang tạo...
                </>
              ) : (
                <>
                  <QrCode className="w-4 h-4" />
                  Thanh toán ngay
                </>
              )}
            </button>
          )}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/30 text-xs mt-6">
          Thanh toán an toàn qua chuyển khoản ngân hàng. Tài khoản sẽ được nâng
          cấp tự động sau khi thanh toán.
        </p>
      </motion.div>
    </div>
  );
}
