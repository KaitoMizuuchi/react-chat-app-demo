import React, { useContext } from "react";
import { ChatContext } from "../../../pages/Home";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { chatData } = useContext(ChatContext);
  return (
    <ul className="p-chat__box">
      {chatData && chatData.length !== 0
        ? chatData.map((item, index) => (
            <ChatItem
              key={index}
              message={item.msg}
              date={item.date}
              status={item.status}
            />
          ))
        : null}
    </ul>
  );
};

export default ChatList;
