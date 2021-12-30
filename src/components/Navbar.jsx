import React from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbarSection}>
      <div className={`${styles.navbarWrapper} container`}>
        <ul className={styles.navbarContent}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">How we help</Link>
          </li>
          <li>
            <Link to="/">Study abroad</Link>
          </li>
          <li>
            <Link to="/">Universities</Link>
          </li>
          <li>
            <Link to="/partners">Became a partner</Link>
          </li>
          <li>
            <Link to="/events&news">Events & news</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
