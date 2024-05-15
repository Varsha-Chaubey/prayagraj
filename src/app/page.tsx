import Facts from "@/components/Facts";
import FamousPeople from "@/components/FamousPeople";
import HeroSection from "@/components/HeroSection";
import SightsSection from "@/components/SightsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
      <HeroSection/>
      <SightsSection/>
      <Facts/>
      <FamousPeople/>
    </main>
  );
}
