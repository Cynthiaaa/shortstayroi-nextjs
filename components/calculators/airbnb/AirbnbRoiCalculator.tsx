"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed


interface Results {
  monthlyRevenue: number;
  annualRevenue: number;
  netProfit: number;
  roi: number;
  cashOnCash: number;
  breakEven: number;
}

const AirbnbRoiCalculator: React.FC = () => {
  // --- INPUT STATES ---
  const [propertyPrice, setPropertyPrice] = useState<number>(0);
  const [nightlyRate, setNightlyRate] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [cleaningFees, setCleaningFees] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [maintenancePercent, setMaintenancePercent] = useState<number>(0);
  const [managementPercent, setManagementPercent] = useState<number>(0);
  const [mortgage, setMortgage] = useState<number>(0);
  const [results, setResults] = useState<Results | null>(null);

  // --- CALCULATION LOGIC ---
  const calculateROI = () => {
    const monthlyRevenue =
      nightlyRate * (occupancyRate / 100) * 30 + cleaningFees;
    const annualRevenue = monthlyRevenue * 12;

    const annualExpenses =
      (monthlyExpenses + mortgage) * 12 +
      (maintenancePercent / 100) * propertyPrice +
      (managementPercent / 100) * annualRevenue;

    const netProfit = annualRevenue - annualExpenses;
    const roi = propertyPrice ? (netProfit / propertyPrice) * 100 : 0;
    const cashOnCash =
      propertyPrice && netProfit > 0 ? (netProfit / (propertyPrice * 0.2)) * 100 : 0;
    const breakEven = netProfit > 0 ? propertyPrice / netProfit : 0;

    setResults({
      monthlyRevenue,
      annualRevenue,
      netProfit: netProfit / 12,
      roi,
      cashOnCash,
      breakEven,
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
          "name": "How do you calculate Airbnb ROI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate Airbnb ROI, subtract all annual expenses from annual revenue, then divide the net profit by the total property cost and multiply by 100. The formula is: ROI (%) = (Net Annual Profit / Property Price) × 100."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good ROI for an Airbnb property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A good ROI for an Airbnb property typically ranges between 8% and 20%, depending on the location, occupancy rates, and seasonal demand. High-performing markets and unique listings can reach 25% or more."
          }
        },
        {
          "@type": "Question",
          "name": "How can I increase my Airbnb profitability?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can increase Airbnb profitability by optimizing your nightly rates, improving occupancy with professional photos and descriptions, automating guest management, and reducing cleaning and maintenance costs."
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
    <main className="px-4 sm:px-8 lg:px-16 py-12 max-w-5xl mx-auto text-gray-800">
      {/* --- HEADER --- */}
      <header className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-4">
          Airbnb ROI Calculator
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Calculate your Airbnb rental profitability instantly. Enter your
          property price, nightly rate, and expenses to estimate your ROI,
          cash-on-cash return, and break-even period in seconds.
        </p>
      </header>

      {/* --- CALCULATOR --- */}
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Property Price ($)", value: propertyPrice, setter: setPropertyPrice },
            { label: "Nightly Rate ($)", value: nightlyRate, setter: setNightlyRate },
            { label: "Occupancy Rate (%)", value: occupancyRate, setter: setOccupancyRate },
            { label: "Cleaning Fees ($)", value: cleaningFees, setter: setCleaningFees },
            { label: "Monthly Expenses ($)", value: monthlyExpenses, setter: setMonthlyExpenses },
            { label: "Maintenance (%)", value: maintenancePercent, setter: setMaintenancePercent },
            { label: "Management (%)", value: managementPercent, setter: setManagementPercent },
            { label: "Mortgage (Monthly $)", value: mortgage, setter: setMortgage },
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
            onClick={calculateROI}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Calculate ROI
          </button>
        </div>

        {results && (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Monthly Revenue</h3>
              <p className="text-2xl font-bold text-blue-700">
                ${results.monthlyRevenue.toFixed(2)}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Annual Revenue</h3>
              <p className="text-2xl font-bold text-blue-700">
                ${results.annualRevenue.toFixed(2)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Net Monthly Profit</h3>
              <p className="text-2xl font-bold text-green-700">
                ${results.netProfit.toFixed(2)}
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">ROI %</h3>
              <p className="text-2xl font-bold text-green-700">
                {results.roi.toFixed(2)}%
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Cash on Cash Return</h3>
              <p className="text-2xl font-bold text-yellow-700">
                {results.cashOnCash.toFixed(2)}%
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="text-gray-700 font-medium">Break-Even Point</h3>
              <p className="text-2xl font-bold text-purple-700">
                {results.breakEven.toFixed(1)} years
              </p>
            </div>
          </div>
        )}
      </div>

      {/* --- SEO / EXPLANATION SECTION --- */}
      <section className="mt-16 space-y-6 text-gray-700">
        <h2 className="text-3xl font-semibold text-gray-900">
          How the Airbnb ROI Calculator Works
        </h2>
        <p>
          This calculator uses your property price, average nightly rate, occupancy rate,
          and expenses to estimate your rental profitability. It applies real-world financial
          metrics that Airbnb hosts and property investors use to project short-term and
          mid-term rental performance.
        </p>

        <h3 className="text-2xl font-semibold">Airbnb ROI Formula</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base">
          ROI (%) = (Net Annual Profit ÷ Property Price) × 100
        </div>
        <p>
          Where Net Annual Profit is calculated as: <br />
          <em>(Nightly Rate × Occupancy × 365) − Yearly Expenses</em>
        </p>

        <h3 className="text-2xl font-semibold mt-8">Why Airbnb ROI Matters</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Compare short-term rentals with long-term lease performance</li>
          <li>Evaluate potential Airbnb investments before purchasing</li>
          <li>Estimate cashflow and recovery period (break-even time)</li>
          <li>Plan for seasonal changes in occupancy and rates</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">Typical Airbnb ROI Benchmarks</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Good ROI:</strong> 8–12%</li>
          <li><strong>High ROI:</strong> 12–20%</li>
          <li><strong>Exceptional ROI:</strong> 20% or more (prime locations, unique stays)</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-8">FAQs About Airbnb ROI</h3>
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-gray-800">
              What affects Airbnb ROI the most?
            </p>
            <p>
              Occupancy rate, nightly pricing, cleaning and management costs, and property
              location are the biggest factors. A small adjustment in occupancy or rates
              can significantly change annual profits.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              Is Airbnb more profitable than long-term rentals?
            </p>
            <p>
              In many markets, yes — Airbnb properties can earn 2–3× more gross income,
              though they require more management and higher expenses.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              How can I improve my Airbnb ROI?
            </p>
            <p>
              Optimize pricing dynamically, use professional photography, automate guest
              check-ins, and manage cleaning costs effectively to increase your ROI.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AirbnbRoiCalculator;