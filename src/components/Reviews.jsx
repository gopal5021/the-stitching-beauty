export default function Reviews() {
  const reviews = [
    {
      name: "Sneha Patil",
      review: "Beautiful blouse stitching and perfect fitting. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Rashmi Kulkarni",
      review: "Very neat work and on-time delivery. Loved the design suggestions.",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Pooja Deshmukh",
      review: "Great quality stitching for my daughter’s dress. Will order again.",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="my-10">
      <h3 className="text-2xl font-semibold mb-4">
        What Our Customers Say
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded shadow"
          >
            <p className="text-yellow-500 mb-2">{item.rating}</p>
            <p className="italic mb-2">"{item.review}"</p>
            <p className="font-semibold text-right">– {item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
