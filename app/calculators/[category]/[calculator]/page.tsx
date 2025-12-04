import { categories } from "@/lib/calculators";
import { notFound } from "next/navigation";

export default function CalculatorPage({ params }: { params: { category: string; calculator: string } }) {
  const cat = categories.find(c => c.slug === params.category);
  if (!cat) return notFound();

  const calc = cat.calculators.find(c => c.slug === params.calculator);
  if (!calc) return notFound();

  const CalculatorComponent = calc.component;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{calc.name}</h1>
      <CalculatorComponent />
    </div>
  );
}
