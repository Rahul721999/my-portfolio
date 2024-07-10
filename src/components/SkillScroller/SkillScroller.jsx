import React, { useEffect } from 'react';
import './SkillScroller.css';

export default function Scroller({ skills }) {
    const totalItems = skills.length;

    // set the total no of items in css
    useEffect(() => {
        document.documentElement.style.setProperty('--total-items', totalItems)
    }, [totalItems]);

    return (
        <div className='skill-scroller'>
            {
                skills.map((skill_name, index) => (
                    <div
                        key={index}
                        className='skill-item'
                        style={{
                            animationDelay: `calc(var(--animation-duration) / var(--total-items) * (var(--total-items) - ${index + 1}) * -1)`,
                        }}
                    >
                        <span id={`Skill ${index + 1}`}>{skill_name}</span>
                    </div>
                ))
            }
        </div>
    );
}
