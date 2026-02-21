import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Multi Jasa Net | Jasa WiFi & IT Support Lhokseumawe",
  description: "Layanan instalasi WiFi, CCTV, dan perbaikan jaringan profesional di Lhokseumawe & Aceh Utara. Hubungi kami untuk solusi IT terbaik.",
  keywords: ["Jasa WiFi Lhokseumawe", "CCTV Aceh Utara", "IT Support Aceh", "Multi Jasa Net"],
  icons: {
    icon: "/icon.svg", // Mengarahkan langsung ke file SVG di folder public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Multi Jasa Net Lhokseumawe dan Aceh Utara",
    "telephone": "+6282167500469",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Line Pipa, Alue Lim, Kec. Blang Mangat",
      "addressLocality": "Lhokseumawe",
      "addressRegion": "Aceh",
      "postalCode": "24355",
      "addressCountry": "ID"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2"
    }
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}