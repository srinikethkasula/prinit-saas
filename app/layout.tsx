import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Prinit — Instant Printing in Thane, Mumbai & Navi Mumbai via WhatsApp",
    template: "%s | Prinit",
  },
  description:
    "Print documents, assignments, and photos instantly via WhatsApp at partner shops across Thane, Mumbai, and Navi Mumbai. No app, no account — just send the file.",
  keywords: [
    "online printing Thane",
    "print shop near me Mumbai",
    "instant printing Navi Mumbai",
    "WhatsApp printing service India",
    "document printing Thane",
    "campus printing solution Mumbai",
    "college printing service Thane",
    "print assignment online Mumbai",
    "print shop partner Mumbai",
    "affordable printing Thane",
    "print near me Navi Mumbai",
    "WhatsApp se print karo",
    "Thane mein printing service",
    "print management software India",
    "print shop software WhatsApp",
  ],
  authors: [{ name: "Prinit", url: "https://prinit.io" }],
  creator: "Prinit",
  publisher: "Prinit",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Prinit — Instant Printing via WhatsApp in Mumbai, Thane & Navi Mumbai",
    description:
      "Send files on WhatsApp. Get them printed at the nearest shop. Pickup or delivery — same day. Colleges, institutes, and print shops: join the Prinit network.",
    url: "https://prinit.io",
    siteName: "Prinit",
    locale: "en_IN",
    type: "website",
    images: [{ url: "https://prinit.io/prinit-logo.webp", width: 1200, height: 630, alt: "Prinit — WhatsApp Printing Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prinit — Instant Printing via WhatsApp",
    description: "Print documents at nearby shops via WhatsApp. Thane, Mumbai, Navi Mumbai. ₹3/page onwards.",
  },
  alternates: {
    canonical: "https://prinit.io",
    languages: { "en-IN": "https://prinit.io", "hi-IN": "https://prinit.io" },
  },
  verification: { google: "" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://prinit.io",
  name: "Prinit",
  description: "WhatsApp-based instant printing service in Mumbai, Thane, and Navi Mumbai. Send files via WhatsApp, get prints same day.",
  url: "https://prinit.io",
  email: "hiprinit@gmail.com",
  founder: { "@type": "Person", name: "Nikhil Talreja" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Thane",
    addressRegion: "Maharashtra",
    postalCode: "400601",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 19.2183, longitude: 72.9781 },
  areaServed: [
    { "@type": "City", name: "Thane" },
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Navi Mumbai" },
  ],
  serviceType: "Printing Service",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Black & White Printing", description: "B&W document printing from ₹3/page" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Colour Printing", description: "Colour printing from ₹10/page" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Doorstep Delivery", description: "Print delivery across Mumbai, Thane, Navi Mumbai for ₹20–30" } },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: ["https://www.instagram.com/prinit.io/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
