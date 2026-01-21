export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto p-6 my-10">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Get in Touch</h2>

      <p className="mb-3">
        <strong>Owner:</strong> Mrs. Pallavi Ramakant Soni
      </p>

      <p className="mb-3">
        <strong>Phone:</strong>{" "}
        <a
          href="tel:+919420364064"
          className="text-blue-600 font-semibold hover:underline"
        >
          +91 9420364064
        </a>
      </p>

      <p className="mb-3">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:pallavisoni5021@gmail.com?subject=Stitching%20Inquiry%20from%20Website"
          className="text-blue-600 font-semibold hover:underline"
        >
          pallavisoni5021@gmail.com
        </a>
      </p>

      <p className="text-gray-700 mt-4">
        Contact us for custom stitching, blouse designs, accessories, and home
        delivery services. We will be happy to assist you.
      </p>
    </div>
  );
}
