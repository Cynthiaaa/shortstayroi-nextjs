"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const HotelCancellationRateCalculator: React.FC = () => {
  const [bookings, setBookings] = useState<number>(0);
  const [cancellations, setCancellations] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateRate = () => {
    if (bookings <= 0) return setResults(0);
    const rate = (cancellations / bookings) * 100;
    setResults(rate);
  };

  // SEO FAQ Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a hotel cancellation rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The hotel cancellation rate measures the percentage of bookings that guests cancel before arrival. It's calculated by dividing cancelled reservations by total bookings and multiplying by 100.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good hotel cancellation rate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A healthy hotel cancellation rate is typically below 20%, though it varies by market, booking channel, and lead time. Lower rates mean more predictable revenue.",
          },
        },
        {
          "@type": "Question",
          name: "How can hotels reduce cancellation rates?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hotels can reduce cancellations by using non-refundable rates, offering flexible policies with conditions, improving pre-stay communication, and optimizing pricing strategies.",
          },
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <CalculatorLayout
      title="Hotel Cancellation Rate Calculator"
      description="Calculate your hotel's booking cancellation rate and assess its impact on revenue stability and occupancy forecasting."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Measure and Reduce Your Hotel Cancellation Rate
          </h2>
          <p>
            The <strong>Hotel Cancellation Rate Calculator</strong> helps hotels
            and property managers measure the percentage of bookings that are
            cancelled before check-in. Understanding this rate is key for
            accurate forecasting, revenue management, and improving booking
            reliability.
          </p>

          <h3 className="text-xl font-semibold mt-6">How It Works</h3>
          <p>
            Simply enter your total number of confirmed bookings and the number
            of cancelled reservations. The calculator will instantly show your
            cancellation rate as a percentage.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Cancellation Rate (%) = (Cancellations ÷ Total Bookings) × 100
          </div>

          <h3 className="text-xl font-semibold mt-6">Example</h3>
          <p>
            If your hotel received 500 bookings in a month and 75 were
            cancelled:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            (75 ÷ 500) × 100 = 15%
          </div>
          <p>
            Your cancellation rate would be 15%, which is within the healthy
            industry range.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Tips to Lower Cancellation Rates
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Implement partial prepayment or deposit policies</li>
            <li>Offer flexible but time-limited cancellations</li>
            <li>Send reminder emails and upsell before arrival</li>
            <li>Optimize booking channels with reliable guests</li>
            <li>Analyze peak cancellation periods and adjust pricing</li>
          </ul>

          <p className="mt-6">
            Reducing cancellation rates improves occupancy forecasting, revenue
            predictability, and overall operational efficiency.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Total Bookings", value: bookings, setter: setBookings },
          { label: "Cancelled Bookings", value: cancellations, setter: setCancellations },
        ].map((input, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-semibold mb-1">{input.label}</label>
            <input
              type="number"
              value={input.value || ""}
              onChange={(e) => input.setter(parseFloat(e.target.value) || 0)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateRate}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Cancellation Rate
        </button>
      </div>

      {/* RESULTS */}
      {results !== null && (
        <div className="text-center mt-10 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Cancellation Rate</h3>
          <p className="text-3xl font-bold text-yellow-700">
            {results.toFixed(2)}%
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default HotelCancellationRateCalculator;