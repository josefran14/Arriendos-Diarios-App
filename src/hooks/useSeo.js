import { useEffect } from "react";
import { applySeo } from "../utils/seo";

export const useSeo = ({ title, description, path, image }) => {
  useEffect(() => {
    applySeo({ title, description, path, image });
  }, [title, description, path, image]);
};
