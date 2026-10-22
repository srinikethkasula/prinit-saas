"use client";

import WhatsAppAnimation from "@/components/WhatsAppAnimation";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 5% 70%, rgba(11,35,71,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 95% 20%, rgba(255,59,122,0.04) 0%, transparent 55%),
            #fafafa
          `,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left */}
        <div className="space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#FF3B7A]/8 border border-[#FF3B7A]/15 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B7A]" />
            <span className="text-sm font-medium text-[#0B2347]">{t.heroEyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-[#0B2347] leading-[1.1] tracking-tight">
            {t.heroH1a}{" "}
            <span className="text-[#FF3B7A]">{t.heroH1b}</span>
            <br />
            {t.heroH1c}
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-md">{t.heroSub}</p>

          {/* Primary CTA */}
          <div className="space-y-3">
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27d%20like%20to%20join%20or%20partner"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#0B2347] hover:bg-[#0B2347]/90 text-white font-bold px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#0B2347]/20"
            >
              {t.heroCta}
            </a>
            <p className="text-sm font-medium pl-1" style={{ color: "#CA8A04" }}>
              {t.heroCtaCaption}
            </p>
          </div>

          {/* Secondary */}
          <div className="flex items-center gap-3 pt-1">
            <div className="h-px flex-1 max-w-[40px] bg-gray-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wide">or</span>
            <div className="h-px flex-1 max-w-[40px] bg-gray-200" />
          </div>
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%20need%20to%20print%20something"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0B2347] text-sm font-semibold hover:gap-3 transition-all duration-200"
          >
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <WhatsAppIcon className="w-3.5 h-3.5" fill="white" />
            </div>
            {t.heroSecondary}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 pt-4 border-t border-gray-100">
            {[
              { value: t.heroStat1v, label: t.heroStat1l },
              { value: t.heroStat2v, label: t.heroStat2l },
              { value: t.heroStat3v, label: t.heroStat3l },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl sm:text-2xl font-bold text-[#0B2347]">{s.value}</div>
                <div className="text-xs sm:text-sm text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — animation */}
        <div className="relative flex justify-center lg:justify-end">
          <WhatsAppAnimation />
        </div>
      </div>
    </section>
  );
}
