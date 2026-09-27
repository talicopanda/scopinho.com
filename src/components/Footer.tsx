import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

type FooterData = {
  site: { siteMetadata: { copyright: string } }
}

export default function Footer() {
  const data = useStaticQuery<FooterData>(graphql`
  {
    site {
      siteMetadata {
        copyright
      }
    }
  }`)

  return (
    <footer>
        <p> {data.site.siteMetadata.copyright} </p>
    </footer>
  )
}
