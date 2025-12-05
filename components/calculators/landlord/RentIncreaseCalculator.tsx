"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const RentIncreaseCalculator: React.FC = () => {
  const [currentRent, setCurrentRent] = useState<number>(0);
  const [increasePercent, setIncreasePercent] = useState<number>(0);
  const [results, setResults] = useState<{
    newRent: number;
    increaseAmount: number;
  } | null>(null);

  const calculateNewRent = () => {
    const increaseAmount = currentRent * (increasePercent / 100);
    const newRent = currentRent + increaseAmount;
    setResults({ newRent, increaseAmount });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate a rent increase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Multiply the current rent by the percentage increase and add the result to the current rent. For example, a 5% increase on $1,000 equals $1,050.",
          },
        },
        {
          "@type": "Question",
          name: "What is a reasonable rent increase?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A typical rent increase is between 2% and 5% annually, depending on inflation, market demand, and local laws.",
          },
        },
        {
          "@type": "Question",
          name: "Are there laws limiting rent increases?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, many regions have rent control or rent stabilization laws that cap annual increases. Always check local regulations before adjusting rent.",
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
      title="Rent Increase Calculator"
      description="Calculate how much to raise your tenant’s rent based on a percentage or fixed increase amount."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Plan Rent Increases Fairly and Accurately
          </h2>
          <p>
            The <strong>Rent Increase Calculator</strong> helps landlords,
            property managers, and real estate investors calculate new rental
            prices based on a target percentage increase. It ensures your rent
            adjustments align with market trends and remain compliant with local
            laws.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Use a Rent Increase Calculator?</h3>
          <p>
            Small changes in rent can significantly impact long-term income. This
            tool allows you to forecast annual revenue, understand the financial
            effect of a percentage change, and communicate increases clearly to
            tenants.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            New Rent = Current Rent + (Current Rent × Increase %)
          </div>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            If your current rent is $1,200 and you apply a 4% increase, your new
            rent will be:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            $1,200 + (1,200 × 0.04) = $1,248
          </div>

          <h3 className="text-xl font-semibold mt-6">Tips for Responsible Rent Adjustments</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Research average rent growth in your city</li>
            <li>Provide 30–60 days’ notice before increasing rent</li>
            <li>Explain the reason for the adjustment (taxes, maintenance, etc.)</li>
            <li>Consider tenant loyalty and market conditions</li>
            <li>Stay compliant with rent control laws if applicable</li>
          </ul>

          <p className="mt-6">
            Transparent rent adjustments foster better tenant relationships and
            ensure steady long-term income growth.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Current Rent ($)", value: currentRent, setter: setCurrentRent },
          { label: "Increase Percentage (%)", value: increasePercent, setter: setIncreasePercent },
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
          onClick={calculateNewRent}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate New Rent
        </button>
      </div>

      {/* RESULTS */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Increase Amount</h3>
            <p className="text-2xl font-bold text-green-700">
              ${results.increaseAmount.toFixed(2)}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">New Rent</h3>
            <p className="text-2xl font-bold text-blue-700">
              ${results.newRent.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default RentIncreaseCalculator;