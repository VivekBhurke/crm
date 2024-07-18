import React, { useState } from "react";
import "./Chat.css";
import BernardShane from '../../Images/Chat/BernardShane.png'
const chatMembers = [
  {
    name: "Bernard Shane",  
    message: "Can we have a call today?",
    time: "12:37 PM",
    image: {BernardShane},
  },
  {
    name: "Sophia Petrova",
    message: "Please join the meeting.",
    time: "12:37 PM",
    image: {BernardShane},
  },
  {
    name: "Colin Miller",
    message: "Image",
    time: "Yesterday",
    image: "path/to/colin-miller-image",
  },
  {
    name: "Kaden Fane",
    message: "When will you send Excel file? Things are ...",
    time: "Yesterday",
    image: "path/to/kaden-fane-image",
  },
  {
    name: "Anthony Cook",
    message: "How are you John? Please revert when free is ...",
    time: "6/29/2024",
    image: "path/to/anthony-cook-image",
  },
  {
    name: "Sofia Santos",
    message: "Let's have a call today.",
    time: "6/27/2024",
    image: "path/to/sofia-santos-image",
  },
  {
    name: "Samira Al-Mousa",
    message: "Let's have a call today.",
    time: "6/27/2024",
    image: "path/to/samira-al-mousa-image",
  },
  {
    name: "Clinton Barton",
    message: "3:07",
    time: "5/01/2024",
    image: "path/to/clinton-barton-image",
  },
];

const messages = {
  "Bernard Shane": [
    { message: "Hi John! Good Morning. How are you? How is your family?", time: "12:13 PM", sender: "Bernard Shane" },
    { message: "I am good. Thanks! I wanted to ask about the leads file. Do you have it?", time: "12:38 PM", sender: "Bernard Shane" },
    { message: "Hi Bernard! Good Morning buddy. All good. How have you been?", time: "12:13 PM", sender: "John Doe" },
    { message: "Yes, I have the file but it is not complete. Will send you once completed.", time: "12:46 PM", sender: "John Doe" },
    { message: "Hi buddy! What's up? I have emailed you the file. Please check.", time: "9:40 PM", sender: "John Doe" },
  ],
  "Sophia Petrova": [
    { message: "Please join the meeting.", time: "12:37 PM", sender: "Sophia Petrova" },
  ],
};

function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="ChatContainer">
      
      <div className="ChatContent">
        <div className="ChatBody">
          <div className="ChatList">
            {chatMembers.map((member, index) => (
              <div
                key={index}
                className={`ChatItem ${
                  selectedChat && selectedChat.name === member.name ? "active" : ""
                }`}
                onClick={() => setSelectedChat(member)}
              >
                <img src={member.image} alt="User" />
                <div className="ChatDetails">
                  <div className="ChatName">{member.name}</div>
                  <div className="ChatMessage">{member.message}</div>
                </div>
                <div className="ChatTime">{member.time}</div>
              </div>
            ))}
          </div>
          <div className="ChatWindow">
            {selectedChat ? (
              <div className="ChatMessages">
                {messages[selectedChat.name]?.map((message, index) => (
                  <div key={index} className={`Message ${message.sender === "John Doe" ? "sent" : "received"}`}>
                    <p>{message.message}</p>
                    <span>{message.time}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ChatWelcome">
                <img src="welcome-icon-url" alt="Welcome" />
                <div className="WelcomeMessage">
                  Chats with team
                  <p>Send and receive messages with your team members.</p>
                </div>
              </div>
            )}
            {selectedChat && (
              <div className="ChatInput">
                <input type="text" placeholder="Type a message" />
                <button>Send</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
