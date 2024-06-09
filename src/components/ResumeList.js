// ResumeList.js

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function ResumeList({ baseUrl }) {
  const [resumes, setResumes] = useState([]);
  const navigate = useNavigate();

  // Resume 목록 조회 & 새로고침
  const fetchResumes = useCallback(async () => {
    try {
      const response = await fetch(`${baseUrl}/api/resumes`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResumes(data);
    } catch (error) {
      console.error('Failed to fetch resumes', error);
    }
  }, [baseUrl]);

  useEffect(() => {
    fetchResumes();
  }, [fetchResumes]);

  // Resume 테이블 생성
  const createResume = useCallback(async () => {
    try {
      const response = await fetch(`${baseUrl}/api/resumes`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchResumes();
    } catch (error) {
      console.error('Failed to create resume', error);
    }
  }, [baseUrl, fetchResumes]);

  // Resume 테이블 삭제
  const deleteResume = useCallback(async (id) => {
    try {
      const response = await fetch(`${baseUrl}/api/resumes/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchResumes();
    } catch (error) {
      console.error('Failed to delete resume', error);
    }
  }, [baseUrl, fetchResumes]);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Resume List</h2>
      <button onClick={createResume} style={{ fontSize: '2rem', padding: '1rem' }}>+</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {resumes.map(resume => (
          <li key={resume.id} style={{ marginTop: '1rem' }}>
            <button onClick={() => navigate(`/resumes/${resume.id}`)}>{`Resume ${resume.id}`}</button>
            <button onClick={() => deleteResume(resume.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeList;
