import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const siteUrl = "https://kaalexstudio.com";

const spaceGrotesk = localFont({
  src: [
    { path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2", weight: "600" },
    { path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/inter/files/inter-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const cairo = localFont({
  src: [
    { path: "../../node_modules/@fontsource/cairo/files/cairo-arabic-400-normal.woff2", weight: "400" },
    { path: "../../node_modules/@fontsource/cairo/files/cairo-arabic-500-normal.woff2", weight: "500" },
    { path: "../../node_modules/@fontsource/cairo/files/cairo-arabic-600-normal.woff2", weight: "600" },
    { path: "../../node_modules/@fontsource/cairo/files/cairo-arabic-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "KAALEX | Digital Product Agency & Growth Solutions | KAALEX | تطوير مواقع وتطبيقات وتصميم واجهات المستخدم",
  description:
    "KAALEX turns ideas into scalable digital products. Web & app development, UI/UX design, and digital marketing—all under one roof. Get a free consultation! | تجمع KAALEX بين التكنولوجيا والتصميم والنمو الرقمي لبناء حلول برمجية ومواقع وتطبيقات قابلة للتوسع. احصل على استشارة مجانية اليوم!",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "KAALEX | Digital Product Agency & Growth Solutions | KAALEX | تطوير مواقع وتطبيقات وتصميم واجهات المستخدم",
    description:
      "KAALEX turns ideas into scalable digital products. Web & app development, UI/UX design, and digital marketing—all under one roof. Get a free consultation! | تجمع KAALEX بين التكنولوجيا والتصميم والنمو الرقمي لبناء حلول برمجية ومواقع وتطبيقات قابلة للتوسع. احصل على استشارة مجانية اليوم!",
    url: siteUrl,
    siteName: "KAALEX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://i.pravatar.cc" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://i.pravatar.cc" />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${cairo.variable} antialiased bg-bg text-text`}>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloat />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
