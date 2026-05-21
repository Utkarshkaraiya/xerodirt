/** @type {import('next-sitemap').IConfig} */

const {
  landingPages,
} = require('./src/data/landing-pages.js');

module.exports = {
  siteUrl: 'https://xerodirt.com',

  generateRobotsTxt: true,

  sitemapSize: 7000,

  additionalPaths: async (config) => {
    const result = [];

    // Static Pages
    const staticPages = [
      '/',
      '/about',
      '/contact',
      '/blog',
      '/book',
      '/booknow',
      '/monthly-booking',
      '/myorders',
      '/privacypolicy',
      '/termsofservice',
    ];

    for (const page of staticPages) {
      result.push(
        await config.transform(config, page)
      );
    }

    // Dynamic SEO Pages
    for (const page of landingPages) {
      result.push(
        await config.transform(
          config,
          `/${page.slug}`
        )
      );
    }

    return result;
  },
};