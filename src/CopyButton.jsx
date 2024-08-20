import React, { useState } from "react";
import './copybtn.css'
const CopyButton = ({ value, children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000); // Hide the message after 2 seconds
    });
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={handleCopy} style={{ padding: "5px 10px" }}>
        {children}
      </button>
      {copied && (
        <span
          style={{
            position: "absolute",
            top: "-30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "red",
            color: "white",
            padding: "5px 10px",
            borderRadius: "3px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            opacity: 0,
            animation: "fadeInOut 2s",
            pointerEvents: "none"
          }}
        >
          Copied!
        </span>
      )}
    </div>
  );
};

export default CopyButton;
