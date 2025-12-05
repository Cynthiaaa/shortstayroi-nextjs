"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbTaxDeductionCalculator: React.FC = () => {
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [deductibleExpenses, setDeductibleExpenses] = useState<number>(0);
  const [taxRate, setTaxRate] = useState<number>(0);
  const [results, setResults] = useState<{
    taxableIncome: number;
    estimatedTax: number;
  } | null>(null);

  const calculateTax = () => {
    const taxableIncome = Math.max(totalRevenue - deductibleExpenses, 0);
    const estimatedTax = taxableIncome * (taxRate / 100);
    setResults({ taxableIncome, estimatedTax });
  };

  return (
    <CalculatorLayout
      title="Airbnb Tax Deduction Calculator"
      description="Estimate your Airbnb taxable income and potential tax deductions to plan smarter and maximize your profit."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900">
            Calculate Airbnb Tax Deductions and Maximize Profit
          </h2>
          <p>
            The <strong>Airbnb Tax Deduction Calculator</strong> helps hosts and property investors
            estimate taxable income after deducting eligible business expenses. Whether you operate a
            single short-term rental or manage multiple listings, understanding your tax liability is
            essential for accurate financial planning and compliance.
          </p>
          <p>
            Airbnb income is generally considered taxable, meaning hosts must report their earnings to
            local tax authorities. Fortunately, many of the costs associated with running a rental are
            tax-deductible. Knowing which expenses qualify — and how they impact your net profit —
            ensures that you keep more of your earnings at the end of the year.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Formula for Airbnb Tax Calculation:</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Taxable Income = Total Revenue − Deductible Expenses  
            <br />
            Estimated Tax = Taxable Income × Tax Rate
          </div>
          <p>
            <strong>Total revenue</strong> includes all booking fees, cleaning fees, and additional
            guest charges earned through Airbnb.  
            <strong>Deductible expenses</strong> may include:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Cleaning and maintenance costs</li>
            <li>Management fees or Airbnb service fees</li>
            <li>Mortgage interest or property rent</li>
            <li>Utilities (electricity, water, internet)</li>
            <li>Insurance and property taxes</li>
            <li>Furnishing, repairs, and supplies</li>
            <li>Depreciation of assets and improvements</li>
          </ul>
          <p>
            By accounting for these deductions, you can calculate your <strong>taxable income</strong> —
            the portion of earnings subject to income tax. Once taxable income is known, multiply it by
            your applicable tax rate to estimate your annual tax payment.
          </p>
          <p>
            <strong>Example:</strong> If your Airbnb earned $60,000 in total revenue, with $20,000 in
            deductible expenses and a 25% tax rate, your taxable income would be $40,000, and your
            estimated tax liability would be $10,000.
          </p>
          <p>
            Understanding your Airbnb tax deductions also helps with strategic planning — such as when
            deciding whether to refinance, upgrade a property, or expand your rental portfolio. 
            Investors can use this calculator to forecast after-tax cash flow and compare investment
            performance across different markets.
          </p>
          <p>
            This calculator is for estimation purposes only and does not replace professional tax
            advice. Always consult a certified accountant or tax advisor to confirm eligibility for
            specific deductions and compliance with local regulations.
          </p>
          <p>
            Use this Airbnb Tax Deduction Calculator to simplify financial reporting, avoid
            over-payment, and make data-driven investment decisions. Smart tax management is one of the
            most effective ways to increase long-term profitability in short-term rental operations.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Total Revenue ($)
          </label>
          <input
            type="number"
            value={totalRevenue || ""}
            onChange={(e) => setTotalRevenue(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Deductible Expenses ($)
          </label>
          <input
            type="number"
            value={deductibleExpenses || ""}
            onChange={(e) => setDeductibleExpenses(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Tax Rate (%)
          </label>
          <input
            type="number"
            value={taxRate || ""}
            onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateTax}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Tax Deduction
        </button>
      </div>

      {/* RESULTS */}
      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center mt-10">
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="text-gray-700 font-medium">Taxable Income</h3>
            <p className="text-3xl font-bold text-green-700">
              ${results.taxableIncome.toFixed(2)}
            </p>
          </div>
          <div className="bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-gray-700 font-medium">Estimated Tax Owed</h3>
            <p className="text-3xl font-bold text-yellow-700">
              ${results.estimatedTax.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbTaxDeductionCalculator;