import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/lib/calculators";

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const cat = categories.find((c) => c.slug === category);
  if (!cat) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 py-12 text-gray-700">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          {cat.name}
        </h1>
        <p className="text-lg text-gray-600">
          Explore our free {cat.name} & Property Management Calculators
        </p>
      </div>

      {/* Grid of calculators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cat.calculators.map((calc) => (
          <article
            key={calc.slug}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {calc.name}
            </h2>
            <p className="text-gray-700 flex-grow">
              {calc.description || "Quickly calculate and optimize your hotel operations."}
            </p>
            <Link
              href={`/calculators/${cat.slug}/${calc.slug}`}
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              Open Calculator →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
