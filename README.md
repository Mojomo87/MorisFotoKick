# MorisFotoKick
MorisFotoDeluxeCreator
{
  "name": "moris-foto-kick",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "axios": "1.6.0"
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
node_modules/
.next/
out/
.env.local
.env
*.log
.DS_Store
dist/

