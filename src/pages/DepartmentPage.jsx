import { useMemo } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DepartmentDetail } from "../components/DepartmentDetail";
import { JsonLd } from "../components/JsonLd";
import { getDepartmentBySlug } from "../data/departments";
import { useSeo } from "../hooks/useSeo";
import { HOME_SEO } from "../utils/seo";
import { getDepartmentJsonLd } from "../utils/seoSchemas";

export const DepartmentPage = ({ slug }) => {
  const department = getDepartmentBySlug(slug);

  useSeo(
    department
      ? {
          title: department.seo.title,
          description: department.seo.description,
          path: `/${department.slug}`,
          image: department.seo.image,
        }
      : HOME_SEO
  );

  const jsonLd = useMemo(
    () => (department ? getDepartmentJsonLd(department) : null),
    [department]
  );

  if (!department) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <DepartmentDetail department={department} />
      <Footer />
    </>
  );
};
