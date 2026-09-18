import type { Metadata } from "next";
import { EmptyPage } from "@/components/shared/empty-page";

export const metadata: Metadata = {
  title:
    "KAALEX Portfolio | Custom Web, App & UI/UX Projects | KAALEX | معرض أعمال البرمجة والتصميم والتسويق",
  description:
    "Explore KAALEX's portfolio of web applications, mobile apps, UI/UX designs, and digital growth campaigns. See how we turn ideas into scalable products! | استكشف معرض أعمال KAALEX من مواقع وتطبيقات وتصاميم واجهات المستخدم وحملات النمو الرقمي. شاهد كيف نحول الأفكار إلى منتجات ناجحة!",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title:
      "KAALEX Portfolio | Custom Web, App & UI/UX Projects | KAALEX | معرض أعمال البرمجة والتصميم والتسويق",
    description:
      "Explore KAALEX's portfolio of web applications, mobile apps, UI/UX designs, and digital growth campaigns. See how we turn ideas into scalable products! | استكشف معرض أعمال KAALEX من مواقع وتطبيقات وتصاميم واجهات المستخدم وحملات النمو الرقمي. شاهد كيف نحول الأفكار إلى منتجات ناجحة!",
    url: "https://kaalexstudio.com/portfolio",
    siteName: "KAALEX",
    type: "website",
  },
};

export default function PortfolioPage() {
  return (
    <EmptyPage
      title="Portfolio"
      desc="A showcase of digital products, standout UI/UX work, and growth-focused marketing campaigns."
    />
  );
}
