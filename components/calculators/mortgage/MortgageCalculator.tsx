"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const MortgageCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [payment, setPayment] = useState<number | null>(null);

  const calculateMortgage = () => {
    const monthlyRate = interestRate / 100 / 12;
    const n = years * 12;
    const monthlyPayment =
      principal *
      ((monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1));
    setPayment(monthlyPayment);
  };

  // --- SEO JSON-LD Schema (FAQ) ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is mortgage calculated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mortgage is calculated using the principal loan amount, the annual interest rate, and the loan term in years. The monthly payment formula is P × [r(1+r)^n] / [(1+r)^n – 1], where P is the loan amount, r is the monthly interest rate, and n is the number of payments."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect my mortgage payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your mortgage payment depends on your loan amount, interest rate, term length, down payment, and property taxes or insurance if included in escrow."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good mortgage interest rate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good mortgage interest rate depends on market conditions, your credit score, and loan type. Typically, a competitive rate is between 5% and 7% in most housing markets."
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
      title="Mortgage Calculator"
      description="Estimate your monthly mortgage payments, total loan costs, and plan your property financing with this free mortgage calculator."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Plan Your Home Financing with Confidence
          </h2>
          <p>
            This mortgage calculator helps you estimate your **monthly
            payments**, total **interest costs**, and overall **loan
            affordability** based on your principal, interest rate, and loan
            term. Whether you’re a first-time homebuyer or an investor,
            understanding your mortgage structure is key to long-term financial
            planning.
          </p>

          <h3 className="text-xl font-semibold mt-6">How the Mortgage Formula Works</h3>
          <p>
            The monthly mortgage payment is calculated using the following
            formula:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono my-4 text-sm sm:text-base">
            M = P × [r(1 + r)<sup>n</sup>] / [(1 + r)<sup>n</sup> – 1]
          </div>
          <p>
            Where:  
            <br />
            <strong>P</strong> = Loan principal (amount borrowed)  
            <br />
            <strong>r</strong> = Monthly interest rate (annual rate ÷ 12)  
            <br />
            <strong>n</strong> = Total number of monthly payments (years × 12)
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Use a Mortgage Calculator?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Plan your budget before buying a property</li>
            <li>Compare fixed-rate and variable-rate loan options</li>
            <li>Estimate how much home you can afford</li>
            <li>Understand how down payments affect monthly payments</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Tips for Managing Your Mortgage</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Shop around for competitive interest rates</li>
            <li>Consider making bi-weekly payments to save on interest</li>
            <li>Refinance when rates drop to reduce long-term costs</li>
            <li>Include property taxes and insurance in your planning</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">FAQs About Mortgages</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                How is mortgage calculated?
              </p>
              <p>
                Mortgage payments are determined by your loan amount, interest
                rate, and repayment period using a standard amortization formula.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                What affects my monthly mortgage payment?
              </p>
              <p>
                Factors like loan principal, interest rate, term, taxes, and
                insurance can all impact your total monthly payment.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Can I reduce my mortgage costs?
              </p>
              <p>
                Yes, by refinancing at a lower rate, increasing your down payment,
                or making additional principal payments each year.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Loan Amount ($)", value: principal, setter: setPrincipal },
          { label: "Interest Rate (%)", value: interestRate, setter: setInterestRate },
          { label: "Loan Term (Years)", value: years, setter: setYears },
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
          onClick={calculateMortgage}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Mortgage
        </button>
      </div>

      {/* RESULT */}
      {payment !== null && (
        <div className="text-center mt-8 bg-blue-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Estimated Monthly Payment</h3>
          <p className="text-3xl font-bold text-blue-700">
            ${payment.toFixed(2)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default MortgageCalculator;
