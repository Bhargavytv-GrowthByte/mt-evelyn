// Canonical production URL. Override per-environment with NEXT_PUBLIC_SITE_URL
// (e.g. the Vercel preview URL) without touching code.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mtevelynpizzas.com.au"
).replace(/\/$/, "");

export const BUSINESS = {
  name: "Mt Evelyn Pizza & Pasta",
  phoneDisplay: "(03) 9736 3855",
  phoneE164: "+61397363855",
  streetAddress: "11A York Road",
  addressLocality: "Mt Evelyn",
  addressRegion: "VIC",
  postalCode: "3796",
  addressCountry: "AU",
};
