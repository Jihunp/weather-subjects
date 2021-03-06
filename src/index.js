import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/HomePage';
import reportWebVitals from './reportWebVitals';
import Welcome from "./components/Welcome"



ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Welcome />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
