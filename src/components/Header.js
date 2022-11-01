import React from 'react'
import { Link } from 'react-router-dom'

// CSS
import styles from './Header.module.css'

import logo from '../png-logo-web.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li><Link to=''>CART</Link></li>
          <li><Link to=''>CONTACT</Link></li>
          <li><Link to='/store'>SHOP</Link></li>
          <li><Link to='/home'>HOME</Link></li>
        </ul>
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Header