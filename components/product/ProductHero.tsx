"use client";

import DashboardMockup from "@/components/product/DashboardMockup";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;

const eyebrow: ML = {
  en: "Print Management Software",
  hi: "Print Management Software",
  hinglish: "Print Management Software",
};
const h1a: ML = {
  en: "Any printer.",
  hi: "कोई भी printer।",
  hinglish: "Koi bhi printer.",
};
const h1b: ML = {
  en: "Any file.",
  hi: "कोई भी file।",
  hinglish: "Koi bhi file.",
};
const h1c: ML = {
  en: "Via WhatsApp.",
  hi: "WhatsApp से।",
  hinglish: "WhatsApp se.",
};
const sub: ML = {
  en: "Install Prinit on Windows. Connect your printer. Customers anywhere in the world send files via WhatsApp — Prinit auto-processes and prints them. No manual work.",
  hi: "Windows पर Prinit install करें। Printer connect करें। दुनिया में कहीं से भी customers WhatsApp से files भेजें — Prinit automatically process करके print करता है। कोई manual काम नहीं।",
  hinglish: "Windows pe Prinit install karo. Printer connect karo. Duniya mein kahin se bhi customers WhatsApp se files bhejein — Prinit automatically process karke print karta hai. Koi manual kaam nahi.",
};
const cta1: ML = {
  en: "Book a Demo",
  hi: "Demo Book करें",
  hinglish: "Demo Book karo",
};
const cta2: ML = {
  en: "Enquire on WhatsApp",
  hi: "WhatsApp पर Enquire करें",
  hinglish: "WhatsApp pe Enquire karo",
};
const stat1v: ML = { en: "Windows", hi: "Windows", hinglish: "Windows" };
const stat1l: ML = { en: "compatible", hi: "compatible", hinglish: "compatible" };
const stat2v: ML = { en: "Any printer", hi: "कोई भी printer", hinglish: "Koi bhi printer" };
const stat2l: ML = { en: "USB, network, wireless", hi: "USB, network, wireless", hinglish: "USB, network, wireless" };
const stat3v: ML = { en: "Global", hi: "Global", hinglish: "Global" };
const stat3l: ML = { en: "any WhatsApp number", hi: "कोई भी WhatsApp number", hinglish: "Koi bhi WhatsApp number" };
const badgeNew: ML = { en: "New job", hi: "नया job", hinglish: "Naya job" };

export default function ProductHero() {
  const { lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 55% 50% at 8% 65%, rgba(11,35,71,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 92% 20%, rgba(255,59,122,0.04) 0%, transparent 55%),
            #fafafa
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#0B2347]/6 border border-[#0B2347]/12 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B2347]" />
            <span className="text-sm font-medium text-[#0B2347]">{eyebrow[lang]}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-[#0B2347] leading-[1.1] tracking-tight">
            {h1a[lang]}{" "}
            <span className="text-[#FF3B7A]">{h1b[lang]}</span>
            <br />
            {h1c[lang]}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
            {sub[lang]}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27d%20like%20to%20book%20a%20demo%20of%20the%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0B2347] hover:bg-[#0B2347]/90 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#0B2347]/20"
            >
              {cta1[lang]}
            </a>
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%20want%20to%20know%20more%20about%20the%20software"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-[#0B2347]/20 text-[#0B2347] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#0B2347]/5 transition-all duration-200 active:scale-[0.97]"
            >
              <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-3 h-3" fill="white" />
              </div>
              {cta2[lang]}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 pt-4 border-t border-gray-100 justify-center lg:justify-start">
            {[
              { v: stat1v[lang], l: stat1l[lang] },
              { v: stat2v[lang], l: stat2l[lang] },
              { v: stat3v[lang], l: stat3l[lang] },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-sm font-bold text-[#0B2347]">{s.v}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — dashboard mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <DashboardMockup />
          <div className="absolute -left-4 bottom-8 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 animate-float">
            <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-3 h-3" fill="white" />
            </div>
            <div>
              <div className="text-[9px] text-gray-400 uppercase tracking-wider">{badgeNew[lang]}</div>
              <div className="text-xs font-bold text-[#0B2347]">Thesis_Final.pdf · 42p</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
