import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import CompetitiveAdvantage from "@/components/CompetitiveAdvantage";
import MarketOpportunity from "@/components/MarketOpportunity";
import BusinessModel from "@/components/BusinessModel";
import TractionMetrics from "@/components/TractionMetrics";
import MarketingStrategy from "@/components/MarketingStrategy";
import Financials from "@/components/Financials";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import FundingAsk from "@/components/FundingAsk";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <div id="solution">
        <Solution />
      </div>
      <CompetitiveAdvantage />
      <div id="market">
        <MarketOpportunity />
      </div>
      <BusinessModel />
      <div id="traction">
        <TractionMetrics />
      </div>
      <MarketingStrategy />
      <div id="financials">
        <Financials />
      </div>
      <Team />
      <Vision />
      <div id="funding">
        <FundingAsk />
      </div>
    </div>
  );
};

export default Index;
