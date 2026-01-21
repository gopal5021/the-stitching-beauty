export default function RatingBadge() {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm my-4">
      <span className="text-green-600 font-semibold text-sm">
        Google Rating
      </span>

      <span className="text-yellow-500 text-sm">
        ⭐⭐⭐⭐⭐
      </span>

      <span className="text-gray-700 text-sm font-semibold">
        4.9
      </span>

      <span className="text-gray-500 text-sm">
        (250+ reviews)
      </span>
    </div>
  );
}
