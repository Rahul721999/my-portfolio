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
                <h3 className='text-2xl laptop:text-3xl font-bold gradient-text'>Software Engineer</h3>

                <div className="flex flex-col text-center italic my-5 mb-10 tablet:text-lg text-sm font-light">
                    <p>
                        My journey into the world of software development started with a curiosity about how websites are built and function.
                        Over the years, I've honed my skills through various projects, both personal and professional, 
                        continuously learning and adapting to the ever-evolving landscape of web technologies.
                    </p>
                    <span className='mt-10 text-xl font-bold text-[var(--main-color)]'>Welcome to the World of a Visionary Software Artisan!

</span>
                    <p>
                        I believe that the best web applications are born from a blend of creativity and technical expertise. I approach every project with a user-first mindset, aiming to create solutions that are not only functional but also enjoyable to use.
                    </p>
                </div>

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
            <div className='journey-container flex tablet:flex-col w-[100%] tablet:w-[90%] laptop:w-[80%] h-[70%] overflow-scroll pl-2'>
                {/* Education section */}
                <div className='flex flex-col w-full tablet:w-[50%] order-2 tablet:order-1 h-auto pb-5'>
                    <h2 className='title text-2xl tablet:text-4xl font-semibold'>Education</h2>
                    <div className='education-box'>
                        {education.map((e, index) => (
                            <EducationCard key={index} education={e} />
                        ))}
                    </div>
                </div>

                {/* Exprerience section */}
                <div className='flex flex-col tablet:w-[50%] order-1 tablet:order-2 h-auto'>
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