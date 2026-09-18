import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { ServicesShowcase } from "@/components/home/services-showcase";
import en from "@/lib/dictionaries/en";

const NotSureCta = dynamic(
  () => import("@/components/home/not-sure-cta").then((mod) => mod.NotSureCta),
  {
    loading: () => <div className="h-40 border-b border-border bg-bg" aria-hidden="true" />,
  }
);

const Partner = dynamic(() => import("@/components/home/partner").then((mod) => mod.Partner), {
  loading: () => <div className="h-72 border-b border-border bg-bg" aria-hidden="true" />,
});

const Process = dynamic(() => import("@/components/home/process").then((mod) => mod.Process), {
  loading: () => <div className="h-64 border-b border-border bg-bg" aria-hidden="true" />,
});

const TeamSection = dynamic(
  () => import("@/components/home/team-section").then((mod) => mod.TeamSection),
  {
    loading: () => <div className="h-80 border-b border-border bg-bg" aria-hidden="true" />,
  }
);

const Explorations = dynamic(
  () => import("@/components/home/explorations").then((mod) => mod.Explorations),
  {
    loading: () => <div className="h-64 border-b border-border bg-bg" aria-hidden="true" />,
  }
);

const Faq = dynamic(() => import("@/components/home/faq").then((mod) => mod.Faq), {
  loading: () => <div className="h-80 border-b border-border bg-bg" aria-hidden="true" />,
});

const FinalCta = dynamic(
  () => import("@/components/home/final-cta").then((mod) => mod.FinalCta),
  {
    loading: () => <div className="h-56 border-b border-border bg-bg" aria-hidden="true" />,
  }
);

const siteUrl = "https://kaalexstudio.com";

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "KAALEX",
      url: siteUrl,
      description:
        "Technology and digital growth company helping businesses turn ideas into scalable digital products.",
      inLanguage: "en",
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      name: "KAALEX",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
      description:
        "KAALEX combines technology, design, and digital growth to build scalable solutions end to end under one team.",
      email: "hello@kaalexstudio.com",
      telephone: "+966000000000",
      areaServed: "Worldwide",
      sameAs: [],
      address: {
        "@type": "PostalAddress",
        addressCountry: "SA",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: en.home.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
    ...en.home.services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.name,
      serviceType: service.name,
      description: service.desc,
      provider: {
        "@type": "Organization",
        name: "KAALEX",
      },
    })),
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Hero />
      <ServicesShowcase />
      <NotSureCta />
      <Partner />
      <Process />
      <Explorations />
      <TeamSection />
      <Faq />
      <FinalCta />
    </>
  );
}
