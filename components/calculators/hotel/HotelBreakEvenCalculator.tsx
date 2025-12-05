"use client"; // because it uses useState/useEffect

import { useState, useEffect } from "react";

const HotelBreakEvenCalculator: React.FC = () => {
  const [fixedCosts, setFixedCosts] = useState<number>(0);
  const [variableCostPerRoom, setVariableCostPerRoom] = useState<number>(0);
  const [avgDailyRate, setAvgDailyRate] = useState<number>(0);
  const [roomsAvailable, setRoomsAvailable] = useState<number>(0);
  const [results, setResults] = useState<{ breakEvenRooms: number; breakEvenOccupancy: number } | null>(null);

  const calculateBreakEven = () => {
    if (avgDailyRate <= variableCostPerRoom) return setResults({ breakEvenRooms: 0, breakEvenOccupancy: 0 });

    const contributionMargin = avgDailyRate - variableCostPerRoom;
    const breakEvenRooms = fixedCosts / contributionMargin;
    const breakEvenOccupancy = roomsAvailable > 0 ? (breakEvenRooms / roomsAvailable) * 100 : 0;

    setResults({ breakEvenRooms, breakEvenOccupancy });
  };

  // --- SEO FAQ structured data
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a hotel break-even point?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The hotel break-even point is the occupancy level or number of rooms that must be sold to cover all fixed and variable costs.",
          },
        },
        {
          "@type": "Question",
          name: "How is hotel break-even occupancy calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Divide your total fixed costs by the contribution margin (average room rate minus variable cost per room) and compare that to your available rooms.",
          },
        },
        {
          "@type": "Question",
          name: "Why is break-even analysis important for hotels?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Knowing your break-even occupancy helps you set pricing, manage costs, and plan for profitability during high and low demand seasons.",
          },
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg shadow">
        {[
          { label: "Fixed Monthly Costs ($)", value: fixedCosts, setter: setFixedCosts },
          { label: "Variable Cost per Room ($)", value: variableCostPerRoom, setter: setVariableCostPerRoom },
          { label: "Average Daily Rate (ADR $)", value: avgDailyRate, setter: setAvgDailyRate },
          { label: "Rooms Available per Month", value: roomsAvailable, setter: setRoomsAvailable },
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

      <div className="text-center">
        <button
          onClick={calculateBreakEven}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Calculate Break-Even
        </button>
      </div>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Break-Even Rooms (Monthly)</h3>
            <p className="text-2xl font-bold text-green-700">{results.breakEvenRooms.toFixed(1)}</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700">Break-Even Occupancy (%)</h3>
            <p className="text-2xl font-bold text-yellow-700">{results.breakEvenOccupancy.toFixed(1)}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelBreakEvenCalculator;
