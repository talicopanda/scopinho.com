import React from 'react'
import Navbar from '../components/Navbar'
import { graphql } from 'gatsby'
import * as styles from '../styles/article.module.css'

export default function Article({data}) {
  const post = data.markdownRemark;
  return (
    <div className='layout'>
      <Navbar isPurple />
      <div className={styles.container}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </div>
    </div>
  )
}


export const query = graphql`
  query postByPath($path_addr: String!) {
    markdownRemark(frontmatter: { path: { eq: $path_addr } }) {
      html
      frontmatter {
        title
        path
        intro
        tags
        thumbPath {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }`
