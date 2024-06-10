import React from 'react';

const Section = ({ section }) => {
    const renderSectionFields = () => {
        switch (section.id) {
            case 'personalInfo':
                return (
                    <>
                        <div>
                            <label>Photo: </label>
                            <input type="file" />
                        </div>
                        <div>
                            <label>Name: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Contact: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>GitHub/Blog URL: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Summary: </label>
                            <textarea />
                        </div>
                    </>
                );
            case 'skill':
                return (
                    <>
                        <div>
                            <label>Skills: </label>
                            <textarea />
                        </div>
                    </>
                );
            case 'education':
                return (
                    <>
                        <div>
                            <label>School Name: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Major: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Status: </label>
                            <input type="text" />
                        </div>
                    </>
                );
            case 'career':
                return (
                    <>
                        <div>
                            <label>Company Name: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Job Title: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Period: </label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Job Description: </label>
                            <textarea />
                        </div>
                    </>
                );
            // 기타 섹션도 유사한 방식으로 구현
            default:
                return null;
        }
    };

    return (
        <div className="section">
            <h4>{section.title}</h4>
            {renderSectionFields()}
        </div>
    );
};

export default Section;
