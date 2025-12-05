import { categories } from "@/lib/calculators";
import { notFound } from "next/navigation";

interface Props {
  params: { category: string };
}

export default async function CategoryPage({ params }: Props) {
  // If params is a promise, you can safely await it
  const { category } = await params;

  const cat = categories.find(c => c.slug === category);
  if (!cat) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 text-center mt-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-4">{cat.name}</h1>
      <ul className="space-y-2">
        {cat.calculators.map(calc => (
          <li key={calc.slug}>
            <a href={`/calculators/${cat.slug}/${calc.slug}`} className="text-blue-600 hover:underline">
              {calc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
