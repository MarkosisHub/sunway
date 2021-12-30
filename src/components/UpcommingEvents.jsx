import React from "react";
import { Link } from "react-router-dom";
import styles from "./UpcommingEvents.module.css";

const UpcommingEvents = () => {
  return (
    <section className={styles.upcommingEventsSection}>
      <div className={`${styles.upcommingEventsWrapper} container`}>
        <h3>upcomming events</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          expedita ad, dicta assumenda aspernatur pariatur!
        </p>
        <div className={styles.upcommingEventsDetails}>
          <div className={styles.singleUpcommingEventsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleUpcommingEvents}>
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
          <div className={styles.singleUpcommingEventsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleUpcommingEvents}>
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
          <div className={styles.singleUpcommingEventsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleUpcommingEvents}>
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
          <div className={styles.singleUpcommingEventsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleUpcommingEvents}>
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
          <div className={styles.singleUpcommingEventsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleUpcommingEvents}>
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
          <div className={styles.singleUpcommingEventsDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleUpcommingEvents}>
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

export default UpcommingEvents;
