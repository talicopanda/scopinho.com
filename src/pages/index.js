import React from "react"
import { graphql } from 'gatsby'
import Navbar from "../components/Navbar"
import * as styles from '../styles/home.module.css'
import Typewriter from "typewriter-effect"
import { colors } from "../constants/colors"
import Footer from "../components/Footer"
import { interests } from "../constants/content"
import Cards from "../components/Cards"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"


export default function Home({ data }) {
  const { title } = data.site.siteMetadata;
  // const markdownFiles = data.allMarkdownRemark.nodes;
  return (
    <>
      <div className="gradient">
        <div className='layout'>
          <Navbar />
          <section className={styles.header}>
            <div id={styles.header_text}>
              <h1>{ title }</h1>
              <title>{ title } | Home</title>
              <h2>Developer <i>et al.</i></h2>
              <h3 style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap'}}>Interested in<span className="line-break">&nbsp;</span>
                <span style={{color: colors.white, backgroundColor: colors.red, padding: '0 3px 3px 5px'}}>
                  <Typewriter
                      options={{
                        strings: interests.sort(() => .5 - Math.random()),
                        autoStart: true,
                        loop: true,
                      }}
                  />
                </span>
              </h3>
            </div>
            <StaticImage className={styles.image} src="../images/header_pic.jpg" alt="home pic" />
          </section>
        </div>
      </div>
      {/* <section className="section">
        <Cards info={markdownFiles.filter(node => node.frontmatter.tags !== "article").map(node => 
          ({ 
            ...(node.frontmatter),
            id: node.id,
          }))
        }/>
      </section>   */}
      <Footer />
    </>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }`

  /**
   * allMarkdownRemark {
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
   */