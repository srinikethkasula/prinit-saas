"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function JoinUs() {
  const { t } = useLanguage();

  return (
    <section id="join" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0B2347] px-6 sm:px-12 py-12 md:px-20 md:py-20 text-center">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`, backgroundSize: "32px 32px" }}
          />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FF3B7A] opacity-10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[#FF3B7A] opacity-8 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 md:mb-6 max-w-2xl mx-auto leading-tight">
              {t.joinHeading}
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed">{t.joinSub}</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27d%20like%20to%20bring%20Prinit%20to%20my%20organisation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0B2347] font-bold px-6 sm:px-8 py-4 rounded-full text-base hover:bg-gray-50 transition-all duration-200 active:scale-[0.97] shadow-xl"
              >
                <WhatsAppIcon className="w-5 h-5" fill="#25D366" />
                {t.joinCta1}
              </a>
              <a
                href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%20need%20to%20get%20something%20printed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-6 sm:px-8 py-4 rounded-full text-base hover:bg-white/10 transition-all duration-200 active:scale-[0.97]"
              >
                {t.joinCta2}
              </a>
            </div>

            <p className="mt-7 md:mt-8 text-sm text-white/40">
              {t.joinOrEmail}{" "}
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
