import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBanner from "../components/HomeBanner";
import Contact from "../components/Contact";
import Partners from "../components/Partners";
import Reviews from "../components/Reviews";
import Program from "../components/Program";
import StudentHelp from "../components/StudentHelp";
import Achievement from "../components/Achievement";
import NewsAndSocialEvent from "../components/NewsAndSocialEvent";
import AboutAdmission from "../components/AboutAdmission";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <Program />
      <Achievement />
      <NewsAndSocialEvent />
      <AboutAdmission />
      <StudentHelp />
      <Reviews />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
};

export default HomeScreen;
