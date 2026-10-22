"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;

const eyebrow: ML = {
  en: "Software demo",
  hi: "Software demo",
  hinglish: "Software demo",
};
const heading: ML = {
  en: "See Prinit in action",
  hi: "Prinit को action में देखें",
  hinglish: "Prinit ko action mein dekho",
};
const sub: ML = {
  en: "Book a 15-minute demo. We'll show you the dashboard, walk through setup, and answer every question before you install anything.",
  hi: "15-minute demo book करें। हम आपको dashboard दिखाएंगे, setup समझाएंगे, और install से पहले हर सवाल का जवाब देंगे।",
  hinglish: "15-minute demo book karo. Hum aapko dashboard dikhayenge, setup samjhayenge, aur install se pehle har sawal ka jawab denge.",
};
const cta1: ML = {
  en: "Book a Demo",
  hi: "Demo Book करें",
  hinglish: "Demo Book karo",
};
const cta2: ML = {
  en: "Chat with us",
  hi: "हमसे बात करें",
  hinglish: "Humse baat karo",
};
const orEmail: ML = {
  en: "Or email",
  hi: "या email करें",
  hinglish: "Ya email karo",
};

export default function ProductCTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0B2347] px-6 sm:px-12 py-12 md:px-20 md:py-20 text-center">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
          />
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[#FF3B7A] opacity-10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#00AEEF] opacity-8 blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B7A]" />
              <span className="text-sm font-medium text-white/80">{eyebrow[lang]}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
              {heading[lang]}
            </h2>

            <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed">
              {sub[lang]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27d%20like%20to%20book%20a%20demo%20of%20the%20Prinit%20software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0B2347] font-bold px-6 sm:px-8 py-4 rounded-full text-base hover:bg-gray-50 transition-all duration-200 active:scale-[0.97] shadow-xl"
              >
                {cta1[lang]}
              </a>
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%20want%20to%20know%20more%20about%20the%20software"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border border-white/20 text-white font-semibold px-6 sm:px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all duration-200 active:scale-[0.97]"
              >
                <WhatsAppIcon className="w-5 h-5" fill="#25D366" />
                {cta2[lang]}
              </a>
            </div>

            <p className="mt-7 md:mt-8 text-sm text-white/40">
              {orEmail[lang]}{" "}
              <a href="mailto:hiprinit@gmail.com" className="text-white/70 hover:text-white underline underline-offset-2 transition-colors">
                hiprinit@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
