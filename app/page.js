import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Know from "./components/Know";
import PriceCard from "./components/PriceCard";
import BrokenCard from "./components/Steps";
import { Testimonial } from "./components/Testimonial";
import WhyChoose from "./components/WhyChoose";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <AboutUs />
      <Know />
      <PriceCard />
      <WhyChoose />
      <BrokenCard />
      <Testimonial />
    </div>
  );
}
