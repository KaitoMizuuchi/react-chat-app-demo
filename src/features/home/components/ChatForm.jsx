import React, { useContext } from "react";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/button";
import { ChatContext } from "../../../pages/Home";

const ChatForm = ({ handleInputChange, handleSendMsg, errorMsg }) => {
  const { inputData } = useContext(ChatContext);
  return (
    <form className="p-chat__form">
      {/* 送信者のステータス選択欄 */}
      <select
        name="status"
        id="status"
        className="p-chat__form-select"
        value={inputData.status}
        onChange={handleInputChange}
      >
        <option value="you">you</option>
        <option value="me">me</option>
      </select>
      {/* メッセージ入力欄 */}
      <div className="p-chat__form-input-wrapper">
        <TextInput
          id="msg"
          className="p-chat__form-input-field"
          placeholder="メッセージ入力してしてください"
          value={inputData.msg}
          onChange={handleInputChange}
          errorMsg={errorMsg}
        />
      </div>
      <div className="p-chat__form-btn-wrapper">
        <Button width="120px" label="送信" onButtonClick={handleSendMsg} />
      </div>
    </form>
  );
};

export default ChatForm;
