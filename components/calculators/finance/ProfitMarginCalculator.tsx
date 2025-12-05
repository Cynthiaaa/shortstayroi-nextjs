"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const ProfitMarginCalculator: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [profitMargin, setProfitMargin] = useState<number | null>(null);

  const calculateProfitMargin = () => {
    if (income <= 0) {
      setProfitMargin(0);
      return;
    }
    const margin = ((income - expenses) / income) * 100;
    setProfitMargin(margin);
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate profit margin for a property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Profit margin is calculated by subtracting total expenses from total income, dividing the result by total income, and multiplying by 100 to get a percentage.",
          },
        },
        {
          "@type": "Question",
          name: "Why is profit margin important for rental properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Profit margin helps property owners understand how much of their rental income is actual profit, allowing for better financial planning and investment comparisons.",
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
    <CalculatorLayout
      title="Profit Margin Calculator"
      description="Calculate the profit margin of your rental or investment property by analyzing income and expenses."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold mt-6 text-gray-900">
            Optimize Your Property’s Profitability
          </h2>
          <p>
            The <strong>Profit Margin Calculator</strong> is a simple yet powerful
            tool for property investors, hosts, and landlords. It allows you to
            determine the percentage of your rental income that is actual profit
            after accounting for expenses.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Calculate Profit Margin?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Understand true profitability of your property</li>
            <li>Compare multiple properties or investments</li>
            <li>Identify areas to reduce expenses or increase income</li>
            <li>Plan pricing strategies and maximize returns</li>
          </ul>

          <p className="mt-4">
            Profit margin is expressed as a percentage. For example, a 25% profit margin
            means that 25% of your rental income remains after all expenses. This metric
            is essential for evaluating investment performance and long-term growth.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Profit Margin (%) = ((Income - Expenses) / Income) × 100
          </div>

          <p className="mt-4">
            Enter your total rental income and all relevant expenses into the calculator to
            instantly see your profit margin. This helps you make data-driven decisions for
            your property investments.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Total Income ($)", value: income, setter: setIncome },
          { label: "Total Expenses ($)", value: expenses, setter: setExpenses },
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
          onClick={calculateProfitMargin}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Profit Margin
        </button>
      </div>

      {/* RESULTS */}
      {profitMargin !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Profit Margin</h3>
          <p className="text-3xl font-bold text-green-700">{profitMargin.toFixed(2)}%</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default ProfitMarginCalculator;