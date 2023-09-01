/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // i18n:{
  //   locales: ['fa_IR','en-US'],
  //   defaultLocale: "fa_IR"
  // }
  images: {
    domains: ["127.0.0.1"],

    formats: ["image/webp"],
  },
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
