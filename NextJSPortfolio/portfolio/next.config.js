const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/https://dkharley.github.io/nextjs_portfolio/' : '',
}
