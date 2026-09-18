import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { WhoWeAre } from "@/components/about/who-we-are";
import { AboutProcess } from "@/components/about/about-process";
import { Positioning } from "@/components/about/positioning";
import { VisionMission } from "@/components/about/vision-mission";
import { Values } from "@/components/about/values";
import { AboutTeam } from "@/components/about/about-team";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title:
    "About KAALEX | Technology & Digital Growth Company | تعرف على KAALEX | نبتكر ونبني حلولاً رقمية قابلة للنمو",
  description:
    "Learn about KAALEX. We combine technology, UI/UX design, and digital growth to turn business ideas into scalable digital products. Get a free consultation! | اكتشف رؤية KAALEX في تمكين الشركات. نقدم حلولاً برمجية وتصاميم مبتكرة وخبرات تسويقية متكاملة لمساعدتك على النجاح والتوسع. ابدأ مشروعك اليوم!",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title:
      "About KAALEX | Technology & Digital Growth Company | تعرف على KAALEX | نبتكر ونبني حلولاً رقمية قابلة للنمو",
    description:
      "Learn about KAALEX. We combine technology, UI/UX design, and digital growth to turn business ideas into scalable digital products. Get a free consultation! | اكتشف رؤية KAALEX في تمكين الشركات. نقدم حلولاً برمجية وتصاميم مبتكرة وخبرات تسويقية متكاملة لمساعدتك على النجاح والتوسع. ابدأ مشروعك اليوم!",
    url: "https://kaalexstudio.com/about",
    siteName: "KAALEX",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <AboutProcess />
      <Positioning />
      <VisionMission />
      <Values />
      <AboutTeam />
      <FinalCta />
    </>
  );
}
