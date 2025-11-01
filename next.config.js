/** @type {import('next').NextConfig} */
const nextConfig = {
  // 画像最適化
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  
  // パフォーマンス最適化
  compress: true,
  poweredByHeader: false,
  
  // 環境変数
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;
