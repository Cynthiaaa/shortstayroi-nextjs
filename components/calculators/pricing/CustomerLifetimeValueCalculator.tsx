"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const CustomerLifetimeValueCalculator: React.FC = () => {
  const [avgSpend, setAvgSpend] = useState<number>(0);
  const [purchaseFrequency, setPurchaseFrequency] = useState<number>(0);
  const [avgCustomerLifespan, setAvgCustomerLifespan] = useState<number>(0);
  const [clv, setClv] = useState<number | null>(null);

  const calculateCLV = () => {
    const value = avgSpend * purchaseFrequency * avgCustomerLifespan;
    setClv(value);
  };

  return (
    <CalculatorLayout
      title="Customer Lifetime Value Calculator"
      description="Estimate the long-term value of your customers based on spending habits, purchase frequency, and retention."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Maximize Customer Value</h2>
          <p>
            Understanding the lifetime value of a customer is critical for sustainable business growth. Use this calculator to determine how much revenue a typical customer generates over their relationship with your business. This insight helps optimize marketing spend and retention strategies.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Average Spend per Purchase ($)", value: avgSpend, setter: setAvgSpend },
          { label: "Purchases per Year", value: purchaseFrequency, setter: setPurchaseFrequency },
          { label: "Customer Lifespan (Years)", value: avgCustomerLifespan, setter: setAvgCustomerLifespan },
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
          onClick={calculateCLV}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate CLV
        </button>
      </div>

      {clv !== null && (
        <div className="text-center mt-8 bg-purple-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Customer Lifetime Value</h3>
          <p className="text-3xl font-bold text-purple-700">${clv.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default CustomerLifetimeValueCalculator;