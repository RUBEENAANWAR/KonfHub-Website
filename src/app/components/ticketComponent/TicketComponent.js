import React, { useState } from "react";
import "./TicketComponent.css";
import { FaLocationDot } from "react-icons/fa6";
import CustomButton from "../button/ButtonComponent";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const TicketComponent = ({
  ticketHeading,
  description,
  category,
  ticketType,
}) => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/register');
  }
  return (
    <div className="container-tckt-container">
      <h3>{ticketHeading}</h3>
      <div className="sub-container">
        <div>
          This is a ticket description. This is a {ticketType}. This ticket
          is {category}.
        </div>
        <div className="location-container">
          <FaLocationDot color="#0d6efd" />
          <a
            href="https://www.google.com/maps/search/?api=1&query=KonfHub+Technologies,+Nagavarapalya,+C+V+Raman+Nagar,+Bengaluru,+Karnataka,+India"
            className="location-text"
          >
            KonfHub Technologies, Nagavarapalya, C V Raman Nagar, Bengaluru,
            Karnataka, India
          </a>
        </div>
        <div className="venue-text">This is additional venue details.</div>
        <div className="time-style">
          Available Till: 31st Aug 2034, 06:00 PM IST
        </div>
        <div className="bottom-container">
          <div>
            {ticketType==='free ticket' &&
            <div className="type-style">FREE</div>
             } 
            {ticketType == "paid ticket" && 
			<div className="type-style"> ₹1,000</div>
			}
            {ticketType == "donation ticket" && 
			<div className="type-style">
  <span className="min-max">Min</span> ₹10 - 
  <span className="min-max"> Max </span>₹1,000
</div>
			 } 
          </div>
          <div>
            <CustomButton
              width="120px"
              height="40px"
              //   color="white"
              backgroundColor="#000"
              text={ticketType==='donation ticket' ? "Donate" : "Register"}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
