import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [botResponse, setBotResponse] = useState(''); // Warning: botResponse is unused

  const handleSendMessage = async () => {
    setChatHistory([...chatHistory, { user: true, message: userMessage }]);
    setUserMessage('');

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/gpt2',
        { inputs: userMessage }
      );

      const botReply = response.data[0]?.generated_text || "Sorry, I didn't understand that.";
      setBotResponse(botReply); // ✅ Updating botResponse

      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user: false, message: botReply },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setBotResponse('Sorry, there was an issue with the bot.');
    }
  };

  return (
    <div className="chatbot-container">
      <h1>Chatbot</h1>
      <div className="chat-history">
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.user ? 'chat-user' : 'chat-bot'}>
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      {/* ✅ Display latest bot response */}
      <div className="bot-response">
        <p>{botResponse}</p>
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
