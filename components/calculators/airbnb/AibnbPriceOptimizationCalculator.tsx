"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbPriceOptimizationCalculator: React.FC = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [desiredProfit, setDesiredProfit] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [optimizedRate, setOptimizedRate] = useState<number | null>(null);

  const calculateOptimalRate = () => {
    if (occupancyRate <= 0) return setOptimizedRate(0);
    const nights = 30 * (occupancyRate / 100);
    const result = (monthlyExpenses + desiredProfit) / nights;
    setOptimizedRate(result);
  };

  return (
    <CalculatorLayout
      title="Airbnb Price Optimization Calculator"
      description="Find the ideal nightly rate for your Airbnb to maximize profit and occupancy."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900">
            Optimize Your Airbnb Pricing Strategy
          </h2>
          <p>
            The <strong>Airbnb Price Optimization Calculator</strong> helps you
            find the ideal nightly rate to balance occupancy and profitability.
            Pricing your Airbnb correctly is one of the most powerful levers to
            improve your revenue. Setting rates too high may reduce bookings,
            while rates that are too low can leave money on the table.
          </p>
          <p>
            This calculator estimates the <strong>optimal nightly rate</strong>{" "}
            based on your operating expenses, target monthly profit, and
            occupancy rate. It’s designed for Airbnb hosts, property managers,
            and real estate investors looking to maximize returns and stay
            competitive in dynamic short-term rental markets.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">
            Formula for Optimal Nightly Rate:
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Optimal Nightly Rate = (Monthly Expenses + Desired Profit) ÷ (30 ×
            Occupancy Rate ÷ 100)
          </div>
          <p>
            For example, if your Airbnb has $2,000 in monthly expenses, you want
            to earn $1,000 in profit, and your occupancy rate averages 70%, the
            calculation would be:
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            (2,000 + 1,000) ÷ (30 × 0.7) = $142.86 per night
          </div>
          <p>
            In this case, setting your nightly rate around <strong>$143</strong>{" "}
            helps you meet your profit goals at your current occupancy. Adjust
            the inputs to test different rate and occupancy combinations.
          </p>
          <p>
            Understanding your ideal pricing point is critical because Airbnb’s
            algorithm and market demand change constantly. Many successful hosts
            use dynamic pricing — adjusting nightly rates based on seasonality,
            competition, and events — to stay profitable year-round.
          </p>
          <p>
            This calculator gives you a baseline price target. You can combine
            it with tools like AirDNA, Beyond Pricing, or Wheelhouse to refine
            rates further using real market data. By finding the right balance
            between price and occupancy, you can increase your{" "}
            <strong>Revenue Per Available Night (RevPAR)</strong> and improve
            long-term profitability.
          </p>
          <p>
            Beyond pure numbers, price optimization also includes psychological
            factors. Small price adjustments — such as ending prices in “.99” or
            offering weekly discounts — can increase conversion rates without
            lowering your effective yield.
          </p>
          <p>
            Hosts should review their pricing every few weeks, especially during
            high and low seasons. Use this calculator to simulate different
            outcomes and adjust your rates accordingly.
          </p>
          <p>
            A good Airbnb pricing strategy blends data, demand, and experience.
            Start with your target rate, measure results, and iterate — your
            profits will grow as your optimization improves.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Monthly Expenses ($)
          </label>
          <input
            type="number"
            value={monthlyExpenses || ""}
            onChange={(e) => setMonthlyExpenses(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Desired Monthly Profit ($)
          </label>
          <input
            type="number"
            value={desiredProfit || ""}
            onChange={(e) => setDesiredProfit(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Expected Occupancy Rate (%)
          </label>
          <input
            type="number"
            value={occupancyRate || ""}
            onChange={(e) => setOccupancyRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateOptimalRate}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Optimal Rate
        </button>
      </div>

      {/* RESULTS */}
      {optimizedRate !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Optimal Nightly Rate</h3>
          <p className="text-3xl font-bold text-green-700">
            ${optimizedRate.toFixed(2)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbPriceOptimizationCalculator;