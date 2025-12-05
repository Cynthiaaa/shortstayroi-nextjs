"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const LoanToValueCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [propertyValue, setPropertyValue] = useState<number>(0);
  const [ltv, setLtv] = useState<number | null>(null);

  const calculateLTV = () => {
    if (propertyValue <= 0) return setLtv(0);
    const ratio = (loanAmount / propertyValue) * 100;
    setLtv(ratio);
  };

  // SEO FAQ Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Loan-to-Value ratio (LTV)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Loan-to-Value (LTV) ratio compares the size of your loan to the appraised value of the property. It's a key metric lenders use to assess risk.",
          },
        },
        {
          "@type": "Question",
          name: "How do you calculate LTV ratio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "LTV = (Loan Amount ÷ Property Value) × 100. For example, a $200,000 loan on a $250,000 home equals 80% LTV.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good LTV ratio?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An LTV below 80% is generally considered low risk and may help you qualify for better mortgage rates.",
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
      title="Loan-to-Value (LTV) Ratio Calculator"
      description="Easily calculate your loan-to-value ratio to understand your mortgage risk level and borrowing power."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold mt-6 text-gray-900">
            Understand Your Loan-to-Value Ratio
          </h2>
          <p>
            The <strong>Loan-to-Value (LTV) Calculator</strong> helps you
            measure how much of a property’s value is financed through a loan.
            It’s one of the most important metrics lenders use when approving
            mortgages or refinancing.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why LTV Matters for Borrowers
          </h3>
          <p>
            A lower LTV means less borrowing risk and potentially better loan
            terms. Lenders use it to determine interest rates, insurance
            requirements, and approval odds. It also reflects your equity in the
            property.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Loan-to-Value Ratio = (Loan Amount ÷ Property Value) × 100
          </div>

          <h3 className="text-xl font-semibold mt-6">Example</h3>
          <p>
            If your mortgage is $300,000 and the property is worth $400,000,
            your LTV ratio is:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            (300,000 ÷ 400,000) × 100 = 75%
          </div>

          <p>
            This means you’ve financed 75% of your home and have 25% equity.
            LTVs under 80% are ideal for avoiding private mortgage insurance
            (PMI).
          </p>

          <h3 className="text-xl font-semibold mt-6">Tips to Improve LTV</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Make a larger down payment</li>
            <li>Increase property value through renovations</li>
            <li>Pay down your loan balance faster</li>
            <li>Refinance when equity improves</li>
          </ul>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Loan Amount ($)", value: loanAmount, setter: setLoanAmount },
          { label: "Property Value ($)", value: propertyValue, setter: setPropertyValue },
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
          onClick={calculateLTV}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate LTV Ratio
        </button>
      </div>

      {/* RESULTS */}
      {ltv !== null && (
        <div className="text-center mt-10 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Loan-to-Value Ratio</h3>
          <p className="text-3xl font-bold text-green-700">{ltv.toFixed(2)}%</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default LoanToValueCalculator;