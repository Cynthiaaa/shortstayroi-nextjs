"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const HotelOccupancyRateCalculator: React.FC = () => {
  const [occupiedRooms, setOccupiedRooms] = useState<number>(0);
  const [totalRooms, setTotalRooms] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number | null>(null);

  const calculateOccupancyRate = () => {
    if (totalRooms > 0) {
      setOccupancyRate((occupiedRooms / totalRooms) * 100);
    }
  };

  return (
    <CalculatorLayout
      title="Hotel Occupancy Rate Calculator"
      description="Calculate your hotel's occupancy rate to optimize operations and revenue."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold">Maximize Hotel Efficiency and Revenue</h2>
          <p>
            The occupancy rate is a critical performance metric for hotel operators and property managers. It measures the proportion of available rooms that are actually occupied over a specific period, giving you insight into your hotel’s operational efficiency and market demand.
          </p>
          <p>
            By calculating occupancy rate, you can identify underutilized capacity, adjust pricing strategies, and plan marketing campaigns to attract more guests. This metric also helps investors and stakeholders understand revenue performance and forecast future income accurately.
          </p>
          <p>
            The formula for occupancy rate is simple:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Occupancy Rate (%) = (Occupied Rooms / Total Available Rooms) × 100
          </div>
          <p>
            Maintaining a high occupancy rate is essential for profitability. However, it should be balanced with the Average Daily Rate (ADR) to ensure that revenue per available room (RevPAR) remains optimal. Focusing solely on occupancy without considering pricing can reduce overall revenue potential.
          </p>
          <p>
            Monitoring occupancy trends also allows hotel managers to anticipate seasonal fluctuations, plan staffing levels efficiently, and adjust room rates dynamically. For example, high-demand periods may warrant increased rates, while low-demand periods may require promotions to maintain occupancy.
          </p>
          <p>
            This calculator is ideal for hotel owners, operators, and investors who want to gain a clear understanding of hotel performance. By tracking occupancy rates regularly, you can optimize revenue management, improve operational decisions, and maximize profitability.
          </p>
          <p>
            Understanding occupancy data in conjunction with other key metrics, such as ADR and RevPAR, provides a holistic view of hotel performance. This helps you develop effective marketing campaigns, manage operational costs, and enhance guest satisfaction.
          </p>
          <p>
            Use this tool to calculate current occupancy rates, project future trends, and benchmark your hotel against competitors in your market. Accurate data-driven insights lead to better decision-making and long-term success in the hospitality industry.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Occupied Rooms</label>
          <input
            type="number"
            value={occupiedRooms || ""}
            onChange={(e) => setOccupiedRooms(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Total Available Rooms</label>
          <input
            type="number"
            value={totalRooms || ""}
            onChange={(e) => setTotalRooms(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <button
          onClick={calculateOccupancyRate}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Occupancy Rate
        </button>
      </div>

      {occupancyRate !== null && (
        <div className="text-center mt-8 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Occupancy Rate</h3>
          <p className="text-3xl font-bold text-yellow-700">{occupancyRate.toFixed(2)}%</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default HotelOccupancyRateCalculator;