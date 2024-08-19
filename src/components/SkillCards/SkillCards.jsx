import React from 'react';
import './SkillCards.css';

export default function SkillCards({ title, skillArr }) {
  const len = skillArr.length;

  return (
    <div className='flex flex-col w-[200px] laptop:w-[550px] h-[450px] skill-cards rounded-lg p-6'>
      <div className='text-[var(--text-color)] flex items-center justify-center text-xl card-title mb-4'>{title}</div>
      <div className={`
        
        flex flex-col 
        gap-1 
        overflow-scroll 
        ${len > 9 ? 'laptop:grid grid-cols-3' : ''}`}>
        {
          skillArr.map((skill, index) => (
            <Tag key={index} className='py-2 px-2' tag_name={skill}/>
          ))
        }
      </div>
    </div>
  );
}


const Tag = ({ tag_name }) => {
  return (
      <p className='
          w-32
          bg-gradient-to-r from-[var(--main-color)]
          rounded-md
          whitespace-nowrap
          items-center
          px-3 py-1 mx-2
          text-xs font-semibold 
          min-w-20 max-h-6
          text-[var(--bg-color)]'
      > • {tag_name}
      </p>
  )
}