"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const GrossRentMultiplierCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(0);
  const [annualRent, setAnnualRent] = useState<number>(0);
  const [grm, setGrm] = useState<number | null>(null);

  const calculateGRM = () => {
    if (!annualRent) return setGrm(0);
    setGrm(propertyPrice / annualRent);
  };

  return (
    <CalculatorLayout
      title="Gross Rent Multiplier Calculator"
      description="Quickly evaluate property investment potential by calculating the Gross Rent Multiplier (GRM) based on purchase price and rental income."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Evaluate Rental Investment Potential</h2>
          <p>
            The Gross Rent Multiplier (GRM) is a simple metric for comparing investment properties. By dividing the property's purchase price by the expected annual rental income, investors can quickly assess whether a property is under- or over-valued. Use this calculator to model different properties and make data-driven decisions.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Property Price ($)", value: propertyPrice, setter: setPropertyPrice },
          { label: "Annual Rental Income ($)", value: annualRent, setter: setAnnualRent },
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
          onClick={calculateGRM}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate GRM
        </button>
      </div>

      {grm !== null && (
        <div className="text-center mt-8 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Gross Rent Multiplier</h3>
          <p className="text-3xl font-bold text-yellow-700">{grm.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default GrossRentMultiplierCalculator;