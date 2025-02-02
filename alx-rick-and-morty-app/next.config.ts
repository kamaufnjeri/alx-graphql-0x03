import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  // your existing Next.js configuration here, for example:
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  org: "none-vzv",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});

