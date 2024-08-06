import React,{useState} from "react";
import TicketComponent from "../../ticketComponent/TicketComponent";
import DropDownComponent from "../../dropDownComponent/DropDownComponent";
import { useSelector } from "react-redux";
import "./Register.css";
import { FaArrowLeft, FaHandLizard } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const loading = useSelector((state) => state.data.loading);

  const [searchQuery, setSearchQuery] = useState('');

  const tickets = [
    {ticketHeading:"Free Ticket",
      category:"uncategorised",
      ticketType:"free ticket"},
    {    ticketHeading:"Paid Ticket",
      category:"uncategorised",
      ticketType:"paid ticket"},
    {  ticketHeading:"Donation Ticket",
      category:"uncategorised",
      ticketType:"donation ticket"},
      {  ticketHeading:"Ticket with coupon",
        category:"uncategorised",
        ticketType:"paid ticket"},
  ];

  const filteredTickets = tickets.filter(ticket =>
    ticket.ticketHeading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="register-container">
      <div className="tckt-container">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for tickets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch className="search-icon" color={"red"} />
        </div>
        {filteredTickets.length > 0 ? (
        filteredTickets.map((ticket, index) => (
          <TicketComponent
            key={index}
            ticketHeading={ticket.ticketHeading}
            category={ticket.category}
            ticketType={ticket.ticketType}
          />
        ))
      ) : (
        <p>No tickets found</p>
      )}
        <DropDownComponent
          categoryType="category content"
          categorytitle="This is a category"
        />
        <DropDownComponent
          categoryType="long category content"
          categorytitle="This is also a category. But with a little longer name. Also note, this category expanded by default."
        />
      </div>
    </div>
  );
};

export default Register;
