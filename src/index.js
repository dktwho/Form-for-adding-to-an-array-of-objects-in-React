import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br />
    <hr />
    <App2 />
    <br />
    <hr />
    <App3 />
    <br />
    <hr />
    <App4 />
  </React.StrictMode>
);


