/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
  siteMetadata: {
    title: 'Tales Scopinho',
    description: 'Personal website',
    copyright: 'Copyright © 2026 Tales Scopinho'
  },
  flags: {
    DEV_SSR: true,
  }
}
