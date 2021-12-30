import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import EventsAndNewsScreen from "./screens/EventsAndNewsScreen";
import PartnerScreen from "./screens/PartnerScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/events&news" element={<EventsAndNewsScreen />} />
        <Route path="/partners" element={<PartnerScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </>
  );
};

export default App;
