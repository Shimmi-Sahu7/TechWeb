import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import reportWebVitals from './reportWebVitals';
import CoursePage from './Pages/CoursePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Chatbot from './Components/Chatbot';  // Import the Chatbot icon button

const router = createBrowserRouter([
  {
      path: '/',
      element: <App />,
  },
  {
     path:"/courses/:courseId",
     element:<CoursePage/>,

  },
  {
    path: '/login',
    element: <Login />,
},
{
  path: '/signup', 
  element: <Signup />,
},
{
  path: '/chatbot', // Define the route for the chatbot
  element: <Chatbot />, // Render the Chatbot component when navigating to /chatbot
},

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
