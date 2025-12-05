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
import AirbnbMortgageStressTestCalculator from "@/components/calculators/airbnb/AirbnbMortgageStressTestCalculator";
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

// Real estate investment (7)
import BreakEvenCalculator from "@/components/calculators/realestate/BreakEvenCalculator";
import CashflowCalculator from "@/components/calculators/realestate/CashflowCalculator";
import GrossRentMultiplierCalculator from "@/components/calculators/realestate/GrossRentMultiPropertyCalculator";
import RentalYieldCalculator from "@/components/calculators/realestate/RentalYieldCalculator";
import NetOperatingIncomeCalculator from "@/components/calculators/realestate/NetOperatingIncomeCalculator";
import PropertyAppreciationCalculator from "@/components/calculators/realestate/PropertyAppreciationFeeCalculator";
import PropertyManagementFeesCalculator from "@/components/calculators/realestate/PropertyManagementFeeCalculator";
// brrr strategy roi 

// Mortgage (2)
import MortgageCalculator from "@/components/calculators/mortgage/MortgageCalculator";
import LoanToValueCalculator from "@/components/calculators/mortgage/LoanToValueCalculator";

// Landlord (5)
import LateRentFeeCalculator from "@/components/calculators/landlord/LateRentFeeCalculator";
import MaintenanceCostCalculator from "@/components/calculators/landlord/MaintenanceCostCalculator";
import SecurityDepositInterestCalculator from "@/components/calculators/landlord/SecurityDepositInterestCalculator";
import ProRataRentCalculator from "@/components/calculators/landlord/ProrataRentIncreaseCalculator";
import RentIncreaseCalculator from "@/components/calculators/landlord/RentIncreaseCalculator";

// Pricing (3)
import SeasonalDemandSimulator from "@/components/calculators/pricing/SeasonalDemandSimulator";
import CustomerAcquisitionCostCalculator from "@/components/calculators/pricing/CustomerAcquisitionCostCalculator";
import CustomerLifetimeValueCalculator from "@/components/calculators/pricing/CustomerLifetimeValueCalculator";


