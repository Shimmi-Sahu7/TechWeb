import React from 'react';
import LanguageBox from './LanguageBox';
import Chatboticon from './Chatboticon';
const languages = [
  { id: 'Java', name: 'Java' },
  { id: 'cpp', name: 'C++' },
  { id: 'py', name: 'Pyhton' },
  { id: 'html', name: 'HTML' },
  { id: 'css', name: 'CSS' },
  { id: 'js', name: 'JAVASCRIPT' },
];


const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Select a Programming Language</h1>
      <div>
      {languages.map(lang => (
          <LanguageBox key={lang.id} language={lang.name} id={lang.id} />

        ))}
      </div>
      {/* Display ChatbotIcon on the home page */}
      <Chatboticon />

    </div>
  );
};


export default Home;
