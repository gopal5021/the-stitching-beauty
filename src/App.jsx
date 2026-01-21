import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Accessories from "./pages/Accessories";
import BlouseStitching from "./pages/BlouseStitching";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import MeasurementGuide from "./pages/MeasurementGuide";
import InstagramButton from "./components/InstagramButton";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blouse-stitching" element={<BlouseStitching />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/measurement-guide" element={<MeasurementGuide />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <CallButton />
      <InstagramButton />

    </>
  );
}

export default App;
