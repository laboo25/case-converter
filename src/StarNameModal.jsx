// StarNameModal.js
import React, { useEffect, useState } from "react";
import starList from "./starlist.json";
import CopyButton from "./CopyButton";
import "./starModal.css";

const StarNameModal = ({ onClose }) => {
  const [starname, setStarname] = useState([]);

  useEffect(() => {
    setStarname(starList.starnames || []); // Assuming starnames is the key in the JSON file
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {starname.map((star, index) => (
          <CopyButton key={index} value={star}>
            {star}
          </CopyButton>
        ))}
      </div>
    </div>
  );
};

export default StarNameModal;
