import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Footer() {
  const data = useStaticQuery(graphql`
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
