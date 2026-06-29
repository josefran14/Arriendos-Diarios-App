import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DepartmentPage } from "../pages/DepartmentPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/home-estudio"
        element={<DepartmentPage slug="home-estudio" />}
      />
      <Route
        path="/departamento-compacto"
        element={<DepartmentPage slug="departamento-compacto" />}
      />
    </Routes>
  );
};
