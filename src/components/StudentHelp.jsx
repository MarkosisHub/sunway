import React from "react";
import styles from "./StudentHelp.module.css";

const StudentHelp = () => {
  return (
    <section className={styles.studentHelpSection}>
      <div className={`${styles.studentHelpWrapper} container`}>
        <h3>How we help international students?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
          incidunt facilis id sunt hic provident, maxime labore perferendis nisi
          dolore.
        </p>
        <div className={styles.studentHelpDetails}>
          <div className={styles.singleStudentHelpDetails}>
            <img src="/icons/accomodation.png" alt="" />
            <h6>Accomodation</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sunt assumenda!
            </p>
          </div>
          <div className={styles.singleStudentHelpDetails}>
            <img src="/icons/universities.png" alt="" />
            <h6>changing universities</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sunt assumenda!
            </p>
          </div>
          <div className={styles.singleStudentHelpDetails}>
            <img src="/icons/visa_consultancy.png" alt="" />
            <h6>visa consultancy</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sunt assumenda!
            </p>
          </div>
          <div className={styles.singleStudentHelpDetails}>
            <img src="/icons/pre_departure.png" alt="" />
            <h6>Pre-Departure briefing</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae sunt assumenda!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHelp;
