//internal imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import URLForm from "./components/URLForm";
import AdvancedStats from "./components/AdvancedStats";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import CyanStraightLine from "./components/CyanStraightLine";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 font-display pt-[3rem] overflow-x-hidden">
      <Navbar />
      <Hero />
      <AdvancedStats />
      <Boost />
      <Footer />
    </main>
  );
}
