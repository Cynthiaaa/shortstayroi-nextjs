"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const AirbnbBreakEvenOccupancyCalculator: React.FC = () => {
  const [fixedCosts, setFixedCosts] = useState<number>(0);
  const [variableCosts, setVariableCosts] = useState<number>(0);
  const [nightlyRate, setNightlyRate] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateBreakEvenOccupancy = () => {
    if (nightlyRate <= 0) return setResults(0);
    const occupancy = (fixedCosts + variableCosts) / nightlyRate;
    setResults(occupancy);
  };

  // --- FAQ JSON-LD for SEO ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is break-even occupancy for Airbnb?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Break-even occupancy is the minimum number of nights per month or year you need to rent your property at a given nightly rate to cover all expenses."
          }
        },
        {
          "@type": "Question",
          "name": "How do I calculate my Airbnb break-even occupancy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add up your fixed costs (mortgage, insurance, utilities) and variable costs (cleaning, management), then divide by your nightly rate."
          }
        },
        {
          "@type": "Question",
          "name": "Why is occupancy rate important for Airbnb hosts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Knowing your break-even occupancy helps you price your listing appropriately and forecast profitability."
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
      title="Airbnb Break-Even Occupancy Calculator"
      description="Determine the minimum occupancy rate required for your Airbnb property to cover all costs and start earning profit."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold mt-6 text-gray-900">
            Know Your Minimum Occupancy to Break Even
          </h2>
          <p>
            The <strong>Airbnb Break-Even Occupancy Calculator</strong> helps hosts
            find the occupancy rate required to cover all fixed and variable costs.
            This is crucial for planning pricing strategies, understanding profitability,
            and setting realistic revenue goals.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Break-Even Occupancy Matters</h3>
          <p>
            Every Airbnb property has costs—mortgage, utilities, cleaning, management fees.
            Knowing the minimum occupancy to cover these costs ensures you are financially
            prepared and avoid running at a loss.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Break-Even Occupancy = (Fixed Costs + Variable Costs) ÷ Nightly Rate
          </div>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            If your monthly fixed costs are $1500, variable costs are $500, and your
            nightly rate is $100:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            (1500 + 500) ÷ 100 = 20 nights per month
          </div>
          <p>
            This means you need to book at least 20 nights per month to break even.
          </p>

          <h3 className="text-xl font-semibold mt-6">Tips for Hosts</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Adjust your nightly rate to lower break-even occupancy</li>
            <li>Control variable costs, like cleaning or management fees</li>
            <li>Use dynamic pricing tools to increase bookings in low seasons</li>
            <li>Plan for seasonal occupancy fluctuations</li>
          </ul>

          <p className="mt-6">
            Understanding your break-even occupancy helps make smarter pricing, investment, 
            and operational decisions for your Airbnb property.
          </p>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Fixed Costs per Month ($)", value: fixedCosts, setter: setFixedCosts },
          { label: "Variable Costs per Month ($)", value: variableCosts, setter: setVariableCosts },
          { label: "Nightly Rate ($)", value: nightlyRate, setter: setNightlyRate },
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

      {/* --- BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateBreakEvenOccupancy}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Break-Even Occupancy
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results !== null && (
        <div className="text-center mt-10 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Break-Even Occupancy</h3>
          <p className="text-3xl font-bold text-green-700">{results.toFixed(1)} nights/month</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbBreakEvenOccupancyCalculator;