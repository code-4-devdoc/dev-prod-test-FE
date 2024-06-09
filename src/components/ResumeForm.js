// ResumeForm.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SkillForm from './SkillForm';
import SkillData from './SkillData';
import ProjectForm from './ProjectForm';
import ProjectData from './ProjectData';

function ResumeForm({ baseUrl }) {
    const { resumeId } = useParams();
    const [isSkillActive, setIsSkillActive] = useState(false);
    const [isProjectActive, setIsProjectActive] = useState(false);
    const [shouldRefreshSkillData, setShouldRefreshSkillData] = useState(false);
    const [shouldRefreshProjectData, setShouldRefreshProjectData] = useState(false);

    // Skill 테이블 자동 새로고침
    const handleSkillSubmit = () => {
        setShouldRefreshSkillData(prevState => !prevState);
    };

    // Project 테이블 자동 새로고침
    const handleProjectSubmit = () => {
        setShouldRefreshProjectData(prevState => !prevState);
    };

    return (
        <div className="ResumeForm" style={{ textAlign: 'center' }}>
            <h1>Resume Form</h1>
            <div>
                <button
                    style={{ marginRight: '10px', backgroundColor: isSkillActive ? 'yellow' : 'transparent' }}
                    onClick={() => setIsSkillActive(!isSkillActive)}
                >
                    SKILL
                </button>
                <button
                    style={{ backgroundColor: isProjectActive ? 'yellow' : 'transparent' }}
                    onClick={() => setIsProjectActive(!isProjectActive)}
                >
                    PROJECT
                </button>
            </div>
            {isSkillActive && (
                <>
                    <SkillForm baseUrl={baseUrl} resumeId={resumeId} onSubmit={handleSkillSubmit} />
                </>
            )}
            {isProjectActive && (
                <>
                    <ProjectForm baseUrl={baseUrl} resumeId={resumeId} onSubmit={handleProjectSubmit} />
                    <div style={{ margin: '20px 0' }}></div>
                </>
            )}
            {isSkillActive && (
                <>
                    <SkillData baseUrl={baseUrl} resumeId={resumeId} shouldRefreshSkillData={shouldRefreshSkillData} />
                </>
            )}
            {isProjectActive && (
                <>
                    <ProjectData baseUrl={baseUrl} resumeId={resumeId} shouldRefreshProjectData={shouldRefreshProjectData} />
                </>
            )}
        </div>
    );
}

export default ResumeForm;
