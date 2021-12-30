import React from "react";
import { Link } from 'react-router-dom'
import styles from "./LatestNews.module.css";

const LatestNews = () => {
  return (
    <section className={styles.latestNewsSection}>
      <div className={`${styles.latestNewsWrapper} container`}>
        <h3>Latest News</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          expedita ad, dicta assumenda aspernatur pariatur!
        </p>
        <div className={styles.latestNewsDetails}>
          <div className={styles.singleLatestNewsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleLatestNews}>
              <p className={styles.date}>13th January 2022</p> 
              <h5>Event name goes here</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates sunt perferendis libero magnam quasi. Esse excepturi
                odio eos nobis.
              </p>
              <Link to="">
                See details <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <div className={styles.singleLatestNewsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleLatestNews}>
              <p className={styles.date}>13th January 2022</p> 
              <h5>Event name goes here</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates sunt perferendis libero magnam quasi. Esse excepturi
                odio eos nobis.
              </p>
              <Link to="">
                See details <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <div className={styles.singleLatestNewsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleLatestNews}>
              <p className={styles.date}>13th January 2022</p> 
              <h5>Event name goes here</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates sunt perferendis libero magnam quasi. Esse excepturi
                odio eos nobis.
              </p>
              <Link to="">
                See details <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.viewBtnWrapper}>
          <button>View all</button>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
