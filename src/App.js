// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ResumeBuilder from './components/Resume/ResumeBuilder';
import ResumeList from './components/Resume/ResumeList'; // 화면5 추가
import { AuthProvider } from './context/AuthContext';

function App({ baseUrl }) {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home baseUrl={baseUrl} />} />
            <Route path="/login" element={<Login baseUrl={baseUrl} />} />
            <Route path="/register" element={<Register baseUrl={baseUrl} />} />
            <Route path="/resume" element={<ResumeBuilder baseUrl={baseUrl} />} />
            <Route path="/resumes" element={<ResumeList baseUrl={baseUrl} />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
