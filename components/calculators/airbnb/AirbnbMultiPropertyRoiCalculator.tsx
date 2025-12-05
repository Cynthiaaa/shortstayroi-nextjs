"use client";

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout";

interface Property {
  name: string;
  price: number;
  annualRevenue: number;
  annualExpenses: number;
}

const AirbnbMultiPropertyRoiCalculator: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([
    { name: "Property 1", price: 0, annualRevenue: 0, annualExpenses: 0 },
  ]);
  const [results, setResults] = useState<{
    totalROI: number;
    avgROI: number;
    totalProfit: number;
  } | null>(null);

  const addProperty = () => {
    setProperties([
      ...properties,
      {
        name: `Property ${properties.length + 1}`,
        price: 0,
        annualRevenue: 0,
        annualExpenses: 0,
      },
    ]);
  };

  // ✅ Fixed handleChange
  const handleChange = (index: number, field: keyof Property, value: number) => {
    setProperties((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const calculatePortfolioROI = () => {
    const totalCost = properties.reduce((sum, p) => sum + p.price, 0);
    const totalRevenue = properties.reduce((sum, p) => sum + p.annualRevenue, 0);
    const totalExpenses = properties.reduce((sum, p) => sum + p.annualExpenses, 0);
    const totalProfit = totalRevenue - totalExpenses;
    const totalROI = totalCost > 0 ? (totalProfit / totalCost) * 100 : 0;
    const avgROI = properties.length > 0 ? totalROI / properties.length : 0;

    setResults({ totalROI, avgROI, totalProfit });
  };

  // --- SEO FAQ Schema ---
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I calculate ROI for multiple Airbnb properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Add up the total revenue and expenses from all your Airbnb properties, subtract expenses from revenue to get profit, and divide by total property costs to get overall ROI."
          }
        },
        {
          "@type": "Question",
          name: "Why calculate portfolio ROI for Airbnb?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Calculating portfolio ROI helps hosts and investors understand which properties perform best and how their combined returns compare to other investments."
          }
        },
        {
          "@type": "Question",
          name: "What’s a good ROI for multiple Airbnb properties?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Strong Airbnb portfolios often deliver ROI between 10–20% annually, depending on market, occupancy rates, and management efficiency."
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
      title="Airbnb Multi-Property ROI Calculator"
      description="Compare multiple Airbnb properties to evaluate total profit, ROI percentage, and average performance across your portfolio."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Analyze ROI Across Multiple Airbnb Properties
          </h2>
          <p>
            The <strong>Airbnb Multi-Property ROI Calculator</strong> helps
            investors and hosts analyze total returns across multiple Airbnb units.
          </p>
        </>
      }
    >
      {/* PROPERTY INPUTS */}
      <div className="space-y-6">
        {properties.map((p, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
            <h4 className="text-lg font-semibold mb-4 text-blue-700">{p.name}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Property Price ($)
                </label>
                <input
                  type="number"
                  value={p.price}
                  onChange={(e) => handleChange(idx, "price", parseFloat(e.target.value) || 0)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Annual Revenue ($)
                </label>
                <input
                  type="number"
                  value={p.annualRevenue}
                  onChange={(e) => handleChange(idx, "annualRevenue", parseFloat(e.target.value) || 0)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Annual Expenses ($)
                </label>
                <input
                  type="number"
                  value={p.annualExpenses}
                  onChange={(e) => handleChange(idx, "annualExpenses", parseFloat(e.target.value) || 0)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="text-center">
          <button
            onClick={addProperty}
            className="mt-4 px-6 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 hover:bg-gray-200 transition"
          >
            + Add Another Property
          </button>
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculatePortfolioROI}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Portfolio ROI
        </button>
      </div>

      {/* RESULTS */}
      {results && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-green-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Total Profit</h3>
            <p className="text-2xl font-bold text-green-700">${results.totalProfit.toFixed(2)}</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Total ROI</h3>
            <p className="text-2xl font-bold text-blue-700">{results.totalROI.toFixed(2)}%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-xl">
            <h3 className="text-gray-700 font-medium">Average ROI per Property</h3>
            <p className="text-2xl font-bold text-purple-700">{results.avgROI.toFixed(2)}%</p>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbMultiPropertyRoiCalculator;
