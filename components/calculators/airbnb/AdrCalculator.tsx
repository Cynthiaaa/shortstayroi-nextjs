"use client";

import React, { useState } from "react";
import CalculatorLayout from "../CalculatorLayout"; 

const AirbnbADRCalculator: React.FC = () => {
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [totalNights, setTotalNights] = useState<number>(0);
  const [adr, setAdr] = useState<number | null>(null);

  const calculateADR = () => {
    if (totalNights > 0) {
      setAdr(totalRevenue / totalNights);
    }
  };

  return (
    <CalculatorLayout
      title="Airbnb ADR Calculator"
      description="Calculate the Average Daily Rate (ADR) of your Airbnb rental property for optimal pricing."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Optimize Your Airbnb Pricing</h2>
          <p>
            The Average Daily Rate (ADR) is one of the most important metrics for short-term rental hosts.
            ADR measures the average income earned per rented night and helps you understand pricing efficiency.
            By calculating ADR, you can identify if your property is underpriced or has room to increase revenue.
          </p>
          <p>
            To calculate ADR, enter the total revenue earned and the total number of nights rented. This will
            give you an accurate insight into the average earnings per night.
          </p>
          <p>
            A higher ADR generally indicates better pricing strategy and property demand. It can also
            guide you when comparing properties, adjusting seasonal pricing, or planning marketing strategies.
            Monitoring ADR over time helps optimize occupancy and maximize revenue.
          </p>
          <p>
            Using this calculator, Airbnb hosts and property investors can evaluate the profitability of
            their rental strategy, set realistic pricing, and make data-driven decisions to improve ROI.
            It's essential to consider seasonality, local events, and competitor rates when analyzing ADR.
          </p>
          <p>
            This tool is especially helpful for those managing multiple properties, professional hosts,
            and investors who want to forecast earnings accurately.
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
          <label className="block text-gray-700 font-semibold mb-1">Total Nights Rented</label>
          <input
            type="number"
            value={totalNights || ""}
            onChange={(e) => setTotalNights(parseFloat(e.target.value) || 0)}
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
          <h3 className="text-gray-700 font-medium">Average Daily Rate (ADR)</h3>
          <p className="text-3xl font-bold text-yellow-700">${adr.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbADRCalculator;
