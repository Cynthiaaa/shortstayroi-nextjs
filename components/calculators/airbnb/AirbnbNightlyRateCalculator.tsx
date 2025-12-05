"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbNightlyRateCalculator: React.FC = () => {
  const [targetMonthlyRevenue, setTargetMonthlyRevenue] = useState<number>(0);
  const [occupancyRate, setOccupancyRate] = useState<number>(0);
  const [cleaningFee, setCleaningFee] = useState<number>(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState<number>(0);
  const [results, setResults] = useState<number | null>(null);

  const calculateNightlyRate = () => {
    if (occupancyRate <= 0) return setResults(0);
    const nightsBooked = (occupancyRate / 100) * 30;
    const nightlyRate =
      (targetMonthlyRevenue + monthlyExpenses - cleaningFee) / nightsBooked;
    setResults(nightlyRate);
  };

  // --- FAQ JSON-LD for SEO ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate the right nightly rate for Airbnb?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To calculate your Airbnb nightly rate, divide your target monthly revenue by the number of nights you expect to be booked, then adjust for cleaning fees and expenses."
          }
        },
        {
          "@type": "Question",
          "name": "What factors affect Airbnb pricing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Airbnb pricing depends on property type, location, seasonality, demand, competition, and amenities offered. Dynamic pricing tools can help adjust rates automatically."
          }
        },
        {
          "@type": "Question",
          "name": "How can I maximize my Airbnb earnings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Maximize Airbnb earnings by optimizing pricing per season, improving reviews, using smart home automation, and reducing operating costs."
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
      title="Airbnb Nightly Rate Calculator"
      description="Determine the ideal nightly rate for your Airbnb property to achieve your target monthly revenue while considering occupancy and expenses."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Find the Perfect Nightly Rate for Your Airbnb
          </h2>
          <p>
            The <strong>Airbnb Nightly Rate Calculator</strong> helps you set an
            optimal nightly price that balances profitability and competitiveness. 
            Whether you’re a new host or a seasoned investor, finding the right 
            rate ensures your rental remains attractive to guests while meeting 
            your income goals.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Why Nightly Rate Optimization Matters
          </h3>
          <p>
            Setting the right nightly rate is one of the most important factors 
            in maximizing Airbnb performance. A price that’s too high can reduce 
            bookings, while pricing too low limits your revenue. The key is to 
            consider occupancy rates, cleaning fees, and monthly expenses to find 
            your true break-even point and target profit.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            How to Use This Calculator
          </h3>
          <p>
            Enter your <strong>target monthly revenue</strong>, expected 
            <strong>occupancy rate</strong>, monthly expenses, and average 
            cleaning fee. The calculator will automatically estimate the 
            nightly rate needed to reach your goal.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Nightly Rate = (Target Monthly Revenue + Expenses − Cleaning Fee) ÷ (Occupancy × 30)
          </div>

          <h3 className="text-xl font-semibold mt-6">Tips for Pricing Strategy</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Adjust rates seasonally using occupancy data</li>
            <li>Use dynamic pricing tools like Beyond or Wheelhouse</li>
            <li>Offer discounts for long stays or weekday bookings</li>
            <li>Monitor competitors in your local area regularly</li>
            <li>Optimize listing photos and reviews to justify premium rates</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            Suppose you want to earn $3,000/month and expect a 75% occupancy rate. 
            With $400 in monthly expenses and $100 cleaning fees, your required 
            nightly rate would be roughly:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            ($3,000 + $400 − $100) ÷ (0.75 × 30) = $154.44/night
          </div>

          <h3 className="text-xl font-semibold mt-6">FAQs</h3>
          <div className="space-y-4 mt-4">
            <div>
              <p className="font-semibold text-gray-800">
                Should I change my Airbnb nightly rate frequently?
              </p>
              <p>
                Yes — adjusting rates dynamically based on seasonality and demand 
                helps maximize occupancy and total revenue.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                What’s the best way to find competitor pricing?
              </p>
              <p>
                Use Airbnb search filters in your area to compare similar listings 
                or leverage pricing tools like AirDNA for market insights.
              </p>
            </div>
          </div>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            label: "Target Monthly Revenue ($)",
            value: targetMonthlyRevenue,
            setter: setTargetMonthlyRevenue,
          },
          {
            label: "Expected Occupancy Rate (%)",
            value: occupancyRate,
            setter: setOccupancyRate,
          },
          { label: "Cleaning Fee ($)", value: cleaningFee, setter: setCleaningFee },
          {
            label: "Monthly Expenses ($)",
            value: monthlyExpenses,
            setter: setMonthlyExpenses,
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

      {/* --- BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateNightlyRate}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Nightly Rate
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Suggested Nightly Rate</h3>
          <p className="text-3xl font-bold text-green-700">
            ${results.toFixed(2)} / night
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbNightlyRateCalculator;