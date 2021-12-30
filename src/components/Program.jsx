import React from "react";
import styles from "./Program.module.css";

const Program = () => {
  return (
    <section className={styles.programSection}>
      <div className={`${styles.programWrapper} container`}>
        <h3>What is your desire levels</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi rem voluptates illo, tempore labore quidem quia? Cum harum incidunt ipsam.</p>
        <div className={styles.programDetails}>
          <div className={styles.singleProgramDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleProgramContent}>
              <h5>Bechalor Program</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates sunt perferendis libero magnam quasi. Esse excepturi
                odio eos nobis.
              </p>
            </div>
          </div>
          <div className={styles.singleProgramDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleProgramContent}>
              <h5>Bechalor Program</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates sunt perferendis libero magnam quasi. Esse excepturi
                odio eos nobis.
              </p>
            </div>
          </div>
          <div className={styles.singleProgramDetails}>
            <img src="/images/program.png" alt="" />
            <div className={styles.singleProgramContent}>
              <h5>Bechalor Program</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                voluptates sunt perferendis libero magnam quasi. Esse excepturi
                odio eos nobis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
