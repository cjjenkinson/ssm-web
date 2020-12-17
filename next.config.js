// next.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');
const { generateAllArticles } = require('./utils/helpers');

const next_config = {
  async rewrites() {
    return [
      {
        source: "/:slug*.html",  // Old url with .html
        destination: "/:slug*", // Redirect without .html
      },
    ]
  },
  exportPathMap: async () => {
    const articles = await generateAllArticles();

    const insights = articles.reduce(
      (pages, entry) =>
        Object.assign({}, pages, {
          [`/post/${entry.slug}`]: {
            page: '/post/[slug]',
            query: { slug: entry.slug }
          }
        }),
      {}
    );

    const pages = {
      '/': { page: '/' }
    };

    return Object.assign({}, pages, insights);
  }
};

module.exports = { ...next_config };
