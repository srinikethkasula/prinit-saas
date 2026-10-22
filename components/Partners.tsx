const partners = [
  "Jyoti Stores",
  "Rush Pharmacy",
  "A&M Stationers",
  "Neelkanth Prints",
  "Hiranandani Estate Hub",
  "Mulund Print Centre",
  "Churchgate Copies",
  "Andheri East Print",
  "Girgaon Stationery",
  "Bhramand Prints",
];

export default function Partners() {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-gray-50/50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
          Active partner shops
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-2.5 bg-white border border-gray-100 rounded-full px-5 py-2.5 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span className="text-sm font-medium text-gray-700">{name}</span>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 text-center">
        <p className="text-sm text-gray-500">
          Across Mumbai, Thane & Navi Mumbai ·{" "}
          <a
            href="https://prinit.io/#hubs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-medium hover:underline"
          >
            View all hubs
          </a>
        </p>
      </div>
    </section>
  );
}
