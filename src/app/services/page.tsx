import type { Metadata } from "next";
import { EmptyPage } from "@/components/shared/empty-page";

export const metadata: Metadata = {
  title:
    "Custom Software, Design & Digital Growth Services | KAALEX | حلول البرمجة والتصميم والنمو الرقمي — KAALEX",
  description:
    "Explore KAALEX services: web & app development, UI/UX design, and digital growth strategies tailored to scale your business. Get a free consultation! | استكشف خدمات KAALEX: تطوير المواقع والتطبيقات، تصميم واجهات المستخدم، واستراتيجيات النمو الرقمي المصممة لتوسيع أعمالك. احصل على استشارة مجانية!",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title:
      "Custom Software, Design & Digital Growth Services | KAALEX | حلول البرمجة والتصميم والنمو الرقمي — KAALEX",
    description:
      "Explore KAALEX services: web & app development, UI/UX design, and digital growth strategies tailored to scale your business. Get a free consultation! | استكشف خدمات KAALEX: تطوير المواقع والتطبيقات، تصميم واجهات المستخدم، واستراتيجيات النمو الرقمي المصممة لتوسيع أعمالك. احصل على استشارة مجانية!",
    url: "https://kaalexstudio.com/services",
    siteName: "KAALEX",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <EmptyPage
      title="Services"
      desc="Custom software, design, and digital growth solutions built to help your business scale."
    />
  );
}
