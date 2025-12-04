import TaxCalculator from "@/components/calculators/airbnb/TaxCalculator";
import AdrCalculator from "@/components/calculators/airbnb/AdrCalculator";
import CleaningFeeCalculator from "@/components/calculators/airbnb/CleaningFeeCalculator";
import HotelRpiCalculator from "@/components/calculators/hotel/RpiCalculator";

export const categories = [
  {
    slug: "airbnb-calculators",
    name: "Airbnb Calculators",
    calculators: [
      { slug: "airbnb-tax", name: "Airbnb Tax Calculator", component: TaxCalculator },
      { slug: "airbnb-adr", name: "Airbnb ADR Calculator", component: AdrCalculator },
      { slug: "airbnb-cleaning-fee", name: "Airbnb Cleaning Fee", component: CleaningFeeCalculator },
    ],
  },
  {
    slug: "hotel-calculators",
    name: "Hotel Calculators",
    calculators: [
      { slug: "hotel-rpi", name: "Hotel RPI Calculator", component: HotelRpiCalculator },
    ],
  },
];
