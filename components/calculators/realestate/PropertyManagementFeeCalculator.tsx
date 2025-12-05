"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const PropertyManagementFeesCalculator: React.FC = () => {
  const [monthlyRent, setMonthlyRent] = useState<number>(0);
  const [managementPercent, setManagementPercent] = useState<number>(0);
  const [leasingFee, setLeasingFee] = useState<number>(0);
  const [maintenanceCost, setMaintenanceCost] = useState<number>(0);
  const [results, setResults] = useState<{
    managementFees: number;
    totalMonthlyCost: number;
    ownerNetIncome: number;
  } | null>(null);

  const calculateFees = () => {
    const managementFees = (managementPercent / 100) * monthlyRent;
    const totalMonthlyCost = managementFees + maintenanceCost + leasingFee / 12;
    const ownerNetIncome = monthlyRent - totalMonthlyCost;

    setResults({
      managementFees,
      totalMonthlyCost,
      ownerNetIncome,
    });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much do property management companies charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most property management companies charge between 8% and 12% of the monthly rent for ongoing management, plus additional leasing or maintenance fees."
          }
        },
        {
          "@type": "Question",
          "name": "What does a property management fee include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Property management fees typically cover rent collection, tenant communication, maintenance coordination, property inspections, and financial reporting."
          }
        },
        {
          "@type": "Question",
          "name": "How can I reduce my property management costs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reduce costs by comparing management companies, negotiating lower rates for multiple units, handling some maintenance tasks yourself, or switching to flat-fee services."
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
      title="Property Management Fees Calculator"
      description="Estimate how much you’ll pay in property management costs each month and understand their impact on your rental income."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Calculate Property Management Costs Easily
          </h2>
          <p>
            Managing a rental property comes with recurring costs that can eat into
            your profits. The <strong>Property Management Fees Calculator</strong> helps
            landlords and investors understand how management fees, maintenance, and
            leasing costs affect their monthly income. Whether you own a single-family
            home, a short-term rental, or a multi-unit building, this tool gives you
            a transparent overview of your expenses.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            What Are Property Management Fees?
          </h3>
          <p>
            Property management fees are the ongoing costs charged by a management
            company to handle the day-to-day operations of your rental. This often
            includes rent collection, tenant screening, maintenance scheduling, and
            financial reporting. Fees are usually calculated as a percentage of
            monthly rent—typically between <strong>8% and 12%</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            How This Calculator Works
          </h3>
          <p>
            This calculator estimates your monthly management fees based on the rent
            amount, management percentage, leasing fee, and average maintenance costs.
            It then shows your net income after these expenses, allowing you to compare
            different management scenarios.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Owner Net Income = Monthly Rent − (Management Fees + Maintenance + Leasing)
          </div>

          <h3 className="text-xl font-semibold mt-6">
            Why Property Management Fees Matter
          </h3>
          <p>
            Understanding management costs is critical for accurate ROI projections.
            High fees can reduce profit margins, while low fees might compromise
            service quality. This calculator helps you make data-driven decisions when
            choosing a property management company or evaluating self-management.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Typical Management Fee Ranges
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>8% – 10%:</strong> Standard for long-term residential rentals
            </li>
            <li>
              <strong>10% – 15%:</strong> Common for short-term or Airbnb-style rentals
            </li>
            <li>
              <strong>Flat fees:</strong> $100–$200/month for smaller properties
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">FAQs</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                What percentage do most property managers charge?
              </p>
              <p>
                Most companies charge between 8%–12% of collected rent, depending on
                location, property type, and included services.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                Are property management fees tax deductible?
              </p>
              <p>
                Yes — management fees are considered a business expense and can be
                deducted from your rental income when filing taxes.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Monthly Rent ($)", value: monthlyRent, setter: setMonthlyRent },
          {
            label: "Management Fee (%)",
            value: managementPercent,
            setter: setManagementPercent,
          },
          { label: "Leasing Fee ($ annual)", value: leasingFee, setter: setLeasingFee },
          {
            label: "Average Monthly Maintenance ($)",
            value: maintenanceCost,
            setter: setMaintenanceCost,
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
          onClick={calculateFees}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Fees
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Monthly Management Fees</h3>
            <p className="text-2xl font-bold text-blue-700">
              ${results.managementFees.toFixed(2)}
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Total Monthly Costs</h3>
            <p className="text-2xl font-bold text-yellow-700">
              ${results.totalMonthlyCost.toFixed(2)}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Owner Net Income</h3>
            <p className="text-2xl font-bold text-green-700">
              ${results.ownerNetIncome.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default PropertyManagementFeesCalculator;