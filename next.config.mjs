/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dqzjdfqqlvtlkklfofsv.supabase.co', // Check your Supabase URL
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};


export default nextConfig;
