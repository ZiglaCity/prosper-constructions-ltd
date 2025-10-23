import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@@/components/Navbar";
import Footer from "@@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prosperconstructions.com"),
  title: {
    default: "Prosper Constructions Limited",
    template: "%s | Prosper Constructions Limited",
  },
  description:
    "Prosper Constructions Limited — Building Ghana’s Future through excellence in construction.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // TODO: include the logo and a representative image
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ConstructionCompany", "LocalBusiness"],
    name: "Prosper Constructions Limited",
    url: "https://prosperconstructions.com",
    logo: "https://prosperconstructions.com/logo.png",
    image: "https://prosperconstructions.com/office-building.jpg",
    description:
      "Prosper Constructions Limited is a Ghanaian-based construction company offering residential, commercial, and infrastructure building solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "15 Spintex Road",
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      postalCode: "GA-123-4567",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.6215,
      longitude: -0.1508,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+233-24-407-4435",
      contactType: "Customer Service",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://facebook.com/prosperconstructionsgh",
      "https://instagram.com/prosperconstructionsgh",
      "https://linkedin.com/company/prosperconstructions",
      "https://maps.google.com/?q=Prosper+Constructions+Limited+Accra",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Construction",
          description:
            "High-quality building and renovation for homes and apartments across Ghana.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Construction",
          description:
            "Corporate, retail, and mixed-use development projects built to modern standards.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Infrastructure Development",
          description:
            "Roads, bridges, and civil works that strengthen Ghana’s infrastructure network.",
        },
      },
    ],
  };
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
