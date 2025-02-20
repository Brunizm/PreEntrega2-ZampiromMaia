import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000, // Ensures the modal is above everything
    }} onClick={closeModal}>
      <div style={{
        padding: 20,
        background: '#fff',
        borderRadius: 5,
        display: 'inline-block',
        minHeight: '300px',
        margin: '1rem',
        position: 'relative',
        minWidth: '300px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1001, // Ensures the modal box is on top of the overlay
        overflow: 'auto',
      }} onClick={(e) => e.stopPropagation()}> 
        {/* Prevent closing the modal when clicking inside */}
        {children}
        <button style={{ marginTop: 10 }} onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
