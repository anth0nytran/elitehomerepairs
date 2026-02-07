import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = Barlow({
  variable: "--font-app-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const displayFont = Barlow_Condensed({
  variable: "--font-app-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-app-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elitehomerepairs.com'), // Placeholder URL, user didn't provide one
  title: "Elite Home Repairs | Kingwood & Houston Home Remodeling | (713) 283-8138",
  description: "Premier home repair and remodeling in Kingwood, Humble, and The Woodlands. Specializing in siding, roofing, painting, and window installation. Free estimates!",
  keywords: ["Home Repairs Kingwood", "Siding Installation", "Roofing Contractor", "Painting Services", "Window Replacement", "Elite Home Repairs", "Houston Home Remodeling"],
  openGraph: {
    title: "Elite Home Repairs | Expert Siding, Roofing & Painting",
    description: "Premium quality home repairs and remodeling in Houston. Siding, roofing, painting, and windows done right. Call Jose Castillo today.",
    url: 'https://www.elitehomerepairs.com',
    siteName: 'Elite Home Repairs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.png', // Keeping existing image path as placeholder or if generic
        width: 1200,
        height: 630,
        alt: 'Elite Home Repairs - Premium Craftsmanship',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elite Home Repairs | Kingwood's Trusted Contractor",
    description: "Expert siding, roofing, painting, and window services in Kingwood & Houston. Licensed & Insured.",
    images: ['/images/hero-bg.png'],
  },
  icons: {
    icon: '/elitelogo-transparent.png',
    shortcut: '/elitelogo-transparent.png',
    apple: '/elitelogo-transparent.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gscVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Elite Home Repairs",
              "image": "https://www.elitehomerepairs.com/images/hero-bg.png",
              "@id": "https://www.elitehomerepairs.com",
              "url": "https://www.elitehomerepairs.com",
              "telephone": "+17132838138",
              "description": "Premium home repair services in Kingwood and Houston. Siding, roofing, painting, windows.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4102 Valley Haven Dr",
                "addressLocality": "Kingwood",
                "addressRegion": "TX",
                "postalCode": "77339",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.0166, // Kingwood coords
                "longitude": -95.1803
              },
              "areaServed": [
                { "@type": "City", "name": "Kingwood" },
                { "@type": "City", "name": "Humble" },
                { "@type": "City", "name": "The Woodlands" },
                { "@type": "City", "name": "Houston" },
                { "@type": "City", "name": "Spring" },
                { "@type": "City", "name": "Atascocita" }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "07:00",
                "closes": "20:00"
              },
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Repair Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing Services" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Painting" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window Replacement" } }
                ]
              }
            })
          }}
        />
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        ) : null}
        {gscVerification ? (
          <meta name="google-site-verification" content={gscVerification} />
        ) : null}
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
