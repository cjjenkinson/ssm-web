require('dotenv').config();
const { generateSitemap } = require('./generate-sitemap');
generateSitemap(process.env.PUBLIC_DOMAIN, './public/');
