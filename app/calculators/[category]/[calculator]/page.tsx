// app/calculators/[category]/[calculator]/page.tsx
import { categories } from "@/lib/calculators";
import { notFound } from "next/navigation";
import RelatedCalculators from "@/components/calculators/RelatedCalculator";

interface Props {
  params: { category: string; calculator: string } | Promise<{ category: string; calculator: string }>;
}

export default async function CalculatorPage({ params }: Props) {
  // unwrap params if it's a Promise
  const { category, calculator } = params instanceof Promise ? await params : params;

  const cat = categories.find(c => c.slug === category);
  if (!cat) return notFound();

  const calc = cat.calculators.find(c => c.slug === calculator);
  if (!calc) return notFound();

  const CalculatorComponent = calc.component;

  return (
    <div className="container mx-auto p-6">
      <CalculatorComponent />

      <RelatedCalculators categorySlug={category} currentCalculatorSlug={calculator} />
    </div>
  );
}
