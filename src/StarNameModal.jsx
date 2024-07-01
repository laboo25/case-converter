import React from "react";
// import "./StarNameModal.css";

const StarNameModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>Close</button>
        <h2>Star Name Modal</h2>
        {/* Modal content goes here */}
      </div>
    </div>
  );
};

export default StarNameModal;
