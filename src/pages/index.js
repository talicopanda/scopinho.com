import React from "react"
import { graphql } from 'gatsby'
import * as styles from '../styles/home.module.css'
import Typewriter from "typewriter-effect"
import { colors } from "../constants/colors"
import { interests } from "../constants/content"
import { StaticImage } from "gatsby-plugin-image"
import { IconContext } from "react-icons"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import "../styles/global.css"


export default function Home({ data }) {
  const { title } = data.site.siteMetadata;
  return (
    <div className="gradient">
      <div className='layout'>
        <section className={styles.header}>
          <div id={styles.header_text}>
            <h1>{ title }</h1>
            <h2>Software Engineer</h2>
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
            <div className={styles.socials}>
              <IconContext.Provider value={{ size: '32px' }}>
                <a href="https://linkedin.com/in/tales-scopinho/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin fill={colors.white} />
                </a>
                <a href="https://github.com/talicopanda" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub fill={colors.white} />
                </a>
                <a href="mailto:tales@scopinho.com?subject=scopinho.com | Let's Talk!" aria-label="Email">
                  <MdOutlineMail fill={colors.white} />
                </a>
              </IconContext.Provider>
            </div>
          </div>
          <StaticImage className={styles.image} src="../images/header_pic.jpg" alt="Tales Scopinho" />
        </section>
      </div>
    </div>
  )
}

export const Head = () => <title>Tales Scopinho</title>

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }`