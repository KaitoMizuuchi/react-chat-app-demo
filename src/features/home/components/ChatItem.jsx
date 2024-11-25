import React from "react";

const ChatItem = ({ message, date, status }) => {
  const statusClass = status === "you" ? "--you" : "--me";
  return (
    <li className={`p-chat__box-list ${statusClass}`}>
      <p className="p-chat__box-msg">{message}</p>
      <span className="p-chat__box-date">{date}</span>
    </li>
  );
};

export default ChatItem;
