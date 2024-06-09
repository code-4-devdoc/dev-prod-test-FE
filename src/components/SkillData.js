// SkillData.js

import React, { useState, useEffect, useCallback } from 'react';

function SkillData({ baseUrl, resumeId, shouldRefreshSkillData }) {
    const [skills, setSkills] = useState([]);

    // Skill 테이블 조회 & 새로고침
    const fetchSkills = useCallback(async () => {
        try {
            const response = await fetch(`${baseUrl}/api/resumes/${resumeId}/skills`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSkills(data);
        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    }, [baseUrl, resumeId]);

    useEffect(() => {
        if (resumeId) {
            fetchSkills();
        }
    }, [fetchSkills, resumeId, shouldRefreshSkillData]);

    // Skill 테이블 삭제
    const handleDeleteSkill = useCallback(async (id) => {
        try {
            await fetch(`${baseUrl}/api/resumes/${resumeId}/skills/${id}`, {
                method: 'DELETE'
            });
            fetchSkills();
        } catch (error) {
            console.error('Error deleting skill:', error);
        }
    }, [baseUrl, resumeId, fetchSkills]);

    return (
        <div>
            <h3>SKILL 조회</h3>
            <ul>
                {skills.map((skill) => (
                    <div key={skill.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                        <li key={skill.id}>
                            <div>
                                <strong>기술명:</strong> {skill.title}
                            </div>
                            <div>
                                <strong>부연설명:</strong> {skill.content}
                            </div>
                            <strong>id:</strong> &nbsp; {skill.id} &nbsp;&nbsp;&nbsp;
                            <button onClick={() => handleDeleteSkill(skill.id)}>X</button>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default SkillData;
