"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const SavingGoalCalculator: React.FC = () => {
  const [goalAmount, setGoalAmount] = useState<number>(0);
  const [monthlySavings, setMonthlySavings] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [monthsNeeded, setMonthsNeeded] = useState<number | null>(null);

  const calculateSavingGoal = () => {
    if (monthlySavings <= 0) {
      setMonthsNeeded(0);
      return;
    }
    const monthlyRate = interestRate / 100 / 12;
    const months = Math.log(
      1 + (goalAmount * monthlyRate) / monthlySavings
    ) / Math.log(1 + monthlyRate);
    setMonthsNeeded(months);
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate how long it will take to reach my savings goal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Enter your target amount, monthly savings, and expected interest rate. The calculator will estimate how many months it will take to reach your goal.",
          },
        },
        {
          "@type": "Question",
          name: "Can I include investment returns in my savings goal calculation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! You can enter an expected interest rate or average return to factor in growth over time, making the calculation more accurate.",
          },
        },
      ],
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
      title="Saving Goal Calculator"
      description="Calculate how long it will take to reach your financial or property savings goal based on monthly savings and expected returns."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold mt-6 text-gray-900">
            Plan Your Financial Goals Effectively
          </h2>
          <p>
            The <strong>Saving Goal Calculator</strong> allows investors, property
            owners, or anyone planning future purchases to estimate how long it
            will take to achieve a financial target. Input your monthly savings,
            desired goal, and optional expected interest to get an accurate projection.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Use a Saving Goal Calculator?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Track progress toward major financial milestones</li>
            <li>Plan for property investments or down payments</li>
            <li>Understand the impact of interest or returns on savings</li>
            <li>Set realistic monthly savings targets</li>
          </ul>

          <p className="mt-4">
            Achieving financial goals is easier when you have a clear plan. By
            understanding how long it will take to save for a property, renovation,
            or investment, you can adjust your strategy and optimize your monthly
            contributions for faster results.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Months Needed = log(1 + (Goal × MonthlyRate) / Monthly Savings) ÷ log(1 + MonthlyRate)
          </div>

          <p className="mt-4">
            Enter your goal amount, monthly savings, and expected interest rate below.
            Click "Calculate" to see how long it will take to reach your savings target.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Savings Goal ($)", value: goalAmount, setter: setGoalAmount },
          { label: "Monthly Savings ($)", value: monthlySavings, setter: setMonthlySavings },
          { label: "Expected Annual Return (%)", value: interestRate, setter: setInterestRate },
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
          onClick={calculateSavingGoal}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate
        </button>
      </div>

      {/* RESULTS */}
      {monthsNeeded !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Time to Reach Goal</h3>
          <p className="text-3xl font-bold text-green-700">
            {monthsNeeded.toFixed(1)} months
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default SavingGoalCalculator;