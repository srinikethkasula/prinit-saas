"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type ML = Record<Lang, string>;
type MLA = Record<Lang, string[]>;

const segments: {
  title: ML;
  headline: ML;
  body: ML;
  points: MLA;
  icon: React.ReactNode;
  accent: string;
}[] = [
  {
    title: {
      en: "Print Shops",
      hi: "Print Shops",
      hinglish: "Print Shops",
    },
    headline: {
      en: "Turn idle time into income",
      hi: "Idle time को income में बदलें",
      hinglish: "Idle time ko income mein badlo",
    },
    body: {
      en: "New jobs arrive on WhatsApp while you work on existing ones. No counter queues, no phone calls — just a steady stream of print-ready files.",
      hi: "नए jobs WhatsApp पर आते हैं जब आप existing काम कर रहे होते हैं। कोई counter queue नहीं, कोई phone call नहीं — बस print-ready files का steady stream।",
      hinglish: "Naye jobs WhatsApp pe aate hain jab aap existing kaam kar rahe hote ho. Koi counter queue nahi, koi phone call nahi — bas print-ready files ka steady stream.",
    },
    points: {
      en: ["Jobs auto-queue — no manual intake", "Handle 3× more volume without extra staff", "Accept orders from customers across the city"],
      hi: ["Jobs auto-queue होती हैं — manual intake नहीं", "Extra staff के बिना 3× ज़्यादा volume handle करें", "पूरे शहर के customers से orders accept करें"],
      hinglish: ["Jobs auto-queue hoti hain — manual intake nahi", "Extra staff ke bina 3× zyada volume handle karo", "Poore sheher ke customers se orders accept karo"],
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    accent: "#0B2347",
  },
  {
    title: {
      en: "Campus Print Centres",
      hi: "Campus Print Centres",
      hinglish: "Campus Print Centres",
    },
    headline: {
      en: "Students print from anywhere",
      hi: "Students कहीं से भी print करें",
      hinglish: "Students kahin se bhi print karein",
    },
    body: {
      en: "Dorm room, library, canteen — students send files via WhatsApp. Prints are ready by the time they walk in. No queues, no waiting.",
      hi: "Dorm room, library, canteen — students WhatsApp से files भेजते हैं। जब वो पहुँचते हैं तब तक prints ready होते हैं। कोई queue नहीं, कोई wait नहीं।",
      hinglish: "Dorm room, library, canteen — students WhatsApp se files bhejte hain. Jab wo pahunchte hain tab tak prints ready hote hain. Koi queue nahi, koi wait nahi.",
    },
    points: {
      en: ["Zero walk-in queue for routine jobs", "Students send from any device", "Staff focus on complex jobs only"],
      hi: ["Routine jobs के लिए zero walk-in queue", "Students किसी भी device से भेजें", "Staff केवल complex jobs पर focus करें"],
      hinglish: ["Routine jobs ke liye zero walk-in queue", "Students kisi bhi device se bhejein", "Staff sirf complex jobs pe focus karein"],
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    accent: "#FF3B7A",
  },
  {
    title: {
      en: "Offices & Co-working",
      hi: "Offices & Co-working",
      hinglish: "Offices & Co-working",
    },
    headline: {
      en: "Print from home to the office",
      hi: "घर से office में print करें",
      hinglish: "Ghar se office mein print karo",
    },
    body: {
      en: "Remote, hybrid, or travelling — employees WhatsApp documents to the office printer. Finance, HR, and ops teams stop waiting for someone to be physically present.",
      hi: "Remote, hybrid, या travelling — employees WhatsApp से office printer पर documents भेजते हैं। Finance, HR, और ops teams का physically present होने का इंतज़ार खत्म।",
      hinglish: "Remote, hybrid, ya travelling — employees WhatsApp se office printer pe documents bhejte hain. Finance, HR, aur ops teams ka physically present hone ka intezar khatam.",
    },
    points: {
      en: ["WFH employees print to office with one message", "No VPN, no drivers, no email chains", "One Prinit install covers the whole floor"],
      hi: ["WFH employees एक message से office में print करें", "कोई VPN नहीं, कोई drivers नहीं, कोई email chains नहीं", "एक Prinit install पूरे floor को cover करता है"],
      hinglish: ["WFH employees ek message se office mein print karein", "Koi VPN nahi, koi drivers nahi, koi email chains nahi", "Ek Prinit install poore floor ko cover karta hai"],
    },
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    accent: "#00AEEF",
  },
];

const sectionHeading: ML = {
  en: "Who it's built for",
  hi: "किसके लिए बना है",
  hinglish: "Kiske liye bana hai",
};

const sectionH2: ML = {
  en: "One software. Three workflows.",
  hi: "एक software। तीन workflows।",
  hinglish: "Ek software. Teen workflows.",
};

const sectionSub: ML = {
  en: "The same install powers print shops, campuses, and offices — each with their own operating model.",
  hi: "यही install print shops, campuses, और offices को power देता है — हर एक के अपने operating model के साथ।",
  hinglish: "Yahi install print shops, campuses, aur offices ko power deta hai — har ek ke apne operating model ke saath.",
};

export default function ProductWhoFor() {
  const { lang } = useLanguage();

  return (
    <section id="product-who" className="py-16 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FF3B7A]/8 border border-[#FF3B7A]/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B7A]" />
            <span className="text-sm font-medium text-[#0B2347]">{sectionHeading[lang]}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B2347] tracking-tight mb-5">
            {sectionH2[lang]}
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            {sectionSub[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300"
                style={{ background: `${s.accent}10`, color: s.accent }}
              >
                {s.icon}
              </div>

              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: s.accent }}>
                {s.title[lang]}
              </div>
              <h3 className="text-xl font-bold text-[#0B2347] mb-3">{s.headline[lang]}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.body[lang]}</p>

              <ul className="space-y-2">
                {s.points[lang].map((p, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: s.accent }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
