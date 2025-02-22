import React from 'react';
import { FaRobot } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Chatboticon.css';  

const Chatboticon = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chatbot');  // Navigate to the chatbot page
  };

  return (
    <div
      onClick={handleClick}
      className="chatbot-icon"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '50%',
        padding: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <FaRobot size={30} />
    </div>
  );
};

export default Chatboticon;
