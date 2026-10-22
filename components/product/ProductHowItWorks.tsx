"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;

const eyebrow: ML = {
  en: "Setup in minutes",
  hi: "मिनटों में setup",
  hinglish: "Minutes mein setup",
};
const heading: ML = {
  en: "Up and running in three steps",
  hi: "तीन steps में शुरू हो जाएं",
  hinglish: "Teen steps mein shuru ho jao",
};
const sub: ML = {
  en: "No cloud dependencies. No subscriptions to configure. Runs entirely on your machine.",
  hi: "कोई cloud dependency नहीं। कोई subscription configure नहीं। पूरी तरह आपकी machine पर run होता है।",
  hinglish: "Koi cloud dependency nahi. Koi subscription configure nahi. Poori tarah aapki machine pe run hota hai.",
};

const steps: { n: string; title: ML; body: ML; icon: React.ReactNode }[] = [
  {
    n: "01",
    title: {
      en: "Download & install",
      hi: "Download & install करें",
      hinglish: "Download & install karo",
    },
    body: {
      en: "Install Prinit on Windows. Setup takes under 5 minutes. No IT team, no server, no configuration files.",
      hi: "Windows पर Prinit install करें। Setup 5 minutes से कम में। कोई IT team नहीं, कोई server नहीं, कोई configuration files नहीं।",
      hinglish: "Windows pe Prinit install karo. Setup 5 minutes se kam mein. Koi IT team nahi, koi server nahi, koi configuration files nahi.",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    n: "02",
    title: {
      en: "Connect your printers",
      hi: "Printers connect करें",
      hinglish: "Printers connect karo",
    },
    body: {
      en: "Add USB, network, or wireless printers to your Prinit dashboard. Manage multiple printers and set defaults per job type.",
      hi: "Prinit dashboard में USB, network, या wireless printers add करें। Multiple printers manage करें और job type के हिसाब से defaults set करें।",
      hinglish: "Prinit dashboard mein USB, network, ya wireless printers add karo. Multiple printers manage karo aur job type ke hisaab se defaults set karo.",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    n: "03",
    title: {
      en: "Go live — receive jobs globally",
      hi: "Live हो जाएं — globally jobs receive करें",
      hinglish: "Live ho jao — globally jobs receive karo",
    },
    body: {
      en: "Share your WhatsApp number. Customers send files from anywhere in the world. Prinit receives, processes, and prints automatically.",
      hi: "अपना WhatsApp number share करें। Customers दुनिया के किसी भी कोने से files भेजें। Prinit automatically receive, process और print करता है।",
      hinglish: "Apna WhatsApp number share karo. Customers duniya ke kisi bhi kone se files bhejein. Prinit automatically receive, process aur print karta hai.",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ProductHowItWorks() {
  const { lang } = useLanguage();

  return (
    <section id="product-how" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF3B7A]/8 border border-[#FF3B7A]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B7A]" />
            <span className="text-sm font-medium text-[#0B2347]">{eyebrow[lang]}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2347] tracking-tight mb-5">
            {heading[lang]}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            {sub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="hidden md:block absolute top-14 left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px bg-gradient-to-r from-[#0B2347]/10 via-[#FF3B7A]/30 to-[#0B2347]/10" />

          {steps.map((s, i) => (
            <div key={i} className="relative bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:border-[#0B2347]/15 hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 bg-[#0B2347]/5 rounded-2xl flex items-center justify-center text-[#0B2347] mb-6">
                {s.icon}
              </div>
              <div className="text-xs font-bold text-[#FF3B7A] tracking-widest mb-2">{s.n}</div>
              <h3 className="text-lg font-bold text-[#0B2347] mb-3">{s.title[lang]}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
