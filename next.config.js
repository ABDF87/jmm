/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: ['https://jmmazzoni-site-backend.onrender.com', 'res.cloudinary.com'],
    //     port: '',
    //     pathname: '',
    //   },
    // ],
  },
};

module.exports = nextConfig;
