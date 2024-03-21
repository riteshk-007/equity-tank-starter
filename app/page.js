import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Know from "./components/Know";
import PriceCard from "./components/PriceCard";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <div className="w-full flex-col">
      <Hero />
      <Know />
      <AboutUs />
      <PriceCard />
      <WhyChoose />
    </div>
  );
}
