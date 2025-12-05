"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbMinimumNightProfitabilityCalculator: React.FC = () => {
  const [nightlyRate, setNightlyRate] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [cleaningFee, setCleaningFee] = useState<number>(0);
  const [variableCost, setVariableCost] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateMinimumNights = () => {
    const profitPerNight = nightlyRate - variableCost;
    if (profitPerNight <= 0) return setResults(0);
    const minNights = monthlyExpenses / profitPerNight;
    setResults(minNights);
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum nights profitability for Airbnb?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It’s the number of nights your Airbnb must be booked each month to cover all expenses and start making a profit."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate minimum profitable nights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Divide your monthly expenses by your net profit per night (nightly rate minus variable costs). The result is your break-even occupancy threshold."
          }
        },
        {
          "@type": "Question",
          "name": "Why is this calculation important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Knowing your minimum profitable nights helps you set realistic pricing and occupancy goals while protecting your cash flow during low seasons."
          }
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <CalculatorLayout
      title="Airbnb Minimum Night Profitability Calculator"
      description="Find out how many nights per month your Airbnb needs to be booked to break even and start making a profit."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Determine Your Airbnb Break-Even Nights
          </h2>
          <p>
            The <strong>Airbnb Minimum Night Profitability Calculator</strong> helps
            you estimate the minimum number of nights your short-term rental needs
            to be booked each month to cover all operating expenses. Understanding
            this threshold ensures you price your property properly, plan cash
            flow, and set realistic occupancy goals.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why Calculate Minimum Nights?
          </h3>
          <p>
            Airbnb hosts often overlook how fixed and variable costs influence profitability.
            Even if your listing seems profitable, high expenses or low occupancy can
            quickly eat into margins. By calculating your minimum profitable nights,
            you can identify exactly how many bookings are needed to avoid losses.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Minimum Nights = Monthly Expenses ÷ (Nightly Rate − Variable Cost)
          </div>

          <h3 className="text-xl font-semibold mt-6">Typical Expense Categories</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Mortgage or rent payments</li>
            <li>Cleaning and turnover fees</li>
            <li>Utilities and maintenance</li>
            <li>Management and platform fees</li>
            <li>Insurance, taxes, and supplies</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            Suppose your monthly expenses are $2,400, your nightly rate is $150, and
            variable costs (like cleaning supplies and utilities) average $30 per night.
            Your break-even point would be:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            $2,400 ÷ ($150 − $30) = 20 nights
          </div>
          <p>
            You’d need at least 20 booked nights each month to break even. Anything above
            that contributes directly to your profit margin.
          </p>

          <h3 className="text-xl font-semibold mt-6">Tips to Boost Profitability</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase occupancy with weekday or last-minute discounts</li>
            <li>Reduce operating costs through automation and outsourcing</li>
            <li>Bundle cleaning fees or charge per stay, not per night</li>
            <li>Target longer stays to reduce turnover costs</li>
          </ul>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Nightly Rate ($)", value: nightlyRate, setter: setNightlyRate },
          { label: "Monthly Expenses ($)", value: monthlyExpenses, setter: setMonthlyExpenses },
          { label: "Cleaning Fee per Booking ($)", value: cleaningFee, setter: setCleaningFee },
          { label: "Variable Cost per Night ($)", value: variableCost, setter: setVariableCost },
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
          onClick={calculateMinimumNights}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Minimum Nights
        </button>
      </div>

      {/* RESULTS */}
      {results !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Minimum Nights Needed to Break Even</h3>
          <p className="text-3xl font-bold text-green-700">{results.toFixed(1)} nights / month</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbMinimumNightProfitabilityCalculator;