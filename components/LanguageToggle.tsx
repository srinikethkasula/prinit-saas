"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "hi", label: "हि" },
  { value: "hinglish", label: "HG" },
];

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-0.5 bg-gray-100 rounded-full p-0.5">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setLang(o.value)}
          className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all duration-200 ${
            lang === o.value
              ? "bg-white text-[#0B2347] shadow-sm"
              : "text-gray-400 hover:text-gray-600"
          }`}
          aria-label={`Switch to ${o.value}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
