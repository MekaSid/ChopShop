import Hero from "../components/hero";
import Services from "../components/services";
import Gallery from "../components/gallery";
import Crew from "../components/crew";
import Reviews from "../components/reviews";
import Hours from "../components/hours";
import WalkIns from "../components/walkins";
import Info from "../components/info";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Crew />
      <Reviews />
      <Hours />
      <WalkIns />
      <Info />
    </div>
  );
}
