import { OFFICE_INFO } from "./data";

export function getLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: OFFICE_INFO.name,
    description:
      "Advocacia especializada em Direito do Trabalho, Direito de Família e Consultoria Jurídica em Colombo, Curitiba e todo o Paraná. Atendimento presencial e online seguro.",
    url: "https://odairsiqueira.pages.dev",
    telephone: "+5541996445164",
    priceRange: "$$$",
    image: "https://odairsiqueira.pages.dev/og-image_optimized_300.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Paraíba - Atuba",
      addressLocality: "Colombo",
      addressRegion: "PR",
      postalCode: "83404-300",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.linkedinUrl,
      OFFICE_INFO.facebookUrl,
    ],
  };
}