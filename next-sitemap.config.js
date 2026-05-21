/** @type {import('next-sitemap').IConfig} */

const {
  landingPages,
} = require('./src/data/landing-pages');

module.exports = {
  siteUrl: 'https://xerodirt.com',

  generateRobotsTxt: true,

  sitemapSize: 7000,

  additionalPaths: async (config) => {
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

    const staticPaths = staticPages.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));

    // Dynamic SEO Landing Pages
    const dynamicPaths = landingPages.map((page) => ({
      loc: `/${page.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));

    return [...staticPaths, ...dynamicPaths];
  },
};