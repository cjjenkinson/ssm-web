// next.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');
const { generateAllArticles } = require('./utils/helpers');

const next_config = {
  exportPathMap: async () => {
    const articles = await generateAllArticles();

    const insights = articles.reduce(
      (pages, entry) =>
        Object.assign({}, pages, {
          [`/articles/${entry.slug}`]: {
            page: '/articles/[slug]',
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
