import React, { useEffect, useState } from "react";
import CardComponent from "../cardComponent/CardComponent";
import Modal from "../modalComponent";
import { useSelector } from 'react-redux';

function WorkShop() {
  const data = useSelector((state) => state.data.data);
  const error = useSelector((state) => state.data.error);
  const loading = useSelector((state) => state.data.loading);
  

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const handleButtonClick = (details) => {
    setModalDetails(details);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div className="ticket-container">
      <div className="title">{data?.workshop_section_title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.workshop_section_description }}
      />
      <div style={styles.cardContainer}>
        <CardComponent
          imageSrc="/thought-red.webp" 
          title="How to make more money"
          date="Jun 11th, 2024 "
          time="at 10:00 AM (IST)"
          iconSrc="/batman-yellow.jpg"
          onButtonClick={handleButtonClick}
        />
        <CardComponent
          imageSrc="/batman-back.webp" 
          title="How to fight crime"
          date="Jun 11th, 2024 "
          time="at 10:00 AM (IST)"
          iconSrc="/blackman.jpg" 
          onButtonClick={handleButtonClick}
        />
        <CardComponent
          imageSrc="/tile.webp" 
          title="This is a workshop connected to a ticket"
          date="Jun 11th, 2024 "
          time="at 10:00 AM (IST)"
          iconSrc="/batman-yellow.jpg"
          iconSrc2="/blackman.jpg"
          onButtonClick={handleButtonClick}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} details={modalDetails} />
    </div>
  );
}
const styles = {
  cardContainer: {
    display: "flex",
    gap: "1.5rem",
    height:'auto'
  },
};

export default WorkShop;
