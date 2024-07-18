import React, { useEffect, useState } from 'react';
import { Scroller } from '../../components';
import { SkillCards } from '../../components';
import './SkillsPage.css';

export default function Skills() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch('./skills.json')
            .then(response => {
                if (!response.ok) {
                    throw new console.error('Failed to fetch skills');
                }
                return response.json();
            })
            .then(data => {setSkills(data.skills)})
            .catch(error => {
                console.log('There was a problem: ', error);
            });
    }, []);
    return (
        <section id='skills' className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>
                My&nbsp;<span className='text-[var(--main-color)]'>skills</span>
            </h1>
            <Scroller />
            <div className='bg-[var(--bg-color)] w-[90%] h-[80%] pb-6 pt-6 text-sm flex flex-row tablet:justify-center items-center cards-container'>
                {skills.map((category, index) => (
                    <SkillCards key={index} title={category.category} skillArr={category.items} />
                ))}
            </div>
        </section>
    )
}
