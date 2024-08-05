// module.exports = {
//     images: {
//       domains: ['*'],
//     },
//   }


module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: ''
      },
    ],
  },
}