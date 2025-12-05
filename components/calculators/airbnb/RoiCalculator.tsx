"use client";
// MAIN CALCULATOR DO NOT MOVE
import React, { useState } from "react";

const RoiCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(0);
  const [nightlyRate, setNightlyRate] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [cleaningFees, setCleaningFees] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [maintenancePercent, setMaintenancePercent] = useState<number>(0);
  const [managementPercent, setManagementPercent] = useState<number>(0);
  const [mortgage, setMortgage] = useState<number>(0);

  const [results, setResults] = useState<{
    monthlyRevenue: number;
    annualRevenue: number;
    netProfit: number;
    roi: number;
    cashOnCash: number;
    breakEven: number;
  } | null>(null);

  const calculateROI = () => {
    const monthlyRevenue = nightlyRate * (occupancyRate / 100) * 30;
    const annualRevenue = monthlyRevenue * 12;

    const maintenanceCost = monthlyRevenue * (maintenancePercent / 100);
    const managementCost = monthlyRevenue * (managementPercent / 100);

    const monthlyNetProfit =
      monthlyRevenue -
      (monthlyExpenses + maintenanceCost + managementCost + mortgage);

    const annualNetProfit = monthlyNetProfit * 12;

    const roi = (annualNetProfit / propertyPrice) * 100;
    const cashOnCash = (annualNetProfit / (propertyPrice * 0.2)) * 100; // assuming 20% down
    const breakEven = annualNetProfit > 0 ? propertyPrice / annualNetProfit : 0;

    setResults({
      monthlyRevenue,
      annualRevenue,
      netProfit: monthlyNetProfit,
      roi,
      cashOnCash,
      breakEven,
    });
  };

  return (
      <main className="px-4 sm:px-8 lg:px-16 py-10 max-w-5xl mx-auto text-gray-800">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Calculate Your Short-Stay Rental ROI Instantly
          </h1>
          <p className="text-lg text-gray-600">
            Our Short-Stay ROI Calculator helps you estimate the profitability of
            any rental unit operating as a short-term or mid-term accommodation.
          </p>
        </header>

        <div className="max-w-3xl mx-auto mt-4 bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        {/* INPUTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Property Price ($)", value: propertyPrice, setter: setPropertyPrice },
            { label: "Nightly Rate ($)", value: nightlyRate, setter: setNightlyRate },
            { label: "Occupancy Rate (%)", value: occupancyRate, setter: setOccupancyRate },
            { label: "Cleaning Fees ($)", value: cleaningFees, setter: setCleaningFees },
            { label: "Monthly Expenses ($)", value: monthlyExpenses, setter: setMonthlyExpenses },
            { label: "Maintenance (%)", value: maintenancePercent, setter: setMaintenancePercent },
            { label: "Management (%)", value: managementPercent, setter: setManagementPercent },
            { label: "Mortgage (Monthly $)", value: mortgage, setter: setMortgage },
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
            onClick={calculateROI}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Calculate ROI
          </button>
        </div>
        </div>
        {/* RESULTS */}
        {results && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Monthly Revenue</h3>
              <p className="text-2xl font-bold text-blue-700">${results.monthlyRevenue.toFixed(2)}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Annual Revenue</h3>
              <p className="text-2xl font-bold text-blue-700">${results.annualRevenue.toFixed(2)}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Net Monthly Profit</h3>
              <p className="text-2xl font-bold text-green-700">${results.netProfit.toFixed(2)}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">ROI %</h3>
              <p className="text-2xl font-bold text-green-700">{results.roi.toFixed(2)}%</p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Cash on Cash Return</h3>
              <p className="text-2xl font-bold text-yellow-700">{results.cashOnCash.toFixed(2)}%</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Break-Even Point</h3>
              <p className="text-2xl font-bold text-purple-700">
                {results.breakEven.toFixed(1)} years
              </p>
            </div>
          </div>
        )}

        {/* Overview */}
        <section className="mb-10 space-y-4 mt-6">
          <p>
            Whether you manage a studio, a vacation home, a serviced apartment, or
            a furnished rental, this tool gives you a clear view of your expected
            return on investment.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3">
            In just a few inputs, you get:
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Monthly and yearly projected revenue</li>
            <li>Operating expenses overview</li>
            <li>Net profit estimation</li>
            <li>Return on investment (ROI %)</li>
            <li>Break-even point and payback period</li>
            <li>Cashflow projection</li>
          </ul>
        </section>

        {/* Designed For */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold my-6">This calculator is designed for:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Property investors</li>
            <li>Hosts managing short-term or tourist rentals</li>
            <li>Landlords comparing long-term vs short-stay strategies</li>
            <li>Buyers evaluating a rental opportunity</li>
            <li>Owners optimizing pricing or occupancy</li>
          </ul>
        </section>

        {/* ROI Formula */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            How ROI Is Calculated for Short-Stay Rentals
          </h2>
          <p className="mb-2">
            Short-stay rentals follow a simple profitability formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            ROI (%) = (Net Annual Profit / Total Property Cost) × 100
          </div>
          <p className="mb-2">Where:</p>
          <p className="italic mb-4">
            Net annual profit = (nightly rate × occupancy × 365) − yearly expenses
          </p>
          <p>
            Expenses include cleaning, management, utilities, insurance,
            maintenance, taxes, and loan interest if applicable.
          </p>
          <p>
            Our tool combines these variables to help you quickly understand
            whether your property is profitable or needs adjustments.
          </p>
        </section>

        {/* Importance */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">Why This Calculator Matters</h2>
          <p className="mb-4">
            Short-stay rentals differ from traditional renting because income
            fluctuates based on:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Seasonality</li>
            <li>Nightly pricing</li>
            <li>Occupancy rates</li>
            <li>Local competition</li>
            <li>Tourism demand</li>
            <li>Cleaning and management fees</li>
          </ul>
          <p className="mt-4">
            A small change in price or occupancy can significantly impact your
            annual return. This calculator lets you visualize those changes in
            real time and make better investment decisions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Typical performance benchmarks:
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Good ROI:</strong> 8–12%
            </li>
            <li>
              <strong>High ROI:</strong> 12–20%
            </li>
            <li>
              <strong>Exceptional ROI:</strong> 20% or more (seasonal areas,
              premium properties, unique stays)
            </li>
          </ul>
          <p className="mt-4">
            Use the results to compare multiple properties, adjust your rental
            strategy, or test financial scenarios before investing.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">
            Tips to Improve Your Rental Profitability
          </h2>
          <p className="mb-4">
            Boosting the performance of a short-stay rental is often easier than
            it seems. Consider:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Improving listing photos and descriptions</li>
            <li>Offering essential amenities travelers expect</li>
            <li>Adjusting pricing for weekdays, weekends, and seasons</li>
            <li>Automating communication and guest management</li>
            <li>Monitoring cleaning costs and maintenance</li>
            <li>Tracking occupancy trends in your area</li>
          </ul>
          <p className="mt-4">
            A data-driven approach leads to better decisions and higher returns.
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 border border-blue-100 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-3 text-blue-800">
            Start Optimizing Your Property Today
          </h2>
          <p className="text-gray-700">
            This Short-Stay ROI Calculator gives you a fast, reliable estimate of
            your rental’s performance — without signup, fees, or complex tools.
          </p>
          <p className="mt-2 text-gray-700">
            Use it to validate a new investment, compare properties, or evaluate
            the impact of pricing and occupancy on your profitability.
          </p>
        </section>

      </main>
  );

};

export default RoiCalculator;
