import React, { useState } from "react";
import CustomButton from "../button/ButtonComponent";
import Modal from "../modalComponent";

const CardComponent = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const handleButtonClick = (props) => {
    setModalDetails(props);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
        <img src={props.imageSrc} alt="Card Image" style={styles.image} />
      </div>
      <div style={styles.titleContainer}>
        <h3 style={styles.title}>{props.title}</h3>
      </div>
      <div style={styles.dateTime}>
        <span>{props.date}</span>
        <span>{props.time}</span>
      </div>
      <div style={styles.footer}>
        {props.iconSrc2 ? (
          <div style={styles.bothImage}>
            <img src={props.iconSrc} alt="Icon" style={styles.icon} />
            <img
              src={props.iconSrc2}
              alt="Icon"
              style={styles.overlappedIcon}
            />
          </div>
        ) : (
          <img src={props.iconSrc} alt="Icon" style={styles.icon} />
        )}

        <CustomButton
          width="124px"
          height="40px"
          color="white"
          backgroundColor="#000"
          text={"View Details"}
          onClick={handleButtonClick}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} details={props} />
    </div>
  );
};

const styles = {
  cardContainer: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    // textAlign: 'center',
    maxWidth: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    height: "auto",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "4px",
  },
  imageContainer: {
    width: "300px",
    height: "120px",
    padding: "0% 0% 14% 0%",
  },
  bothImage: {
    position: "relative",
    width: "80px",
  },
  overlappedIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    position: "absolute",
    top: "0",
    right: "10px",
    zIndex: 1,
    border: "3px solid #fff",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "12px 0",
    textAlign: "left",
  },
  titleContainer: {
    height: "15%",
  },
  dateTime: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "16px",
    textAlign: "left",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
  },
  icon: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CardComponent;
