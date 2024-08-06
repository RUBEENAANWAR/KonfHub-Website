import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>
          <IoCloseSharp size={24} />
        </button>
        <h2>{details.title}</h2>
        <div style={styles.dateTime}>
          <span>{details.date}</span>
          <span>{details.time}</span>
        </div>
        <p>{details.link}</p>
        <p>{details.descripption}</p>
        {details.iconSrc2 ? (
          <div style={styles.bothImage}>
            <img src={details.iconSrc} alt="Icon" style={styles.icon} />
            <img
              src={details.iconSrc2}
              alt="Icon"
              style={styles.overlappedIcon}
            />
          </div>
        ) : (
          <img src={details.iconSrc} alt="Icon" style={styles.icon} />
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "flex-end", // Align to the right
    zIndex:'100'
  },
  modal: {
    background: "#f5f5f5",
    width: "50%", // Half of the screen width
    padding: "20px",
    position: "relative",
    backgroundColor:"#f5f5f5"
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  imageContainer: {
    width: "300px",
    height: "120px",
    padding: "0% 0% 14% 0%",
  },
  bothImage: {
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    gap:'10%'
  },
  overlappedIcon: {
    width: "70px",
    height: "70px",
  },
  icon: {
    width: "70px",
    height: "70px",
  },
};

export default Modal;
