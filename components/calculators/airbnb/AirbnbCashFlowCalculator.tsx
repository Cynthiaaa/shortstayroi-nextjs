"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


const AirbnbCashflowCalculator: React.FC = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [operatingExpenses, setOperatingExpenses] = useState<number>(0);
  const [mortgage, setMortgage] = useState<number>(0);
  const [cashflow, setCashflow] = useState<number | null>(null);

  const calculateCashflow = () => {
    const result = monthlyRevenue - (operatingExpenses + mortgage);
    setCashflow(result);
  };

  return (
    <CalculatorLayout
      title="Airbnb Cash Flow Calculator"
      description="Calculate your Airbnb property's monthly and annual cashflow to evaluate profitability and make smarter investment decisions."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900">
            Calculate Your Airbnb’s True Monthly Profitability
          </h2>
          <p>
            The <strong>Airbnb Cash Flow Calculator</strong> helps property owners and investors determine how much profit their short-term rental generates each month. Cashflow is the lifeblood of any real estate investment — it represents the amount of money left after all operating and mortgage expenses are paid.
          </p>
          <p>
            For Airbnb hosts, understanding cashflow is crucial. Unlike traditional rentals, Airbnb income fluctuates due to occupancy rates, nightly pricing, and seasonal trends. Calculating cashflow helps ensure your property remains financially viable, even during low-demand periods.
          </p>
          <p>
            The formula for Airbnb cashflow is straightforward:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Cashflow = Monthly Revenue − (Operating Expenses + Mortgage)
          </div>
          <p>
            <strong>Monthly revenue</strong> includes nightly rates multiplied by the occupancy rate, cleaning fees collected, and any additional income (like upsells or service fees).  
            <strong>Operating expenses</strong> include utilities, management, cleaning, maintenance, insurance, and supplies.  
            <strong>Mortgage</strong> represents the loan payment for financing the property.
          </p>
          <p>
            A positive cashflow means your Airbnb is generating profit each month — you’re earning more than you’re spending. A negative cashflow, on the other hand, means your expenses outweigh your income, which could signal the need to adjust pricing, occupancy, or expenses.
          </p>
          <p>
            Monitoring Airbnb cashflow over time helps identify seasonal trends and allows hosts to optimize performance. Many successful Airbnb hosts use cashflow analysis to set appropriate nightly rates, plan for maintenance costs, and evaluate whether to expand their portfolio.
          </p>
          <p>
            For property investors, cashflow is also used to calculate the <strong>cash-on-cash return</strong> — a key ROI metric that compares annual cashflow to the total amount of cash invested. Combined with occupancy and ADR data, cashflow gives a complete picture of your rental’s financial health.
          </p>
          <p>
            Whether you manage one Airbnb or multiple listings, this calculator gives you instant insight into profitability. Use it to model financial scenarios, estimate income potential, or prepare for discussions with investors, lenders, or property managers.
          </p>
          <p>
            Consistent tracking and optimization of cashflow can transform an average Airbnb operation into a high-performing, scalable business.
          </p>
        </>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Monthly Revenue ($)", value: monthlyRevenue, setter: setMonthlyRevenue },
          { label: "Operating Expenses ($)", value: operatingExpenses, setter: setOperatingExpenses },
          { label: "Mortgage Payment ($)", value: mortgage, setter: setMortgage },
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

      <div className="text-center mt-8">
        <button
          onClick={calculateCashflow}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Cashflow
        </button>
      </div>

      {cashflow !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Net Monthly Cashflow</h3>
          <p className={`text-3xl font-bold ${cashflow >= 0 ? "text-green-700" : "text-red-600"}`}>
            ${cashflow.toFixed(2)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbCashflowCalculator;