// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/Home.css';
import './styles/ResumeBuilder.css';
import './styles/ResumeList.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// 환경변수를 사용해 개발환경(localhost) or 배포환경(krampoline) 구분
const BASE_URL = process.env.REACT_APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App baseUrl={BASE_URL} />
  </React.StrictMode>
);

reportWebVitals();
