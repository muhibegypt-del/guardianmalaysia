import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guardian Malaysia — Free Youth Jiu Jitsu Scholarships",
  description:
    "Guardian Malaysia provides free jiu jitsu scholarships to underserved youth, building confidence, discipline, and community through martial arts. Part of the global Guardian network.",
  keywords: [
    "Guardian Malaysia",
    "jiu jitsu",
    "youth scholarships",
    "martial arts",
    "non-profit",
    "underserved youth",
    "BJJ",
    "Malaysia",
  ],
  openGraph: {
    title: "Guardian Malaysia — Free Youth Jiu Jitsu Scholarships",
    description:
      "Providing free jiu jitsu scholarships to underserved youth across Malaysia. Donate today to change a life.",
    url: "https://givebutter.com/guardianmalaysia",
    siteName: "Guardian Malaysia",
    locale: "en_US",
    type: "website",
    /* REPLACE: Add OG image path once available */
    // images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian Malaysia — Free Youth Jiu Jitsu Scholarships",
    description:
      "Providing free jiu jitsu scholarships to underserved youth across Malaysia.",
    /* REPLACE: Add Twitter image path once available */
    // images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-guardian-black font-sans text-white antialiased page-load">
        {children}
      </body>
    </html>
  );
}
