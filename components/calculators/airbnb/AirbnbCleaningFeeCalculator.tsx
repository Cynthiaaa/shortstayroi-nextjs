"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbCleaningFeeCalculator: React.FC = () => {
  const [laborHours, setLaborHours] = useState<number>(0);
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [supplyCost, setSupplyCost] = useState<number>(0);
  const [bookingsPerMonth, setBookingsPerMonth] = useState<number>(0);
  const [overheadPercent, setOverheadPercent] = useState<number>(0);
  const [results, setResults] = useState<{
    costPerClean: number;
    recommendedFee: number;
  } | null>(null);

  const calculateCleaningFee = () => {
    if (bookingsPerMonth <= 0) return setResults({ costPerClean: 0, recommendedFee: 0 });

    const laborCost = laborHours * hourlyRate;
    const baseCost = laborCost + supplyCost;
    const overhead = baseCost * (overheadPercent / 100);
    const totalCost = baseCost + overhead;
    const costPerClean = totalCost;
    const recommendedFee = costPerClean * 1.1; // small markup for profit or variability

    setResults({ costPerClean, recommendedFee });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I calculate my Airbnb cleaning fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Add together your labor cost (hours × hourly rate), cleaning supplies, and a small overhead percentage. Divide by the number of monthly bookings to get cost per clean, then add a 5–10% margin."
          }
        },
        {
          "@type": "Question",
          "name": "What is a reasonable Airbnb cleaning fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Typical Airbnb cleaning fees range between $50 and $150 per stay depending on property size, location, and local market rates."
          }
        },
        {
          "@type": "Question",
          "name": "Should I profit from my Airbnb cleaning fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While cleaning fees are primarily to cover costs, including a small margin for coordination and time spent managing cleanings is acceptable and common."
          }
        }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, []);

  return (
    <CalculatorLayout
      title="Airbnb Cleaning Fee Calculator"
      description="Determine the ideal Airbnb cleaning fee to cover your cleaning labor, supplies, and overhead — while staying competitive with similar listings."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Set the Perfect Cleaning Fee for Your Airbnb
          </h2>
          <p>
            The <strong>Airbnb Cleaning Fee Calculator</strong> helps hosts estimate
            a fair cleaning fee that covers their true costs while staying competitive.
            Whether you hire cleaners or handle turnover yourself, this tool shows
            how labor, supplies, and overhead contribute to your per-stay cleaning cost.
          </p>

          <h3 className="text-xl font-semibold mt-6">Why Cleaning Fee Accuracy Matters</h3>
          <p>
            Setting your cleaning fee too high can deter guests, while setting it too
            low means you’re paying out-of-pocket. Accurately pricing your cleaning
            fee ensures you recover expenses without affecting booking volume.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Cleaning Fee = (Labor + Supplies + Overhead) × 1.1
          </div>

          <h3 className="text-xl font-semibold mt-6">Example Calculation</h3>
          <p>
            If each cleaning takes 3 hours at $25/hour, supplies cost $15 per clean,
            and you add 10% for overhead, your cleaning fee would be around $99:
          </p>

          <div className="bg-blue-50 p-4 rounded-lg text-center font-mono text-sm sm:text-base my-4">
            (3 × $25 + $15) × 1.1 = $99 per stay
          </div>

          <h3 className="text-xl font-semibold mt-6">What to Include in Your Fee</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Labor and cleaning staff wages</li>
            <li>Cleaning supplies and detergents</li>
            <li>Travel time and coordination</li>
            <li>Laundry and restocking costs</li>
            <li>Minor wear-and-tear expenses</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Tips for Hosts</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Compare cleaning fees of similar listings in your area</li>
            <li>Offer longer-stay discounts to balance higher fees</li>
            <li>Be transparent about cleaning standards in your listing</li>
            <li>Use professional cleaners for consistent guest satisfaction</li>
          </ul>

          <p className="mt-6">
            With accurate cleaning fees, you’ll protect your margins, set guest expectations,
            and simplify your property’s financial planning.
          </p>
        </>
      }
    >
      {/* --- INPUT FORM --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: "Hours per Clean", value: laborHours, setter: setLaborHours },
          { label: "Hourly Rate ($)", value: hourlyRate, setter: setHourlyRate },
          { label: "Supplies Cost per Clean ($)", value: supplyCost, setter: setSupplyCost },
          { label: "Bookings per Month", value: bookingsPerMonth, setter: setBookingsPerMonth },
          { label: "Overhead (%)", value: overheadPercent, setter: setOverheadPercent },
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

      {/* --- BUTTON --- */}
      <div className="text-center mt-8">
        <button
          onClick={calculateCleaningFee}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Cleaning Fee
        </button>
      </div>

      {/* --- RESULTS --- */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-yellow-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Cost per Clean</h3>
            <p className="text-2xl font-bold text-yellow-700">
              ${results.costPerClean.toFixed(2)}
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Recommended Cleaning Fee</h3>
            <p className="text-2xl font-bold text-green-700">
              ${results.recommendedFee.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbCleaningFeeCalculator;