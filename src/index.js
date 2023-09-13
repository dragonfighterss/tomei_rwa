import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/Rand-Light/fonts.css';
import './assets/fonts/Rand-Medium/fonts.css';
import './assets/fonts/Rand-Thin/fonts.css';
import './assets/fonts/TTF/RapidST_Regular.ttf'; 
import './assets/fonts/WOFF/RapidST_Regular.woff'; 
import './assets/fonts/WOFF2/RapidST_Regular.woff2'; 
import './assets/fonts/OTF/RapidST_Regular.otf'; 

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
