// module.exports = {
//     images: {
//       domains: ['*'],
//     },
//   }


// export const images = {
//   remotePatterns: [
//     {
//       protocol: 'https',
//       hostname: '*',
//       port: ''
//     },
//   ],
// };


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'slowsleeprecords-server.vercel.app',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '*',
        port: ''
      },
    ],
  },
};

export default nextConfig;