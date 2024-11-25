import React from "react";

const Button = ({ width, label, onButtonClick, className }) => {
  return (
    <button
      type="button"
      className={`c-btn ${className}`}
      style={{ width }}
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
