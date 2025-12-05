"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const CashflowCalculator: React.FC = () => {
  const [income, setIncome] = useState<number>(0);
  const [expenses, setExpenses] = useState<number>(0);
  const [mortgage, setMortgage] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateCashflow = () => {
    const monthlyCashflow = income - (expenses + mortgage);
    setResults(monthlyCashflow);
  };

  // --- SEO JSON-LD FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you calculate rental property cashflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cashflow is calculated by subtracting all monthly expenses (including mortgage, taxes, maintenance, and management fees) from total monthly rental income. The result shows your net monthly profit or loss."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good cashflow for a rental property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good rental property cashflow is typically $100 to $400 per unit per month, depending on location and investment size. Positive cashflow ensures your property generates profit after all expenses."
          }
        },
        {
          "@type": "Question",
          "name": "How can I increase my rental property cashflow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can increase cashflow by raising rents strategically, reducing maintenance or management costs, refinancing for lower interest rates, and improving tenant retention to minimize vacancy."
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
      title="Cashflow Calculator"
      description="Quickly calculate your rental property's monthly or yearly cashflow and determine if your investment is generating a profit."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Understand and Optimize Your Rental Property Cashflow
          </h2>
          <p>
            The <strong>Cashflow Calculator</strong> helps landlords and real estate
            investors measure the profitability of their properties by calculating
            the difference between income and expenses. A positive cashflow means
            your property earns more than it costs to operate — the key to long-term
            financial stability.
          </p>

          <h3 className="text-xl font-semibold mt-6">How to Calculate Cashflow</h3>
          <p>
            Cashflow is the money that remains after paying all your property
            expenses. Use the following formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono my-4 text-sm sm:text-base">
            Cashflow = Total Monthly Income − (Operating Expenses + Mortgage Payments)
          </div>
          <p>
            For example, if you earn $2,500/month in rent and spend $1,800/month on
            mortgage and expenses, your monthly cashflow is <strong>$700</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Cashflow Is Crucial</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Ensures your property generates passive income</li>
            <li>Helps evaluate long-term investment performance</li>
            <li>Identifies potential financial risks early</li>
            <li>Supports decisions about refinancing or expansion</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Types of Cashflow</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Positive Cashflow:</strong> Income exceeds expenses (profitable investment)
            </li>
            <li>
              <strong>Negative Cashflow:</strong> Expenses exceed income (loss-making property)
            </li>
            <li>
              <strong>Neutral Cashflow:</strong> Income roughly equals expenses (break-even scenario)
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Tips to Improve Cashflow</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Negotiate lower mortgage interest rates</li>
            <li>Optimize property management efficiency</li>
            <li>Increase rental rates in line with market demand</li>
            <li>Reduce maintenance and vacancy periods</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">FAQs About Property Cashflow</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How do you calculate cashflow for a rental?
              </p>
              <p>
                Add up your total rental income and subtract all operating expenses,
                maintenance, and loan payments. The remaining amount is your monthly
                cashflow.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                What’s a healthy cashflow margin?
              </p>
              <p>
                A healthy margin is typically above 6–10% of gross income, ensuring
                you’re earning a return after accounting for operating costs and debt.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                How often should I review my cashflow?
              </p>
              <p>
                Reviewing your property cashflow every quarter helps track
                performance, catch expense increases early, and maintain profitability.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Total Monthly Income ($)", value: income, setter: setIncome },
          { label: "Monthly Expenses ($)", value: expenses, setter: setExpenses },
          { label: "Mortgage Payment ($)", value: mortgage, setter: setMortgage },
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
          onClick={calculateCashflow}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Cashflow
        </button>
      </div>

      {/* RESULT */}
      {results !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Net Monthly Cashflow</h3>
          <p className="text-3xl font-bold text-green-700">
            ${results.toFixed(2)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default CashflowCalculator;