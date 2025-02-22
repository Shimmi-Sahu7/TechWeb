import React from 'react';
import './LanguageBox.css'; 
import { Link } from 'react-router-dom';

const LanguageBox = ({ language, id }) => {
  return (
    <div className="language-box" id={id}>
        <Link to={`/courses/${id}`} className="language-link">
        <h2>{language} Materials</h2>
        <p>Here you'll find resources for learning {language}...</p>
      </Link>
      
    </div>
  );
};

export default LanguageBox;