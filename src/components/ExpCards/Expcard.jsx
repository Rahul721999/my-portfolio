import React from 'react';
import './Expcard.css';


const EducationCard = () =>{
    const course = "B. Tech";
    const org = "Future Institute of Technology";
    const date = "2023-2024";
    const field = "Computer Science & Engineering"
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


const Expcard = () => {
    const designation = "Software Developer";
    const org = "GS-Lab";
    const date = "2023-2024";
    return (
        <div className="exp-card relative tablet:w-[90%] bg-[--bg-color]">
            <div className='Card-Heading pl-3 laptop:flex-row'>
                <h2 className='Title font-semibold'>{designation} | {org}</h2>
                <h3 className='Date text-xs relative text-[var(--main-color)]'>{date}</h3>
            </div>
            <div className='Card-body m-3'>
                <p className='text-xs tablet:text-sm'>– {"Engineered a Chat-Application UI with Yew.rs & backend with Axum.rs."}</p>
                <p className='text-xs tablet:text-sm'>– {"Created, deployed & managed microservices with Kubernetes."}</p>
            </div>
        </div>
    )
}

export {Expcard, EducationCard}