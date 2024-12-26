import React, { useState } from "react";

// Style
import './Videobox.css';
import SideBarPatient from "../../componenets/SideBarPatient/SideBarPatient";

function Videobox() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [videoCallActive, setVideoCallActive] = useState(false);

  // Handle message input with validation
  const handleMessageInput = (e) => {
    const input = e.target.value;

    if (/\d{4,}/.test(input)) {
      alert("Message cannot contain phone numbers or 4+ consecutive digits.");
      return;
    }

    setMessage(input);
  };

  // Handle sending a message
  const sendMessage = () => {
    if (message.trim() === "") {
      alert("Message cannot be empty.");
      return;
    }

    setMessages([...messages, { text: message, sender: "user" }]);
    setMessage("");
  };

  // Toggle between chat and video call
  const handleSwitch = () => {
    setVideoCallActive(!videoCallActive);
  };

  return (
    <div className="container-fluid p-0 d-flex">
      {/* <SideBarPatient /> */}
      <div className="interface m-5 w-100">
        <div className="chatuser d-flex justify-content-between align-items-center">
          <p className="p-2">Name:</p>
          <button onClick={handleSwitch} className="btn m-2 w-25">
            {videoCallActive ? "Switch to Chat" : "Switch to Video Call"}
          </button>
        </div>

        {/* Chat Interface */}
        {!videoCallActive && (
          <div className="chat-container mt-5">
            <div className="messages m-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message mb-3 p-1 ${msg.sender === "user" ? "user" : "doctor"
                    }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="chatbox p-2 d-flex align-items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="p-2 mb-2"
                onChange={handleMessageInput}
                value={message}
              />
              <button onClick={sendMessage} className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        )}

        {/* Video Call Interface */}
        {videoCallActive && (
          <div className="video-call-container d-flex flex-column align-items-center mt-5">
            <div className="video-feed">
              <div className="doctor-video bg-secondary rounded mb-3">
                <p className="text-center text-white p-3">Doctor's Video Feed</p>
              </div>
              <div className="patient-video bg-dark rounded">
                <p className="text-center text-white p-3">Your Video Feed</p>
              </div>
            </div>
            <div className="video-controls d-flex justify-content-between mt-3 ">
              <button className=" btn-danger mx-2 mb-2">End Call</button>
              <button className=" btn-secondary mx-2 mb-2">Mute</button>
              <button className=" btn-secondary mx-2 mb-2">Turn Off Camera</button>
            </div>
          </div>
        )}

        {/* Additional Information Section */}
        <div className="activity d-flex flex-wrap justify-content-between mt-5">
          <div className="count1">
            <h3>My Activity</h3>
            <div className="countbox">
              <div className="count-text1 m-4 p-1">
                <p>Login Sessions displays here to ensure account privacy</p>
              </div>
            </div>
          </div>
          <div className="count1">
            <h3>Join a Community Today</h3>
            <div className="countbox">
              <div className="count-text1 m-4 p-1">
                <p>Ladies Wings</p>
                <button type="submit" className="mt-5">Join</button>
              </div>
            </div>
          </div>
          <div className="count1">
            <h3>Doctors</h3>
            <div className="countbox">
              <div className="count-text1 mb-2">
                <div className="countdp">
                  <img src="" alt="doctor image" />
                </div>
                <div className="count-text m-4 p-1">
                  <h3>Dr Enitan</h3>
                  <p>General Doctor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videobox;
