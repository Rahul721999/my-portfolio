import React from 'react';
import { AboutImg } from '../../components';

export default function About() {
    return (
        <section id="about" className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center'>About&nbsp;<span className='text-cyan'>Me</span></h1>
            <div className='inline-block justify-center items-center'><AboutImg /></div>
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
                <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan bg-cyan text-dark-theme hire-me-btn">Read More</a>
            </div>
        </section>
    )
}
