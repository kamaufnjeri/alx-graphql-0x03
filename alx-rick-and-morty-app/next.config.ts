import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  reactStrictMode: true,
  swcMinify: true,
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppress logs during build
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);
