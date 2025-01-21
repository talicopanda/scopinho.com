import React from 'react'
import { Link } from 'gatsby'
import * as styles from '../styles/about.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <div className='layout'>
        <div className={styles.container}>
          <Navbar isPurple />
          <title>Tales Scopinho | About</title>
          <section className={styles.header}>
              <StaticImage className={styles.image} src="../images/about_pic.jpg" alt="about pic" />
              <div className={styles.text}>
                <div className={styles.greeting}>
                  <h2 style={{display: 'inline' }}>Heyo!</h2> <h3 style={{display: 'inline' }}>   welcome to my plaground.</h3>
                </div>
                <p>I'm a computer scientist by schooling, yet my interests are quite wide. Some of my latest projects I particularly enjoyed working on are:</p>
                <ul>
                  <li className={styles.list}><Link to="https://github.com/talicopanda/social-media-influence-analysis"><i>Analysing Influence on Social Media</i></Link></li>
                  <ul>
                    <li className={styles.sublist}>A research project under Professor Peter Marbach to study how people influence and get influenced by people in their Twitter communities.</li>
                  </ul>
                  <li className={styles.list}><Link to="https://github.com/Hennmeister/kv-store"><i>Building a Database from Scratch</i></Link></li>
                  <ul>
                    <li className={styles.sublist}>A project under the guidance of Professor Niv Dayan for building an efficient and robust key-value store database from scratch in C++.</li>
                  </ul>
                </ul>
                <p>Currently a <i>Software Engineer</i> at <span style={{fontSize: '22px', fontWeight: 'bold'}}>Microsoft</span> and a graduate of the <span style={{fontSize: '22px', fontWeight: 'bold'}}>University of Toronto</span>.</p>
              </div>
          </section>
        </div>
      </div>  
    </>
  )
}
