import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./Partners.css"

const Partners = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  }
  return (
    <section className="partnersSection">
      <div className="partnersWrapper">
        <div className="partnersContent">
          <h3>Our partners</h3>
          <Slider {...settings}>
            <div>
              <img src="/icons/partner_1.png" alt="" />
            </div>
            <div>
              <img src="/icons/partner_2.png" alt="" />
            </div>
            <div>
              <img src="/icons/partner_3.png" alt="" />
            </div>
            <div>
              <img src="/icons/partner_4.png" alt="" />
            </div>
            <div>
              <img src="/icons/partner_5.png" alt="" />
            </div>
            <div>
              <img src="/icons/partner_5.png" alt="" />
            </div>
          </Slider>
          <button className="btn">our partners</button>
        </div>
      </div>
    </section>
  )
}

export default Partners
