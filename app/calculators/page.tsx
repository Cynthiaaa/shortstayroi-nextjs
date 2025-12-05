import Link from "next/link";
import { categories } from "@/lib/calculators";

export default function CalculatorsHomePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 text-center mt-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-6">Calculators</h1>
      <ul className="space-y-2">
        {categories.map(cat => (
          <li key={cat.slug}>
            <Link href={`/calculators/${cat.slug}`} className="text-blue-600 hover:underline">
              {cat.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
