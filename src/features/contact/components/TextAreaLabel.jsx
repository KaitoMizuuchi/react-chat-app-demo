import React from "react";

const TextAreaLabel = ({
  id,
  value,
  label,
  placeholder,
  isRequired,
  handleInputChange,
  isConfirm,
  errorMsg,
}) => {
  return (
    <label htmlFor={id} className="p-contact__form-label">
      <p className="p-contact__form-label-title">
        {label}
        {isRequired ? (
          <span className="p-contact__form-label-chip">必須</span>
        ) : null}
      </p>
      {/* 確認画面かどうか確認 */}
      {!isConfirm ? (
        <>
          <textarea
            id={id}
            className="p-contact__form-textarea"
            value={value}
            placeholder={placeholder}
            onChange={handleInputChange}
          ></textarea>
          {errorMsg && (
            <p className="p-contact__form-error --sm-bottom">{errorMsg}</p>
          )}
        </>
      ) : (
        <p className="p-contact__confirm-text">{value}</p>
      )}
    </label>
  );
};

export default TextAreaLabel;
