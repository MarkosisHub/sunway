import React from 'react'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Contact from "../components/Contact";
import EventsAndNewsBanner from "../components/EventsAndNewsBanner";
import UpcommingEvents from "../components/UpcommingEvents";
import LatestNews from "../components/LatestNews";

const EventsAndNewsScreen = () => {
  return (
    <>
      <Header />
      <EventsAndNewsBanner />
      <UpcommingEvents />
      <LatestNews/>
      <Contact />
      <Footer />
    </>
  )
}

export default EventsAndNewsScreen




// import HomeBanner from "../components/HomeBanner";
// import Navbar from "../components/Navbar";
// import Contact from "../components/Contact";
// import Partners from "../components/Partners";
// import Reviews from "../components/Reviews";
// import Program from "../components/Program";
// import StudentHelp from "../components/StudentHelp";
// import Achievement from "../components/Achievement";
// import NewsAndSocialEvent from "../components/NewsAndSocialEvent";
// import AboutAdmission from "../components/AboutAdmission";

// const HomeScreen = () => {
//   return (
//     <>
//       <Header />
//       <Navbar />
//       <HomeBanner />
//       <Program />
//       <Achievement />
//       <NewsAndSocialEvent />
//       <AboutAdmission />
//       <StudentHelp />
//       <Reviews />
//       <Partners />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default HomeScreen;
