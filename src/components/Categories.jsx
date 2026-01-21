const services = [
  { name: "Blouse Stitching", icon: "👚" },
  { name: "Designer Blouse Stitching", icon: "✨" },
  { name: "Ghagra Stitching", icon: "👗" },
  { name: "Women Dress Stitching", icon: "💃" },
  { name: "Kids Wear Stitching", icon: "🧒" },
  { name: "Alteration & Fitting", icon: "✂️" },
];

export default function Categories() {
  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold mb-4">
        Stitching Services We Offer
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-pink-50 p-4 rounded shadow"
          >
            <span className="text-2xl">{item.icon}</span>
            <p className="mt-2 font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
