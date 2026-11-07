import React from 'react'
import { Link, type HeadFC } from 'gatsby';
import * as styles from '../styles/404.module.css'
import '../styles/global.css'

const NotFound = () => {
  return (
    <div className='layout'>
      <div className={styles.message}>
        <h2>404</h2>
        <p>Oops, that page doesn't exist (yet)!</p>
        <p>Try going back to <Link to="/"><strong>Home</strong></Link></p>
      </div>
    </div>
  );
}

export const Head: HeadFC = () => <title>404 | Tales Scopinho</title>

export default NotFound