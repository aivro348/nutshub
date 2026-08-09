import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CursorGlow from "@/components/CursorGlow";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  metadataBase: new URL("https://nutshub.online"),
  title: "NutsHub — Premium Dry Fruits & Nuts | Panathur, Bangalore",
  description: "NutsHub is one of the leading dry fruit and nut retailers in Panathur, Bangalore. Handpicked, naturally dried, premium almonds, cashews, pistachios, walnuts, and dates.",
  keywords: "dry fruits, nuts, premium, Bangalore, Panathur, almonds, cashews, walnuts, pistachios, dates, gift boxes",
  verification: {
    google: "3a4AnKGhjpOrKWnt67PaeTDVBtF5Hh8NQTjn4EPzPec",
  },
  icons: {
    icon: [
      { url: "/images/nutshub.jpg", type: "image/jpeg" },
      { url: "/favicon.ico" }
    ],
    shortcut: "/images/nutshub.jpg",
    apple: "/images/nutshub.jpg",
  },
  openGraph: {
    title: "NutsHub — Premium Dry Fruits & Nuts | Panathur, Bangalore",
    description: "NutsHub is one of the leading dry fruit and nut retailers in Panathur, Bangalore. Handpicked, naturally dried, premium almonds, cashews, pistachios, walnuts, and dates.",
    url: "https://nutshub.online",
    siteName: "NutsHub",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "NutsHub Premium Dry Fruits and Nuts",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NutsHub — Premium Dry Fruits & Nuts | Panathur, Bangalore",
    description: "NutsHub is one of the leading dry fruit and nut retailers in Panathur, Bangalore.",
    images: ["/images/hero.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="3a4AnKGhjpOrKWnt67PaeTDVBtF5Hh8NQTjn4EPzPec" />
        <link rel="icon" href="/images/nutshub.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/nutshub.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "NutsHub",
              "url": "https://nutshub.online",
              "logo": "https://nutshub.online/images/hero.png",
              "location": [
                {
                  "@type": "Store",
                  "name": "NutsHub — Koramangala Branch",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "36/1, 1st Main Rd, below Seva In Action, S.T. Bed, 4th Block, Koramangala",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560034",
                    "addressCountry": "IN"
                  }
                },
                {
                  "@type": "Store",
                  "name": "NutsHub — Panathur Branch",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Vaswani Reserve 84/2, Panathur Main Road, Kadubeesanahalli",
                    "addressLocality": "Bengaluru",
                    "addressRegion": "Karnataka",
                    "postalCode": "560103",
                    "addressCountry": "IN"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <LoadingScreen />
        <CursorGlow />
        <Navbar />
        <div style={{ flex: "1 0 auto" }}>
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
