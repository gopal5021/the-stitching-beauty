import { useNavigate } from "react-router-dom";

export default function MeasurementChart() {
  const navigate = useNavigate();

  return (
    <div className="my-12 text-center">
      <h3 className="text-2xl font-semibold mb-3">
        Measurement Guidelines
      </h3>

      <p className="text-gray-600 mb-4">
        Here is the correct way to take measurements for perfect fitting.
      </p>

      <button
        onClick={() => navigate("/measurement-guide")}
        className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700"
        type="button"
      >
        Click here to see how to measure
      </button>
    </div>
  );
}
