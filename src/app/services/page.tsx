import { ServicesHero } from "@/components/services/services-hero";
import { ServicesCapabilities } from "@/components/services/services-capabilities";
import { ServicesGoalGuide } from "@/components/services/services-goal-guide";
import { Process } from "@/components/home/process";
import { Positioning } from "@/components/about/positioning";
import { VisionMission } from "@/components/about/vision-mission";
import { Partner } from "@/components/home/partner";
import { Faq } from "@/components/home/faq";
import { FinalCta } from "@/components/home/final-cta";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesCapabilities />
      <ServicesGoalGuide />
      <Process />
      <Positioning />
      <VisionMission />
      <Partner />
      <Faq />
      <FinalCta />
    </>
  );
}
