"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-16 md:py-28 bg-gray-50/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF3B7A] mb-4">
            <div className="w-4 h-px bg-[#FF3B7A]" />
            {t.faqEyebrow}
            <div className="w-4 h-px bg-[#FF3B7A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2347] tracking-tight mb-4">{t.faqHeading}</h2>
          <p className="text-gray-500">
            {t.faqSub}{" "}
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B2347] font-semibold hover:underline"
            >
              {t.faqAskUs}
            </a>
            .
          </p>
        </div>

        <div className="space-y-2.5">
          {t.faqItems.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-[#0B2347]/20 shadow-sm" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4 group"
              >
                <span className={`text-sm font-semibold leading-snug transition-colors ${open === i ? "text-[#0B2347]" : "text-gray-800 group-hover:text-[#0B2347]"}`}>
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                  open === i ? "bg-[#FF3B7A] border-[#FF3B7A] rotate-45" : "border-gray-200 group-hover:border-gray-300"
                }`}>
                  <svg className={`w-3 h-3 transition-colors ${open === i ? "text-white" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
              </button>
              {open === i && (
                <div className="px-5 sm:px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
