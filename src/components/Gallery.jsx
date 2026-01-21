import blouse from "../assets/gallery/blouse.jpg";
import ghagra from "../assets/gallery/ghagra.jpg";
import kids from "../assets/gallery/kids.jpg";
import women from "../assets/gallery/women-dress.jpg";
import material from "../assets/gallery/material.jpg";
import accessories from "../assets/gallery/accessories.jpg";

export default function Gallery({ filter }) {
  const images = [
    { src: blouse, category: "Blouse Stitching" },
    { src: ghagra, category: "Ghagra Stitching" },
    { src: kids, category: "Kids Wear" },
    { src: women, category: "Women Dresses" },
    { src: material, category: "Fancy Materials" },
    { src: accessories, category: "Ladies Accessories" },
  ];

  const filtered = filter
    ? images.filter(img => img.category === filter)
    : images;

  return (
    <div id="gallery" className="my-10">
      <h3 className="text-2xl font-semibold mb-4">
        Our Work Gallery
      </h3>

      {filter && (
        <p className="mb-3 text-sm text-gray-600">
          Showing: <strong>{filter}</strong>
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.category}
            className="rounded shadow"
          />
        ))}
      </div>
    </div>
  );
}
