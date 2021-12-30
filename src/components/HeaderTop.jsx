import React from "react"
import { Link } from "react-router-dom"
import styles from "./HeaderTop.module.css"

const HeaderTop = () => {
  return (
    <div className={styles.headerTopSection}>
      <div className={`${styles.headerTopWrapper} container`}>
        <div className={styles.headerTopContent}>
          <div className={styles.headerTopLogo}>
            <Link to="/">
              <img src="/icons/logo.png" alt="Logo" />
            </Link>
          </div>
          <form className={styles.headerTopForm}>
            <input type="text" placeholder="Search Universities by name or country" />
            <span>
              <i className="fas fa-search"></i>
            </span>
          </form>
          <div className={styles.headerTopSession}>
            <Link to="/">Free Counseling Session</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
