import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductAnimationDemo from "@/components/product/ProductAnimationDemo";
import ProductHowItWorks from "@/components/product/ProductHowItWorks";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductWhoFor from "@/components/product/ProductWhoFor";
import ProductCTA from "@/components/product/ProductCTA";

export const metadata: Metadata = {
  title: "Prinit Software — WhatsApp-to-Print for Shops, Campuses & Offices",
  description:
    "Install Prinit on Windows. Connect any printer. Accept print jobs from customers anywhere in the world via WhatsApp — automatically processed and printed. OTP cash mode, custom pricing, live dashboard.",
  keywords: [
    "print management software",
    "WhatsApp print software",
    "print shop software India",
    "campus printing software",
    "remote print software Windows",
    "automated print queue software",
    "WhatsApp printer integration",
    "print shop automation India",
    "OTP cash payment print",
    "custom pricing print software",
  ],
  alternates: { canonical: "https://prinit.io/product" },
  openGraph: {
    title: "Prinit Software — WhatsApp-to-Print Platform",
    description: "Install on Windows. Connect your printer. Accept print jobs globally via WhatsApp. OTP cash mode. Custom pricing.",
    url: "https://prinit.io/product",
    siteName: "Prinit",
    type: "website",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Prinit",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description:
    "WhatsApp-to-printer management software for print shops, campuses, and offices. Auto-prints on receipt, OTP cash payments, custom pricing, live dashboard.",
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  creator: { "@type": "Organization", name: "Prinit", url: "https://prinit.io" },
  featureList: [
    "Auto-print on WhatsApp message receipt",
    "Multi-printer support (USB, network, wireless)",
    "OTP mode for cash payments",
    "Custom per-page pricing control",
    "Real-time dashboard",
    "All major file formats (PDF, DOCX, PPTX, JPEG, PNG)",
    "Automatic customer WhatsApp replies",
    "Job history and analytics",
  ],
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        <ProductHero />
        <ProductAnimationDemo />
        <ProductHowItWorks />
        <ProductFeatures />
        <ProductWhoFor />
        <ProductCTA />
      </main>
      <Footer />
    </>
  );
}
