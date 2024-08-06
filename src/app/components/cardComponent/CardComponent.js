import React,{useState} from 'react';
import CustomButton from '../button/ButtonComponent';

const CardComponent = ({ imageSrc, title, date, time, iconSrc, iconSrc2,onButtonClick }) => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.imageContainer}>
      <img src={imageSrc} alt="Card Image" style={styles.image} />
      </div>
      <div style={styles.titleContainer}>
      <h3 style={styles.title}>{title}</h3>
      </div>
      <div style={styles.dateTime}>
        <span>{date}</span>
        <span>{time}</span>
      </div>
      <div style={styles.footer}>
        {iconSrc2 ? (
        <div style={styles.bothImage}>
 <img src={iconSrc} alt="Icon" style={styles.icon} />
 <img src={iconSrc2} alt="Icon" style={styles.overlappedIcon} />
 </div>) : (
 <img src={iconSrc} alt="Icon" style={styles.icon} />
 )}
       
        
        <CustomButton
              width="124px"
              height="40px"
            color="white"
              backgroundColor="#000"
              text={"View Details"}
              // onClick={handleButtonClick}
            />
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    // textAlign: 'center',
    maxWidth: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height:'auto'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  imageContainer:{
    width:'300px',
    height:'120px',
    padding:'0% 0% 14% 0%'
  },
  bothImage:{
    position: 'relative',
    width: '80px',
  },
  overlappedIcon: {
    width: '40px',
    height: '40px',
    borderRadius:'20px',
    position: 'absolute',
    top: '0',
    right: '0px', 
    zIndex: 1,
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '12px 0',
    textAlign:'left'
  },
  titleContainer:{
height:'15%'
  },
  dateTime: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '16px',
       textAlign:'left'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '16px',
  },
  icon: {
    width: '40px',
    height: '40px',
    borderRadius:'20px'
  },
  button: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default CardComponent;
