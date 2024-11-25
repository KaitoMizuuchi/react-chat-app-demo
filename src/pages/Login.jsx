import React, { useState } from "react";
import TextInput from "../components/TextInput";
import InputLabel from "../features/login/components/InputLabel";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { validationRequired } from "../utils/validation";

const Login = () => {
  // パスワードの状態管理
  const PASSWORD = "password";
  const TEXT = "text";
  const [inputType, setInputType] = useState(PASSWORD);
  const togglePassOpen = () => {
    const newType = inputType === PASSWORD ? TEXT : PASSWORD;
    setInputType(newType);
  };

  // 入力された値の取得
  const [inputData, setInputData] = useState({
    mail: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  // ログインボタンを押したときの処理
  const navigate = useNavigate();
  const [error, setError] = useState({
    mail: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const newError = {};

    newError.mail = validationRequired(inputData.mail, "メールアドレス");
    newError.password = validationRequired(inputData.password, "パスワード");

    // 文字列がないときのバリデーション
    // newErrorの中身はundefined
    const hasError = Object.values(newError).some((error) => error !== "");

    if (hasError) {
      setError(newError);
      return;
    }
    //ログイン成功
    navigate("/home");
  };

  return (
    <div className="p-login">
      <h1 className="p-login__title">ログイン画面</h1>
      <form className="p-login__form">
        <div className="p-login__form-input-wrapper">
          <InputLabel
            id="mail"
            label="mail:"
            textInput={
              <TextInput
                type="text"
                id="mail"
                className="p-login__form-input"
                placeholder="メールアドレスを入力してください"
                value={inputData.mail}
                onChange={handleInputChange}
                errorMsg={error.mail}
              />
            }
          />
          <InputLabel
            id="password"
            label="password:"
            isSpace
            textInput={
              <TextInput
                type={inputType}
                id="password"
                className="p-login__form-input"
                placeholder="パスワードを入力してください"
                togglePassOpen={togglePassOpen}
                value={inputData.password}
                onChange={handleInputChange}
                errorMsg={error.password}
              />
            }
          />
        </div>
        <div className="p-login__form-btn-wrapper">
          <Button width="250px" label="ログイン" onButtonClick={handleLogin} />
        </div>
      </form>
    </div>
  );
};

export default Login;
