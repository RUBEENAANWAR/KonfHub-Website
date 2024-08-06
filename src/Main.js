import React, { useState } from "react";
import "./App.css";
import About from "./app/components/about/About.js";
import Tickets from "./app/components/tickets/Tickets.js";
import SpeakersSection from "./app/components/speakersSection/SpeakersSection.js";
import WorkShop from "./app/components/workshop/WorkShop.js";
import EventSponsors from "./app/components/sponsors/EventSponsors.js";
import Navbar from "./app/components/header/Header.js";
import RightPart from "./app/components/rightPart/RightPart.js";

function App() {
  const [activeLink, setActiveLink] = useState("section1");

  const handleClick = (section) => {
    setActiveLink(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
    <div className="App">
      <div className="firstPart">
        <div className="pic-container">
          <img src={"/happy-pic.jpg"} alt="happy-pic" className="happy-image" />
        </div>
        <div className="title-row">
          <a
            href="#section1"
            className={`title-link ${
              activeLink === "section1" ? "active" : ""
            }`}
            onClick={() => handleClick("section1")}
          >
            About
          </a>
          <a
            href="#section2"
            className={`title-link ${
              activeLink === "section2" ? "active" : ""
            }`}
            onClick={() => handleClick("section2")}
          >
            Tickets
          </a>
          <a
            href="#section3"
            className={`title-link ${
              activeLink === "section3" ? "active" : ""
            }`}
            onClick={() => handleClick("section3")}
          >
            This is speakers section
          </a>
          <a
            href="#section3"
            className={`title-link ${
              activeLink === "section4" ? "active" : ""
            }`}
            onClick={() => handleClick("section4")}
          >
            This is workshop section
          </a>
          <a
            href="#section3"
            className={`title-link ${
              activeLink === "section5" ? "active" : ""
            }`}
            onClick={() => handleClick("section5")}
          >
            This is event sponsors
          </a>
        </div>
        <div id="section1">
          <About />
        </div>
        <div id="section2">
          <Tickets />
        </div>
        <div id="section3">
          <SpeakersSection />
        </div>
        <div id="section4">
          <WorkShop/>
        </div>
        <div id="section5">
          <EventSponsors/>
        </div>
      </div>
      <div className="secondPart">
        <RightPart />
      </div>
    </div>
    </>
  );
}

export default App;
