"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.navHowItWorks, href: "/#how-it-works" },
    { label: t.navFeatures, href: "/#features" },
    { label: t.navWhoFor, href: "/#who" },
    { label: t.navFaq, href: "/#faq" },
    { label: t.navPlatform, href: "/product" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/prinit-logo.webp"
            alt="Prinit"
            width={200}
            height={66}
            className="h-10 sm:h-12 lg:h-14 w-auto object-contain group-hover:opacity-85 transition-opacity duration-200"
            style={{ mixBlendMode: "multiply" }}
            priority
          />
        </Link>

        {/* Desktop nav links — lg only */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-gray-500 flex-1 justify-center">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#0B2347] transition-colors whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <LanguageToggle />
          {/* Join Us — desktop */}
          <a
            href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27d%20like%20to%20join"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#0B2347] hover:bg-[#0B2347]/90 text-white text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-full transition-all duration-200 active:scale-[0.97] whitespace-nowrap"
          >
            {t.navJoinUs}
          </a>
          {/* Hamburger — below lg */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-sm font-medium text-gray-600 hover:text-[#0B2347] hover:bg-gray-50 rounded-xl transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-3 pb-1">
            <a
              href="https://wa.me/919XXXXXXXXX?text=Hi%20Prinit%2C%20I%27d%20like%20to%20join"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#0B2347] text-white text-sm font-semibold px-5 py-3 rounded-full transition-all duration-200 active:scale-[0.97]"
            >
              {t.navJoinUs}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
