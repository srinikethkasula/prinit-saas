export type Lang = "en" | "hi" | "hinglish";

export interface T {
  // Navbar
  navHowItWorks: string;
  navFeatures: string;
  navWhoFor: string;
  navFaq: string;
  navPlatform: string;
  navJoinUs: string;
  // Hero
  heroEyebrow: string;
  heroH1a: string;
  heroH1b: string;
  heroH1c: string;
  heroSub: string;
  heroCta: string;
  heroCtaCaption: string;
  heroSecondary: string;
  heroStat1v: string; heroStat1l: string;
  heroStat2v: string; heroStat2l: string;
  heroStat3v: string; heroStat3l: string;
  // HowItWorks
  howEyebrow: string;
  howHeading: string;
  howSub: string;
  howStep1Title: string; howStep1Body: string;
  howStep2Title: string; howStep2Body: string;
  howStep3Title: string; howStep3Body: string;
  // Features
  featEyebrow: string;
  featHeading: string;
  featUsersLabel: string;
  featPartnersLabel: string;
  // WhoItsFor
  whoEyebrow: string;
  whoHeading: string;
  whoSub: string;
  // JoinUs
  joinHeading: string;
  joinSub: string;
  joinCta1: string;
  joinCta2: string;
  joinOrEmail: string;
  // FAQ
  faqEyebrow: string;
  faqHeading: string;
  faqSub: string;
  faqAskUs: string;
  faqItems: Array<{ q: string; a: string }>;
  // Footer
  footerTagline: string;
  footerNavigate: string;
  footerContact: string;
  footerWhatsAppUs: string;
  footerCopyright: string;
  footerBottomLine: string;
}

const en: T = {
  navHowItWorks: "How it works",
  navFeatures: "Features",
  navWhoFor: "Who it's for",
  navFaq: "FAQ",
  navPlatform: "Platform",
  navJoinUs: "Join Us",

  heroEyebrow: "Mumbai · Thane · Navi Mumbai",
  heroH1a: "Print anything.",
  heroH1b: "Instantly.",
  heroH1c: "Via WhatsApp.",
  heroSub: "Send files to Prinit on WhatsApp. We find the nearest partner shop, process your order, and have it ready — pickup or delivery, same day.",
  heroCta: "Join Us",
  heroCtaCaption: "For campuses · institutes · offices · print shops",
  heroSecondary: "Need to print something right now?",
  heroStat1v: "₹3", heroStat1l: "per B&W page",
  heroStat2v: "20+", heroStat2l: "partner shops",
  heroStat3v: "Same day", heroStat3l: "fulfillment",

  howEyebrow: "How it works",
  howHeading: "Three steps. No app. No account.",
  howSub: "End users just need WhatsApp. Nothing to install, nothing to remember.",
  howStep1Title: "Send files via WhatsApp",
  howStep1Body: "PDFs, Word docs, photos, or typed text — sent directly to Prinit's WhatsApp number. No login, no app, no email. Works on any phone.",
  howStep2Title: "We match to the nearest shop",
  howStep2Body: "Prinit finds the closest partner shop in your area. Order confirmed with price and ready time — right in the same chat.",
  howStep3Title: "Print ready — pickup or delivery",
  howStep3Body: "Files processed, blank pages removed, prints ready. Collect from the shop or get doorstep delivery at ₹20–30 across Mumbai, Thane, Navi Mumbai.",

  featEyebrow: "Features",
  featHeading: "What makes Prinit different",
  featUsersLabel: "For end users",
  featPartnersLabel: "For partners",

  whoEyebrow: "Who it's for",
  whoHeading: "Built for real print needs",
  whoSub: "Whether you run a campus, a coaching centre, a print shop, or a shared workspace — Prinit fits your model.",

  joinHeading: "Ready to bring Prinit to your community?",
  joinSub: "Campus, institute, office, or print shop — reach out on WhatsApp. We'll set you up in days.",
  joinCta1: "Join as a partner",
  joinCta2: "Print something now",
  joinOrEmail: "Or email",

  faqEyebrow: "FAQ",
  faqHeading: "Common questions",
  faqSub: "Still unsure?",
  faqAskUs: "Ask us on WhatsApp",
  faqItems: [
    { q: "What does it cost to partner with Prinit?", a: "Pricing details are shared when you connect with us directly — it varies by partner type and setup. Reach out on WhatsApp or email and we'll walk you through everything." },
    { q: "How do students or staff place orders?", a: "They WhatsApp Prinit's number directly with their files. No app, no login, no email. Any phone with WhatsApp works. Files are confirmed, priced, and ready — all in the same chat thread." },
    { q: "Can we designate our own preferred print shop?", a: "Yes. If you have a preferred shop on or near campus, we can designate them as your primary hub. If they're not in our network yet, we'll onboard them. Orders from your community route to them first." },
    { q: "What file formats does Prinit support?", a: "PDF, DOCX, XLSX, PNG, JPG, and plain text typed directly in WhatsApp. Multiple files can be sent in one order and merged automatically. We support orders with 100+ files." },
    { q: "How much does printing cost?", a: "B&W printing starts at ₹3–5 per page. Colour is ₹10–12 per page. Delivery is ₹20–30 depending on location. Bulk orders get automatic slab discounts." },
    { q: "Where is Prinit available?", a: "Currently live across Mumbai, Thane, and Navi Mumbai with 20+ partner shops. Locations include Mulund, Andheri East, Churchgate, Hiranandani Estate, Waghbil, Bhramand, and more." },
  ],

  footerTagline: "Printing infrastructure for campuses, institutes, and businesses across Mumbai, Thane, and Navi Mumbai.",
  footerNavigate: "Navigate",
  footerContact: "Contact",
  footerWhatsAppUs: "WhatsApp us",
  footerCopyright: "© 2024 Prinit. All rights reserved.",
  footerBottomLine: "Printing, simplified. From anywhere to any printer.",
};

