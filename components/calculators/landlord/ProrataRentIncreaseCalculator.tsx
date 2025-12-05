"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const ProRataRentCalculator: React.FC = () => {
  const [monthlyRent, setMonthlyRent] = useState<number>(0);
  const [daysOccupied, setDaysOccupied] = useState<number>(0);
  const [totalDays, setTotalDays] = useState<number>(30);
  const [proRataRent, setProRataRent] = useState<number | null>(null);

  const calculateProRata = () => {
    const result = (monthlyRent / totalDays) * daysOccupied;
    setProRataRent(result);
  };

  return (
    <CalculatorLayout
      title="Pro Rata Rent Calculator"
      description="Calculate the rent amount based on partial occupancy within a month."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Accurate Partial Rent Calculations</h2>
          <p>
            The Pro Rata Rent Calculator allows landlords and property managers to calculate rent for tenants who occupy a property for only part of a month. This is particularly useful for short-term leases, mid-month move-ins, or lease adjustments.
          </p>
          <p>
            Using a pro rata method ensures fairness, accuracy, and transparent accounting. It is also helpful when prorating utilities or other monthly charges based on occupancy.
          </p>
          <p>
            Formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Pro Rata Rent = (Monthly Rent / Total Days in Month) × Days Occupied
          </div>
          <p>
            This tool simplifies calculations, prevents disputes, and provides a clear rental amount for partial-month occupancies.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Monthly Rent ($)", value: monthlyRent, setter: setMonthlyRent },
          { label: "Days Occupied", value: daysOccupied, setter: setDaysOccupied },
          { label: "Total Days in Month", value: totalDays, setter: setTotalDays },
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
          onClick={calculateProRata}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Pro Rata Rent
        </button>
      </div>

      {proRataRent !== null && (
        <div className="text-center mt-8 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Pro Rata Rent</h3>
          <p className="text-3xl font-bold text-yellow-700">${proRataRent.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default ProRataRentCalculator;



