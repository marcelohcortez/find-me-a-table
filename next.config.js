/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    REACT_APP_ROOT_PATH: process.env.REACT_APP_ROOT_PATH
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
