"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const HotelCostPerOccupiedRoomCalculator: React.FC = () => {
  const [totalCosts, setTotalCosts] = useState<number>(0);
  const [roomsOccupied, setRoomsOccupied] = useState<number>(0);
  const [cpor, setCpor] = useState<number | null>(null);

  const calculateCPOR = () => {
    if (roomsOccupied <= 0) return setCpor(0);
    setCpor(totalCosts / roomsOccupied);
  };

  return (
    <CalculatorLayout
      title="Hotel CPOR Calculator"
      description="Calculate your hotel’s Cost Per Occupied Room (CPOR) to manage operational efficiency."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Optimize Hotel Operating Costs</h2>
          <p>
            CPOR (Cost per Occupied Room) is crucial for hotel profitability. 
            Enter your total operating costs and number of rooms sold to find CPOR, 
            helping you control expenses and improve margin.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Total Operating Costs ($)</label>
          <input
            type="number"
            value={totalCosts || ""}
            onChange={(e) => setTotalCosts(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Rooms Occupied</label>
          <input
            type="number"
            value={roomsOccupied || ""}
            onChange={(e) => setRoomsOccupied(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={calculateCPOR}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate CPOR
        </button>
      </div>

      {cpor !== null && (
        <div className="text-center mt-8 bg-purple-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Cost per Occupied Room</h3>
          <p className="text-3xl font-bold text-purple-700">${cpor.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default HotelCostPerOccupiedRoomCalculator;