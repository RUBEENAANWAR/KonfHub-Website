import React from "react";
import Register from "./register/Register";
import SideBar from "./sideBar/SideBar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa6";
import CheckOut from "./CheckOut";

const RegistrationPage = () => {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const loading = useSelector((state) => state.data.loading);

  const navigate = useNavigate();

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    const suffix =
      day % 10 === 1 && day !== 11
        ? "st"
        : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
        ? "rd"
        : "th";
    return `${month} ${day}${suffix}, ${year} ${hours}:${minutes} ${ampm}`;
  }

  const handleBackPress = () => {
    navigate("/");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div style={styles.regContnr}>
      <div className="title-container">
        <div className="arrow" onClick={handleBackPress}>
          <FaArrowLeft size={24} />
        </div>

        <div className="date-container">
          <h1>{data?.name}</h1>
          <h4>
            {formatDate(data?.start_date)} - {formatDate(data?.end_date)}
          </h4>
        </div>
      </div>
      <div style={styles.leftContnr}>
        <div style={styles.sidebar}>
          <SideBar />
        </div>
        <div style={styles.registr}>
          <Register />
        </div>
        <div style={styles.checkOut}>
          <CheckOut />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center"}}>
        <img src={data?.invoice_footer_icon} />
      </div>
    </div>
  );
};

const styles = {
  regContnr: {
    width: "90%",
    // display:'flex',
    padding: "2% 4%",
  },
  sidebar: {
    width: "10%",
    border: "2px solid #bbb",
    position: "sticky",
    height: "100vh",
    left: "0",
    top: "0",
    height: "100vh",
  },
  registr: {
    width: "70%",
  },
  checkOut: {
    width: "30%",
  },
  leftContnr: {
    width: "100%",
    display: "flex",
  },
};

export default RegistrationPage;
