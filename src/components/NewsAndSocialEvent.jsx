import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewsAndSocialEvent.module.css";

const NewsAndSocialEvent = () => {
  return (
    <section className={styles.newsAndSocialEventSection}>
      <div className={`${styles.newsAndSocialEventWrapper} container`}>
        <div className={styles.newsAndSocialEventDetails}>
          <div className={styles.newsEventDetailsWrapper}>
            <h3>events & news</h3>
            <div className={styles.newsEventDetails}>
              <div className={styles.singlNewsEventDetails}>
                <img src="/images/news_event.png" alt="" />
                <div className={styles.singlNewsEventContent}>
                  <p className={styles.date}>13th september, 2021</p>
                  <h5>Event name here</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit eius in eum quidem consectetur reiciendis
                    expedita praesentium itaque et perferendis!
                  </p>
                  <Link to="">
                    See details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
              <div className={styles.singlNewsEventDetails}>
                <img src="/images/news_event.png" alt="" />
                <div className={styles.singlNewsEventContent}>
                  <p className={styles.date}>13th september, 2021</p>
                  <h5>Event name here</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit eius in eum quidem consectetur reiciendis
                    expedita praesentium itaque et perferendis!
                  </p>
                  <Link to="">
                    See details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
              <div className={styles.singlNewsEventDetails}>
                <img src="/images/news_event.png" alt="" />
                <div className={styles.singlNewsEventContent}>
                  <p className={styles.date}>13th september, 2021</p>
                  <h5>Event name here</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit eius in eum quidem consectetur reiciendis
                    expedita praesentium itaque et perferendis!
                  </p>
                  <Link to="">
                    See details <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.socialEventsDetails}>
            <div className={styles.socialEventsDetailsWrapper}>
              <h3>social events</h3>
              <div className={styles.socialEventsDetails}>
                <div className={styles.singleSocialEventsDetails}>
                  <div className={styles.singleSocialEventsContent}>
                    <div className={styles.singleSocialEventsContentLeft}>
                      <span>
                        <i className="fab fa-facebook"></i>
                      </span>
                      <h6>Friday</h6>
                      <p className={styles.time}>09:50 pm</p>
                    </div>
                    <div className={styles.singleSocialEventsContentRight}>
                      <h4>
                        Live session on facebook: <br />
                        process of post graduation
                      </h4>
                      <Link to="">
                        join our group{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.singleSocialEventsDetails}>
                  <div className={styles.singleSocialEventsContent}>
                    <div className={styles.singleSocialEventsContentLeft}>
                      <span>
                        <i className="fab fa-facebook"></i>
                      </span>
                      <h6>Friday</h6>
                      <p className={styles.time}>09:50 pm</p>
                    </div>
                    <div className={styles.singleSocialEventsContentRight}>
                      <h4>
                        Live session on facebook: <br />
                        process of post graduation
                      </h4>
                      <Link to="">
                        join our group{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className={styles.singleSocialEventsDetails}>
                  <div className={styles.singleSocialEventsContent}>
                    <div className={styles.singleSocialEventsContentLeft}>
                      <span>
                        <i className="fab fa-facebook"></i>
                      </span>
                      <h6>Friday</h6>
                      <p className={styles.time}>09:50 pm</p>
                    </div>
                    <div className={styles.singleSocialEventsContentRight}>
                      <h4>
                        Live session on facebook: <br />
                        process of post graduation
                      </h4>
                      <Link to="">
                        join our group{" "}
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndSocialEvent;
