module.exports = {
  reactStrictMode: true,
  experimental: {
    serverComponents: true,
  },
  images: {
    domains: ['cdn.example.com'], // 配置允许的图片域名 
    formats: ['image/avif', 'image/webp'], // 启用现代格式 
  },
  compress: true // 启用 Gzip
};
