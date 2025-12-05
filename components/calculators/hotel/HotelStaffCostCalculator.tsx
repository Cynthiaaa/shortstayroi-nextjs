"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const HotelStaffCostCalculator: React.FC = () => {
  const [numStaff, setNumStaff] = useState<number>(0);
  const [avgHourlyRate, setAvgHourlyRate] = useState<number>(0);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(0);
  const [benefitsPercent, setBenefitsPercent] = useState<number>(0);
  const [results, setResults] = useState<{
    monthlyCost: number;
    annualCost: number;
    costPerRoom: number;
  } | null>(null);

  const calculateStaffCost = () => {
    const weeklyBase = numStaff * avgHourlyRate * hoursPerWeek;
    const monthlyBase = weeklyBase * 4.33; // avg weeks/month
    const benefits = monthlyBase * (benefitsPercent / 100);
    const monthlyCost = monthlyBase + benefits;
    const annualCost = monthlyCost * 12;
    const costPerRoom = numStaff > 0 ? monthlyCost / numStaff : 0;

    setResults({ monthlyCost, annualCost, costPerRoom });
  };

  // --- FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate hotel staff costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Multiply the number of staff by their average hourly wage and hours worked per week, then include payroll taxes and benefits to find total labor cost."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of revenue should hotel staff costs be?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Labor typically represents 25%–40% of total hotel operating revenue, depending on service level and property size."
          }
        },
        {
          "@type": "Question",
          "name": "Why is staff cost analysis important for hotels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Labor is one of the largest controllable costs in hospitality. Analyzing staff costs helps maintain profitability without sacrificing service quality."
          }
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // Cleanup: remove script on unmount
    return (): void => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <CalculatorLayout
      title="Hotel Staff Cost Calculator"
      description="Estimate your hotel's total monthly and annual staff expenses — including wages, benefits, and payroll overhead."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Calculate Total Labor Costs for Your Hotel
          </h2>
          <p>
            The <strong>Hotel Staff Cost Calculator</strong> helps hotel owners
            and managers estimate total monthly and annual staffing expenses.
            Labor costs are one of the largest operational expenses in
            hospitality, often representing 30–40% of revenue.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            What Does This Calculator Do?
          </h3>
          <p>
            By entering the number of staff, average hourly wage, hours worked
            per week, and benefit percentage, this tool provides an accurate
            projection of your monthly and yearly payroll costs.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Total Staff Cost = (Staff × Rate × Hours × Weeks) + Benefits
          </div>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            Suppose your hotel employs 25 staff at $20/hour, working 40 hours per
            week, with 15% in benefits. Your monthly cost would be:
          </p>

          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            (25 × 20 × 40 × 4.33) + 15% = $99,725/month
          </div>

          <p>
            That’s about $1.2 million annually in labor costs, including payroll
            taxes and benefits.
          </p>

          <h3 className="text-xl font-semibold mt-6">Tips to Optimize Labor Costs</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Cross-train employees to improve flexibility</li>
            <li>Use scheduling software to align labor with demand</li>
            <li>Monitor overtime and adjust staffing patterns</li>
            <li>Track labor-to-revenue ratio monthly</li>
            <li>Automate repetitive tasks (check-in, housekeeping alerts)</li>
          </ul>

          <p className="mt-6">
            Understanding your hotel’s staffing cost structure is key to
            improving operational efficiency and profitability.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Number of Staff", value: numStaff, setter: setNumStaff },
          { label: "Average Hourly Rate ($)", value: avgHourlyRate, setter: setAvgHourlyRate },
          { label: "Hours per Week per Staff", value: hoursPerWeek, setter: setHoursPerWeek },
          { label: "Benefits & Payroll Overhead (%)", value: benefitsPercent, setter: setBenefitsPercent },
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

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateStaffCost}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Staff Cost
        </button>
      </div>

      {/* RESULTS */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Monthly Cost</h3>
            <p className="text-2xl font-bold text-blue-700">
              ${results.monthlyCost.toFixed(2)}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Annual Cost</h3>
            <p className="text-2xl font-bold text-green-700">
              ${results.annualCost.toFixed(2)}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Cost per Staff Member</h3>
            <p className="text-2xl font-bold text-yellow-700">
              ${results.costPerRoom.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default HotelStaffCostCalculator;