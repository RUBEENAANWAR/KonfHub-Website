import React from 'react';

const Modal = ({ isOpen, onClose, details }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button style={styles.closeButton} onClick={onClose}>X</button>
        <h2>{details.title}</h2>
        <p>{details.subTitle}</p>
        <p>{details.address}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'flex-end', // Align to the right
  },
  modal: {
    background: '#fff',
    width: '50%', // Half of the screen width
    padding: '20px',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default Modal;
