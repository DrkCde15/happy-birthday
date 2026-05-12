import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserPagesRepository = repositoryName?.endsWith(".github.io") ?? false;
const githubPagesBase =
  process.env.GITHUB_PAGES === "true" && repositoryName && !isUserPagesRepository
    ? `/${repositoryName}/`
    : "/";
const base = process.env.VITE_BASE_PATH ?? githubPagesBase;

export default defineConfig({
  base,
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
});
