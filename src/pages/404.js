import React from 'react'
import { Link } from 'gatsby';
import * as styles from '../styles/404.module.css'

const NotFound = () => {
  return (
    <div className='layout'>
      <div className={styles.container}>
        <div className={styles.message}>
          <h2>404</h2>
          <p>Oops, that page doesn't exist (yet)!</p>
          <p>Try going back to <Link to="/"><strong>Home</strong></Link></p>
        </div>
      </div>
    </div>
  );
}

export const Head = () => <title>404 | Tales Scopinho</title>

export default NotFound