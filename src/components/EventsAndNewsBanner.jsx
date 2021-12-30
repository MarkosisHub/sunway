import React from "react";
import styles from "./EventsAndNewsBanner.module.css";

const EventsAndNewsBanner = () => {
  return (
    <section
      className={styles.eventsAndNewsBannerSection}
      style={{
        backgroundImage: `linear-gradient(to right, rgb(42, 42, 44, 0.5), rgb(42, 42, 44, 0.5)), url(${
          process.env.PUBLIC_URL + "/images/events_news_banner_bg.png"
        })`,
      }}
    >
      <div className={`${styles.eventsAndNewsBannerWrapper} container`}>
        <div className={styles.eventsAndNewsBannerDetails}>
          <h3>
            We run events frequently to keep updated students about their future
            plan
          </h3>
        </div>
      </div>
    </section>
  );
};

export default EventsAndNewsBanner;
