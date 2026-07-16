import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Empêche Turbopack de prendre C:\Users\Ben Djibril\package-lock.json
  // comme racine du workspace (d'où le 404 + ENOENT sur /app).
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
