import b1 from "../assets/blouse/b1.jpg";
import b2 from "../assets/blouse/b2.jpg";
import b3 from "../assets/blouse/b3.jpg";
import b4 from "../assets/blouse/b4.jpg";
import b5 from "../assets/blouse/b5.jpg";
import b6 from "../assets/blouse/b6.jpg";
import b7 from "../assets/blouse/b7.jpg";
import b8 from "../assets/blouse/b8.jpg";
import b9 from "../assets/blouse/b9.jpg";
import b10 from "../assets/blouse/b10.jpg";
import b11 from "../assets/blouse/b11.jpg";
import b12 from "../assets/blouse/b12.jpg";
import b13 from "../assets/blouse/b13.jpg";
import b14 from "../assets/blouse/b14.jpg";
import b15 from "../assets/blouse/b15.jpg";
import b16 from "../assets/blouse/b16.jpg";
import b17 from "../assets/blouse/b17.jpg";
import b18 from "../assets/blouse/b18.jpg";
import b19 from "../assets/blouse/b19.jpg";
import b20 from "../assets/blouse/b20.jpg";
import b21 from "../assets/blouse/b21.jpg";

export default function BlouseStitching() {
  const images = [
    b1, b2, b3, b4, b5,
    b6, b7, b8, b9, b10,
    b11, b12, b13, b14, b15,
    b16, b17, b18, b19, b20,
    b21,
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">
        Blouse Stitching Designs
      </h2>

      <p className="mb-6 text-gray-700">
        Explore our latest blouse stitching designs including back-neck patterns,
        sleeves, piping, embroidery and designer styles.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="blouse design"
            className="rounded-lg shadow hover:scale-105 transition duration-300"
          />
        ))}
      </div>
      <p className="text-center text-gray-500 mt-8 italic">
        More blouse design images will be added soon. Please stay connected.
      </p>
    </div>
  );
}
