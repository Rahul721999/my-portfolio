import React from 'react';
import { Scroller } from '../components';

export default function Skills() {
    const skills = ['HTML', 'CSS', 'TailWind', 'BootStrap', 'JS', 'Node', 'Express', 'MongoDB', 'PostgreSQL', 'RUST', 'Actix', 'WARP', 'AXUM'];

    return (
        <section id='skills' className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>
                My&nbsp;<span className='text-cyan'>skills</span>
            </h1>
            <Scroller skills={skills} />
        </section>
    )
}
