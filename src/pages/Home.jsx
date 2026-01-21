import Stats from "../components/Stats";
import Categories from "../components/Categories";
import DesignGallery from "../components/DesignGallery";
import MeasurementChart from "../components/MeasurementChart";
import Map from "../components/Map";
import Reviews from "../components/Reviews";
import RatingBadge from "../components/RatingBadge";
import MoreInfo from "../components/MoreInfo";

export default function Home() {
  return (
    <div id="home" className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-2">
        Custom Stitching & Boutique Services
      </h2>

      <RatingBadge />

      <p className="mt-4 mb-4">
        We provide professional stitching services with perfect fitting
        and also help you choose the best designs and accessories.
      </p>

      <p className="font-semibold text-green-700">
        Home Delivery Available
      </p>

      <Stats />
      <MoreInfo />
      <Categories />
      <DesignGallery />

      <Reviews />
      <MeasurementChart />
      <Map />
    </div>
  );
}
