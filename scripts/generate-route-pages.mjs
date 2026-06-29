import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

const staticRoutes = ["home-estudio", "departamento-compacto"];

const createRoutePages = async () => {
  const indexHtml = await readFile(indexPath, "utf8");

  await Promise.all(
    staticRoutes.map(async (route) => {
      const routeDir = path.join(distDir, route);
      await mkdir(routeDir, { recursive: true });
      await writeFile(path.join(routeDir, "index.html"), indexHtml, "utf8");
    })
  );
};

createRoutePages().catch((error) => {
  console.error("Error creating static route pages:", error);
  process.exit(1);
});
