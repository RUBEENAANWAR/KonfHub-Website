import React from "react";
import "./About.css";
import Table from '../table/Table'

function About() {
  return (
    <div>
      <div className="title">ABOUT EVENT</div>
      <p className="description">
        This is the description of an event. This event was created as an
        evaluation task for the role of Frontend Engineer. Are you the one we
        are looking for? Don't get nervous. Take help if you need. Ask us more
        questions if you did not understand the problem. You can reach-us out at
        reachus@konfhub.com..
      </p>
      <div className="image-container">
        <img src={"./pictures.png"} className="pictures" />
      </div>
      <div>
        <iframe
          width="640"
          height="460"
          src="https://www.youtube.com/embed/bEM35JDYjrI"
          title="YouTube video player"
          // frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Table />
    </div>
  );
}

export default About;
