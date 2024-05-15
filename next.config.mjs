/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          'upload.wikimedia.org',
          'en.wikipedia.org', 
          'i0.wp.com',
          'c.ndtvimg.com',
          'i.ytimg.com',// Add any other domains you need to allow
        ],
      },
};

export default nextConfig;
