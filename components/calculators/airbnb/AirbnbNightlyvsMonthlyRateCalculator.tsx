"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbNightlyVsMonthlyRateCalculator: React.FC = () => {
  const [nightlyRate, setNightlyRate] = useState<number>(0);
  const [monthlyRate, setMonthlyRate] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [monthlyIncome, setMonthlyIncome] = useState<number | null>(null);

  const calculateIncome = () => {
    const incomeFromNightly = nightlyRate * (occupancyRate / 100) * 30;
    setMonthlyIncome(Math.max(incomeFromNightly, monthlyRate));
  };

  return (
    <CalculatorLayout
      title="Airbnb Nightly vs Monthly Rate Calculator"
      description="Compare potential income from nightly vs monthly Airbnb rates based on occupancy."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Optimize Your Airbnb Pricing</h2>
          <p>
            This calculator helps Airbnb hosts determine whether nightly or monthly rates generate higher revenue. 
            Enter your nightly rate, expected monthly rate, and average occupancy to see which option maximizes your income.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Nightly Rate ($)</label>
          <input
            type="number"
            value={nightlyRate || ""}
            onChange={(e) => setNightlyRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Monthly Rate ($)</label>
          <input
            type="number"
            value={monthlyRate || ""}
            onChange={(e) => setMonthlyRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Occupancy Rate (%)</label>
          <input
            type="number"
            value={occupancyRate || ""}
            onChange={(e) => setOccupancyRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={calculateIncome}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Monthly Income
        </button>
      </div>

      {monthlyIncome !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Estimated Monthly Income</h3>
          <p className="text-3xl font-bold text-green-700">${monthlyIncome.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbNightlyVsMonthlyRateCalculator;