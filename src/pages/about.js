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
          <section className={styles.header}>
              <StaticImage className={styles.image} src="../images/about_pic.jpg" alt="about pic" />
              <div className={styles.text}>
                <h2 style={{display: 'inline' }}>Heyo!</h2> <h3 style={{display: 'inline' }}>   welcome to my plaground.</h3>
                <p>I'm a computer scientist by schooling, yet my interests are quite wide. Some of my latest projects that I partiuclarly enjoyed working one are:</p>
                <ul>
                  <li className={styles.list}><Link to="https://github.com/talicopanda/social-media-influence-analysis"><i>Analysing Influence on Social Media</i></Link></li>
                  <ul>
                    <li className={styles.sublist}>A research project under Professor Peter Marbach to study how people influence and are influenced by people in their communities on Twitter.</li>
                  </ul>
                  <li className={styles.list}><Link to="https://github.com/Hennmeister/kv-store"><i>Building a Database from Scratch</i></Link></li>
                  <ul>
                    <li className={styles.sublist}>A project under the guidance of Professor Niv Dayan that aims to build an efficient and robust key-value store database entirely from scratch in C++.</li>
                  </ul>
                </ul>
                <p>Currently at <span style={{fontSize: '22px', fontWeight: 'bold'}}>Microsoft</span> and graduate of the <span style={{fontSize: '22px', fontWeight: 'bold'}}>University of Toronto</span>.</p>
              </div>
          </section>
        </div>
      </div>  
    </>
  )
}
