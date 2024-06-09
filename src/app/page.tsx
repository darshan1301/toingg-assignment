import AutomateAgent from "@/components/sections/AutomateAgent";
import Capabilities from "@/components/sections/Capabilities";
import ExploreToingg from "@/components/sections/ExploreToingg";
import FAQ from "@/components/sections/FAQ";
import FeatureCard from "@/components/sections/FeatureCard";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustSafety from "@/components/sections/TrustSafety";
import TryNow from "@/components/sections/TryNow";
import VideoSection from "@/components/sections/VideoSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <HeroSection />
      <TryNow />
      <AutomateAgent />
      <VideoSection />
      <ExploreToingg />
      <FeatureCard />
      <Capabilities />
      <TrustSafety />
      <FAQ />
      <Footer />
    </main>
  );
}
