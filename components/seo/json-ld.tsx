import { SITE, SOCIAL_LINKS, SPOTIFY_URL } from "@/lib/constants";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: SITE.shortName,
        url: SITE.url,
        logo: `${SITE.url}/images/logo/sem-logo.png`,
        description: SITE.description,
        email: SITE.email,
        foundingDate: String(SITE.founded),
        foundingLocation: {
          "@type": "Place",
          name: SITE.location,
        },
        sameAs: [
          SPOTIFY_URL,
          ...SOCIAL_LINKS.map((link) => link.href),
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
