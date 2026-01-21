import m1 from "../assets/measurements/m1.jpg";
import m2 from "../assets/measurements/m2.jpg";
import m3 from "../assets/measurements/m3.jpg";
import m4 from "../assets/measurements/m4.jpg";
import m5 from "../assets/measurements/m5.jpg";
import m6 from "../assets/measurements/m6.jpg";

export default function MeasurementGuide() {
  const images = [m1, m2, m3, m4, m5, m6];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-4">
        Measurement Guide
      </h2>

      <p className="text-gray-700 mb-6">
        Please refer to the images below to understand how measurements
        should be taken. You can follow any suitable method shown.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="measurement guide"
            className="rounded-lg shadow hover:scale-105 transition duration-300"
          />
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8 italic">
        More measurement guide images will be added soon for better understanding.
      </p>

    </div>
  );
}
