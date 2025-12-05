"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const AirbnbRevPARCalculator: React.FC = () => {
  const [averageDailyRate, setAverageDailyRate] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [revpar, setRevpar] = useState<number | null>(null);

  const calculateRevpar = () => {
    const result = (averageDailyRate * occupancyRate) / 100;
    setRevpar(result);
  };

  return (
    <CalculatorLayout
      title="Airbnb RevPAR Calculator"
      description="Calculate your Airbnb's Revenue Per Available Rental (RevPAR) to evaluate pricing efficiency and property performance."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900">
            Calculate and Optimize Your Airbnb Revenue Per Available Rental (RevPAR)
          </h2>
          <p>
            The <strong>Airbnb RevPAR Calculator</strong> helps you measure the total revenue generated per available property night — a key metric in the short-term rental and hospitality industries. RevPAR (Revenue Per Available Room or Rental) combines both pricing and occupancy performance to give you a clear snapshot of your property’s efficiency.
          </p>
          <p>
            While metrics like <strong>ADR (Average Daily Rate)</strong> and <strong>Occupancy Rate</strong> are useful individually, RevPAR provides a more comprehensive view of financial performance by blending the two. It reflects how well your Airbnb generates income regardless of the number of nights rented.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Formula for Airbnb RevPAR:
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            RevPAR = ADR × (Occupancy Rate ÷ 100)
          </div>
          <p>
            For example, if your property’s ADR is <strong>$150</strong> and your occupancy rate is <strong>80%</strong>, your RevPAR would be:
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            RevPAR = 150 × 0.8 = $120
          </div>
          <p>
            This means your Airbnb generates an average of $120 per available night — whether it’s booked or not. A higher RevPAR indicates that your property is both well-priced and well-occupied.
          </p>
          <p>
            RevPAR is a crucial performance metric for hosts managing multiple listings or comparing properties in different markets. It allows you to identify top-performing units and spot those that need pricing or marketing adjustments. When used alongside <strong>ADR</strong> and <strong>Cashflow</strong>, it paints a complete picture of your rental’s profitability.
          </p>
          <p>
            Regularly tracking your Airbnb’s RevPAR helps improve pricing strategies, forecast revenue, and adapt to changing demand. Seasonality, local events, and competition can all impact occupancy and ADR — but RevPAR captures the combined effect of both factors.
          </p>
          <p>
            For investors, RevPAR can serve as a quick benchmark for property performance, guiding acquisition decisions and helping to estimate return on investment (ROI). When comparing similar properties, a higher RevPAR generally reflects better overall efficiency.
          </p>
          <p>
            This calculator is perfect for Airbnb hosts, property managers, and short-term rental investors who want to make data-driven decisions. Whether you’re adjusting nightly rates, analyzing seasonal trends, or comparing listings across markets, RevPAR gives you the insights you need to increase profitability.
          </p>
          <p>
            Use this tool to monitor revenue performance over time, refine your pricing strategy, and keep your Airbnb operation competitive in a fast-changing market.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Average Daily Rate (ADR) ($)
          </label>
          <input
            type="number"
            value={averageDailyRate || ""}
            onChange={(e) => setAverageDailyRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Occupancy Rate (%)
          </label>
          <input
            type="number"
            value={occupancyRate || ""}
            onChange={(e) => setOccupancyRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateRevpar}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate RevPAR
        </button>
      </div>

      {/* RESULTS */}
      {revpar !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">
            Revenue Per Available Rental (RevPAR)
          </h3>
          <p className="text-3xl font-bold text-green-700">${revpar.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbRevPARCalculator;