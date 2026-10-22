"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const icons = [
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17H7a3 3 0 01-3-3V9a3 3 0 013-3h10a3 3 0 013 3v5a3 3 0 01-3 3zm-7 0v3m7-3v3m-7 3h7"/>
  </svg>,
];

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { title: t.howStep1Title, description: t.howStep1Body },
    { title: t.howStep2Title, description: t.howStep2Body },
    { title: t.howStep3Title, description: t.howStep3Body },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF3B7A] mb-4">
            <div className="w-4 h-px bg-[#FF3B7A]" />
            {t.howEyebrow}
            <div className="w-4 h-px bg-[#FF3B7A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2347] tracking-tight mb-4">{t.howHeading}</h2>
          <p className="text-lg text-gray-500">{t.howSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
          <div className="hidden md:block absolute top-10 left-[calc(33.33%+1.5rem)] right-[calc(33.33%+1.5rem)] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 md:gap-5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B2347]/5 border border-[#0B2347]/10 flex items-center justify-center text-[#0B2347]">
                    {icons[i]}
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#FF3B7A] text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="text-5xl font-bold text-gray-100 select-none">0{i + 1}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0B2347] leading-snug">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
