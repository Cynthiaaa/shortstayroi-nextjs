"use client";

import React from "react";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  seoContent?: React.ReactNode;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  title,
  description,
  children,
  seoContent,
}) => {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 max-w-5xl mx-auto text-gray-800">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          {title}
        </h1>
        <p className="text-lg text-gray-600">{description}</p>
      </header>

      {/* Calculator Card */}
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        {children}
      </div>

      {/* SEO Text Section */}
      {seoContent && (
        <section className="mt-12 text-gray-700 space-y-4">{seoContent}</section>
      )}
    </main>
  );
};

export default CalculatorLayout;