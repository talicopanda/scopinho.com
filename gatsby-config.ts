import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
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

export default config
