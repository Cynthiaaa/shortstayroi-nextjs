// Airbnb calculators
import TaxCalculator from "@/components/calculators/airbnb/TaxCalculator";
import AdrCalculator from "@/components/calculators/airbnb/AdrCalculator";
import CleaningFeeCalculator from "@/components/calculators/airbnb/CleaningFeeCalculator";
//Hotels calculators
import HotelAverageDailyRateCalculator from "@/components/calculators/hotel/HotelAverageDailyRateCalculator";
import HotelBreakEvenCalculator from "@/components/calculators/hotel/HotelBreakEvenCalculator";
import HotelCancellationRateCalculator from "@/components/calculators/hotel/HotelCancellationRateCalculator";
import HotelCostPerOccupiedRoomCalculator from "@/components/calculators/hotel/HotelCostPerOccupiedRoomCalculator";
import HotelOccupqncyRateCalculator from "@/components/calculators/hotel/HotelOccupancyRateCalculator";
import HotelStaffCostCalculator from "@/components/calculators/hotel/HotelStaffCostCalculator";

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
      { slug: "hotel-average-daily-rate-calculator", name: "Hotel ADR Calculator", component: HotelAverageDailyRateCalculator },
      { slug: "hotel-break-even-calculator", name: "Hotel Break Even Calculator", component: HotelBreakEvenCalculator },
      { slug: "hotel-cancellation-rate-calculator", name: "Hotel Cancellation Rate Calculator", component: HotelCancellationRateCalculator },
      { slug: "hotel-cost-per-occupied-room-calculator", name: "Hotel Cost Per Occupied Room Calculator", component: HotelCostPerOccupiedRoomCalculator },
      { slug: "hotel-staff-cost-calculator", name: "Hotel Staff Cost Calculator", component: HotelStaffCostCalculator },
      { slug: "hotel-occupancy-rate-calculator", name: "Hotel Occupancy Rate Calculator", component: HotelOccupqncyRateCalculator },
    ],
  },
];
