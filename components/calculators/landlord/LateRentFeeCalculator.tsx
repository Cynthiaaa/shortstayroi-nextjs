"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const LateRentFeeCalculator: React.FC = () => {
  const [monthlyRent, setMonthlyRent] = useState<number>(0);
  const [lateFeePercent, setLateFeePercent] = useState<number>(0);
  const [lateFee, setLateFee] = useState<number | null>(null);

  const calculateLateFee = () => {
    setLateFee(monthlyRent * (lateFeePercent / 100));
  };

  return (
    <CalculatorLayout
      title="Late Rent Fee Calculator"
      description="Calculate late rent fees based on your tenant’s rent amount and your fee policy."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Fair and Transparent Late Fees</h2>
          <p>
            Late rent fees are a common component of rental agreements. Calculating them accurately ensures fairness for tenants while protecting landlords' cash flow.
          </p>
          <p>
            This calculator allows property owners to determine the monetary penalty for late payments based on a fixed percentage of the monthly rent. This helps prevent disputes and ensures compliance with lease agreements.
          </p>
          <p>
            Formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Late Fee = Monthly Rent × Late Fee Percentage
          </div>
          <p>
            Applying consistent late fee policies contributes to better property management, improved tenant accountability, and overall financial planning.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Monthly Rent ($)</label>
          <input
            type="number"
            value={monthlyRent || ""}
            onChange={(e) => setMonthlyRent(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Late Fee (%)</label>
          <input
            type="number"
            value={lateFeePercent || ""}
            onChange={(e) => setLateFeePercent(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={calculateLateFee}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Late Fee
        </button>
      </div>

      {lateFee !== null && (
        <div className="text-center mt-8 bg-red-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Late Rent Fee</h3>
          <p className="text-3xl font-bold text-red-700">${lateFee.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default LateRentFeeCalculator;