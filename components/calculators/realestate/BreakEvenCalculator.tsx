"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const BreakEvenCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(0);
  const [monthlyProfit, setMonthlyProfit] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateBreakEven = () => {
    if (monthlyProfit <= 0) return setResults(0);
    const years = propertyPrice / (monthlyProfit * 12);
    setResults(years);
  };

  // --- SEO JSON-LD FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is break-even point calculated for a rental property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The break-even point is calculated by dividing the total property cost by the annual net profit. This shows how many years it will take for your rental income to cover the original investment."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good break-even period for an investment property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good break-even period for a rental property is typically between 5 and 10 years. The shorter the period, the faster you recover your initial investment and start earning pure profit."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reduce the break-even time for my property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can shorten your break-even period by increasing rental income, reducing expenses, refinancing your mortgage, or improving property efficiency and occupancy rates."
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
      title="Break-Even Calculator"
      description="Estimate how long it will take for your property investment to pay for itself and start generating profit."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Understand Your Real Estate Break-Even Point
          </h2>
          <p>
            The <strong>Break-Even Calculator</strong> helps property investors determine
            how long it takes for their rental income to cover the original cost of
            the property. It’s a simple but powerful metric for understanding when
            your investment starts generating true profit.
          </p>

          <h3 className="text-xl font-semibold mt-6">How to Calculate Break-Even Point</h3>
          <p>
            The break-even formula compares your property cost to your annual net profit:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono my-4 text-sm sm:text-base">
            Break-Even (Years) = Property Price ÷ (Net Monthly Profit × 12)
          </div>
          <p>
            For example, if your property costs <strong>$300,000</strong> and you earn 
            <strong> $1,500</strong> per month after expenses, your break-even period is about 
            <strong> 16.7 years</strong>. After this point, your rental income becomes pure profit.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Break-Even Analysis Matters</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Evaluate the financial viability of your investment property</li>
            <li>Plan long-term profitability and cashflow goals</li>
            <li>Compare multiple investment opportunities side by side</li>
            <li>Assess how rent increases or expense changes impact ROI</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Tips to Reach Break-Even Faster</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Negotiate lower property purchase prices</li>
            <li>Increase occupancy rates or rental income</li>
            <li>Reduce operational costs and management fees</li>
            <li>Consider refinancing to lower interest payments</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">FAQs About Break-Even in Real Estate</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How is break-even point calculated for rental properties?
              </p>
              <p>
                Divide the total property cost by your annual net profit. This result
                shows the number of years required to recover your investment.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                What is considered a short break-even period?
              </p>
              <p>
                Anything under 10 years is typically considered a short break-even period
                for real estate, especially in markets with strong rental demand.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                How can I shorten the break-even time?
              </p>
              <p>
                Boosting rent, lowering maintenance costs, and improving occupancy
                rates can all reduce your break-even timeline significantly.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Property Price ($)
          </label>
          <input
            type="number"
            value={propertyPrice || ""}
            onChange={(e) => setPropertyPrice(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Net Monthly Profit ($)
          </label>
          <input
            type="number"
            value={monthlyProfit || ""}
            onChange={(e) => setMonthlyProfit(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateBreakEven}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Break-Even
        </button>
      </div>

      {/* RESULT */}
      {results !== null && (
        <div className="text-center mt-8 bg-blue-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Break-Even Period</h3>
          <p className="text-3xl font-bold text-blue-700">
            {results.toFixed(1)} years
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default BreakEvenCalculator;