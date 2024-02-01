import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { Link } from 'gatsby';
import { graphql } from 'gatsby'
import * as styles from '../styles/404.module.css'

const NotFound = ({ data }) => {
  const markdownFiles = data.allMarkdownRemark.nodes;
  return (
    <div className='layout'>
      <div className={styles.container}>
        <Navbar isPurple/>
        <div className={styles.message}>
          <h2>404</h2>
          <p>Oops, that page doesn't exist (yet)!</p>
          {/* <p>Try going back to <Link to="/"><strong>Home</strong></Link> or check out some of these cool reads while you are here:</p>
          <Cards info={markdownFiles.filter(node => node.frontmatter.tags !== "article").sort(() => .5 - Math.random()).slice(0, 3).map(node => 
            ({ 
              ...(node.frontmatter),
              id: node.id,
            }))
          }/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
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
        id
      }
    }
  }`
 
export default NotFound