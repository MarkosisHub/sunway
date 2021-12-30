import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./AboutAdmission.module.css";

const AboutAdmission = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className={styles.aboutAdmissionSection}>
      <div className={`${styles.aboutAdmissionWrapper} container`}>
        <div className={styles.aboutAdmissionDetails}>
          <div className={styles.aboutAdmissionContent}>
            <div className={styles.aboutAdmissionContentLeft}>
              <h4>about sunway admission</h4>
              <p className={styles.pera}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem praesentium voluptas dolores qui dolore sint
                veniam et explicabo laborum libero?
              </p>
              <p className={styles.highlight}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore temporibus sunt in, ut laboriosam quo totam eveniet
                iste similique veniam.
              </p>
              <Link to="">Learn more</Link>
            </div>
            <div className={styles.aboutAdmissionContentRight}>
              <Slider {...settings}>
                <div>
                  <img src="/images/about_admission.png" alt="" />
                </div>
                <div>
                  <img src="/images/about_admission.png" alt="" />
                </div>
                <div>
                  <img src="/images/about_admission.png" alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAdmission;
