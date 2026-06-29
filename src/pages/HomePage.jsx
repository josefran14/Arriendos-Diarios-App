import { useMemo } from "react";
import { DepartmentsSection } from "../components/DepartmentsSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { JsonLd } from "../components/JsonLd";
import { useSeo } from "../hooks/useSeo";
import { HOME_SEO } from "../utils/seo";
import { getHomeJsonLd } from "../utils/seoSchemas";

export const HomePage = () => {
  useSeo(HOME_SEO);
  const jsonLd = useMemo(() => getHomeJsonLd(), []);

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <Info />
      <DepartmentsSection />
      <Footer />
    </>
  );
};
