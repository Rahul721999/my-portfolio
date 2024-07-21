import React from 'react';
import './Expcard.css';


const EducationCard = ({ education }) => {
    const course = education?.degree || "Unknown Degree";
    const org = education?.org || "Unknown Organization";
    const date = education?.date || "Unknown Date";
    const field = education?.field || "Unknown Field";
    return (
        <div className="edu-card relative tablet:w-[90%] bg-[--bg-color]">
            <div className='Card-Heading pl-3 laptop:flex-row'>
                <h2 className='Title font-semibold'>{org}</h2>
                <h3 className='Date text-xs relative text-[var(--main-color)]'>{date}</h3>
            </div>
            <div className='Card-body m-3'>
                <h2 className='Title text-sm tablet:text-m font-semibold'>{course}</h2>
                <span className='text-xs tablet:text-sm font-medium'>• {field}</span>
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
                <h2 className='Title font-semibold'>{designation} | {org}</h2>
                <h3 className='Date text-xs relative text-[var(--main-color)]'>{date}</h3>
            </div>
            <div className='Card-body m-3'>
                {body.map((e, index) => (
                    <p key={index} className='text-xs tablet:text-sm'>– {e}</p>
                ))}
            </div>
        </div>
    )
}

export { Expcard, EducationCard }