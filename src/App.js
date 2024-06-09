// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResumeList from './components/ResumeList';
import ResumeForm from './components/ResumeForm';

function App({ baseUrl }) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ResumeList baseUrl={baseUrl} />} />
        <Route path="/resumes/:resumeId" element={<ResumeForm baseUrl={baseUrl} />} />
      </Routes>
    </div>
  );
}

export default App;
