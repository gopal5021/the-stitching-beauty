import { useNavigate } from "react-router-dom";

const designItems = [
  {
    title: "Blouse Designs",
    icon: "👚",
    description: "Explore blouse stitching designs",
    path: "/blouse-stitching",
  },
  {
    title: "Ladies Accessories",
    icon: "👜",
    description: "Browse blouse accessories & items",
    path: "/accessories",
  },
];

export default function DesignGallery() {
  const navigate = useNavigate();

  return (
    <div className="my-12">
      <h3 className="text-2xl font-semibold mb-4">
        Designs & Accessories Gallery
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {designItems.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="cursor-pointer bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-3xl">{item.icon}</div>
            <h4 className="mt-3 font-bold text-lg">{item.title}</h4>
            <p className="text-gray-600 text-sm mt-1">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
