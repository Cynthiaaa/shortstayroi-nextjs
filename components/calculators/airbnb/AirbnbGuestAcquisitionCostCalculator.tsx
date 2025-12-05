"use client"; // this makes it a client component

import { useState, useEffect } from "react";
import CalculatorLayout from "../CalculatorLayout"; // adjust path if needed

const AirbnbGuestAcquisitionCostCalculator: React.FC = () => {
  const [marketingSpend, setMarketingSpend] = useState<number>(0);
  const [totalBookings, setTotalBookings] = useState<number>(0);
  const [gac, setGac] = useState<number | null>(null);

  const calculateGAC = () => {
    if (totalBookings > 0) {
      setGac(marketingSpend / totalBookings);
    } else {
      setGac(0);
    }
  };

  return (
    <CalculatorLayout
      title="Airbnb Guest Acquisition Cost Calculator"
      description="Calculate your Airbnb's Guest Acquisition Cost (GAC) to measure marketing efficiency and optimize booking profitability."
      seoContent={
        <>
          <h2 className="text-2xl font-semibold text-gray-900">
            Understand and Optimize Your Airbnb Guest Acquisition Cost
          </h2>
          <p>
            The <strong>Airbnb Guest Acquisition Cost (GAC)</strong> measures how much you spend
            to acquire a single guest or booking through marketing, advertising, or platform fees.
            This critical metric helps hosts and property managers evaluate the efficiency of their
            promotional efforts and the profitability of each reservation.
          </p>
          <p>
            Just like businesses calculate customer acquisition cost (CAC), Airbnb hosts can track
            GAC to assess how effectively their marketing budget generates bookings. Whether you use
            paid advertising, SEO, listing promotions, or referral programs, understanding your GAC
            ensures that your marketing investments produce a strong return.
          </p>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            Formula for Airbnb Guest Acquisition Cost:
          </h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            Guest Acquisition Cost (GAC) = Total Marketing Spend ÷ Total Number of Bookings
          </div>

          <p>
            For example, if you spent <strong>$2,000</strong> on digital advertising and promotions
            in a month and received <strong>40 bookings</strong>, your GAC would be:
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center font-mono text-sm sm:text-base my-4">
            GAC = 2,000 ÷ 40 = $50 per booking
          </div>

          <p>
            A lower GAC indicates higher marketing efficiency — you’re spending less to acquire
            each guest. A high GAC might suggest over-spending on ads, low conversion rates, or
            poor targeting. Monitoring this figure regularly helps optimize budget allocation and
            improve ROI on marketing campaigns.
          </p>

          <p>
            This calculator is particularly valuable for Airbnb hosts running social media
            advertising, Google Ads, or listing promotions. By combining GAC with other performance
            metrics such as <strong>ADR (Average Daily Rate)</strong>, <strong>RevPAR</strong>, and
            <strong>Occupancy Rate</strong>, you can assess overall profitability per booking and
            identify areas for improvement.
          </p>

          <p>
            Beyond paid marketing, GAC also includes costs related to guest acquisition such as:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Airbnb platform or service fees</li>
            <li>Discounts or promotions offered to guests</li>
            <li>Referral and loyalty program costs</li>
            <li>Photography or professional listing optimization fees</li>
            <li>Software subscriptions for channel management or automation</li>
          </ul>

          <p>
            Tracking your GAC monthly or quarterly gives you data to make strategic decisions — for
            example, whether to continue certain ad campaigns, adjust pricing, or focus on organic
            growth strategies like reviews and repeat guests.
          </p>

          <p>
            A good rule of thumb for sustainable Airbnb operations is to maintain a GAC below 10% of
            your average booking revenue. For instance, if your average booking value is $500, aim to
            spend no more than $50 acquiring that guest. This ensures consistent profit margins and
            scalable marketing performance.
          </p>

          <p>
            Use this <strong>Airbnb Guest Acquisition Cost Calculator</strong> to evaluate marketing
            efficiency, test new campaigns, and benchmark your results against similar properties.
            With data-driven insights, you can grow your occupancy rate and revenue while keeping
            acquisition costs under control.
          </p>
        </>
      }
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Total Marketing Spend ($)
          </label>
          <input
            type="number"
            value={marketingSpend || ""}
            onChange={(e) => setMarketingSpend(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Total Number of Bookings
          </label>
          <input
            type="number"
            value={totalBookings || ""}
            onChange={(e) => setTotalBookings(parseFloat(e.target.value) || 0)}
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      {/* BUTTON */}
      <div className="text-center mt-8">
        <button
          onClick={calculateGAC}
          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Calculate Guest Acquisition Cost
        </button>
      </div>

      {/* RESULTS */}
      {gac !== null && (
        <div className="text-center mt-8 bg-green-50 p-6 rounded-xl">
          <h3 className="text-gray-700 font-medium">Guest Acquisition Cost (GAC)</h3>
          <p className="text-3xl font-bold text-green-700">${gac.toFixed(2)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
};

export default AirbnbGuestAcquisitionCostCalculator;