import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
  <div class="header">
     <h1>Welcome to TechWebStuff</h1>
     <Link to = '/login' class = "loginbutton">Login</Link>
     <Link to = '/signup' class = "loginbutton">Signup</Link>
  </div>
     
  );
};
export default Header;