"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const RentalYieldCalculator: React.FC = () => {
  const [annualRent, setAnnualRent] = useState<number>(0);
  const [propertyValue, setPropertyValue] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateYield = () => {
    const yieldPercent = propertyValue ? (annualRent / propertyValue) * 100 : 0;
    setResults(yieldPercent);
  };

  // --- SEO JSON-LD FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is rental yield calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rental yield is calculated by dividing the annual rental income by the total property value, then multiplying by 100. For example, if your property is worth $300,000 and earns $18,000 in rent annually, the yield is 6%."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good rental yield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good rental yield varies by location, but generally ranges from 5% to 8%. Higher yields often come with higher management or maintenance costs."
          }
        },
        {
          "@type": "Question",
          "name": "How can I improve my rental yield?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can improve rental yield by increasing rent, reducing vacancy rates, minimizing expenses, furnishing your property, or targeting high-demand rental markets."
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
      title="Rental Yield Calculator"
      description="Quickly estimate your property's rental yield percentage to compare investment opportunities and assess profitability."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Understand Your Property’s Rental Performance
          </h2>
          <p>
            The <strong>Rental Yield Calculator</strong> helps landlords and real
            estate investors measure the annual return from a property compared
            to its purchase value. It’s an essential metric for comparing
            different investment properties and determining whether your rental
            income justifies the property’s cost.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            How to Calculate Rental Yield
          </h3>
          <p>
            Rental yield is calculated using the formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono my-4 text-sm sm:text-base">
            Rental Yield (%) = (Annual Rental Income ÷ Property Value) × 100
          </div>
          <p>
            For example, if your property costs $400,000 and earns $24,000 per
            year in rent, your rental yield is 6%. A higher yield generally means
            better cashflow, but may also indicate higher tenant turnover or
            property management needs.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why Rental Yield Matters
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Compare investment properties in different markets</li>
            <li>Identify high-performing rental opportunities</li>
            <li>Measure how efficiently your property generates income</li>
            <li>Understand cashflow potential versus capital growth</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">
            Gross vs Net Rental Yield
          </h3>
          <p>
            <strong>Gross rental yield</strong> considers only the total rent,
            while <strong>net rental yield</strong> factors in expenses such as
            maintenance, property management, and taxes.  
            Net yield offers a more accurate picture of profitability.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Tips to Improve Your Rental Yield
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Renovate to increase property value and rental potential</li>
            <li>Furnish your rental to appeal to short-term tenants</li>
            <li>Monitor local market rent trends and adjust pricing</li>
            <li>Reduce vacancy periods through better marketing and management</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">FAQs About Rental Yield</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How is rental yield calculated?
              </p>
              <p>
                Divide the annual rent by the property value and multiply by 100.
                Example: $18,000 rent ÷ $300,000 property = 6% rental yield.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                What is a good rental yield in 2025?
              </p>
              <p>
                In 2025, good rental yields typically range between 5–8% for
                residential properties and up to 10% for short-term rentals like
                Airbnb.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                How can I maximize my rental income?
              </p>
              <p>
                Offer high-quality amenities, manage expenses closely, and
                optimize pricing based on demand patterns to achieve the best
                rental yield.
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
            Annual Rent ($)
          </label>
          <input
            type="number"
            value={annualRent || ""}
            onChange={(e) => setAnnualRent(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Property Value ($)
          </label>
          <input
            type="number"
            value={propertyValue || ""}
            onChange={(e) => setPropertyValue(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateYield}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Yield
        </button>
      </div>

      {/* RESULTS */}
      {results !== null && (
        <div className="text-center mt-8 bg-yellow-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Rental Yield</h3>
          <p className="text-3xl font-bold text-yellow-700">
            {results.toFixed(2)}%
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default RentalYieldCalculator;