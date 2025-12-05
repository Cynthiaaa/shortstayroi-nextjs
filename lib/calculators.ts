// Airbnb calculators (19)
import AirbnbADRCalculator from "@/components/calculators/airbnb/AirbnbADRCalculator";
import AirbnbGuestAcquisitionCostCalculator from "@/components/calculators/airbnb/AirbnbGuestAcquisitionCostCalculator";
import AirbnbPriceOptimizationCalculator from "@/components/calculators/airbnb/AibnbPriceOptimizationCalculator";
import AirbnbRevPARCalculator from "@/components/calculators/airbnb/AirbnbRevPARCalculator";
import AirbnbBreakEvenOccupancyCalculator from "@/components/calculators/airbnb/AirbnbBreakEvenOccupancyCalculator";
import AirbnbBreakEvenPointCalculator from "@/components/calculators/airbnb/AirbnbBreakEvenPointCalculator";
import AirbnbRoiCalculator from "@/components/calculators/airbnb/AirbnbRoiCalculator";
import AirbnbCashflowCalculator from "@/components/calculators/airbnb/AirbnbCashFlowCalculator";
import AirbnbCleaningFeeCalculator from "@/components/calculators/airbnb/AirbnbCleaningFeeCalculator";
import AirbnbCleaningTimeLaborCostCalculator from "@/components/calculators/airbnb/AirbnbCleaningTimeLaborCostCalculator";
import AirbnbDynamicPricingRevenueCalculator from "@/components/calculators/airbnb/AirbnbDynamicPricingRevenueCalculator";
import AirbnbMinimumNightProfitabilityCalculator from "@/components/calculators/airbnb/AirbnbMinimumNightProfitabilityCalculator";
import AirbnbMortgageStressTestCalculator from "@/components/calculators/airbnb/AirbnbMortgageStressTestCalculato";
import AirbnbMultiPropertyRoiCalculator from "@/components/calculators/airbnb/AirbnbMultiPropertyRoiCalculator";
import AirbnbNightlyRateCalculator from "@/components/calculators/airbnb/AirbnbNightlyRateCalculator";
import AirbnbNightlyVsMonthlyRateCalculator from "@/components/calculators/airbnb/AirbnbNightlyvsMonthlyRateCalculator";
import AirbnbOccupancyRateCalculator from "@/components/calculators/airbnb/AirbnbOccupancyRateCalculator";
import AirbnbSeasonalityImpactCalculator from "@/components/calculators/airbnb/AirbnbSeasonalityImpactCalculator";
import AirbnbTaxDeductionCalculator from "@/components/calculators/airbnb/AirbnbTaxDeductionCalculation";
// cleaning fee optimization

//Hotels calculators (6)
import HotelBreakEvenCalculator from "@/components/calculators/hotel/HotelBreakEvenCalculator";
import HotelCancellationRateCalculator from "@/components/calculators/hotel/HotelCancellationRateCalculator";
import HotelCostPerOccupiedRoomCalculator from "@/components/calculators/hotel/HotelCostPerOccupiedRoomCalculator";
import HotelOccupancyRateCalculator from "@/components/calculators/hotel/HotelOccupancyRateCalculator"; 
import HotelStaffCostCalculator from "@/components/calculators/hotel/HotelStaffCostCalculator";
import HotelAverageDailyRateCalculator from "@/components/calculators/hotel/HotelAverageDailyRateCalculator";

// Finance (3)
import SavingGoalCalculator from "@/components/calculators/finance/SavingGoalCalculator";
import ProfitMarginCalculator from "@/components/calculators/finance/ProfitMarginCalculator";
import NetPresentValueCalculator from "@/components/calculators/finance/NetPresentValueCalculator";

// Real estate investment (8)
// rental yield calculator 
// property management fee calc
// property appreciation fee
// net operating income calc 
// gross rent multi property calc
// cashflow cal 
// break even calc 
// brrr strategy roi 

// mortgage (2)
// mortgage calc
// loan to value ==>

// Landlord (5)
// security deposit interest calcularo
// rent increase calc
// prorata rent increase calc 
// maintenance cost calc 
// late rent fee calc 

// Pricing (3)
// seasonal demand simulator 
// customer lifetime value 
// customer acquisition cost acquisition 


