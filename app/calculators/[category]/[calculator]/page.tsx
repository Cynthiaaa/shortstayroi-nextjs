import { categories } from "@/lib/calculators";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ category: string; calculator: string }>;
}

export default async function CalculatorPage({ params }: Props) {
  // Await params because it might be a Promise
  const { category, calculator } = await params;

  const cat = categories.find((c) => c.slug === category);
  if (!cat) return notFound();

  const calc = cat.calculators.find((c) => c.slug === calculator);
  if (!calc) return notFound();

  const CalculatorComponent = calc.component;

  return (
    <div className="container mx-auto p-6">
      <CalculatorComponent />
    </div>
  );
}
