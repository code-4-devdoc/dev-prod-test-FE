import React from 'react';

const sections = [
    { id: 'personalInfo', title: 'Personal Information' },
    { id: 'skill', title: 'Skill' },
    { id: 'education', title: 'Education' },
    { id: 'career', title: 'Career' },
    { id: 'project', title: 'Project' },
    { id: 'training', title: 'Training' },
    { id: 'activity', title: 'Activity' },
    { id: 'award', title: 'Award' },
    { id: 'certification', title: 'Certification' },
    { id: 'language', title: 'Language' },
];

const SectionList = ({ addSection }) => {
    return (
        <div className="section-list">
            <h3>Resume Sections</h3>
            <ul>
                {sections.map(section => (
                    <li key={section.id}>
                        {section.title} <button onClick={() => addSection(section)}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SectionList;
