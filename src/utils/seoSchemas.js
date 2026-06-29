import {
  BUSINESS,
  HOME_SEO,
  SITE_NAME,
  SITE_URL,
  getAddressSchema,
  getGeoSchema,
} from "../utils/seo";
import { departments } from "../data/departments";

export const getHomeJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": `${SITE_URL}/#negocio`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}${HOME_SEO.image}`,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      description: HOME_SEO.description,
      priceRange: "$$",
      address: getAddressSchema(),
      geo: getGeoSchema(),
      areaServed: "Santiago Centro, Chile",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
        {
          "@type": "LocationFeatureSpecification",
          name: "Cocina equipada",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Calefacción",
          value: true,
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Departamentos en arriendo diario",
        itemListElement: departments.map((department) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Apartment",
            name: department.seo.title,
            url: `${SITE_URL}/${department.slug}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-CL",
    },
  ],
});

export const getDepartmentJsonLd = (department) => {
  const pageUrl = `${SITE_URL}/${department.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Apartment",
        "@id": `${pageUrl}#apartamento`,
        name: department.seo.title,
        description: department.seo.description,
        url: pageUrl,
        image: `${SITE_URL}${department.seo.image}`,
        numberOfBedrooms: 1,
        numberOfBathroomsTotal: 1,
        address: getAddressSchema(),
        geo: getGeoSchema(),
        occupancy: {
          "@type": "QuantitativeValue",
          minValue: department.seo.occupancyMin,
          maxValue: department.seo.occupancyMax,
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: department.seo.priceMin,
          highPrice: department.seo.priceMax,
          priceCurrency: "CLP",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: department.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
};
