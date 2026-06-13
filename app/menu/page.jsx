import { SITE_URL } from "../config";
import MenuClient from "./MenuClient";

const TITLE = "Menu — Mt Evelyn Pizza & Pasta | Pizza, Pasta & Deals";
const DESC =
  "Browse our full menu: traditional & gourmet pizza from $11, pasta, parmas, mains, sides & drinks. $9.90 lunch deal Thu–Sat. Dine in, takeaway or delivery.";

export const metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/menu" },
  openGraph: {
    type: "website",
    url: "/menu",
    title: TITLE,
    description: DESC,
    images: ["/images/banner-1.jpg"],
  },
  twitter: { title: TITLE, description: DESC, images: ["/images/banner-1.jpg"] },
};

// Breadcrumb structured data: Home › Menu
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Menu", item: `${SITE_URL}/menu` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MenuClient />
    </>
  );
}
