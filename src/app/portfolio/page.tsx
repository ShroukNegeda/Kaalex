import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioShowcaseIntro } from "@/components/portfolio/portfolio-showcase-intro";
import { PortfolioWork } from "@/components/portfolio/portfolio-work";
import { FinalCta } from "@/components/home/final-cta";

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioShowcaseIntro />
      <PortfolioWork />
      <FinalCta />
    </>
  );
}
