import React from "react"
import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
      <footer className={styles.footerSection}>
        <div className={`${styles.ebookDownloadWrapper} container`}>
          <div className={styles.ebookDownloadContent}>
            <h3>Download Our E-book</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <form className={styles.ebookForm}>
              <input type="email" placeholder="Your email address" />
              <button className="btn">Get your book</button>
            </form>
          </div>
        </div>
        <div className={`${styles.footerTopWrapper} container`}>
          <div className={styles.footerTopContent}>
            <div>
              <img src="/icons/footer_logo.png" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                inventore praesentium dolor maiores atque dolores!
              </p>
            </div>
            <div>
              <h6>about</h6>
              <ul>
                <li>
                  <Link to="/">Our Mission</Link>
                </li>
                <li>
                  <Link to="/">About us</Link>
                </li>
                <li>
                  <Link to="/">how we help</Link>
                </li>
                <li>
                  <Link to="/">achievements</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>study abroad</h6>
              <ul>
                <li>
                  <Link to="/">Universities</Link>
                </li>
                <li>
                  <Link to="/">study in europe</Link>
                </li>
                <li>
                  <Link to="/">scholarships</Link>
                </li>
                <li>
                  <Link to="/">australian universities</Link>
                </li>
                <li>
                  <Link to="/">study in canada</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>study programs</h6>
              <ul>
                <li>
                  <Link to="/">bachelors</Link>
                </li>
                <li>
                  <Link to="/">masters</Link>
                </li>
                <li>
                  <Link to="/">pathways</Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>support</h6>
              <ul>
                <li>
                  <Link to="/">appoinment</Link>
                </li>
                <li>
                  <Link to="/">contact us</Link>
                </li>
                <li>
                  <Link to="/">booking</Link>
                </li>
                <li>
                  <Link to="/">admission</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={`${styles.footerBottomWrapper} container`}>
            <div className={styles.footerBottomContent}>
              <div>
                <p>&copy; 2021 Sunday Admission | All Rights Reserved.</p>
              </div>
              <ul className={styles.footerSocialMediaList}>
                <li>
                  <a href="https://www.facebook.com">
                    <img src="/icons/facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com">
                    <img src="/icons/linkedin.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <img src="/icons/instagram.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <img src="/icons/twitter.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">
                    <img src="/icons/youtube.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
