import React from 'react';
import './SkillCards.css';
export default function SkillCards({title, skillArr}) {
  return (
    <div className='flex flex-col w-[200px] laptop:w-[550px] h-[450px] skill-cards rounded-lg p-6'>
      <div className='text-[var(--text-color)] flex items-center justify-center text-xl card-title mb-4'>{title}</div>
      <div className='languages'>
        {
          skillArr.map((skill, index)=>(
            <span id={index} className='py-2 px-2 rounded-lg'>{skill}</span>
          ))
        }
      </div>
    </div>

  )
}
