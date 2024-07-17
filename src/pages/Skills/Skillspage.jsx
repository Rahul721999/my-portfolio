import React from 'react';
import { Scroller } from '../../components';
import { SkillCards } from '../../components';
import './SkillsPage.css';

export default function Skills() {
    return (
        <section id='skills' className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>
                My&nbsp;<span className='text-cyan'>skills</span>
            </h1>
            <Scroller />
            <div className=' w-[90%] h-[80%] pb-6 pt-6 text-sm flex flex-col relative items-center cards-container'>
                <SkillCards />
            </div>
        </section>
    )
}
