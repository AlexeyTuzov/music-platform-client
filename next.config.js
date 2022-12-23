/** @type {import('next').NextConfig} */
import * as path from 'path';

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [ path.join(__dirname, 'styles') ]
  }
}

module.exports = nextConfig
