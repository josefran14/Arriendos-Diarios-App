export const SITE_URL = "https://arriendos-diarios.cl";
export const SITE_NAME = "Arriendos Diarios Glady's.C";

export const BUSINESS = {
  name: SITE_NAME,
  phone: "+56983311056",
  email: "marialecepeda18@gmail.com",
  streetAddress: "Zenteno 138",
  locality: "Santiago",
  region: "Región Metropolitana",
  country: "CL",
  latitude: -33.451276,
  longitude: -70.649028,
};

export const HOME_SEO = {
  title:
    "Arriendo Diario Santiago Centro | Departamentos Amoblados cerca Metro U. de Chile",
  description:
    "Arriendo diario de departamentos amoblados en Zenteno 138, Santiago Centro. A 2 cuadras del Metro Universidad de Chile. Opciones para 2 a 5 personas. Reserva por WhatsApp.",
  path: "/",
  image: "/og-image.jpeg",
};

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export const applySeo = ({ title, description, path, image }) => {
  const url = `${SITE_URL}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  document.title = title;

  upsertMeta('meta[name="description"]', {
    name: "description",
    content: description,
  });

  upsertLink("canonical", url);

  upsertMeta('meta[property="og:title"]', {
    property: "og:title",
    content: title,
  });
  upsertMeta('meta[property="og:description"]', {
    property: "og:description",
    content: description,
  });
  upsertMeta('meta[property="og:url"]', {
    property: "og:url",
    content: url,
  });
  upsertMeta('meta[property="og:image"]', {
    property: "og:image",
    content: imageUrl,
  });
  upsertMeta('meta[property="og:type"]', {
    property: "og:type",
    content: "website",
  });
  upsertMeta('meta[property="og:locale"]', {
    property: "og:locale",
    content: "es_CL",
  });
  upsertMeta('meta[property="og:site_name"]', {
    property: "og:site_name",
    content: SITE_NAME,
  });

  upsertMeta('meta[name="twitter:card"]', {
    name: "twitter:card",
    content: "summary_large_image",
  });
  upsertMeta('meta[name="twitter:title"]', {
    name: "twitter:title",
    content: title,
  });
  upsertMeta('meta[name="twitter:description"]', {
    name: "twitter:description",
    content: description,
  });
  upsertMeta('meta[name="twitter:image"]', {
    name: "twitter:image",
    content: imageUrl,
  });
};

export const getAddressSchema = () => ({
  "@type": "PostalAddress",
  streetAddress: BUSINESS.streetAddress,
  addressLocality: BUSINESS.locality,
  addressRegion: BUSINESS.region,
  addressCountry: BUSINESS.country,
});

export const getGeoSchema = () => ({
  "@type": "GeoCoordinates",
  latitude: BUSINESS.latitude,
  longitude: BUSINESS.longitude,
});
