import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig: NextConfig = {
  output: 'standalone', // 启用 Cloudflare 兼容性
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev']
  /* config options here */
};
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json'
  }
});
export default withNextIntl(nextConfig);

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
