import React from 'react';
import './SkillCards.css';

export default function SkillCards() {
  return (
    <div className='flex flex-col w-[250px] h-3/4  skill-cards rounded-lg p-6'>
      <div className='text-[var(--text-color)] flex items-center justify-center text-xl card-title mb-4'>Frontend</div>
      <div className='languages flex-col'>
        <span className='py-2 px-2 rounded-lg'>HTML</span>
        <span className='py-2 px-2 rounded-lg'>CSS</span>
        <span className='py-2 px-2 rounded-lg'>JS</span>
        <span className='py-2 px-2 rounded-lg'>ReactJs</span>
        <span className='py-2 px-2 rounded-lg'>NodeJs</span>
        <span className='py-2 px-2 rounded-lg'>Tailwind</span>
        <span className='py-2 px-2 rounded-lg'>BootStrap</span>
        <span className='py-2 px-2 rounded-lg'>Yew.rs</span>
      </div>
    </div>

  )
}
