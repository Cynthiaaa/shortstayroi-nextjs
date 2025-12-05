"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const SeasonalDemandSimulator: React.FC = () => {
  const [baseRate, setBaseRate] = useState<number>(0);
  const [seasonFactor, setSeasonFactor] = useState<number>(0);
  const [projectedRevenue, setProjectedRevenue] = useState<number | null>(null);

  const simulateRevenue = () => {
    const revenue = baseRate * (1 + seasonFactor / 100);
    setProjectedRevenue(revenue);
  };

  return (
    <CalculatorLayout
      title="Seasonal Demand Simulator"
      description="Estimate how seasonal variations affect your Airbnb rental income and occupancy."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Plan for Seasonal Income Fluctuations</h2>
          <p>
            Short-term rental income can vary dramatically with seasons. This simulator helps hosts predict revenue changes due to seasonality. Enter your base nightly rate and expected seasonal factor to see potential revenue swings and plan your pricing strategy accordingly.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Base Nightly Rate ($)", value: baseRate, setter: setBaseRate },
          { label: "Seasonal Adjustment (%)", value: seasonFactor, setter: setSeasonFactor },
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

      <div className="text-center mt-8">
        <button
          onClick={simulateRevenue}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Simulate Revenue
        </button>
      </div>

      {projectedRevenue !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Projected Revenue</h3>
          <p className="text-3xl font-bold text-green-700">${projectedRevenue.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default SeasonalDemandSimulator;