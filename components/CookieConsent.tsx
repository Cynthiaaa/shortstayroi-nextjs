"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white text-sm sm:text-base shadow-lg z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-center sm:text-left">
          We use cookies to improve your experience and analyze site usage.{" "}
          <a href="/cookie" className="underline text-blue-300 hover:text-blue-400">
            Learn more
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg font-semibold"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
