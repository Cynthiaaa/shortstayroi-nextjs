"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const HotelAverageDailyRateCalculator: React.FC = () => {
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [numberOfRoomsSold, setNumberOfRoomsSold] = useState<number>(0);
  const [adr, setAdr] = useState<number | null>(null);

  const calculateADR = () => {
    if (numberOfRoomsSold <= 0) return setAdr(0);
    setAdr(totalRevenue / numberOfRoomsSold);
  };

  return (
    <CalculatorLayout
      title="Hotel Average Daily Rate Calculator"
      description="Calculate your hotel's ADR based on total revenue and number of rooms sold."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Maximize Hotel Revenue</h2>
          <p>
            The Average Daily Rate (ADR) is a key performance metric for hotels. 
            Enter your total revenue and number of rooms sold to calculate ADR and optimize pricing strategies.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Total Revenue ($)</label>
          <input
            type="number"
            value={totalRevenue || ""}
            onChange={(e) => setTotalRevenue(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Number of Rooms Sold</label>
          <input
            type="number"
            value={numberOfRoomsSold || ""}
            onChange={(e) => setNumberOfRoomsSold(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={calculateADR}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate ADR
        </button>
      </div>

      {adr !== null && (
        <div className="text-center mt-8 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Average Daily Rate</h3>
          <p className="text-3xl font-bold text-yellow-700">${adr.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default HotelAverageDailyRateCalculator;