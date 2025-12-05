import { categories } from "@/lib/calculators";
import { use } from "react";

interface Props {
  params: { category: string; calculator: string };
}

export default function CalculatorPage({ params }: Props) {
  const { category, calculator } = use(params); 

  const cat = categories.find(c => c.slug === category);
  if (!cat) return <div>Category not found</div>;

  const calc = cat.calculators.find(c => c.slug === calculator);
  if (!calc) return <div>Calculator not found</div>;

  const CalculatorComponent = calc.component;

  return (
    <div className="container mx-auto p-6">
      <CalculatorComponent />
    </div>
  );
}
