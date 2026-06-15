import { SITE_URL, BUSINESS } from "./config";
import HomeClient from "./HomeClient";

const TITLE = "Mt Evelyn Pizza & Pasta | Open for Lunch Thu–Sat";
const DESC =
  "Fresh wood-style pizza, hearty pasta & a lounge bar in Mt Evelyn. Now open for lunch Thu–Sat. Dine in, takeaway or delivery. Call (03) 9736 3855.";

export const metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "pizza near me",
    "pizza delivery near me",
    "$9.90 lunch deal",
    "pizza and coke deal",
    "cheap pizza near me",
    "pasta near me",
    "takeaway pizza",
    "family pizza deal",
    "pizza pasta and bar",
    "gluten free pizza",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: DESC,
    images: ["/images/banner-1.jpg"],
  },
  twitter: { title: TITLE, description: DESC, images: ["/images/banner-1.jpg"] },
};

// Restaurant structured data — surfaces hours, address, phone and menu to search
// engines (rich results / local pack). Hours mirror the on-page Hours section.
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS.name,
  image: `${SITE_URL}/images/banner-1.jpg`,
  url: SITE_URL,
  telephone: BUSINESS.phoneE164,
  priceRange: "$$",
  servesCuisine: ["Pizza", "Pasta", "Italian"],
  menu: `${SITE_URL}/menu`,
  acceptsReservations: "False",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Sunday"],
      opens: "16:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "12:00",
      closes: "21:00",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
