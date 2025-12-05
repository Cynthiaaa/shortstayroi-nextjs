"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbBreakEvenPointCalculator: React.FC = () => {
  const [propertyCost, setPropertyCost] = useState<number>(0);
  const [nightlyRate, setNightlyRate] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [breakEvenYears, setBreakEvenYears] = useState<number | null>(null);

  const calculateBreakEven = () => {
    const monthlyRevenue = nightlyRate * (occupancyRate / 100) * 30;
    const monthlyProfit = monthlyRevenue - monthlyExpenses;
    if (monthlyProfit <= 0) {
      setBreakEvenYears(0);
      return;
    }
    const result = propertyCost / (monthlyProfit * 12);
    setBreakEvenYears(result);
  };

  return (
    <CalculatorLayout
      title="Airbnb Break-Even Point Calculator"
      description="Estimate how long it will take for your Airbnb investment to recover its initial cost and start generating profit."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900">
            Understand Your Airbnb Investment Payback Period
          </h2>
          <p>
            The <strong>Airbnb Break-Even Point Calculator</strong> helps you determine how many years it will take for your short-term rental to recover its total initial investment. This includes the property purchase price, furnishings, renovations, and all setup costs.
          </p>
          <p>
            The break-even point is a key metric for real estate investors, showing the moment when your accumulated profits equal your original investment. Beyond that point, every dollar you earn becomes pure profit.
          </p>
          <p>
            The basic formula is:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Break-Even (Years) = Total Investment ÷ (Net Annual Profit)
          </div>
          <p>
            In this calculator, your <strong>net annual profit</strong> is based on your nightly rate, occupancy percentage, and total yearly expenses. Expenses can include cleaning, management, maintenance, insurance, taxes, and mortgage payments.
          </p>
          <p>
            For example, if your property cost is $200,000 and you make $25,000 in net profit per year, your break-even period is:
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            200,000 ÷ 25,000 = 8 years
          </div>
          <p>
            A shorter break-even period indicates a stronger investment. Most Airbnb properties aim to achieve break-even within 5 to 10 years, depending on location, occupancy, and pricing strategy. High nightly rates and efficient expense management can reduce the break-even period significantly.
          </p>
          <p>
            This calculator is ideal for real estate investors, Airbnb hosts, and property managers who want to measure performance and financial viability. By running different scenarios — adjusting nightly rates, occupancy rates, or expenses — you can understand which factors most influence profitability.
          </p>
          <p>
            The break-even analysis also supports strategic decisions such as refinancing, expanding into new markets, or upgrading property amenities to accelerate returns. Combined with ROI and cash-on-cash calculations, it gives you a complete view of investment success.
          </p>
          <p>
            Regularly evaluating your Airbnb’s break-even point helps you stay on top of performance trends and make smarter pricing and operational decisions.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Total Property Cost ($)", value: propertyCost, setter: setPropertyCost },
          { label: "Nightly Rate ($)", value: nightlyRate, setter: setNightlyRate },
          { label: "Occupancy Rate (%)", value: occupancyRate, setter: setOccupancyRate },
          { label: "Monthly Expenses ($)", value: monthlyExpenses, setter: setMonthlyExpenses },
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

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateBreakEven}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Break-Even Point
        </button>
      </div>

      {/* RESULTS */}
      {breakEvenYears !== null && (
        <div className="text-center mt-8 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Break-Even Period</h3>
          <p className="text-3xl font-bold text-yellow-700">
            {breakEvenYears.toFixed(1)} years
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbBreakEvenPointCalculator;