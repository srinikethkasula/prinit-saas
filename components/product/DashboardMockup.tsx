import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const orders = [
  { file: "Resume_Rahul_2025.pdf", pages: 2, sender: "+91 98765 43210", status: "printing" },
  { file: "CH4_Notes_Biology.docx", pages: 14, sender: "+91 77041 12345", status: "done" },
  { file: "Aadhar_scan.jpg", pages: 1, sender: "+44 7700 900123", status: "queued" },
  { file: "Q3_Slides_Final.pdf", pages: 8, sender: "+1 555 012 3456", status: "queued" },
];

export default function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-full max-w-[500px]">
      {/* macOS window chrome */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-[11px] text-gray-400 font-medium tracking-tight">Prinit — Dashboard</span>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] inline-block animate-pulse" />
          <span className="text-[10px] text-gray-400">3 printers online</span>
        </div>
      </div>

      <div className="flex" style={{ height: 320 }}>
        {/* Sidebar */}
        <div className="w-12 bg-[#0B2347] flex flex-col items-center pt-4 pb-4 gap-4 flex-shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#FF3B7A] flex items-center justify-center">
            <span className="text-white text-[11px] font-black leading-none">P</span>
          </div>
          <div className="h-px w-7 bg-white/10 mt-1" />
          {/* Dashboard icon */}
          <div className="text-white cursor-pointer">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </div>
          {/* Printer icon */}
          <div className="text-white/30 cursor-pointer">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </div>
          {/* Chart icon */}
          <div className="text-white/30 cursor-pointer">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          {/* Settings at bottom */}
          <div className="mt-auto text-white/30 cursor-pointer">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          <div className="text-xs font-semibold text-[#0B2347] mb-3">Today</div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[
              { v: "47", l: "Jobs" },
              { v: "312", l: "Pages" },
              { v: "3", l: "Printers" },
            ].map((s) => (
              <div key={s.l} className="bg-[#0B2347]/5 rounded-xl p-2.5 border border-[#0B2347]/5">
                <div className="text-base font-bold text-[#0B2347] leading-none">{s.v}</div>
                <div className="text-[9px] text-gray-400 mt-1 uppercase tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Active jobs</div>

          <div className="space-y-1.5">
            {orders.map((o, i) => (
              <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-2.5 py-2 border border-gray-100">
                <div className="w-5 h-5 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-2.5 h-2.5" fill="#25D366" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-medium text-gray-700 truncate leading-none">{o.file}</div>
                  <div className="text-[9px] text-gray-400 mt-0.5 truncate">{o.sender} · {o.pages}p</div>
                </div>
                <div
                  className={`text-[8px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                    o.status === "done"
                      ? "bg-green-50 text-green-600"
                      : o.status === "printing"
                      ? "bg-[#FF3B7A]/10 text-[#FF3B7A] animate-pulse"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {o.status === "done" ? "Done" : o.status === "printing" ? "Printing" : "Queued"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
