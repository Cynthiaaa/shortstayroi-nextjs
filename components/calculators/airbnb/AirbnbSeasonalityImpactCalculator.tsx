"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbSeasonalityImpactCalculator: React.FC = () => {
  const [baseNightlyRate, setBaseNightlyRate] = useState<number>(0);
  const [lowSeasonOccupancy, setLowSeasonOccupancy] = useState<number>(0);
  const [midSeasonOccupancy, setMidSeasonOccupancy] = useState<number>(0);
  const [highSeasonOccupancy, setHighSeasonOccupancy] = useState<number>(0);
  const [results, setResults] = useState<{
    lowSeasonRevenue: number;
    midSeasonRevenue: number;
    highSeasonRevenue: number;
    annualRevenue: number;
  } | null>(null);

  const calculateSeasonalityImpact = () => {
    // Assume 4 months low, 4 months mid, 4 months high
    const lowSeasonRevenue = baseNightlyRate * (lowSeasonOccupancy / 100) * 30 * 4;
    const midSeasonRevenue = baseNightlyRate * (midSeasonOccupancy / 100) * 30 * 4;
    const highSeasonRevenue = baseNightlyRate * (highSeasonOccupancy / 100) * 30 * 4;
    const annualRevenue = lowSeasonRevenue + midSeasonRevenue + highSeasonRevenue;

    setResults({
      lowSeasonRevenue,
      midSeasonRevenue,
      highSeasonRevenue,
      annualRevenue,
    });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does seasonality affect Airbnb income?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airbnb income fluctuates with seasonal demand. Occupancy rates and nightly prices often rise during peak travel seasons and fall during off-peak months."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reduce seasonality risk in Airbnb rentals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reduce seasonality risk by offering monthly stays during low seasons, adjusting pricing dynamically, and targeting business or long-term guests."
          }
        },
        {
          "@type": "Question",
          "name": "What months are high season for Airbnb?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "High seasons vary by location, but typically summer months and holiday periods have the highest Airbnb occupancy and rates."
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
      title="Airbnb Seasonality Impact Calculator"
      description="Estimate how different seasons affect your Airbnb’s occupancy, pricing, and annual revenue potential."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Understand the Seasonal Impact on Your Airbnb Income
          </h2>
          <p>
            The <strong>Airbnb Seasonality Impact Calculator</strong> helps you
            estimate how fluctuations in demand across the year affect your
            short-term rental’s revenue. Whether your property is located in a
            beach town, ski resort, or urban hub, this calculator shows how
            different occupancy rates per season influence your yearly income.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            How Seasonality Influences Airbnb Performance
          </h3>
          <p>
            Airbnb demand varies throughout the year based on tourism patterns,
            holidays, local events, and weather. During high season, nightly
            rates and occupancy often peak. In contrast, off-season months may
            bring lower booking rates. Understanding this variation helps hosts
            plan budgets, optimize pricing, and set realistic revenue targets.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            How to Use This Calculator
          </h3>
          <p>
            Enter your average nightly rate and estimated occupancy rates for
            low, mid, and high seasons. The calculator assumes four months per
            season to project total yearly revenue. You’ll instantly see how
            much each season contributes to your annual income.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Annual Revenue = (Low × 4) + (Mid × 4) + (High × 4)
          </div>

          <h3 className="text-xl font-semibold mt-6">
            Why Seasonality Insights Matter
          </h3>
          <p>
            Knowing your seasonality trends helps you forecast cash flow,
            prepare for slower months, and plan maintenance or upgrades when
            demand drops. Many hosts use these insights to balance income across
            the year with smart pricing and flexible minimum stay rules.
          </p>

          <h3 className="text-xl font-semibold mt-6">Pro Tips for Hosts</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Offer discounts or long-term stays during off-season months</li>
            <li>Use dynamic pricing tools like Pricelabs or Wheelhouse</li>
            <li>Promote seasonal experiences or events in your listing</li>
            <li>Collect repeat guests by offering loyalty discounts</li>
          </ul>

          <p className="mt-6">
            With data-driven insights, you can reduce the financial impact of
            seasonality and maintain consistent rental income year-round.
          </p>

          <h3 className="text-xl font-semibold mt-6">FAQs</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How do I calculate seasonal occupancy rates?
              </p>
              <p>
                Estimate average occupancy based on historical booking data or
                similar listings in your area using Airbnb insights or local
                market reports.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Should I adjust my Airbnb prices by season?
              </p>
              <p>
                Yes — raising prices during peak months and offering discounts
                in low season maximizes your annual revenue potential.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            label: "Base Nightly Rate ($)",
            value: baseNightlyRate,
            setter: setBaseNightlyRate,
          },
          {
            label: "Low Season Occupancy (%)",
            value: lowSeasonOccupancy,
            setter: setLowSeasonOccupancy,
          },
          {
            label: "Mid Season Occupancy (%)",
            value: midSeasonOccupancy,
            setter: setMidSeasonOccupancy,
          },
          {
            label: "High Season Occupancy (%)",
            value: highSeasonOccupancy,
            setter: setHighSeasonOccupancy,
          },
        ].map((input, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-semibold mb-1">
              {input.label}
            </label>
            <input
              type="number"
              value={input.value || ""}
              onChange={(e) => input.setter(parseFloat(e.target.value) || 0)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      {/* --- BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateSeasonalityImpact}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Impact
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Low Season Revenue</h3>
            <p className="text-2xl font-bold text-blue-700">
              ${results.lowSeasonRevenue.toFixed(2)}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Mid Season Revenue</h3>
            <p className="text-2xl font-bold text-yellow-700">
              ${results.midSeasonRevenue.toFixed(2)}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">High Season Revenue</h3>
            <p className="text-2xl font-bold text-green-700">
              ${results.highSeasonRevenue.toFixed(2)}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Annual Total</h3>
            <p className="text-2xl font-bold text-purple-700">
              ${results.annualRevenue.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbSeasonalityImpactCalculator;