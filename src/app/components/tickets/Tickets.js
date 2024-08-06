import React from "react";
import "./Tickets.css";
import TicketComponent from "../ticketComponent/TicketComponent";
import DropDownComponent from '../dropDownComponent/DropDownComponent'

const Tickets = () => {
  return (
    <div className="ticket-container">
      <div className="title">TICKETS</div>
      <div className="container">
        <TicketComponent ticketHeading="Free Ticket" category="uncategorised" ticketType='free ticket' />
        <TicketComponent ticketHeading="Paid Ticket" category="uncategorised" ticketType='paid ticket'/>
        <TicketComponent ticketHeading="Donation Ticket" category="uncategorised" ticketType='donation ticket'/>
        <TicketComponent ticketHeading="Ticket with coupon" category="uncategorised" ticketType='paid ticket'/>
      <DropDownComponent categoryType='category content' categorytitle='This is a category'/>
      <DropDownComponent categoryType='long category content' categorytitle='This is also a category. But with a little longer name. Also note, this category expanded by default.'/>

      </div>
    </div>
  );
};

export default Tickets;
