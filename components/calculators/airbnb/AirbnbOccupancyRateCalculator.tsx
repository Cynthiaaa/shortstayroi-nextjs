"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbOccupancyRateCalculator: React.FC = () => {
  const [bookedNights, setBookedNights] = useState<number>(0);
  const [availableNights, setAvailableNights] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateOccupancy = () => {
    if (availableNights <= 0) return setResults(0);
    const occupancyRate = (bookedNights / availableNights) * 100;
    setResults(occupancyRate);
  };

  // --- FAQ Schema for SEO ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Airbnb occupancy rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airbnb occupancy rate measures the percentage of nights booked compared to the total nights available in a specific period."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good Airbnb occupancy rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good Airbnb occupancy rate typically ranges from 60% to 80%, depending on location, season, and property type."
          }
        },
        {
          "@type": "Question",
          "name": "How can I improve my Airbnb occupancy rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can improve occupancy by optimizing your listing title, pricing dynamically, offering flexible cancellation, and enhancing guest experience."
          }
        }
      ]
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <CalculatorLayout
      title="Airbnb Occupancy Rate Calculator"
      description="Quickly calculate your Airbnb occupancy rate to measure property performance and identify opportunities to increase bookings."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Measure Your Airbnb’s Booking Performance
          </h2>
          <p>
            The <strong>Airbnb Occupancy Rate Calculator</strong> helps you determine 
            how effectively your property is being rented over time. By comparing booked 
            nights to total available nights, you’ll gain clear insights into your 
            property’s performance and income potential.
          </p>

          <h3 className="text-xl font-semibold mt-6">What Is Occupancy Rate?</h3>
          <p>
            Occupancy rate is a key metric that represents the percentage of days your 
            rental is booked compared to the total days available. For example, if your 
            Airbnb was booked for 18 nights in a 30-day month, your occupancy rate is 60%.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Occupancy Rate (%) = (Booked Nights / Available Nights) × 100
          </div>

          <h3 className="text-xl font-semibold mt-6">Why It Matters</h3>
          <p>
            A higher occupancy rate means stronger demand, more bookings, and better 
            cash flow. Low occupancy may signal overpricing, limited visibility, or 
            seasonal downturns. Tracking your rate monthly or quarterly helps identify 
            performance trends and opportunities to adjust pricing or marketing.
          </p>

          <h3 className="text-xl font-semibold mt-6">How to Use This Calculator</h3>
          <p>
            Simply enter the total number of nights your Airbnb was booked during a given 
            period and the total number of nights available for booking. The calculator 
            will instantly show your occupancy percentage.
          </p>

          <h3 className="text-xl font-semibold mt-6">Tips to Improve Airbnb Occupancy</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Use dynamic pricing tools to match market demand</li>
            <li>Offer discounts for longer stays or weekday bookings</li>
            <li>Improve listing photos, descriptions, and response time</li>
            <li>Encourage 5-star reviews from satisfied guests</li>
            <li>Target off-season travelers and business guests</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Typical Occupancy Benchmarks</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>High-performing Airbnb:</strong> 75%–90%
            </li>
            <li>
              <strong>Average occupancy:</strong> 55%–70%
            </li>
            <li>
              <strong>Low-performing Airbnb:</strong> below 50%
            </li>
          </ul>

          <p className="mt-6">
            Use this calculator to analyze your performance, set realistic goals, 
            and plan improvements that lead to higher profitability.
          </p>

          <h3 className="text-xl font-semibold mt-6">FAQs</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How often should I calculate my Airbnb occupancy rate?
              </p>
              <p>
                It’s best to calculate it monthly or quarterly to track trends and 
                seasonal variations in bookings.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Does a higher occupancy rate always mean higher profit?
              </p>
              <p>
                Not necessarily. Balancing occupancy and nightly rate is key — sometimes 
                fewer bookings at a higher rate yield better overall returns.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Booked Nights
          </label>
          <input
            type="number"
            value={bookedNights || ""}
            onChange={(e) => setBookedNights(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Available Nights
          </label>
          <input
            type="number"
            value={availableNights || ""}
            onChange={(e) => setAvailableNights(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* --- BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateOccupancy}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Occupancy Rate
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results !== null && (
        <div className="text-center mt-8 bg-blue-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Occupancy Rate</h3>
          <p className="text-3xl font-bold text-blue-700">
            {results.toFixed(2)}%
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbOccupancyRateCalculator;