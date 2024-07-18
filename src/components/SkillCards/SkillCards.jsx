import React, { useEffect } from 'react';
import './SkillCards.css';

export default function SkillCards({title, skillArr}) {
  return (
    <div className='flex flex-col w-[250px] h-3/4  skill-cards rounded-lg p-6'>
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
