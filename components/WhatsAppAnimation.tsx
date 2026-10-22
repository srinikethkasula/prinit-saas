"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppAnimation() {
  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* Clean card — no browser chrome */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-visible">

        {/* SVG flow animation */}
        <div className="px-8 pt-8 pb-2">
          <svg viewBox="0 0 380 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
            {/* Motion path */}
            <path
              id="fp"
              d="M 72 60 C 130 20 250 20 308 60"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="2"
              strokeDasharray="7 5"
            />

            {/* WA icon — left, understated */}
            <circle cx="48" cy="60" r="34" fill="rgba(37,211,102,0.08)" />
            <circle cx="48" cy="60" r="26" fill="#25D366" />
            <g transform="translate(30 42) scale(1.5)">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="white"/>
            </g>

            {/* Travelling dots */}
            {[0, 0.4, 0.8].map((d, i) => (
              <circle key={i} r="3.5" fill="#0B2347" opacity="0">
                <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${d}s`} calcMode="spline" keySplines="0.42 0 0.58 1" keyTimes="0;1">
                  <mpath href="#fp" />
                </animateMotion>
                <animate attributeName="opacity" values="0;0.5;0.5;0" keyTimes="0;0.1;0.88;1" dur="2.4s" repeatCount="indefinite" begin={`${d}s`} />
              </circle>
            ))}

            {/* Travelling document */}
            <g>
              <animateMotion dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.42 0 0.58 1" keyTimes="0;1">
                <mpath href="#fp" />
              </animateMotion>
              {/* Document */}
              <rect x="-13" y="-18" width="26" height="36" rx="3" fill="white" stroke="#0B2347" strokeWidth="1.5" />
              <path d="M7 -18 L13 -12 L7 -12 Z" fill="#F3F4F6" stroke="#0B2347" strokeWidth="1" />
              {/* CMYK lines */}
              <rect x="-7" y="-5" width="14" height="4" rx="1" fill="#00AEEF" />
              <rect x="-7" y="2" width="14" height="4" rx="1" fill="#FF3B7A" />
              <rect x="-7" y="9" width="10" height="4" rx="1" fill="#FFD700" />
            </g>

            {/* Printer — right, navy styled */}
            <rect x="308" y="28" width="66" height="58" rx="8" fill="#F8FAFC" stroke="#0B2347" strokeWidth="2" />
            {/* Top slot */}
            <rect x="318" y="39" width="46" height="7" rx="2.5" fill="#E2E8F0" />
            {/* Body separator */}
            <line x1="308" y1="54" x2="374" y2="54" stroke="#E2E8F0" strokeWidth="1.5" />
            {/* LED — navy not green */}
            <circle cx="358" cy="64" r="3.5" fill="#0B2347" opacity="0.4">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
            </circle>
            {/* Output slot */}
            <rect x="318" y="80" width="46" height="5" rx="2" fill="#E2E8F0" />

            {/* Paper ejecting */}
            <rect rx="2" fill="white" stroke="#0B2347" strokeWidth="1.5" x="325" y="84">
              <animate attributeName="height" values="0;36;36;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1" />
              <animate attributeName="width" values="0;36;36;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1;0 0 1 1;0.4 0 0.2 1" />
            </rect>
            <rect rx="1" fill="#00AEEF" x="331" y="93">
              <animate attributeName="height" values="0;4;4;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="width" values="0;24;24;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" />
            </rect>
            <rect rx="1" fill="#FF3B7A" x="331" y="100">
              <animate attributeName="height" values="0;4;4;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="width" values="0;24;24;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" />
            </rect>
            <rect rx="1" fill="#FFD700" x="331" y="107">
              <animate attributeName="height" values="0;4;4;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="width" values="0;18;18;0" keyTimes="0;0.38;0.85;1" dur="2.4s" repeatCount="indefinite" />
            </rect>

            {/* Labels */}
            <text x="48" y="108" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="system-ui,sans-serif" fontWeight="500">WhatsApp</text>
            <text x="341" y="108" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="system-ui,sans-serif" fontWeight="500">Print Shop</text>
          </svg>
        </div>

        {/* Order confirmation — clean, no green label */}
        <div className="mx-5 mb-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-[#0B2347]">Order confirmed — 2 files, 9 pages</span>
          </div>
          <div className="bg-white rounded-lg px-3 py-2.5 border border-gray-100 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-gray-800">A&amp;M Stationers, Thane</div>
              <div className="text-[11px] text-gray-400 mt-0.5">B&amp;W · 9 pages · ₹45</div>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-[#0B2347]">Ready 11:10 AM</div>
              <div className="text-[10px] text-gray-400 mt-0.5">or delivery ₹30</div>
            </div>
          </div>
        </div>
      </div>

      {/* Single clean badge — no overlap */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 flex items-center gap-2 animate-float">
        <svg className="w-4 h-4 text-[#0B2347]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
        <div>
          <div className="text-[9px] text-gray-400 uppercase tracking-wider">Files</div>
          <div className="text-xs font-bold text-[#0B2347]">Encrypted</div>
        </div>
      </div>
    </div>
  );
}
