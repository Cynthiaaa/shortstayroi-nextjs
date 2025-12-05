// components/RelatedCalculators.tsx
import Link from "next/link";
import { categories, CalculatorCategory, Calculator } from "@/lib/calculators";

interface Props {
  categorySlug: string;
  currentCalculatorSlug?: string; // optional, to exclude the current calculator
}

const RelatedCalculators: React.FC<Props> = ({ categorySlug, currentCalculatorSlug }) => {
  const category: CalculatorCategory | undefined = categories.find(c => c.slug === categorySlug);
  if (!category) return null;

  // Exclude current calculator if provided, limit to 3
  const related: Calculator[] = category.calculators
    .filter(calc => calc.slug !== currentCalculatorSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
        Related Calculators
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((calc) => (
          <article
            key={calc.slug}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{calc.name}</h3>
            <p className="text-gray-700 flex-grow">
              {calc.description || "Quickly calculate and optimize your property performance."}
            </p>
            <Link
              href={`/calculators/${category.slug}/${calc.slug}`}
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Open Calculator →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedCalculators;
