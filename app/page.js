import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Know from "./components/Know";

export default function Home() {
  return (
    <div className="w-full flex-col">
      <Hero />
      <Know />
      <AboutUs />
    </div>
  );
}
