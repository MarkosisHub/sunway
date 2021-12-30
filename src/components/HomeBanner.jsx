import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./HomeBanner.css"

const HomeBanner = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <section className="homeBannerSection">
      <div className="homeBannerWrapper container">
        <Slider {...settings}>
          <div className="homeBannerContent">
            <div className="homeBannerContentLeft">
              <h1>
                study abroad
                <br /> & build your dream career
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                incidunt odit eligendi molestiae, quidem delectus quasi omnis
                veritatis libero quam reprehenderit deserunt tenetur dolor,
                expedita consequuntur atque quo nostrum recusandae.
              </p>
              <button className="btn">Book appointment</button>
            </div>
            <div className="homeBannerContentRight">
              <img src="/images/home_banner_bg.png" alt="" />
            </div>
          </div>
          <div className="homeBannerContent">
            <div className="homeBannerContentLeft">
              <h1>
                study abroad
                <br /> & build your dream career
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                incidunt odit eligendi molestiae, quidem delectus quasi omnis
                veritatis libero quam reprehenderit deserunt tenetur dolor,
                expedita consequuntur atque quo nostrum recusandae.
              </p>
              <button className="btn">Book appointment</button>
            </div>
            <div className="homeBannerContentRight">
              <img src="/images/home_banner_bg.png" alt="" />
            </div>
          </div>
          <div className="homeBannerContent">
            <div className="homeBannerContentLeft">
              <h1>
                study abroad
                <br /> & build your dream career
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                incidunt odit eligendi molestiae, quidem delectus quasi omnis
                veritatis libero quam reprehenderit deserunt tenetur dolor,
                expedita consequuntur atque quo nostrum recusandae.
              </p>
              <button className="btn">Book appointment</button>
            </div>
            <div className="homeBannerContentRight">
              <img src="/images/home_banner_bg.png" alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default HomeBanner
