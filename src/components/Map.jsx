import GoogleReviewLink from "./GoogleReviewLink";

export default function Map() {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">
        Our Location
      </h3>

      <iframe
        title="map"
        className="w-full h-64 rounded"
        src="https://www.google.com/maps?q=India&output=embed"
        loading="lazy"
      ></iframe>

      <div className="mt-4">
        <GoogleReviewLink />
      </div>
    </div>
  );
}
