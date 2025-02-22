import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';


function App() {
  return (
    <div >
        <div>
        <Header />
        </div>
        <Home />
        <div class = 'footer'>
        <Footer />
        </div>
      </div>
  );
}

export default App;
