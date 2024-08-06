import React from "react";
import { FaVideo } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import CountDownTimer from './CountDownTimer'

const TaskDetails = () => {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const loading = useSelector((state) => state.data.loading);

  function formatDate(dateString) {
    const date = new Date(dateString);
  
    // Extract the parts of the date
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  
    // Determine the appropriate suffix for the day
    const suffix = day % 10 === 1 && day !== 11 ? 'st' :
                   day % 10 === 2 && day !== 12 ? 'nd' :
                   day % 10 === 3 && day !== 13 ? 'rd' : 'th';
  
    // Return the formatted date string
    return `${month} ${day}${suffix}, ${year} ${hours}:${minutes} ${ampm}`;
  }


  return (
    <div style={styles.detailsContainer}>
      <h1>{data?.name}</h1>
      <div style={styles.iconContainer}>
        <div style={styles.iconText}>
          <FaVideo />
          Online
        </div>
        <div style={styles.iconText}>
          <FaTicketAlt />
          Paid
        </div>
      </div>
      <h4 style={styles.linkText}>Event Live Link : <a href={data?.event_live_link} style={styles.aTag}>
        Open streaming website  </a> </h4>
        <h4>Date : <span style={styles.span}>{formatDate(data?.start_date)} - {formatDate(data?.end_date)}</span></h4>
        <div>EVENT STARTS IN</div>
        <div><CountDownTimer targetDate={data?.start_date} /></div>
    </div>
  );
};

const styles = {
  detailsContainer: {
    padding: "3.5%",
    borderRadius: "5px",
    border: "1px solid #bbb",
    // backgroundColor:'red'
  },
  iconText: {
    display: "flex",
    gap: 15,
    color: "#212529",
  },
  iconContainer: {
    display: "flex",
    gap: "25%",
  },
  linkText: {
    color: "#212529",
  },
  aTag:{
color:'#0d6efd'
  },
  span:{
    color:'#212529',
    fontWeight:'xx-small'
  },

};

export default TaskDetails;
