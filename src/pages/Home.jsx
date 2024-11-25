import React, { createContext, useState } from "react";
import ChatList from "../features/home/components/ChatList";
import ChatForm from "../features/home/components/ChatForm";
import { validationRequired } from "../utils/validation";
import { formatCurrentDate } from "../utils/formatCurrentDate";

export const ChatContext = createContext();

const Home = () => {
  // チャット全体のデータを管理
  const [chatData, setChatData] = useState([]);

  // 入力した状態を管理
  const [inputData, setInputData] = useState({
    msg: "",
    date: "",
    status: "you",
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputData({ ...inputData, [id]: value });
  };

  // バリデーションの状態管理
  const [error, setError] = useState({
    msg: "",
  });

  //リセット処理
  const resetForm = () => {
    setInputData({
      msg: "",
      date: "",
      status: "you",
    });
    setError({});
  };
  // chatDataに入力した内容をセットする処理
  const handleSendMsg = (e) => {
    e.preventDefault();
    // バリデーション
    const newError = {};
    newError.msg = validationRequired(inputData.msg, "メッセージ");
    const hasError = Object.values(newError).some((error) => error !== "");

    if (hasError) {
      setError(newError);
      return;
    }

    // セット
    const newChatData = {
      ...inputData,
      date: formatCurrentDate(),
    };
    setChatData([...chatData, newChatData]);

    resetForm();
  };

  return (
    <ChatContext.Provider value={{ chatData, inputData }}>
      <div className="p-chat">
        <h1 className="p-chat__title">チャット:</h1>
        <ChatList />
        <ChatForm
          handleInputChange={handleInputChange}
          handleSendMsg={handleSendMsg}
          errorMsg={error.msg}
        />
      </div>
    </ChatContext.Provider>
  );
};

export default Home;
