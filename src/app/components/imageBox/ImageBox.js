import React from "react";
import './ImageBox.css'
import FooterIcons from "../footerIcons/FooterIcons";

const ImageBox = ({src, title, subTitle, address}) => {
  return (
    <div className="imagebox-container">
      {title==='Bruce Wayne' ?
     <img src={'/batman-yellow.jpg'} className="batman-yellow" alt='batmen-yellow'/> :  <img src={'/blackman.jpg'} className="batman-yellow" alt='batmen-yellow'/> }
     <div className="content">
      <div className="title-image">{title}</div>
      <div className="subTitle-image">{subTitle}</div>
      <div className="address-image">{address}</div>
      <div className="address-image">
      <FooterIcons />
      </div>
     </div>
    </div>
  );
};

export default ImageBox;
