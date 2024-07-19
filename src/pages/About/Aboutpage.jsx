import React from 'react';
import { AboutImg } from '../../components';

export default function About() {
    return (
        <section id="about" className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center mb-12'>About&nbsp;<span className='text-cyan'>Me</span></h1>
            <AboutImg />
            <h3 className='text-2xl laptop:text-3xl font-bold gradient-text'>Rust Software Developer</h3>
            <p className="italic text-pretty items-center flex tablet:text-lg text-sm tablet:text-left my-5 mb-10 ">
                As a software developer,
                I'm passionate about building robust, efficient, and scalable apps.
                I'm an expert in Rust programming language and full-stack development,
                with skills in JavaScript, HTML/CSS, Rust, and SQL.
                I stay up-to-date with latest tech and best practices
                and collaborate to create innovative solutions that make a positive impact.
            </p>
            <div className="w-full h-12 flex justify-center">
                <a href="#" className="btn-type1">Read More</a>
            </div>
        </section>
    )
}
