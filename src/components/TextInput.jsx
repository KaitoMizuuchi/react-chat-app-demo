import React from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";

const TextInput = ({
  type,
  id,
  className,
  placeholder,
  value,
  onChange,
  togglePassOpen,
  errorMsg,
}) => {
  return (
    <div className="c-input">
      <input
        type={type}
        id={id}
        className={`c-input__field ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* idがパスワードの場合は、目隠しボタンを設置 */}
      {id === "password" ? (
        <IconButton
          sx={{
            position: "absolute",
            right: "8px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={togglePassOpen}
        >
          <VisibilityIcon />
        </IconButton>
      ) : null}
      {/* エラーメッセージの有無 */}
      {errorMsg !== "" ? <p className="c-input__error">{errorMsg}</p> : null}
    </div>
  );
};

export default TextInput;
