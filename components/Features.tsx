"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;

const forCustomers: { title: ML; description: ML; icon: React.ReactNode }[] = [
  {
    title: { en: "Mixed document processing", hi: "Mixed document processing", hinglish: "Mixed document processing" },
    description: { en: "Send PDFs, Word docs, photos, and plain text all at once. Prinit merges them into a single print job — no reformatting needed.", hi: "PDF, Word docs, photos, और plain text एक साथ भेजें। Prinit उन्हें एक print job में merge करता है।", hinglish: "PDF, Word docs, photos, aur plain text ek saath bhejo. Prinit unhe ek print job mein merge karta hai." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
  },
  {
    title: { en: "Blank page removal", hi: "Blank page removal", hinglish: "Blank page removal" },
    description: { en: "Prinit scans files before printing and removes empty pages — so you never pay for a page with nothing on it.", hi: "Prinit print से पहले files scan करता है और empty pages हटाता है — खाली pages के पैसे नहीं।", hinglish: "Prinit print se pehle files scan karta hai aur empty pages hatata hai — khaali pages ke paise nahi." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>,
  },
  {
    title: { en: "Slab-wise bulk pricing", hi: "Slab-wise bulk pricing", hinglish: "Slab-wise bulk pricing" },
    description: { en: "Print more, pay less per page. Pricing tiers apply automatically — the more you print, the lower your per-page rate.", hi: "ज्यादा print करें, कम pay करें। Pricing tiers automatically apply होते हैं।", hinglish: "Jyaada print karo, kam pay karo. Pricing tiers automatically apply hote hain." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z"/></svg>,
  },
  {
    title: { en: "Pickup or doorstep delivery", hi: "Pickup या doorstep delivery", hinglish: "Pickup ya doorstep delivery" },
    description: { en: "Collect from the shop or get prints delivered for ₹20–30. Real-time order tracking in WhatsApp throughout.", hi: "Shop से collect करें या ₹20–30 में delivery पाएं। WhatsApp में real-time tracking।", hinglish: "Shop se collect karo ya ₹20–30 mein delivery pao. WhatsApp mein real-time tracking." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/></svg>,
  },
  {
    title: { en: "OTP mode for cash payments", hi: "Cash payments के लिए OTP mode", hinglish: "Cash payments ke liye OTP mode" },
    description: { en: "Customers who prefer cash get a one-time code via WhatsApp. Show the OTP at the shop to collect prints — no upfront payment needed.", hi: "Cash prefer करने वाले customers को WhatsApp पर one-time code मिलता है। Shop पर OTP दिखाएं और prints लें।", hinglish: "Cash prefer karne wale customers ko WhatsApp pe one-time code milta hai. Shop pe OTP dikhao aur prints lo." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  },
  {
    title: { en: "Encrypted file transfers", hi: "Encrypted file transfers", hinglish: "Encrypted file transfers" },
    description: { en: "Files are encrypted in transit and not stored past the order window. What's printed stays private.", hi: "Files transit में encrypted हैं और order window के बाद store नहीं होतीं।", hinglish: "Files transit mein encrypted hain aur order window ke baad store nahi hoti." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
  },
];

const forPartners: { title: ML; description: ML; icon: React.ReactNode }[] = [
  {
    title: { en: "Simple partner onboarding", hi: "Simple partner onboarding", hinglish: "Simple partner onboarding" },
    description: { en: "Campus, institute, office, or print shop — reach out on WhatsApp and we'll walk you through setup. Live in days.", hi: "Campus, institute, office, या print shop — WhatsApp पर बात करें। कुछ ही दिनों में live।", hinglish: "Campus, institute, office, ya print shop — WhatsApp pe baat karo. Kuch hi dinon mein live." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>,
  },
  {
    title: { en: "Orders come to your shop", hi: "Orders आपके shop पर आते हैं", hinglish: "Orders aapke shop pe aate hain" },
    description: { en: "Print shops in the network receive pre-confirmed, paid orders via WhatsApp. No marketing, no cold calling — we bring the demand.", hi: "Network में print shops को WhatsApp पर pre-confirmed, paid orders मिलते हैं। Marketing या cold calling नहीं — हम demand लाते हैं।", hinglish: "Network mein print shops ko WhatsApp pe pre-confirmed, paid orders milte hain. Marketing ya cold calling nahi — hum demand laate hain." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  },
  {
    title: { en: "Custom pricing control", hi: "Custom pricing control", hinglish: "Custom pricing control" },
    description: { en: "Set your own per-page rates for B&W, colour, and paper sizes. Pricing updates apply to all new incoming jobs instantly.", hi: "B&W, colour, और paper sizes के लिए अपने per-page rates set करें। नए jobs पर instantly apply।", hinglish: "B&W, colour, aur paper sizes ke liye apne per-page rates set karo. Naye jobs pe instantly apply." },
    icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
  },
];

export default function Features() {
  const { t, lang } = useLanguage();

  return (
    <section id="features" className="py-16 md:py-28 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF3B7A] mb-4">
            <div className="w-4 h-px bg-[#FF3B7A]" />
            {t.featEyebrow}
            <div className="w-4 h-px bg-[#FF3B7A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2347] tracking-tight mb-4">{t.featHeading}</h2>
        </div>

        <div className="mb-10 md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5 md:mb-6">{t.featUsersLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {forCustomers.map((f, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-5 md:p-6 hover:border-[#0B2347]/15 hover:shadow-md transition-all duration-250">
                <div className="w-10 h-10 rounded-xl bg-[#0B2347]/5 border border-[#0B2347]/8 flex items-center justify-center text-[#0B2347] mb-4 md:mb-5 group-hover:bg-[#0B2347] group-hover:border-[#0B2347] group-hover:text-white transition-all duration-250">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0B2347] mb-2">{f.title[lang]}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5 md:mb-6">{t.featPartnersLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {forPartners.map((f, i) => (
              <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-5 md:p-6 hover:border-[#FF3B7A]/20 hover:shadow-md transition-all duration-250">
                <div className="w-10 h-10 rounded-xl bg-[#FF3B7A]/5 border border-[#FF3B7A]/10 flex items-center justify-center text-[#FF3B7A] mb-4 md:mb-5 group-hover:bg-[#FF3B7A] group-hover:border-[#FF3B7A] group-hover:text-white transition-all duration-250">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0B2347] mb-2">{f.title[lang]}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.description[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
