import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/HeroTemp";
import WhyOctoreq from "@/components/home/WhyOctoreq";
import MerchantJourney from "@/components/home/MerchantJourney";
import Products from "@/components/home/Products";
import DeveloperExperience from "@/components/home/DeveloperExperience";
import Security from "@/components/home/Security";

import CTA from "@/components/shared/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Homepage Sections */}
      <WhyOctoreq />
      <MerchantJourney />
      <Products />
      <DeveloperExperience />
      <Security />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}