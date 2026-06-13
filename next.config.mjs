/** @type {import('next').NextConfig} */
const nextConfig = {
  // The original pages drive the carousel / modal via imperative DOM scripts
  // re-run in useEffect; disable double-invoke so intervals aren't duplicated.
  reactStrictMode: false,
};

export default nextConfig;
