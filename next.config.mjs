/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'swansorter.com', 
      'localhost', 
      'api.clickngro.com', 
      'via.placeholder.com',
      'ipapi.co',
      'ipify.org',
      'placekitten.com',
      'swanbackend.onrender.com',
      'res.cloudinary.com'
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    disableStaticImages: false,
  },
};

export default nextConfig;
