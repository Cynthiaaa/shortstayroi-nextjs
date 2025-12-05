"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const PropertyAppreciationCalculator: React.FC = () => {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [growthRate, setGrowthRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateAppreciation = () => {
    const result = currentValue * Math.pow(1 + growthRate / 100, years);
    setFutureValue(result);
  };

  // --- SEO JSON-LD Schema (FAQ) ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is property appreciation calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Property appreciation is calculated using the formula: Future Value = Current Value × (1 + Annual Appreciation Rate) ^ Years. It estimates how much a property will increase in value over time based on an expected yearly growth rate."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good appreciation rate for real estate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good real estate appreciation rate typically ranges between 3% and 5% annually, depending on local market conditions, property type, and economic factors."
          }
        },
        {
          "@type": "Question",
          "name": "How can I increase my property's appreciation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can increase property appreciation by renovating, improving curb appeal, upgrading kitchens or bathrooms, and investing in areas with growing infrastructure and demand."
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
      title="Property Appreciation Calculator"
      description="Estimate how your property's value could grow over time and forecast your long-term real estate investment returns."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Project Your Property’s Future Value
          </h2>
          <p>
            The <strong>Property Appreciation Calculator</strong> helps real estate
            investors and homeowners estimate how much a property could be worth in
            the future. By factoring in your current property value, expected annual
            appreciation rate, and the number of years, you can forecast potential
            long-term growth and make informed investment decisions.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            How Property Appreciation Works
          </h3>
          <p>
            Property appreciation refers to the increase in a property's market
            value over time due to factors like inflation, market demand, and
            improvements made to the property. It’s a key factor in calculating
            total return on investment for real estate.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono my-4 text-sm sm:text-base">
            Future Value = Current Value × (1 + Annual Appreciation Rate)<sup>Years</sup>
          </div>

          <h3 className="text-xl font-semibold mt-6">
            Why Use a Property Appreciation Calculator?
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Estimate how much your property will be worth in the future</li>
            <li>Understand long-term return potential of your real estate investment</li>
            <li>Compare investment opportunities in different markets</li>
            <li>Plan for future refinancing, selling, or wealth-building goals</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            Factors That Influence Property Appreciation
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Local market trends and economic growth</li>
            <li>Neighborhood development and amenities</li>
            <li>Inflation and interest rate changes</li>
            <li>Renovations and property upgrades</li>
            <li>Population growth and housing demand</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">FAQs About Property Appreciation</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How is property appreciation calculated?
              </p>
              <p>
                It’s calculated using the formula: Future Value = Current Value × (1 + Rate)<sup>Years</sup>. 
                For example, a $300,000 property with a 4% annual appreciation rate over 10 years would 
                be worth approximately $444,000.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                What affects property appreciation?
              </p>
              <p>
                Location, local economy, property condition, nearby development, and market demand 
                all influence appreciation rates.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                How can I increase property value faster?
              </p>
              <p>
                You can improve property appreciation by renovating key areas like kitchens, bathrooms, 
                or landscaping and maintaining the property in top condition.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            label: "Current Property Value ($)",
            value: currentValue,
            setter: setCurrentValue,
          },
          {
            label: "Annual Appreciation Rate (%)",
            value: growthRate,
            setter: setGrowthRate,
          },
          { label: "Years", value: years, setter: setYears },
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
          onClick={calculateAppreciation}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Future Value
        </button>
      </div>

      {/* RESULT */}
      {futureValue !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Estimated Future Value</h3>
          <p className="text-3xl font-bold text-green-700">
            ${futureValue.toFixed(2)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default PropertyAppreciationCalculator;