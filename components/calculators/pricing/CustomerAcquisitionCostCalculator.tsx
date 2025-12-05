"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const CustomerAcquisitionCostCalculator: React.FC = () => {
  const [marketingSpend, setMarketingSpend] = useState<number>(0);
  const [newCustomers, setNewCustomers] = useState<number>(0);
  const [cac, setCac] = useState<number | null>(null);

  const calculateCAC = () => {
    if (!newCustomers) return setCac(0);
    setCac(marketingSpend / newCustomers);
  };

  return (
    <CalculatorLayout
      title="Customer Acquisition Cost Calculator"
      description="Estimate the cost to acquire a new customer based on marketing spend and the number of new customers gained."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Optimize Marketing Efficiency</h2>
          <p>
            Understanding how much it costs to acquire a customer is vital for budgeting and scaling your business. This calculator helps determine your average customer acquisition cost (CAC) by dividing total marketing spend by the number of new customers acquired. Lower CAC leads to more efficient growth.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Total Marketing Spend ($)", value: marketingSpend, setter: setMarketingSpend },
          { label: "Number of New Customers", value: newCustomers, setter: setNewCustomers },
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
          onClick={calculateCAC}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate CAC
        </button>
      </div>

      {cac !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Customer Acquisition Cost</h3>
          <p className="text-3xl font-bold text-green-700">${cac.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default CustomerAcquisitionCostCalculator;