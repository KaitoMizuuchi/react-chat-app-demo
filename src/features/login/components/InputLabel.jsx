import React from "react";

const InputLabel = ({ id, label, isSpace, children }) => {
  return (
    <label htmlFor={id} className={`p-login__label ${isSpace ? "--mt-4" : ""}`}>
      <p className="p-login__label-title">{label}</p>
      {children}
    </label>
  );
};

export default InputLabel;
