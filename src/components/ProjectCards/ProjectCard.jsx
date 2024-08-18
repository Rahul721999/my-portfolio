import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
    const title = project?.title || "unknown title";
    const description = project?.description || "unknown description";
    const frameworks = project?.framework || ["unknown"];
    const technologies = project?.technologies || ["unknown"];
    const source = project?.sourceCode;
    const demo_link = project?.demo;
    return (
        <div className='ProjectCard'>
            {/* ---------------------------Content-contianer--------------------------- */}
            <div className='Content'>
                {/* -------------------Heading----------------- */}
                <div className='Heading min-w-full'
                >
                    {/* ------------- Title ------------------- */}
                    <a className='
                    Title
                    text-lg tablet:text-xl 
                    font-sans font-bold 
                    tracking-wide text-[var(--main-color)]'
                    >{title}
                    </a>
                </div>
                {/* ---------------Description--------------- */}
                <div className='flex py-3 tablet:pt-2 text-sm laptop:text-base'>{description}</div>

                {/* -------------------tags------------------- */}
                <div className='TagsContainer flex-wrap gap-2 grid py-2'>

                    <div className='flex flex-wrap gap-2'>{frameworks.map((name) => (
                        <Tag tag_name={name} />
                    ))}</div>

                    <div className='flex flex-wrap gap-2'>{technologies.map((name) => (
                        <Tag tag_name={name} />
                    ))}</div>
                </div>
            </div>
            {/* -------------- Icons -------------------- */}
            <div className='
                Icon-container mt-5'
            >
               { source && <a href={source} target="_blank" className='flex text-xs underline underline-offset-4' >
                    Code <svg className="Icon w-[20px] h-[20px] mx-1 fill-[var(--text-color)]" height="24" viewBox="0 0 1792 1792" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1664 896q0 251-146.5 451.5t-378.5 277.5q-27 5-39.5-7t-12.5-30v-211q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-121-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-86-13.5q-44 113-7 204-79 85-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-40 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-24.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 89t.5 54q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" /></svg>
                </a>}
                { demo_link && <a href={demo_link} target="_blank" className='flex text-xs underline underline-offset-4'>
                    Check out live site<svg className="Icon w-[20px] h-[20px] mx-1 fill-[var(--text-color)]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M127.994 16.609a1.763 1.763 0 0 0-2.13-1.774L1.363 43.043A1.75 1.75 0 0 0 .775 46.2l33.937 22.756 19.071 36.4a1.773 1.773 0 0 0 2.721.489L70.695 93.08l29.581 19.832a1.75 1.75 0 0 0 2.667-1.008l25-94.917a1.84 1.84 0 0 0 .051-.378zM59.2 82.941a1.82 1.82 0 0 0-.416.759l-4.027 15.972-16.365-31.235 78.027-44.3L59.23 82.908c-.009.01-.016.023-.03.033zm55.887-62.077-78.96 44.83L6.1 45.559zM58.437 99.4l.293-1.16 2.845-11.272 6.122 4.1zm41.747 9.239L71.517 89.417 63.2 83.844l59.659-61.311z"/></svg>
                </a>}
            </div>
        </div>
    )
}

const Tag = ({ tag_name }) => {
    return (
        <p className='
            Tag 
            inline-flex whitespace-nowrap
            justify-center items-center
            px-3 py-1 mx-2 
            text-xs font-semibold 
            min-w-17 max-h-6
            text-[var(--bg-color)]'
        > • {tag_name}
        </p>
    )
}
