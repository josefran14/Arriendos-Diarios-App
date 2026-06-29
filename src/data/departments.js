import entrada from "../assets/images/entrada.jpeg";
import foto1 from "../assets/images/habitacion/habitacion1.jpeg";
import foto2 from "../assets/images/habitacion/habitacion2.jpeg";
import foto4 from "../assets/images/habitacion/habitacion3.jpeg";
import foto5 from "../assets/images/living/living.jpeg";
import foto6 from "../assets/images/living/living2.jpeg";
import foto7 from "../assets/images/living/living3.jpeg";
import foto8 from "../assets/images/living/living4.jpeg";
import foto9 from "../assets/images/living/living5.jpeg";
import foto10 from "../assets/images/living/living6.jpeg";
import foto11 from "../assets/images/cocina/cocina1.jpeg";
import foto12 from "../assets/images/cocina/cocina2.jpeg";
import foto13 from "../assets/images/baño/baño.jpeg";
import foto14 from "../assets/images/baño/tina.jpeg";

import hab1 from "../assets/images/habitacion/habitacion-1.jpeg";
import hab2 from "../assets/images/habitacion/habitacion-2.jpeg";
import segundaCama from "../assets/images/living/segunda-cama.jpeg";
import comedor1 from "../assets/images/cocina/comedor-1.jpeg";
import comedor2 from "../assets/images/cocina/comedor-2.jpeg";
import bano1 from "../assets/images/baño/baño-1.jpeg";
import bano2 from "../assets/images/baño/baño-2.jpeg";

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5797659611734!2d-70.64902802348303!3d-33.45127589733443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a7c8264f59%3A0x73ae2d5d2ef251f1!2sZenteno%20138%2C%208340309%20Santiago%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sar!4v1718655930200!5m2!1ses-419!2sar";

const LOCATION_BASE =
  "Departamento amoblado ubicado en Zenteno 138, en el corazón de Santiago Centro. A solo 2 cuadras del metro Universidad de Chile, rodeado de supermercados, farmacias, cafeterías y una variada oferta gastronómica. Muy cercano a universidades, centros culturales y con excelente conectividad.";

export const departments = [
  {
    id: "departamento-1",
    slug: "home-estudio",
    title: "Departamento Espacioso",
    subtitle: "Ideal para familias o grupos de amigos",
    priceLabel: "$30.000 – $55.000 por noche",
    priceDetail: "Precio según número de huéspedes",
    capacity: "Hasta 5 personas",
    coverImage: foto1,
    images: [
      entrada,
      foto1,
      foto2,
      foto4,
      foto5,
      foto6,
      foto7,
      foto8,
      foto9,
      foto10,
      foto11,
      foto12,
      foto13,
      foto14,
    ],
    features: [
      { icon: "furnished", label: "Departamento amoblado" },
      { icon: "bathroom", label: "1 Baño" },
      { icon: "bedroom", label: "1 Habitación" },
      { icon: "bed", label: "2 Camas" },
    ],
    highlights: [
      "1 Baño completo",
      "Habitación principal",
      "2 camas",
      "Ideal para hasta 5 personas",
    ],
    description: `${LOCATION_BASE} Espacioso y cómodo, perfecto para familias o grupos de amigos que buscan una estadía amplia en el centro de Santiago.`,
    mapEmbed: MAP_EMBED,
    seo: {
      title:
        "Arriendo Diario Departamento 5 Personas Santiago Centro | Zenteno 138",
      description:
        "Departamento amoblado en arriendo diario para hasta 5 personas en Zenteno 138, Santiago Centro. Cerca del Metro Universidad de Chile. Desde $30.000 por noche.",
      image: "/departamento-espacioso.jpeg",
      priceMin: 30000,
      priceMax: 55000,
      occupancyMin: 1,
      occupancyMax: 5,
    },
  },
  {
    id: "departamento-2",
    slug: "departamento-compacto",
    title: "Departamento Acogedor",
    subtitle: "Perfecto para parejas o grupos pequeños",
    priceLabel: "$35.000 – $40.000 por noche",
    priceDetail: "$35.000 para 2 personas · $40.000 para 3 personas",
    capacity: "2 a 3 personas",
    coverImage: hab2,
    images: [hab2, hab1, segundaCama, comedor1, comedor2, bano1, bano2],
    features: [
      { icon: "furnished", label: "Departamento amoblado" },
      { icon: "bathroom", label: "1 Baño" },
      { icon: "bedroom", label: "1 Habitación" },
      { icon: "bed", label: "Cama matrimonial + plaza y media" },
    ],
    highlights: [
      "1 habitación con cama matrimonial",
      "Cama plaza y media en el living",
      "1 baño completo",
      "Ideal para 2 a 3 personas",
    ],
    description: `${LOCATION_BASE} Cómodo y acogedor con 1 habitación con cama matrimonial y una cama de plaza y media en el living. Perfecto para 2 a 3 personas que buscan una estadía práctica y bien ubicada.`,
    mapEmbed: MAP_EMBED,
    seo: {
      title:
        "Arriendo Diario 2-3 Personas Santiago Centro | Departamento Amoblado",
      description:
        "Departamento amoblado en arriendo diario para 2 a 3 personas en Zenteno 138, Santiago Centro. Cama matrimonial y plaza y media. Desde $35.000 por noche.",
      image: "/departamento-acogedor.jpeg",
      priceMin: 35000,
      priceMax: 40000,
      occupancyMin: 2,
      occupancyMax: 3,
    },
  },
];

export const getDepartmentBySlug = (slug) =>
  departments.find((d) => d.slug === slug);
