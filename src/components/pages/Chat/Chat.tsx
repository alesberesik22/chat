import React from "react";
import "./Chat.scss";
import Navbar from "../../Navbar/Navbar";
import Chatwindow from "./Chatwindow/Chatwindow";

const Chat = () => {
  return (
    <div className="chat_page">
      <Navbar />
      <Chatwindow />
    </div>
  );
};

export default Chat;
