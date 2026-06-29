import { useEffect, useMemo } from "react";

export const JsonLd = ({ data }) => {
  const json = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = json;
    script.dataset.seoJsonLd = "true";
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [json]);

  return null;
};
