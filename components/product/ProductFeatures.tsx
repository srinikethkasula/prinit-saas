"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;

const features: { title: ML; body: ML; icon: React.ReactNode }[] = [
  {
    title: { en: "Auto-print on receipt", hi: "Auto-print on receipt", hinglish: "Auto-print on receipt" },
    body: { en: "The moment a job arrives on WhatsApp, Prinit processes and sends it to the printer. Zero clicks, zero delays.", hi: "WhatsApp पर job आते ही Prinit process करके printer पर भेज देता है। Zero clicks, zero delays।", hinglish: "WhatsApp pe job aate hi Prinit process karke printer pe bhej deta hai. Zero clicks, zero delays." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  },
  {
    title: { en: "Multi-printer support", hi: "Multi-printer support", hinglish: "Multi-printer support" },
    body: { en: "Connect USB, network, or wireless printers. Route jobs by type — B&W to one machine, colour to another.", hi: "USB, network, या wireless printers connect करें। Job type के अनुसार route करें।", hinglish: "USB, network, ya wireless printers connect karo. Job type ke hisaab se route karo." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>,
  },
  {
    title: { en: "Global WhatsApp reach", hi: "Global WhatsApp reach", hinglish: "Global WhatsApp reach" },
    body: { en: "Accept jobs from any phone number — India, UK, US, anywhere. No geographic limits.", hi: "किसी भी phone number से jobs accept करें — India, UK, US, कहीं भी।", hinglish: "Kisi bhi phone number se jobs accept karo — India, UK, US, kahin bhi." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  },
  {
    title: { en: "Live dashboard", hi: "Live dashboard", hinglish: "Live dashboard" },
    body: { en: "Real-time job queue with status, sender info, file name, and page count. Full visibility at a glance.", hi: "Real-time job queue — status, sender info, file name, और page count। एक नज़र में सब कुछ।", hinglish: "Real-time job queue — status, sender info, file name, aur page count. Ek nazar mein sab kuch." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  },
  {
    title: { en: "All major file formats", hi: "सभी major file formats", hinglish: "Sab major file formats" },
    body: { en: "PDF, DOCX, PPTX, XLSX, JPEG, PNG — automatically converted and sent to the printer.", hi: "PDF, DOCX, PPTX, XLSX, JPEG, PNG — automatically convert होकर printer पर जाते हैं।", hinglish: "PDF, DOCX, PPTX, XLSX, JPEG, PNG — automatically convert hokar printer pe jaate hain." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>,
  },
  {
    title: { en: "Per-job print settings", hi: "Per-job print settings", hinglish: "Per-job print settings" },
    body: { en: "B&W or colour, single or double-sided, A4 or A3 — configurable globally or overridden per job.", hi: "B&W या colour, single या double-sided, A4 या A3 — globally या per job configure करें।", hinglish: "B&W ya colour, single ya double-sided, A4 ya A3 — globally ya per job configure karo." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
  },
  {
    title: { en: "OTP mode for cash", hi: "Cash के लिए OTP mode", hinglish: "Cash ke liye OTP mode" },
    body: { en: "Customers who prefer cash get a one-time code via WhatsApp. Show the OTP at the shop to collect prints.", hi: "Cash prefer करने वाले customers को WhatsApp पर one-time code। Shop पर OTP दिखाएं।", hinglish: "Cash prefer karne wale customers ko WhatsApp pe one-time code. Shop pe OTP dikhao." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
  },
  {
    title: { en: "Custom pricing control", hi: "Custom pricing control", hinglish: "Custom pricing control" },
    body: { en: "Set your own per-page rates for B&W, colour, and paper sizes. Updates apply to all new jobs instantly.", hi: "B&W, colour, और paper sizes के लिए अपने rates set करें। नए jobs पर instantly apply।", hinglish: "B&W, colour, aur paper sizes ke liye apne rates set karo. Naye jobs pe instantly apply." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>,
  },
  {
    title: { en: "Auto customer updates", hi: "Auto customer updates", hinglish: "Auto customer updates" },
    body: { en: "Prinit replies to the sender automatically — job received, printing in progress, ready for pickup.", hi: "Prinit sender को automatically reply करता है — job received, printing in progress, ready for pickup।", hinglish: "Prinit sender ko automatically reply karta hai — job received, printing in progress, ready for pickup." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
  },
  {
    title: { en: "History & analytics", hi: "History & analytics", hinglish: "History & analytics" },
    body: { en: "Daily and monthly job reports. Filter by printer, file type, or sender number. Track volume trends over time.", hi: "Daily और monthly job reports। Printer, file type, या sender number से filter करें।", hinglish: "Daily aur monthly job reports. Printer, file type, ya sender number se filter karo." },
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>,
  },
];

export default function ProductFeatures() {
  const { lang } = useLanguage();

  return (
    <section id="product-features" className="py-16 md:py-28" style={{ background: "#F8FAFB" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF3B7A]/8 border border-[#FF3B7A]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B7A]" />
            <span className="text-sm font-medium text-[#0B2347]">Everything included</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2347] tracking-tight mb-5">
            Built for real print workflows
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every feature ships with the software. No plugins, no add-ons.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 group hover:border-[#0B2347]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 bg-[#0B2347]/5 rounded-xl flex items-center justify-center text-[#0B2347] mb-4 group-hover:bg-[#0B2347] group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-sm font-bold text-[#0B2347] mb-2">{f.title[lang]}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{f.body[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
