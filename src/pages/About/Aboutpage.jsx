import React, { useEffect, useState } from 'react';
import { AboutImg, Expcard, EducationCard } from '../../components';
import './Aboutpage.css';


export default function About() {
    const [ViewMore, SetViewMore] = useState(false);

    const viewMore = () => {
        SetViewMore(!ViewMore);
    };

    if (!ViewMore) {
        return (
            <section id="about" className='section-container secondary-color'>
                {/* Default view of About section */}
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
                    <a className="btn-type1" onClick={viewMore}>Read More</a>
                </div>
            </section>
        )
    } else {
        return (
            <ReadMore showMore={viewMore} />
        )
    }
}


function ReadMore({ showMore }) {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);
    useEffect(() => {
        fetch('./journey.json')
            .then(response => {
                if (!response.ok) {
                    throw new console.error('Failed to fetch journey history');
                } return response.json();
            })
            .then(data => {
                setEducation(data.education);
                setExperience(data.experience);
            })
            .catch(error => {
                console.error("There was a problem: ", error);
            })
    }, []);

    return (
        <section id="about" className='section-container secondary-color'>
            <h1 className='text-4xl font-bold flex justify-center laptop:text-6xl items-center mb-12'>My&nbsp;<span className='text-cyan'>Journey</span></h1>

            {/* My Journey container */}
            <div className='journey-container flex tablet:flex-col w-screen tablet:w-[90%] laptop:w-[80%] h-[70%] overflow-scroll pl-2'>
                {/* Education section */}
                <div className='flex flex-col tablet:justify-start w-full tablet:w-[50%] order-2 tablet:order-1 h-full pb-10'>
                    <h2 className='title text-2xl tablet:text-4xl font-semibold'>Education</h2>
                    <div className='education-box'>
                        {education.map((e, index) => (
                            <EducationCard key={index} education={e} />
                        ))}
                    </div>
                </div>

                {/* Exprerience section */}
                <div className='flex flex-col tablet:w-[50%] order-1 tablet:order-2 h-full'>
                    <h2 className='title text-2xl tablet:text-4xl font-semibold'>Experience</h2>
                    <div className='experience-box'>
                        {experience.map((e, index) => (
                            <Expcard key={index} experience={e} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-12 flex justify-center mt-10">
                <a className="btn-type1" onClick={showMore}>Close</a>
            </div>
        </section>
    )
}