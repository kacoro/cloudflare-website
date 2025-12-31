import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT_STANDALONE === 'true' ? "standalone" : undefined, // 启用 Cloudflare 兼容性
  
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev,*.areaflysolar.com"],
  images: {
    loader: "custom",
    loaderFile: './image-loader.ts',
    // formats: ["image/webp"], // 强制转WebP/AVIF
    // deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    // imageSizes: [64, 128, 256, 375, 512, 1024],
  },
  
  // 静态资源缓存配置
  // async headers() {
  //   return [
  //     // 本地图片资源缓存配置
  //     {
  //       source: '/images/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable', // 1年缓存
  //         },
  //         {
  //           key: 'Expires',
  //           value: new Date(Date.now() + 31536000000).toUTCString(), // 1年后过期
  //         }
  //       ],
  //     },
  //     // Next.js 图像优化API缓存
  //     {
  //       source: '/_next/image(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable', // 1年缓存
  //         },
  //         {
  //           key: 'Expires',
  //           value: new Date(Date.now() + 31536000000).toUTCString(),
  //         }
  //       ],
  //     },
  //     // 其他静态资源缓存
  //     {
  //       source: '/_next/static/:path*',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         }
  //       ],
  //     }
  //   ];
  // },
  /* config options here */
};
const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: "./messages/en.json",
  },
});
export default withNextIntl(nextConfig);

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
 import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
 initOpenNextCloudflareForDev();
