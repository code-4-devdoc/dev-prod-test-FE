// ProjectForm.js

import React, { useState } from 'react';

function ProjectForm({ baseUrl, resumeId, onSubmit }) {
    const [projectTitle, setProjectTitle] = useState('');
    const [projectContent, setProjectContent] = useState('');
    const [projectPeriodStart, setProjectPeriodStart] = useState('');
    const [projectPeriodEnd, setProjectPeriodEnd] = useState('');
    const [isInProgress, setIsInProgress] = useState(false);

    // Project 테이블 생성 & 새로고침
    const handleProjectSubmit = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/resumes/${resumeId}/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: projectTitle,
                    content: projectContent,
                    period: `${projectPeriodStart} to ${projectPeriodEnd}`,
                    current: isInProgress
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setProjectTitle('');
            setProjectContent('');
            setProjectPeriodStart('');
            setProjectPeriodEnd('');
            setIsInProgress(false);
            onSubmit();
        } catch (error) {
            console.error('Error submitting project:', error);
        }
    };

    return (
        <div>
            <h2>PROJECT 입력폼</h2>
            <div>
                <label>
                    프로젝트명:
                    <input type="text" value={projectTitle} onChange={(e) => setProjectTitle(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    부연설명:
                    <input type="text" value={projectContent} onChange={(e) => setProjectContent(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    프로젝트 시작일:
                    <input type="date" value={projectPeriodStart} onChange={(e) => setProjectPeriodStart(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    프로젝트 종료일:
                    <input type="date" value={projectPeriodEnd} onChange={(e) => setProjectPeriodEnd(e.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    진행여부:
                    <input type="radio" name="progress" checked={isInProgress} onChange={() => setIsInProgress(true)} /> 진행중
                    <input type="radio" name="progress" checked={!isInProgress} onChange={() => setIsInProgress(false)} /> 완료
                </label>
            </div>
            <button onClick={handleProjectSubmit}>Submit</button>
        </div>
    );
}

export default ProjectForm;
