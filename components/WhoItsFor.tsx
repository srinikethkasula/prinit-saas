"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const audiences = [
  {
    title: { en: "Colleges & Universities", hi: "Colleges & Universities", hinglish: "Colleges & Universities" },
    emoji: "🎓",
    description: {
      en: "Set up a designated print hub on campus. Students send files via WhatsApp, get same-day prints — no printer room queues, no toner headaches for admin.",
      hi: "Campus पर designated print hub setup करें। Students WhatsApp से files भेजते हैं, same-day prints मिलते हैं।",
      hinglish: "Campus pe designated print hub setup karo. Students WhatsApp se files bhejte hain, same-day prints milte hain.",
    },
    benefits: {
      en: ["Dedicated hub at your campus", "Student ID-linked ordering", "Bulk pricing for your community", "No hardware to maintain"],
      hi: ["Campus पर dedicated hub", "Student ID-linked ordering", "Community के लिए bulk pricing", "कोई hardware maintain नहीं"],
      hinglish: ["Campus pe dedicated hub", "Student ID-linked ordering", "Community ke liye bulk pricing", "Koi hardware maintain nahi"],
    },
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    accent: "text-blue-600",
    iconBg: "bg-blue-100",
    waText: "Colleges",
  },
  {
    title: { en: "Coaching Institutes", hi: "Coaching Institutes", hinglish: "Coaching Institutes" },
    emoji: "📚",
    description: {
      en: "Give students access to printed study materials, question papers, and notes without running an in-house print operation.",
      hi: "Students को printed study materials, question papers, और notes की access दें — in-house printing के बिना।",
      hinglish: "Students ko printed study materials, question papers, aur notes ki access do — in-house printing ke bina.",
    },
    benefits: {
      en: ["No minimum order volume", "Multiple file formats supported", "Delivery to institute address", "Track all orders in real time"],
      hi: ["कोई minimum order volume नहीं", "Multiple file formats supported", "Institute address पर delivery", "Real time में सभी orders track करें"],
      hinglish: ["Koi minimum order volume nahi", "Multiple file formats supported", "Institute address pe delivery", "Real time mein sab orders track karo"],
    },
    color: "from-purple-50 to-pink-50",
    border: "border-purple-100",
    accent: "text-purple-600",
    iconBg: "bg-purple-100",
    waText: "Coaching",
  },
  {
    title: { en: "Print Shop Owners", hi: "Print Shop Owners", hinglish: "Print Shop Owners" },
    emoji: "🖨️",
    description: {
      en: "Join the Prinit network and monetise idle print time. We send you verified, pre-confirmed orders — you fulfil them.",
      hi: "Prinit network join करें और idle print time monetise करें। हम आपको verified, pre-confirmed orders भेजते हैं।",
      hinglish: "Prinit network join karo aur idle print time monetise karo. Hum aapko verified, pre-confirmed orders bhejte hain.",
    },
    benefits: {
      en: ["Orders routed directly to you", "Real-time job notifications", "Earn from existing equipment", "No new hardware needed"],
      hi: ["Orders directly आपके पास आते हैं", "Real-time job notifications", "Existing equipment से earn करें", "नया hardware नहीं चाहिए"],
      hinglish: ["Orders directly aapke paas aate hain", "Real-time job notifications", "Existing equipment se earn karo", "Naya hardware nahi chahiye"],
    },
    color: "from-green-50 to-emerald-50",
    border: "border-green-100",
    accent: "text-green-700",
    iconBg: "bg-green-100",
    waText: "Print Shop",
  },
  {
    title: { en: "Co-working & Offices", hi: "Co-working & Offices", hinglish: "Co-working & Offices" },
    emoji: "🏢",
    description: {
      en: "Give members and staff a printing perk without buying hardware. Prinit handles fulfilment; you just share our WhatsApp number.",
      hi: "Members और staff को hardware खरीदे बिना printing perk दें। Prinit fulfilment handle करता है।",
      hinglish: "Members aur staff ko hardware kharide bina printing perk do. Prinit fulfilment handle karta hai.",
    },
    benefits: {
      en: ["No printer purchase needed", "Members order independently", "Delivery to your address", "Branded onboarding card available"],
      hi: ["Printer purchase नहीं चाहिए", "Members independently order करते हैं", "आपके address पर delivery", "Branded onboarding card available"],
      hinglish: ["Printer purchase nahi chahiye", "Members independently order karte hain", "Aapke address pe delivery", "Branded onboarding card available"],
    },
    color: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    accent: "text-orange-600",
    iconBg: "bg-orange-100",
    waText: "Office",
  },
];

export default function WhoItsFor() {
  const { t, lang } = useLanguage();

  return (
    <section id="who" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] mb-4">
            <div className="w-4 h-px bg-[#25D366]" />
            {t.whoEyebrow}
            <div className="w-4 h-px bg-[#25D366]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">{t.whoHeading}</h2>
          <p className="text-lg text-gray-600">{t.whoSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <div key={i} className={`group relative rounded-2xl border ${a.border} bg-gradient-to-br ${a.color} p-7 hover:shadow-lg transition-all duration-300`}>
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-12 h-12 rounded-2xl ${a.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {a.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{a.title[lang]}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{a.description[lang]}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {a.benefits[lang].map((b, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <svg className={`w-4 h-4 flex-shrink-0 ${a.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href={`https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27m%20from%20a%20${encodeURIComponent(a.waText)}%20and%20want%20to%20partner`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.accent} hover:gap-2.5 transition-all duration-200`}
                >
                  {lang === "hi" ? "Enquire करें" : lang === "hinglish" ? "Enquire karo" : `Enquire for ${a.waText}`}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