export const categories = [
  {
    slug: "airbnb-calculators",
    name: "Airbnb Calculators",
    calculators: [
      { slug: "airbnb-adr-calculator", name: "Airbnb ADR Calculator", component: AirbnbADRCalculator },
      { slug: "airbnb-break-even-occupancy-calculator", name:"Airbnb Break Even Occupancy Calculator", component: AirbnbBreakEvenOccupancyCalculator },
      { slug: "airbnb-break-even-point-calculator", name:"Airbnb Break Even Point Calculator", component: AirbnbBreakEvenPointCalculator },
      { slug: "airbnb-cash-flow-calculator", name:"Airbnb Cash Flow Calculator", component: AirbnbCashflowCalculator},
      { slug: "airbnb-cleaning-fee-calculator", name:"Airbnb Cleaning Fee Calculator", component: AirbnbCleaningFeeCalculator},
      { slug: "airbnb-cleaning-time-labor-cost-calculator", name:"Airbnb Cleaning Time Labor Cost Calculator", component: AirbnbCleaningTimeLaborCostCalculator},
      { slug: "airbnb-dynamic-pricing-revenue-calculator", name:"Airbnb Dynamic Pricing Revenue Calculator", component: AirbnbDynamicPricingRevenueCalculator},
      { slug: "airbnb-guest-acquisition-cost-calculator", name: "Airbnb Guest Acquisition Cost Calculator", component: AirbnbGuestAcquisitionCostCalculator },
      { slug: "airbnb-nightly-rate-calculator", name: "Airbnb Nightly Rate Calculator", component: AirbnbNightlyRateCalculator },
      { slug: "airbnb-nightly-vs-monthly-rate-calculator", name: "Airbnb Nightly vs Monthly Rate Calculator", component: AirbnbNightlyVsMonthlyRateCalculator },
      { slug: "airbnb-minimum-night-profitability-calculator", name: "Airbnb Minimum Night Profitability Calculator", component: AirbnbMinimumNightProfitabilityCalculator },
      { slug: "airbnb-mortgage-stress-test-calculator", name: "Airbnb Mortgage Stress Test Calculator", component: AirbnbMortgageStressTestCalculator },
      { slug: "airbnb-multi-property-roi-calculator", name: "Airbnb Multi Property ROI Calculator", component: AirbnbMultiPropertyRoiCalculator },
      { slug: "airbnb-occupancy-rate-calculator", name: "Airbnb Occupancy Rate Calculator", component: AirbnbOccupancyRateCalculator },
      { slug: "airbnb-price-optimization-calculator", name: "Airbnb Price Optimization Calculator", component: AirbnbPriceOptimizationCalculator },
      { slug: "airbnb-revenue-per-available-rental-calculator", name: "Airbnb Revenue Per Available Rental Calculator", component: AirbnbRevPARCalculator },
      { slug: "airbnb-roi-calculator", name:"Airbnb ROI Calculator", component: AirbnbRoiCalculator },
      { slug: "airbnb-seasonality-impact-calculator", name:"Airbnb Seasonality Impact Calculator", component: AirbnbSeasonalityImpactCalculator },
      { slug: "airbnb-tax-deduction-calculator", name:"Airbnb Tax Deduction Calculator", component: AirbnbTaxDeductionCalculator },
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
      { slug: "hotel-occupancy-rate-calculator", name: "Hotel Occupancy Rate Calculator", component: HotelOccupancyRateCalculator },
      { slug: "hotel-staff-cost-calculator", name: "Hotel Staff Cost Calculator", component: HotelStaffCostCalculator },   
    ],
  },
  {
    slug: "finance-calculators",
    name: "Finance Calculators",
    calculators: [
      { slug: "net-present-value-calculator", name: "Net Present Value Calculator", component: NetPresentValueCalculator },
      { slug: "profit-margin-calculator", name: "Profit Margin Calculator", component: ProfitMarginCalculator },
      { slug: "saving-goal-calculator", name: "Saving Goal Calculator", component: SavingGoalCalculator },   
    ],
  },
  {
    slug: "landlord-calculators",
    name: "Landlord Calculators",
    calculators: [
   
    ],
  },
  {
    slug: "mortgage-calculators",
    name: "Mortgage Calculators",
    calculators: [
   
    ],
  },
  {
    slug: "pricing-calculators",
    name: "Pricing Calculators",
    calculators: [
   
    ],
  },
  {
    slug: "real-estate-calculators",
    name: "Real Estate Calculators",
    calculators: [
   
    ],
  },
];
