import React from 'react';
import './Expcard.css';


const EducationCard = ({ education }) => {
    const course = education?.degree || "Unknown Degree";
    const org = education?.org || "Unknown Organization";
    const date = education?.date || "Unknown Date";
    const field = education?.field || "Unknown Field";
    const cgpa = education?.cgpa || "Unknown cgpa";
    return (
        <div className="edu-card relative tablet:w-[90%] bg-[--bg-color]">
            <div className='Card-Heading pl-3 laptop:flex-row'>
                {/* <h2 className='Title font-semibold'>{org}</h2> */}
                <h2 className='Title text-sm font-semibold'>{course} &nbsp;|&nbsp; {org}</h2>
                <h3 className='Date text-xs relative text-[var(--main-color)]'>{date}</h3>
            </div>
            <div className='Card-body m-3'>
                <div className='text-xs tablet:text-sm'>
                    <span className='font-bold'>Subs:</span>
                    <span className='ml-5 font-light'>{field}</span>
                </div>
                <div className='text-xs tablet:text-sm'>
                    <span className='font-bold'>CGPA:</span>
                    <span className='ml-5 font-light'>{cgpa}</span>
                </div>
            </div>
        </div>
    )
}


const Expcard = ({ experience }) => {
    const designation = experience?.designation || "Unknown Designation";
    const org = experience?.org || "Unknown Organization";
    const date = experience?.date || "Unknown Date";
    const body = experience?.body || ["Unknown body1", "Unknown body2"];
    return (
        <div className="exp-card relative tablet:w-[90%] bg-[--bg-color]">
            <div className='Card-Heading pl-3 laptop:flex-row'>
                <h2 className='Title text-sm font-semibold'>{designation}&nbsp; | &nbsp; {org}</h2>
                <h3 className='Date text-xs relative text-[var(--main-color)]'>{date}</h3>
            </div>
            <div className='Card-body m-3 h-[63px] w-auto overflow-scroll'>
                {body.map((e, index) => (
                    <p key={index} className=' text-left laptop:text-justify font-extralight text-xs'>– {e}</p>
                ))}
            </div>
        </div>
    )
}

export { Expcard, EducationCard }