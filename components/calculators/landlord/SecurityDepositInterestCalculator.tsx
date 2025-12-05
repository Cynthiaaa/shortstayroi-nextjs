"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const SecurityDepositInterestCalculator: React.FC = () => {
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [interest, setInterest] = useState<number | null>(null);

  const calculateInterest = () => {
    const earned = depositAmount * Math.pow(1 + interestRate / 100, years) - depositAmount;
    setInterest(earned);
  };

  return (
    <CalculatorLayout
      title="Security Deposit Interest Calculator"
      description="Calculate the interest earned on tenant security deposits over time."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Understand Your Security Deposit Growth</h2>
          <p>
            Landlords may need to calculate interest on tenant security deposits depending on local laws. This calculator estimates how much interest a deposit will earn over time based on the deposit amount, annual interest rate, and duration. It helps ensure compliance and transparency with tenants.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Deposit Amount ($)", value: depositAmount, setter: setDepositAmount },
          { label: "Annual Interest Rate (%)", value: interestRate, setter: setInterestRate },
          { label: "Years", value: years, setter: setYears },
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
          onClick={calculateInterest}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Interest
        </button>
      </div>

      {interest !== null && (
        <div className="text-center mt-8 bg-purple-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Total Interest Earned</h3>
          <p className="text-3xl font-bold text-purple-700">${interest.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default SecurityDepositInterestCalculator;