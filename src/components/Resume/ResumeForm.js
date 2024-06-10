import React from 'react';
import Section from './Section';

const ResumeForm = ({ selectedSections = [], baseUrl }) => {
    const saveResume = () => {
        // 이력서를 저장하는 로직 작성
    };

    const previewResume = () => {
        // 이력서 미리보기 로직 작성
    };

    return (
        <div className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.length > 0 ? (
                selectedSections.map((section, index) => (
                    <Section key={index} section={section} />
                ))
            ) : (
                <p>No sections selected.</p>
            )}
            <button onClick={saveResume}>Save</button>
            <button onClick={previewResume}>Preview</button>
        </div>
    );
};

export default ResumeForm;