const hi: T = {
  navHowItWorks: "कैसे काम करता है",
  navFeatures: "विशेषताएं",
  navWhoFor: "किसके लिए है",
  navFaq: "FAQ",
  navPlatform: "Platform",
  navJoinUs: "जुड़ें",

  heroEyebrow: "Mumbai · Thane · Navi Mumbai",
  heroH1a: "कुछ भी प्रिंट करें।",
  heroH1b: "तुरंत।",
  heroH1c: "WhatsApp से।",
  heroSub: "Prinit को WhatsApp पर फ़ाइल भेजें। हम नजदीकी partner shop ढूंढते हैं, order process करते हैं — same day pickup या delivery।",
  heroCta: "हमसे जुड़ें",
  heroCtaCaption: "Campus · Institute · Office · Print Shop के लिए",
  heroSecondary: "अभी कुछ print करना है?",
  heroStat1v: "₹3", heroStat1l: "प्रति B&W पेज",
  heroStat2v: "20+", heroStat2l: "partner shops",
  heroStat3v: "Same day", heroStat3l: "fulfillment",

  howEyebrow: "यह कैसे काम करता है",
  howHeading: "तीन steps। कोई app नहीं। कोई account नहीं।",
  howSub: "Users को बस WhatsApp चाहिए। कुछ install नहीं, कुछ याद नहीं रखना।",
  howStep1Title: "WhatsApp पर files भेजें",
  howStep1Body: "PDF, Word docs, photos, या typed text — Prinit के WhatsApp number पर directly भेजें। No login, no app, no email। किसी भी phone पर काम करता है।",
  howStep2Title: "हम nearest shop से match करते हैं",
  howStep2Body: "Prinit आपके area में सबसे नजदीकी partner shop ढूंढता है। Price और ready time के साथ order confirm — उसी chat में।",
  howStep3Title: "Print ready — pickup या delivery",
  howStep3Body: "Files process हो जाती हैं, blank pages हट जाते हैं, prints तैयार। Shop से collect करें या ₹20–30 में doorstep delivery लें।",

  featEyebrow: "विशेषताएं",
  featHeading: "Prinit को क्या अलग बनाता है",
  featUsersLabel: "Users के लिए",
  featPartnersLabel: "Partners के लिए",

  whoEyebrow: "यह किसके लिए है",
  whoHeading: "असली print जरूरतों के लिए बनाया गया",
  whoSub: "चाहे आप campus, coaching centre, print shop, या shared workspace चलाते हों — Prinit आपके model के लिए है।",

  joinHeading: "Prinit को अपनी community में लाना चाहते हैं?",
  joinSub: "Campus, institute, office, या print shop — WhatsApp पर बात करें। कुछ ही दिनों में set हो जाएगा।",
  joinCta1: "Partner के रूप में जुड़ें",
  joinCta2: "अभी कुछ print करें",
  joinOrEmail: "या email करें",

  faqEyebrow: "सामान्य प्रश्न",
  faqHeading: "अक्सर पूछे जाने वाले सवाल",
  faqSub: "अभी भी उलझन में हैं?",
  faqAskUs: "WhatsApp पर पूछें",
  faqItems: [
    { q: "Prinit के साथ partner बनने में कितना खर्च होगा?", a: "Pricing details हम directly WhatsApp या email पर share करते हैं — partner type और setup के अनुसार अलग होती है। हमसे संपर्क करें, हम सब कुछ समझाएंगे।" },
    { q: "Students या staff orders कैसे place करते हैं?", a: "वे directly Prinit के WhatsApp number पर files भेजते हैं। कोई app, login, या email नहीं। WhatsApp वाले किसी भी phone से काम करता है। Files confirm, price, और ready — उसी chat में।" },
    { q: "क्या हम अपना preferred print shop designate कर सकते हैं?", a: "हाँ। अगर आपके campus पर या पास कोई preferred shop है, हम उसे primary hub बना सकते हैं। अगर वो हमारे network में नहीं है, हम उन्हें onboard करेंगे।" },
    { q: "Prinit कौन से file formats support करता है?", a: "PDF, DOCX, XLSX, PNG, JPG, और WhatsApp में directly typed plain text। Multiple files एक order में भेज सकते हैं। 100+ files के orders supported हैं।" },
    { q: "Printing की cost कितनी है?", a: "B&W printing ₹3–5 प्रति page से शुरू। Colour ₹10–12 प्रति page। Delivery ₹20–30। Bulk orders पर automatic slab discounts।" },
    { q: "Prinit कहाँ available है?", a: "अभी Mumbai, Thane, और Navi Mumbai में 20+ partner shops के साथ live। Mulund, Andheri East, Churchgate, Hiranandani Estate, Waghbil, Bhramand और अन्य।" },
  ],

  footerTagline: "Mumbai, Thane, और Navi Mumbai में campus, institute, और businesses के लिए printing infrastructure।",
  footerNavigate: "Navigate",
  footerContact: "संपर्क",
  footerWhatsAppUs: "WhatsApp करें",
  footerCopyright: "© 2024 Prinit. सर्वाधिकार सुरक्षित।",
  footerBottomLine: "Printing, simplified. कहीं से भी, किसी भी printer पर।",
};

