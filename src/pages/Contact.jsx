import React, { useState } from "react";
import InputLabel from "../features/contact/components/InputLabel";
import TextInput from "../components/TextInput";
import TextAreaLabel from "../features/contact/components/TextAreaLabel";
import Button from "../components/button";
import { validationRequired } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  // 入力状態の管理
  const [inputData, setInputData] = useState({
    name: "",
    mail: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  // 確認画面に遷移する
  const [isConfirm, setIsConfirm] = useState(false);
  const [error, setError] = useState({});

  const validatedInput = () => {
    const newError = {};
    newError.name = validationRequired(inputData.name, "お名前");
    newError.mail = validationRequired(inputData.mail, "メールアドレス");
    newError.content = validationRequired(
      inputData.content,
      "お問い合わせ内容"
    );

    const hasError = Object.values(newError).some((error) => error !== "");

    return { newError, hasError };
  };

  // 「確認画面へ」のボタンを押したときの処理
  const toggleTransition = (e) => {
    e.preventDefault();
    const { newError, hasError } = validatedInput();

    if (hasError) {
      setError(newError);
      return;
    }
    console.log(inputData);

    setError({});
    setIsConfirm(true);
  };

  // 送信ボタンを押したときの処理
  const navigate = useNavigate();
  const handleSend = (e) => {
    e.preventDefault();
    const isSend = window.confirm(
      `
      name: ${inputData.name}\n
      mail: ${inputData.mail}\n
      content: ${inputData.content}\n
      上記の内容で送信します
      `
    );
    if (!isSend) return;
    navigate("/home");
  };
  return (
    <div className="p-contact">
      <h1 className="p-contact__title">お問い合わせ</h1>
      <form className="p-contact__form">
        <InputLabel
          id="name"
          value={inputData.name}
          label="お名前"
          isRequired
          isConfirm={isConfirm}
        >
          <TextInput
            id="name"
            placeholder="名前を入力"
            value={inputData.name}
            onChange={handleInputChange}
            errorMsg={error.name}
          />
        </InputLabel>
        <InputLabel
          id="mail"
          value={inputData.mail}
          label="メールアドレス"
          isRequired
          isConfirm={isConfirm}
        >
          <TextInput
            id="mail"
            placeholder="メールアドレスを入力"
            value={inputData.mail}
            onChange={handleInputChange}
            errorMsg={error.mail}
          />
        </InputLabel>

        <TextAreaLabel
          id="content"
          label="お問い合わせ内容"
          placeholder="お問い合わせ内容を入力"
          value={inputData.content}
          isRequired
          handleInputChange={handleInputChange}
          isConfirm={isConfirm}
          errorMsg={error.content}
        />
        <div className="p-contact__form-btn-wrapper">
          {!isConfirm ? (
            <Button
              width="170px"
              label="確認画面へ"
              onButtonClick={toggleTransition}
            />
          ) : (
            <>
              <Button
                width="170px"
                label="戻る"
                className="p-content__form-send-btn"
                onButtonClick={() => setIsConfirm(false)}
              />
              <Button
                width="170px"
                label="送信"
                className="p-content__form-send-btn --blue"
                onButtonClick={handleSend}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
