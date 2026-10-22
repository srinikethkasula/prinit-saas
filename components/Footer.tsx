"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 space-y-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/prinit-logo.webp"
              alt="Prinit"
              className="h-10 md:h-12 w-auto object-contain"
              style={{ mixBlendMode: "multiply" }}
            />
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">{t.footerTagline}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/prinit.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-200 transition-colors"
                aria-label="Prinit on Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/919XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-green-100 transition-colors"
                aria-label="Prinit on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" fill="currentColor" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{t.footerNavigate}</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              {[
                { label: t.navHowItWorks, href: "/#how-it-works" },
                { label: t.navFeatures, href: "/#features" },
                { label: t.navWhoFor, href: "/#who" },
                { label: t.navFaq, href: "/#faq" },
                { label: t.navPlatform, href: "/product", external: false },
                { label: "prinit.io", href: "https://prinit.io", external: true },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="hover:text-[#0B2347] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{t.footerContact}</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <a href="mailto:hiprinit@gmail.com" className="hover:text-[#0B2347] transition-colors">
                  hiprinit@gmail.com
                </a>
              </li>
              <li>Nikhil Talreja</li>
              <li>Thane, Maharashtra</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%20need%20help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#25D366] font-medium hover:underline text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#25D366" />
                  {t.footerWhatsAppUs}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>{t.footerCopyright}</span>
          <span>{t.footerBottomLine}</span>
        </div>
      </div>
    </footer>
  );
}
