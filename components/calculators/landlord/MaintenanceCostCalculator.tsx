"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const MaintenanceCostCalculator: React.FC = () => {
  const [propertyValue, setPropertyValue] = useState<number>(0);
  const [maintenancePercent, setMaintenancePercent] = useState<number>(0);
  const [results, setResults] = useState<{
    annualCost: number;
    monthlyCost: number;
  } | null>(null);

  const calculateMaintenance = () => {
    const annualCost = propertyValue * (maintenancePercent / 100);
    const monthlyCost = annualCost / 12;
    setResults({ annualCost, monthlyCost });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate maintenance costs for a property?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply your property's value by the expected annual maintenance percentage. For example, if your property is $200,000 and maintenance is 1%, annual cost is $2,000.",
          },
        },
        {
          "@type": "Question",
          name: "What is a typical maintenance percentage for rental properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generally, 1% to 2% of the property's value annually is a reasonable estimate for maintenance costs, though it depends on property age and type.",
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
      title="Maintenance Cost Calculator"
      description="Estimate your property’s annual and monthly maintenance expenses based on its value and a maintenance percentage."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold mt-6 text-gray-900">
            Plan Your Property Maintenance Budget
          </h2>
          <p>
            The <strong>Maintenance Cost Calculator</strong> allows property owners,
            managers, and investors to estimate how much they should budget for
            repairs and upkeep each year. This ensures you are financially prepared
            for routine and unexpected maintenance.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Estimate Maintenance Costs?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Prevents unexpected financial surprises</li>
            <li>Helps evaluate ROI and net profit accurately</li>
            <li>Supports better long-term planning and property management</li>
            <li>Assists in setting aside funds for renovations or emergency repairs</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Annual Maintenance = Property Value × Maintenance %
          </div>

          <p className="mt-4">
            Enter your property’s current value and the expected maintenance percentage
            to calculate both monthly and yearly maintenance costs.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Property Value ($)", value: propertyValue, setter: setPropertyValue },
          { label: "Maintenance Percentage (%)", value: maintenancePercent, setter: setMaintenancePercent },
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
          onClick={calculateMaintenance}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Maintenance Cost
        </button>
      </div>

      {/* RESULTS */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Annual Maintenance Cost</h3>
            <p className="text-2xl font-bold text-green-700">${results.annualCost.toFixed(2)}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Monthly Maintenance Cost</h3>
            <p className="text-2xl font-bold text-blue-700">${results.monthlyCost.toFixed(2)}</p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default MaintenanceCostCalculator;


