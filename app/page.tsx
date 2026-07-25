import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/hero";
import WhyOctoreq from "@/components/home/WhyOctoreq";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      <Navbar />
      <Hero />
      <WhyOctoreq />
      <Footer />
    </main>
  );
}
