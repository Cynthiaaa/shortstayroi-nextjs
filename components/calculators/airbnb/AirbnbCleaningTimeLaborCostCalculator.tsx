"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbCleaningTimeLaborCostCalculator: React.FC = () => {
  const [hoursPerClean, setHoursPerClean] = useState<number>(0);
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [cleansPerMonth, setCleansPerMonth] = useState<number>(0);
  const [suppliesCost, setSuppliesCost] = useState<number>(0);
  const [results, setResults] = useState<{
    monthlyLaborCost: number;
    totalMonthlyCost: number;
    costPerClean: number;
  } | null>(null);

  const calculateCleaningCosts = () => {
    const monthlyLaborCost = hoursPerClean * hourlyRate * cleansPerMonth;
    const totalMonthlyCost = monthlyLaborCost + suppliesCost;
    const costPerClean =
      cleansPerMonth > 0 ? totalMonthlyCost / cleansPerMonth : 0;
    setResults({ monthlyLaborCost, totalMonthlyCost, costPerClean });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate Airbnb cleaning labor costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multiply the number of hours it takes to clean your property by the hourly rate of your cleaner, then add the cost of supplies and divide by the number of cleans per month."
          }
        },
        {
          "@type": "Question",
          "name": "How much should I pay for Airbnb cleaning labor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical cleaning labor costs range from $20 to $50 per hour depending on location, property size, and frequency of cleanings."
          }
        },
        {
          "@type": "Question",
          "name": "How often should Airbnb properties be cleaned?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Airbnb rentals are cleaned after each guest stay, so the number of cleanings per month depends on occupancy and stay length."
          }
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <CalculatorLayout
      title="Airbnb Cleaning Time & Labor Cost Calculator"
      description="Estimate how much time and labor your Airbnb cleaning takes — and calculate total monthly and per-clean costs easily."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Calculate Your Airbnb Cleaning Labor and Time Costs
          </h2>
          <p>
            The <strong>Airbnb Cleaning Time & Labor Cost Calculator</strong> helps
            property owners and hosts estimate the full cost of cleaning time,
            labor, and supplies for their short-term rental. Whether you clean
            the property yourself or hire professional staff, understanding
            these expenses is key to accurate budgeting and pricing.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why Cleaning Costs Matter
          </h3>
          <p>
            Cleaning is one of the largest recurring costs for Airbnb hosts.
            Labor time, hourly wages, and supplies all affect your profit per
            booking. By calculating your total monthly cleaning cost and cost
            per turnover, you can decide how much to charge guests and maintain
            profitability without overcharging.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Total Monthly Cost = (Hours × Hourly Rate × Cleans) + Supplies Cost
          </div>

          <h3 className="text-xl font-semibold mt-6">
            How to Use This Calculator
          </h3>
          <p>
            Enter the average number of cleaning hours per turnover, the hourly
            rate for cleaners, how many times your property is cleaned per
            month, and your average monthly cleaning supply costs. The tool will
            instantly calculate your monthly labor cost, total monthly cleaning
            expense, and cost per clean.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Example Cleaning Cost Calculation
          </h3>
          <p>
            Suppose each cleaning takes 3 hours, cleaners charge $25/hour, and
            your property turns over 8 times per month. That’s $600 in labor.
            Add $100 in monthly supplies, and your total monthly cost is $700,
            or $87.50 per clean.
          </p>

          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            (3 × 25 × 8) + 100 = $700 total / 8 = $87.50 per clean
          </div>

          <h3 className="text-xl font-semibold mt-6">
            Tips to Reduce Cleaning Costs
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Hire cleaners on a fixed per-clean rate to control costs</li>
            <li>Buy supplies in bulk to reduce monthly expenses</li>
            <li>Use efficient scheduling to minimize idle labor hours</li>
            <li>Inspect property after each clean to maintain quality</li>
            <li>Automate communication between cleaners and guests</li>
          </ul>

          <p className="mt-6">
            Accurate cleaning cost tracking ensures you charge fair cleaning fees,
            maintain profitability, and improve operational efficiency.
          </p>
        </>
      }
    >
      {/* --- INPUTS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Hours per Clean", value: hoursPerClean, setter: setHoursPerClean },
          { label: "Hourly Rate ($)", value: hourlyRate, setter: setHourlyRate },
          { label: "Cleans per Month", value: cleansPerMonth, setter: setCleansPerMonth },
          { label: "Monthly Supplies Cost ($)", value: suppliesCost, setter: setSuppliesCost },
        ].map((input, idx) => (
          <div key={idx}>
            <label className="block text-gray-700 font-semibold mb-1">
              {input.label}
            </label>
            <input
              type="number"
              value={input.value || ""}
              onChange={(e) => input.setter(parseFloat(e.target.value) || 0)}
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        ))}
      </div>

      {/* --- BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateCleaningCosts}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Cleaning Costs
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Monthly Labor Cost</h3>
            <p className="text-2xl font-bold text-blue-700">
              ${results.monthlyLaborCost.toFixed(2)}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Total Monthly Cost</h3>
            <p className="text-2xl font-bold text-green-700">
              ${results.totalMonthlyCost.toFixed(2)}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Cost per Clean</h3>
            <p className="text-2xl font-bold text-yellow-700">
              ${results.costPerClean.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbCleaningTimeLaborCostCalculator;