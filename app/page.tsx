import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoItsFor from "@/components/WhoItsFor";
import JoinUs from "@/components/JoinUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhoItsFor />
        <JoinUs />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
