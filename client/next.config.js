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
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
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