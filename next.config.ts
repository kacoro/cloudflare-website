import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone", // 启用 Cloudflare 兼容性
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp"], // 强制转WebP/AVIF
    deviceSizes: [640, 750, 828, 1080, 1920], // 必须配置尺寸，否则Image Optimizer不启动
    imageSizes: [64, 128, 256, 384],
    unoptimized: false,
    
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

export default nextConfig;