const hinglish: T = {
  navHowItWorks: "Kaise kaam karta hai",
  navFeatures: "Features",
  navWhoFor: "Kiske liye hai",
  navFaq: "FAQ",
  navPlatform: "Platform",
  navJoinUs: "Join karo",

  heroEyebrow: "Mumbai · Thane · Navi Mumbai",
  heroH1a: "Kuch bhi print karo.",
  heroH1b: "Instant.",
  heroH1c: "WhatsApp se.",
  heroSub: "Prinit ko WhatsApp pe file bhejo. Hum nearest partner shop dhundhte hain, order process karte hain — same day pickup ya delivery.",
  heroCta: "Join karo",
  heroCtaCaption: "Campus · institute · office · print shop ke liye",
  heroSecondary: "Abhi kuch print karna hai?",
  heroStat1v: "₹3", heroStat1l: "per B&W page",
  heroStat2v: "20+", heroStat2l: "partner shops",
  heroStat3v: "Same day", heroStat3l: "fulfillment",

  howEyebrow: "Ye kaise kaam karta hai",
  howHeading: "Teen steps. Koi app nahi. Koi account nahi.",
  howSub: "Users ko bas WhatsApp chahiye. Kuch install nahi, kuch yaad nahi rakhna.",
  howStep1Title: "WhatsApp pe files bhejo",
  howStep1Body: "PDF, Word docs, photos, ya typed text — Prinit ke WhatsApp number pe directly bhejo. No login, no app, no email. Kisi bhi phone pe kaam karta hai.",
  howStep2Title: "Hum nearest shop se match karte hain",
  howStep2Body: "Prinit aapke area mein sabse paas ka partner shop dhundhta hai. Price aur ready time ke saath order confirm — usi chat mein.",
  howStep3Title: "Print ready — pickup ya delivery",
  howStep3Body: "Files process ho jaati hain, blank pages hat jaate hain, prints taiyaar. Shop se collect karo ya ₹20–30 mein doorstep delivery lo.",

  featEyebrow: "Features",
  featHeading: "Prinit ko kya alag banata hai",
  featUsersLabel: "Users ke liye",
  featPartnersLabel: "Partners ke liye",

  whoEyebrow: "Ye kiske liye hai",
  whoHeading: "Real print needs ke liye banaya gaya",
  whoSub: "Chahe aap campus, coaching centre, print shop, ya shared workspace chalate ho — Prinit aapke model ke liye fit hai.",

  joinHeading: "Prinit apni community mein laana chahte ho?",
  joinSub: "Campus, institute, office, ya print shop — WhatsApp pe baat karo. Kuch hi dinon mein set ho jaoge.",
  joinCta1: "Partner ke roop mein judo",
  joinCta2: "Abhi kuch print karo",
  joinOrEmail: "Ya email karo",

  faqEyebrow: "FAQ",
  faqHeading: "Aksar pooche jaane wale sawaal",
  faqSub: "Abhi bhi confusion hai?",
  faqAskUs: "WhatsApp pe pucho",
  faqItems: [
    { q: "Prinit ke saath partner banne mein kitna kharcha hoga?", a: "Pricing details hum directly WhatsApp ya email pe share karte hain — partner type aur setup ke hisaab se alag hoti hai. Hamare se contact karo, sab samjha denge." },
    { q: "Students ya staff orders kaise place karte hain?", a: "Wo directly Prinit ke WhatsApp number pe files bhejte hain. Koi app, login, ya email nahi. WhatsApp wale kisi bhi phone se kaam karta hai. Files confirm, price, aur ready — usi chat mein." },
    { q: "Kya hum apna preferred print shop designate kar sakte hain?", a: "Haan. Agar aapke campus pe ya paas koi preferred shop hai, hum usse primary hub bana sakte hain. Agar wo hamare network mein nahi hai, hum unhe onboard kar lenge." },
    { q: "Prinit kaun se file formats support karta hai?", a: "PDF, DOCX, XLSX, PNG, JPG, aur WhatsApp mein directly typed plain text. Multiple files ek order mein bhej sakte hain. 100+ files ke orders supported hain." },
    { q: "Printing ki cost kitni hai?", a: "B&W printing ₹3–5 per page se shuru. Colour ₹10–12 per page. Delivery ₹20–30. Bulk orders pe automatic slab discounts." },
    { q: "Prinit kahan available hai?", a: "Abhi Mumbai, Thane, aur Navi Mumbai mein 20+ partner shops ke saath live. Mulund, Andheri East, Churchgate, Hiranandani Estate, Waghbil, Bhramand aur aur jagah." },
  ],

  footerTagline: "Mumbai, Thane, aur Navi Mumbai mein campus, institute, aur businesses ke liye printing infrastructure.",
  footerNavigate: "Navigate",
  footerContact: "Contact",
  footerWhatsAppUs: "WhatsApp karo",
  footerCopyright: "© 2024 Prinit. Sab rights reserved.",
  footerBottomLine: "Printing, simplified. Kahin se bhi, kisi bhi printer pe.",
};

export const translations: Record<Lang, T> = { en, hi, hinglish };
