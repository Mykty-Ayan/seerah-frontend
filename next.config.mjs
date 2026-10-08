/** @type {import('next').NextConfig} */
const nextConfig = {
  // The container image runs the self-contained server from .next/standalone. Other builds (Coolify's
  // Nixpacks, `next start`) keep the default output until the move to Kubernetes is finished.
  output: process.env.NEXT_OUTPUT === "standalone" ? "standalone" : undefined,
};

export default nextConfig;
