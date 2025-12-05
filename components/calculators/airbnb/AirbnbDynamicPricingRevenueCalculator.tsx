"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbDynamicPricingRevenueCalculator: React.FC = () => {
  const [baseRate, setBaseRate] = useState<number>(0);
  const [lowRateMultiplier, setLowRateMultiplier] = useState<number>(0.8);
  const [highRateMultiplier, setHighRateMultiplier] = useState<number>(1.3);
  const [occupancyLow, setOccupancyLow] = useState<number>(40);
  const [occupancyMid, setOccupancyMid] = useState<number>(65);
  const [occupancyHigh, setOccupancyHigh] = useState<number>(85);
  const [results, setResults] = useState<{
    lowSeasonRevenue: number;
    midSeasonRevenue: number;
    highSeasonRevenue: number;
    totalRevenue: number;
  } | null>(null);

  const calculateRevenue = () => {
    const lowSeasonRevenue = baseRate * lowRateMultiplier * (occupancyLow / 100) * 30 * 4;
    const midSeasonRevenue = baseRate * (occupancyMid / 100) * 30 * 4;
    const highSeasonRevenue = baseRate * highRateMultiplier * (occupancyHigh / 100) * 30 * 4;
    const totalRevenue = lowSeasonRevenue + midSeasonRevenue + highSeasonRevenue;
    setResults({ lowSeasonRevenue, midSeasonRevenue, highSeasonRevenue, totalRevenue });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is dynamic pricing for Airbnb?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dynamic pricing automatically adjusts your Airbnb nightly rates based on demand, seasonality, local events, and competition to maximize revenue."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate Airbnb revenue using dynamic pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can estimate Airbnb revenue by modeling different nightly rates and occupancy levels for low, mid, and high seasons to understand annual earnings potential."
          }
        },
        {
          "@type": "Question",
          "name": "What are the best tools for Airbnb dynamic pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hosts often use tools like Wheelhouse, Beyond Pricing, or Pricelabs to automate Airbnb rate adjustments based on real-time market data."
          }
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <CalculatorLayout
      title="Airbnb Dynamic Pricing Revenue Calculator"
      description="Estimate your Airbnb’s annual revenue potential by simulating dynamic pricing strategies across different demand seasons."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Optimize Your Airbnb Pricing Strategy
          </h2>
          <p>
            The <strong>Airbnb Dynamic Pricing Revenue Calculator</strong> helps you project
            annual revenue based on flexible nightly rates across different seasons. Dynamic
            pricing allows hosts to earn more during high-demand months while staying
            competitive in slower periods — the key to maximizing occupancy and profit.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why Use Dynamic Pricing for Airbnb?
          </h3>
          <p>
            Airbnb’s market is highly seasonal and demand-driven. Dynamic pricing strategies
            help you adapt to fluctuations, avoid underpricing during peak travel months,
            and maintain occupancy during off-seasons. By analyzing potential revenue across
            multiple pricing scenarios, you can optimize your property’s long-term performance.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Annual Revenue = (Low + Mid + High Season Revenue)
          </div>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            Suppose your base nightly rate is $150. You lower it to $120 during low season
            and raise it to $195 in high season. With average occupancies of 50%, 70%, and
            85% respectively, your annual dynamic pricing revenue could exceed a flat-rate
            model by 10–25%.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            Base $150 → Low 0.8× → $120, High 1.3× → $195 → More profit flexibility.
          </div>

          <h3 className="text-xl font-semibold mt-6">Tips for Smarter Pricing</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Use data tools to track demand and occupancy trends</li>
            <li>Raise rates for weekends, holidays, and local events</li>
            <li>Offer discounts for long stays during off-peak periods</li>
            <li>Analyze competitor listings monthly to stay competitive</li>
            <li>Balance rate increases with maintaining high review scores</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Why This Calculator Matters</h3>
          <p>
            Airbnb success depends on optimizing both price and occupancy. This calculator
            shows how even small adjustments in rate multipliers can produce significant
            revenue gains over a year. Dynamic pricing isn’t just for pros — it’s a
            data-backed method every host should use.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Base Nightly Rate ($)", value: baseRate, setter: setBaseRate },
          { label: "Low Season Rate Multiplier", value: lowRateMultiplier, setter: setLowRateMultiplier },
          { label: "High Season Rate Multiplier", value: highRateMultiplier, setter: setHighRateMultiplier },
          { label: "Low Season Occupancy (%)", value: occupancyLow, setter: setOccupancyLow },
          { label: "Mid Season Occupancy (%)", value: occupancyMid, setter: setOccupancyMid },
          { label: "High Season Occupancy (%)", value: occupancyHigh, setter: setOccupancyHigh },
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
          onClick={calculateRevenue}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Revenue
        </button>
      </div>

      {/* RESULTS */}
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
            <h3 className="text-gray-700 font-medium">Total Annual Revenue</h3>
            <p className="text-2xl font-bold text-purple-700">
              ${results.totalRevenue.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbDynamicPricingRevenueCalculator;