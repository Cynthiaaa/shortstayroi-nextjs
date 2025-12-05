"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const NetPresentValueCalculator: React.FC = () => {
  const [cashFlow, setCashFlow] = useState<number>(0);
  const [discountRate, setDiscountRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [npv, setNPV] = useState<number | null>(null);

  const calculateNPV = () => {
    const result = cashFlow * (1 - Math.pow(1 + discountRate / 100, -years)) / (discountRate / 100);
    setNPV(result);
  };

  return (
    <CalculatorLayout
      title="Net Present Value Calculator"
      description="Calculate the present value of future cash flows to assess investment viability."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Evaluate Investment Potential</h2>
          <p>
            Net Present Value (NPV) is a key metric for assessing the profitability of investments. It calculates the present value of expected future cash flows discounted at a specific rate, helping investors make informed financial decisions.
          </p>
          <p>
            A positive NPV indicates that an investment is expected to generate more value than its cost, while a negative NPV signals potential losses. This calculator is useful for real estate, business projects, and other long-term investments.
          </p>
          <p>
            Formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            NPV = Σ (Cash Flow / (1 + Discount Rate)^Year)
          </div>
          <p>
            Using this tool allows investors to compare opportunities, evaluate risk, and optimize capital allocation for maximum returns.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Annual Cash Flow ($)", value: cashFlow, setter: setCashFlow },
          { label: "Discount Rate (%)", value: discountRate, setter: setDiscountRate },
          { label: "Number of Years", value: years, setter: setYears },
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
          onClick={calculateNPV}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate NPV
        </button>
      </div>

      {npv !== null && (
        <div className="text-center mt-8 bg-purple-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Net Present Value</h3>
          <p className="text-3xl font-bold text-purple-700">${npv.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default NetPresentValueCalculator;