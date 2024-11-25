import React from "react";

const InputLabel = ({ id, label, value, isRequired, isConfirm, textInput }) => {
  return (
    <label htmlFor={id} className="p-contact__form-label --mb-4">
      <p className="p-contact__form-label-title">
        {label}
        {isRequired ? (
          <span className="p-contact__form-label-chip">必須</span>
        ) : null}
      </p>
      {/* 確認画面かどうかを三項演算子で条件分岐 */}
      {!isConfirm ? (
        <>{textInput}</>
      ) : (
        <p className="p-contact__confirm-text">{value}</p>
      )}
    </label>
  );
};

export default InputLabel;
