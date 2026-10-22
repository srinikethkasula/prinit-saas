"use client";

import WhatsAppAnimation from "@/components/WhatsAppAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;

const eyebrow: ML = {
  en: "How jobs flow",
  hi: "Jobs कैसे flow होती हैं",
  hinglish: "Jobs kaise flow hoti hain",
};
const heading1: ML = {
  en: "Customer sends a file.",
  hi: "Customer file भेजता है।",
  hinglish: "Customer file bhejta hai.",
};
const heading2: ML = {
  en: "Printer starts immediately.",
  hi: "Printer तुरंत शुरू हो जाता है।",
  hinglish: "Printer turant shuru ho jaata hai.",
};
const desc: ML = {
  en: "No manual step on your end. Prinit receives the WhatsApp message, processes the file, and triggers your printer — all within seconds.",
  hi: "आपकी तरफ से कोई manual step नहीं। Prinit WhatsApp message receive करता है, file process करता है, और printer trigger करता है — सब seconds में।",
  hinglish: "Aapki taraf se koi manual step nahi. Prinit WhatsApp message receive karta hai, file process karta hai, aur printer trigger karta hai — sab seconds mein.",
};
const stats: Record<Lang, { v: string; l: string }[]> = {
  en: [
    { v: "< 30s", l: "avg processing time" },
    { v: "100%", l: "auto-queued" },
    { v: "0", l: "manual steps" },
  ],
  hi: [
    { v: "< 30s", l: "avg processing time" },
    { v: "100%", l: "auto-queued" },
    { v: "0", l: "manual steps" },
  ],
  hinglish: [
    { v: "< 30s", l: "avg processing time" },
    { v: "100%", l: "auto-queued" },
    { v: "0", l: "manual steps" },
  ],
};

export default function ProductAnimationDemo() {
  const { lang } = useLanguage();

  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#FF3B7A]/8 border border-[#FF3B7A]/15 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B7A]" />
              <span className="text-sm font-medium text-[#0B2347]">{eyebrow[lang]}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2347] tracking-tight mb-4 leading-tight">
              {heading1[lang]}<br />
              <span className="text-[#FF3B7A]">{heading2[lang]}</span>
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm mx-auto lg:mx-0">
              {desc[lang]}
            </p>
            <div className="mt-6 flex flex-wrap gap-5 justify-center lg:justify-start">
              {stats[lang].map((s) => (
                <div key={s.l} className="text-center lg:text-left">
                  <div className="text-xl font-bold text-[#0B2347]">{s.v}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full max-w-sm sm:max-w-md lg:max-w-full">
            <WhatsAppAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
