import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Reviews.css";

const Reviews = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 0,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="reviewsSection">
      <div className="reviewsWrapper">
        <h3>Our Student's Reviews</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          officia assumenda saepe aliquam vitae, vel architecto tenetur ea
          quibusdam libero?
        </p>
        <div className="reviewsDetails">
          <Slider {...settings}>
            <div className="singleReviewDetails">
              <img src="/images/review_1.png" alt="" />
              <div className="singleReviewContent">
                <h5>name</h5>
                <h6>student</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit minus illo quaerat! Odit quos adipisci corrupti
                  tenetur sapiente, at facere.
                </p>
              </div>
            </div>
            <div className="singleReviewDetails">
              <img src="/images/review_2.png" alt="" />
              <div className="singleReviewContent">
                <h5>name</h5>
                <h6>student</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit minus illo quaerat! Odit quos adipisci corrupti
                  tenetur sapiente, at facere.
                </p>
              </div>
            </div>
            <div className="singleReviewDetails">
              <img src="/images/review_3.png" alt="" />
              <div className="singleReviewContent">
                <h5>name</h5>
                <h6>student</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit minus illo quaerat! Odit quos adipisci corrupti
                  tenetur sapiente, at facere.
                </p>
              </div>
            </div>
            <div className="singleReviewDetails">
              <img src="/images/review_1.png" alt="" />
              <div className="singleReviewContent">
                <h5>name</h5>
                <h6>student</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit minus illo quaerat! Odit quos adipisci corrupti
                  tenetur sapiente, at facere.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
