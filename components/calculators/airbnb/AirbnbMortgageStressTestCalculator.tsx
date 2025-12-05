"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbMortgageStressTestCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);
  const [stressRate, setStressRate] = useState<number>(2);
  const [loanTerm, setLoanTerm] = useState<number>(25);
  const [monthlyAirbnbIncome, setMonthlyAirbnbIncome] = useState<number>(0);
  const [results, setResults] = useState<{
    basePayment: number;
    stressedPayment: number;
    coverageRatio: number;
  } | null>(null);

  const calculateStressTest = () => {
    const monthlyRate = interestRate / 100 / 12;
    const stressedRate = (interestRate + stressRate) / 100 / 12;
    const n = loanTerm * 12;

    const basePayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);

    const stressedPayment =
      (loanAmount * stressedRate * Math.pow(1 + stressedRate, n)) /
      (Math.pow(1 + stressedRate, n) - 1);

    const coverageRatio =
      stressedPayment > 0
        ? (monthlyAirbnbIncome / stressedPayment) * 100
        : 0;

    setResults({
      basePayment,
      stressedPayment,
      coverageRatio,
    });
  };

  // --- SEO FAQ SCHEMA ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a mortgage stress test for Airbnb properties?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A mortgage stress test evaluates whether your Airbnb income can cover mortgage payments if interest rates rise or rental revenue decreases."
          }
        },
        {
          "@type": "Question",
          "name": "Why is the stress test important for Airbnb investors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The stress test helps property investors understand their financial risk. It ensures that they can still afford payments under higher interest rates or lower occupancy."
          }
        },
        {
          "@type": "Question",
          "name": "How much stress rate should I use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many lenders apply a 2%–3% stress rate above your current mortgage rate to simulate potential increases and verify loan affordability."
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
      title="Airbnb Mortgage Stress Test Calculator"
      description="Evaluate whether your Airbnb income can sustain your mortgage if interest rates rise — simulate higher payment scenarios instantly."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Assess Your Airbnb Investment’s Financial Stability
          </h2>
          <p>
            The <strong>Airbnb Mortgage Stress Test Calculator</strong> helps you
            understand how your short-term rental mortgage would perform under
            increased interest rates or reduced occupancy. In uncertain economic
            times, knowing how much rate fluctuation your investment can absorb
            gives you confidence — and protects your profits.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            What Is a Mortgage Stress Test?
          </h3>
          <p>
            A mortgage stress test measures your ability to handle higher
            interest rates. It calculates whether your rental income can cover
            your mortgage payments if rates increase by 1%–3%. For Airbnb
            investors, this test is essential for risk management and long-term
            financial planning.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Stressed Payment = Mortgage Payment at (Current Rate + Stress %)
          </div>

          <h3 className="text-xl font-semibold mt-6">
            How This Calculator Works
          </h3>
          <p>
            Enter your loan amount, current interest rate, loan term, and
            estimated Airbnb monthly income. The calculator will estimate your
            base and stressed mortgage payments and show a coverage ratio — how
            well your Airbnb income covers your new payment scenario.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why This Test Matters for Airbnb Hosts
          </h3>
          <p>
            Rising mortgage rates can quickly impact profitability. By
            stress-testing your Airbnb investment, you’ll know your “safe zone”
            — how much buffer you have before your rental income stops covering
            your loan obligations. This is vital for sustainable property
            investing, especially in markets with fluctuating interest rates or
            seasonal occupancy.
          </p>

          <h3 className="text-xl font-semibold mt-6">Example Scenario</h3>
          <p>
            Suppose your Airbnb mortgage is $400,000 at 5% interest over 25
            years. With a 2% stress rate increase, your payment could rise from
            about $2,338/month to $2,797/month. If your Airbnb generates $3,200
            monthly, your coverage ratio is 114% — indicating strong resilience.
          </p>

          <h3 className="text-xl font-semibold mt-6">FAQs</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                What’s a good coverage ratio for Airbnb investments?
              </p>
              <p>
                A coverage ratio above 110% is ideal — it means your Airbnb
                income covers your stressed mortgage with room for expenses.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Can this calculator be used for multiple properties?
              </p>
              <p>
                Yes, you can input figures for each property to see how rate
                increases affect overall portfolio performance.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Loan Amount ($)", value: loanAmount, setter: setLoanAmount },
          {
            label: "Current Interest Rate (%)",
            value: interestRate,
            setter: setInterestRate,
          },
          {
            label: "Stress Increase (%)",
            value: stressRate,
            setter: setStressRate,
          },
          { label: "Loan Term (Years)", value: loanTerm, setter: setLoanTerm },
          {
            label: "Monthly Airbnb Income ($)",
            value: monthlyAirbnbIncome,
            setter: setMonthlyAirbnbIncome,
          },
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

      {/* --- CALCULATE BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateStressTest}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Stress Test
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Base Monthly Payment</h3>
            <p className="text-2xl font-bold text-blue-700">
              ${results.basePayment.toFixed(2)}
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Stressed Monthly Payment</h3>
            <p className="text-2xl font-bold text-yellow-700">
              ${results.stressedPayment.toFixed(2)}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Income Coverage Ratio</h3>
            <p className="text-2xl font-bold text-green-700">
              {results.coverageRatio.toFixed(1)}%
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbMortgageStressTestCalculator;