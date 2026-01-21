import a1 from "../assets/accessories/a1.jpg";
import a2 from "../assets/accessories/a2.jpg";
import a3 from "../assets/accessories/a3.jpg";
import a4 from "../assets/accessories/a4.jpg";
import a5 from "../assets/accessories/a5.jpg";
import a6 from "../assets/accessories/a6.jpg";
import a7 from "../assets/accessories/a7.jpg";
import a8 from "../assets/accessories/a8.jpg";
import a9 from "../assets/accessories/a9.jpg";
import a10 from "../assets/accessories/a10.jpg";
import a11 from "../assets/accessories/a11.jpg";
import a12 from "../assets/accessories/a12.jpg";
import a13 from "../assets/accessories/a13.jpg";
import a14 from "../assets/accessories/a14.jpg";
import a15 from "../assets/accessories/a15.jpg";

export default function Accessories() {
  const images = [
    a1, a2, a3, a4, a5,
    a6, a7, a8, a9, a10,
    a11, a12, a13, a14, a15,
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">
        Ladies Accessories Collection
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="ladies accessory"
            className="rounded-lg shadow hover:scale-105 transition duration-300"
          />
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8 italic">
        More accessories images will be added soon. New collections coming up.
      </p>

    </div>
  );
}
