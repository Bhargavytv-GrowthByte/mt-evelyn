import { SITE_URL, BUSINESS } from "./config";

const DEFAULT_TITLE = "Mt Evelyn Pizza & Pasta | Open for Lunch Thu–Sat";
const DEFAULT_DESC =
  "Fresh wood-style pizza, hearty pasta & a lounge bar in Mt Evelyn. Now open for lunch Thu–Sat. Dine in, takeaway or delivery. Call (03) 9736 3855.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESC,
  applicationName: BUSINESS.name,
  keywords: [
    "Mt Evelyn pizza",
    "pizza Mt Evelyn",
    "pasta Mt Evelyn",
    "lunch deal",
    "pizza delivery Mt Evelyn",
    "Mt Evelyn restaurant",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    locale: "en_AU",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: [
      {
        url: "/images/banner-1.jpg",
        alt: "Mt Evelyn Pizza & Pasta — $9.90 lunch deal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ["/images/banner-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;600;700&family=Barlow:wght@300;400;500;600&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
