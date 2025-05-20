import React, { useState } from "react";
import {
  useHMSActions,
  useHMSStore,
  selectHMSMessages,
} from "@100mslive/react-sdk";

const Chat = () => {
  const hmsActions = useHMSActions();
  const messages = useHMSStore(selectHMSMessages);
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (message.trim() === "") return;

    await hmsActions.sendBroadcastMessage(message);
    setMessage("");
  };

  return (
    <div className="chat-box">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.senderName}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
