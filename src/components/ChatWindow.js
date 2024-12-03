import React, { useState, useEffect, useRef } from "react";
import { FaPaperclip,  FaVideo } from "react-icons/fa";

const ChatWindow = ({ doctor, onDoctorChange }) => {
  const [message, setMessage] = useState(""); // State to hold the typed message
  const [messages, setMessages] = useState([]); // State to hold the list of messages
  const [isVideoCall, setIsVideoCall] = useState(false); // For video call
  const [videoStream, setVideoStream] = useState(null); // For managing local video stream
  const [peerConnection, setPeerConnection] = useState(null); // For managing peer connection

  const videoRef = useRef(); // Reference to local video element
  const remoteVideoRef = useRef(); // Reference to remote video element
  //const mediaRecorderRef = useRef(null); // Ref to store media recorder instance

  useEffect(() => {
    if (isVideoCall) {
      startVideoCall();
    }
    return () => {
      if (isVideoCall) {
        endVideoCall();
      }
    };
  }, [isVideoCall]);

  // Start video call by initializing WebRTC
  const startVideoCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setVideoStream(stream);
      videoRef.current.srcObject = stream;

      const pc = new RTCPeerConnection();
      setPeerConnection(pc);

      // Add local stream tracks to the peer connection
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      pc.onicecandidate = (event) => {
        if (event.candidate) {
          // Handle ICE candidates here (e.g., send to the server)
        }
      };

      pc.ontrack = (event) => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = event.streams[0];
        }
      };

      // Create and send offer to the doctor (simplified)
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
    } catch (err) {
      console.error("Error starting video call:", err);
    }
  };

  // End video call
  const endVideoCall = () => {
    if (peerConnection) {
      peerConnection.close();
    }
    if (videoStream) {
      videoStream.getTracks().forEach((track) => track.stop());
    }
    setIsVideoCall(false);
    setPeerConnection(null);
    setVideoStream(null);
  };

  // Handle sending a text message
  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        type: "text",
        content: message,
        sender: "patient",
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
      setMessage(""); // Clear the message input
    }
  };

  // Handle file attachment
  const handleFileAttachment = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newMessage = {
        type: "file",
        content: file,
        sender: "patient",
        timestamp: new Date().toISOString(),
      };
      setMessages([...messages, newMessage]);
    }
  };

  // Handle key press (Enter to send message)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && message.trim()) {
      handleSendMessage();
    }
  };

  // Handle doctor change (clear messages when doctor is changed)
  useEffect(() => {
    setMessages([]); // Clear messages when a new doctor is selected
  }, [doctor]);

  return (
    <div className="chat-window bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
      {/* Header */}
      <div className="chat-header flex items-center border-b pb-3 mb-4">
        <div className="relative w-12 h-12 mr-4">
          <img
            src={doctor.profilePicture || "default-avatar.png"}
            alt={doctor.name}
            className="w-full h-full object-cover rounded-full"
            style={{ objectFit: "cover" }}
          />
          {/* Overlay doctor's image inside video call window */}
          {isVideoCall && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                backgroundImage: `url(${doctor.profilePicture || "default-avatar.png"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
              }}
            />
          )}
        </div>
        <div>
          <h3 className="font-semibold">{doctor.name}</h3>
          <p className="text-sm text-gray-500">{doctor.specialty || "General Practitioner"}</p>
        </div>
      </div>

      {/* Message List */}
      <div className="message-list overflow-y-auto max-h-80 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "patient" ? "text-right" : "text-left"} mb-3`}
          >
            {msg.type === "text" && (
              <div className={`message-text ${msg.sender === "patient" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} p-2 rounded-lg inline-block`}>
                {msg.content}
              </div>
            )}
            {msg.type === "file" && (
              <div className="message-file">
                {msg.content.type.startsWith("image/") ? (
                  <img src={URL.createObjectURL(msg.content)} alt="attachment" className="w-32 h-32 object-cover rounded-lg" />
                ) : (
                  <span className="text-sm text-gray-600">File: {msg.content.name}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="input-section flex items-center border-t pt-3">
        {/* Video Call Button */}
        <button
          onClick={() => setIsVideoCall(!isVideoCall)}
          className="video-call-btn mr-4 text-gray-500"
        >
          <FaVideo />
        </button>

        {/* File Attachment */}
        <label htmlFor="file-upload" className="cursor-pointer">
          <FaPaperclip className="text-gray-500 mr-4" />
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileAttachment}
        />

        {/* Message Input */}
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="message-input flex-1 p-2 border rounded-lg mr-4"
          placeholder="Type a message..."
        />

        {/* Send Button */}
        <button
          onClick={handleSendMessage}
          className="send-btn bg-blue-500 text-white p-2 rounded-lg"
        >
          Send
        </button>
      </div>

      {/* Video Call Modal */}
      {isVideoCall && (
        <div className="video-call-modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="video-call-window bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
            <div className="video-call-header flex justify-between mb-4">
              <h3 className="text-xl font-semibold">Video Call</h3>
              <button
                onClick={endVideoCall}
                className="text-red-500 hover:text-red-700"
              >
                End Call
              </button>
            </div>
            <div className="video-call-body grid grid-cols-2 gap-4">
              <div className="video-call-local">
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="w-full rounded-lg border"
                />
                <p className="text-center mt-2">You</p>
              </div>
              <div className="video-call-remote">
                <video
                  ref={remoteVideoRef}
                  autoPlay
                  className="w-full rounded-lg border"
                />
                <p className="text-center mt-2">{doctor.name}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
