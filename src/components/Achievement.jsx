import React from "react";
import styles from "./Achievement.module.css";

const Achievement = () => {
  return (
    <section className={styles.achievementSection}>
      <div className={`${styles.achievementWrapper} container`}>
        <h3>achievement through time</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          laborum animi sequi culpa expedita labore optio accusantium
          reiciendis, autem architecto.
        </p>
        <div className={styles.achievementDetails}>
          <div className={styles.singleAchievementDetails}>
            <h1>1205</h1>
            <p>student sent till now</p>
          </div>
          <div className={styles.singleAchievementDetails}>
            <h1>90%</h1>
            <p>career success rate</p>
          </div>
          <div className={styles.singleAchievementDetails}>
            <h1>98%</h1>
            <p>Job confirmation</p>
          </div>
          <div className={styles.singleAchievementDetails}>
            <h1>92%</h1>
            <p>Residendy rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
