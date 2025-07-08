/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // for static export
  trailingSlash: true,        // optional
  basePath: '/Portfolio',     // if deploying to a subpath (e.g., GitHub Pages)
  images: {
    unoptimized: true,        // required for static export with <Image />
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