export const categories = [
  {
    slug: "airbnb-calculators",
    name: "Airbnb Calculators",
    calculators: [
      { slug: "airbnb-adr-calculator", name: "Airbnb ADR Calculator", description:"Calculate the Average Daily Rate (ADR) of your Airbnb rental property for optimal pricing.", component: AirbnbADRCalculator },
      { slug: "airbnb-break-even-occupancy-calculator", name:"Airbnb Break Even Occupancy Calculator", description:"Determine the minimum occupancy rate required for your Airbnb property to cover all costs and start earning profit.", component: AirbnbBreakEvenOccupancyCalculator },
      { slug: "airbnb-break-even-point-calculator", name:"Airbnb Break Even Point Calculator",  description:"Estimate how long it will take for your Airbnb investment to recover its initial cost and start generating profit.", component: AirbnbBreakEvenPointCalculator },
      { slug: "airbnb-cash-flow-calculator", name:"Airbnb Cash Flow Calculator", description:"Calculate your Airbnb property's monthly and annual cashflow to evaluate profitability and make smarter investment decisions.", component: AirbnbCashflowCalculator},
      { slug: "airbnb-cleaning-fee-calculator", name:"Airbnb Cleaning Fee Calculator", description:"Determine the ideal Airbnb cleaning fee to cover your cleaning labor, supplies, and overhead — while staying competitive with similar listings.", component: AirbnbCleaningFeeCalculator},
      { slug: "airbnb-cleaning-time-labor-cost-calculator", name:"Airbnb Cleaning Time Labor Cost Calculator", description:"Estimate how much time and labor your Airbnb cleaning takes — and calculate total monthly and per-clean costs easily.", component: AirbnbCleaningTimeLaborCostCalculator},
      { slug: "airbnb-dynamic-pricing-revenue-calculator", name:"Airbnb Dynamic Pricing Revenue Calculator", description:"Estimate your Airbnb’s annual revenue potential by simulating dynamic pricing strategies across different demand seasons.", component: AirbnbDynamicPricingRevenueCalculator},
      { slug: "airbnb-guest-acquisition-cost-calculator", name: "Airbnb Guest Acquisition Cost Calculator", description:"Calculate your Airbnb's Guest Acquisition Cost (GAC) to measure marketing efficiency and optimize booking profitability.", component: AirbnbGuestAcquisitionCostCalculator },
      { slug: "airbnb-nightly-rate-calculator", name: "Airbnb Nightly Rate Calculator", description:"Determine the ideal nightly rate for your Airbnb property to achieve your target monthly revenue while considering occupancy and expenses.", component: AirbnbNightlyRateCalculator },
      { slug: "airbnb-nightly-vs-monthly-rate-calculator", name: "Airbnb Nightly vs Monthly Rate Calculator", description:"Compare potential income from nightly vs monthly Airbnb rates based on occupancy.", component: AirbnbNightlyVsMonthlyRateCalculator },
      { slug: "airbnb-minimum-night-profitability-calculator", name: "Airbnb Minimum Night Profitability Calculator", description:"Find out how many nights per month your Airbnb needs to be booked to break even and start making a profit.", component: AirbnbMinimumNightProfitabilityCalculator },
      { slug: "airbnb-mortgage-stress-test-calculator", name: "Airbnb Mortgage Stress Test Calculator", description:"Evaluate whether your Airbnb income can sustain your mortgage if interest rates rise — simulate higher payment scenarios instantly.", component: AirbnbMortgageStressTestCalculator },
      { slug: "airbnb-multi-property-roi-calculator", name: "Airbnb Multi Property ROI Calculator", description:"Compare multiple Airbnb properties to evaluate total profit, ROI percentage, and average performance across your portfolio.", component: AirbnbMultiPropertyRoiCalculator },
      { slug: "airbnb-occupancy-rate-calculator", name: "Airbnb Occupancy Rate Calculator", description:"Quickly calculate your Airbnb occupancy rate to measure property performance and identify opportunities to increase bookings.", component: AirbnbOccupancyRateCalculator },
      { slug: "airbnb-price-optimization-calculator", name: "Airbnb Price Optimization Calculator", description:"Find the ideal nightly rate for your Airbnb to maximize profit and occupancy." , component: AirbnbPriceOptimizationCalculator },
      { slug: "airbnb-revenue-per-available-rental-calculator", name: "Airbnb Revenue Per Available Rental Calculator", description:"Calculate your Airbnb's Revenue Per Available Rental (RevPAR) to evaluate pricing efficiency and property performance.", component: AirbnbRevPARCalculator },
      { slug: "airbnb-roi-calculator", name:"Airbnb ROI Calculator", component: AirbnbRoiCalculator }, // no desc
      { slug: "airbnb-seasonality-impact-calculator", name:"Airbnb Seasonality Impact Calculator", description:"Estimate how different seasons affect your Airbnb’s occupancy, pricing, and annual revenue potential." , component: AirbnbSeasonalityImpactCalculator },
      { slug: "airbnb-tax-deduction-calculator", name:"Airbnb Tax Deduction Calculator", description:"Estimate your Airbnb taxable income and potential tax deductions to plan smarter and maximize your profit.", component: AirbnbTaxDeductionCalculator },
    ],
  },
  {
    slug: "hotel-calculators",
    name: "Hotel Calculators",
    calculators: [
      { slug: "hotel-average-daily-rate-calculator", name: "Hotel ADR Calculator", description:"Calculate your hotel's ADR based on total revenue and number of rooms sold." , component: HotelAverageDailyRateCalculator },
      { slug: "hotel-break-even-calculator", name: "Hotel Break Even Calculator", description:"Estimate how many rooms your hotel must sell to cover all fixed and variable costs — and find your break-even occupancy rate.",component: HotelBreakEvenCalculator },
      { slug: "hotel-cancellation-rate-calculator", name: "Hotel Cancellation Rate Calculator",  description:"Calculate your hotel's booking cancellation rate and assess its impact on revenue stability and occupancy forecasting.", component: HotelCancellationRateCalculator },
      { slug: "hotel-cost-per-occupied-room-calculator", name: "Hotel Cost Per Occupied Room Calculator", description:"Calculate your hotel’s Cost Per Occupied Room (CPOR) to manage operational efficiency.", component: HotelCostPerOccupiedRoomCalculator },
      { slug: "hotel-occupancy-rate-calculator", name: "Hotel Occupancy Rate Calculator", description:"Calculate your hotel's occupancy rate to optimize operations and revenue.", component: HotelOccupancyRateCalculator },
      { slug: "hotel-staff-cost-calculator", name: "Hotel Staff Cost Calculator", description:"Estimate your hotel's total monthly and annual staff expenses — including wages, benefits, and payroll overhead.", component: HotelStaffCostCalculator },   
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
      { slug: "late-rent-fee-calculator", name: "Late Rent Fee Calculator", description:"Calculate late rent fees based on your tenant’s rent amount and your fee policy.", component: LateRentFeeCalculator },
      { slug: "maintenance-cost-calculator", name: "Maintenance Cost Calculator", description:"Estimate your property’s annual and monthly maintenance expenses based on its value and a maintenance percentage.", component: MaintenanceCostCalculator  },
      { slug: "prorata-rent-increase-calculator", name: "Prorata Rent Increase Calculator", description:"Calculate the rent amount based on partial occupancy within a month.", component: ProRataRentCalculator },   
      { slug: "rent-increase-calculator", name: "Rent Increase Calculator", description:"Calculate how much to raise your tenant’s rent based on a percentage or fixed increase amount.", component: RentIncreaseCalculator },
      { slug: "security-deposit-interest-calculator", name: "Security Deposit Interest Calculator", description:"Calculate the interest earned on tenant security deposits over time.", component: SecurityDepositInterestCalculator },
    ],
  },
  {
    slug: "mortgage-calculators",
    name: "Mortgage Calculators",
    calculators: [
      { slug: "loan-to-value-calculator", name: "Loan To Value Calculator", description:"Easily calculate your loan-to-value ratio to understand your mortgage risk level and borrowing power.", component: LoanToValueCalculator },   
      { slug: "mortgage-calculator", name: "Mortgage Calculator", description:"Estimate your monthly mortgage payments, total loan costs, and plan your property financing with this free mortgage calculator." , component:  MortgageCalculator},
    ],
  },
  {
    slug: "pricing-calculators",
    name: "Pricing Calculators",
    calculators: [
      { slug: "customer-acquisition-cost-calculator", name: "Customer Acquisition Cost Calculator", description:"Estimate the cost to acquire a new customer based on marketing spend and the number of new customers gained.", component: CustomerAcquisitionCostCalculator },   
      { slug: "customer-lifetime-value-calculator", name: "Customer Lifetime Value Calculator", description:"Estimate the long-term value of your customers based on spending habits, purchase frequency, and retention.", component: CustomerLifetimeValueCalculator },
      { slug: "seasonal-demand-simulator", name: "Seasonal Demand Calculator", description:"Estimate how seasonal variations affect your Airbnb rental income and occupancy.", component: SeasonalDemandSimulator },   
    ],
  },
  {
    slug: "real-estate-calculators",
    name: "Real Estate Calculators",
    calculators: [
      { slug: "break-even-calculator", name: "Break Even Calculator", description:"Estimate how long it will take for your property investment to pay for itself and start generating profit." ,component: BreakEvenCalculator },   
      { slug: "cash-flow-calculator", name: "Cash Flow Calculator", description:"Quickly calculate your rental property's monthly or yearly cashflow and determine if your investment is generating a profit.", component: CashflowCalculator },
      { slug: "gross-rent-multiplier-property-calculator", name: "Gross Rent Multiplier Property Calculator", description:"Quickly evaluate property investment potential by calculating the Gross Rent Multiplier (GRM) based on purchase price and rental income.", component: GrossRentMultiplierCalculator },   
      { slug: "net-operating-income-calculator", name: "Net Operating Income Calculator", description:"Calculate the Net Operating Income (NOI) of your property to assess profitability and investment potential.", component: NetOperatingIncomeCalculator },   
      { slug: "property-appreciation-fee-calculator", name: "Property Appreciation Fee Calculator", description:"Estimate how your property's value could grow over time and forecast your long-term real estate investment returns." , component: PropertyAppreciationCalculator },   
      { slug: "property-management-fee-calculator", name: "Property Management Fee Calculator", description:"Estimate how much you’ll pay in property management costs each month and understand their impact on your rental income.", component: PropertyManagementFeesCalculator },
      { slug: "rental-yield-calculator", name: "Rental Yield Calculator", description:"Quickly estimate your property's rental yield percentage to compare investment opportunities and assess profitability.", component: RentalYieldCalculator },   
    ],
  },
];
