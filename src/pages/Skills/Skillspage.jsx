import React from 'react';
import { Scroller } from '../../components';

export default function Skills() {

    return (
        <section id='skills' className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>
                My&nbsp;<span className='text-cyan'>skills</span>
            </h1>
            <Scroller />
        </section>
    )
}
