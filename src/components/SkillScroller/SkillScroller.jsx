import React, { useEffect } from 'react';
import './SkillScroller.css';

export default function Scroller() {
    const skills = ['HTML', 'CSS', 'TailWind', 'BootStrap', 'JS', 'NodeJs', 'ExpressJs', 'VueJs', 'VanillaJs','ReactJs', 'NextJs', 'MongoDB', 'PostgreSQL', 'RUST', 'Actix.rs', 'WARP.rs', 'AXUM.rs','Python', 'TensorFlow.py', 'WebSocket', 'JWT', 'Hashing', 'Encryption', 'Asym-Crypto','Git', 'GitHub', 'GitLab', 'BitBucket', 'Docker', 'Kubernetes', 'Okteto', 'Ingress', 'Linux', 'Solana', 'gRPC', 'MicroService', 'AI', 'ML', 'DL', 'CNN', 'LLM'];

    const totalItems = skills.length;

    // set the total no of items in css
    useEffect(() => {
        document.documentElement.style.setProperty('--total-items', totalItems)
    }, [totalItems]);

    return (
        <div className='skill-scroller'>
            {
                skills.map((skill_name, index) => (
                    <div
                        key={index}
                        className='skill-item'
                        style={{
                            animationDelay: `calc(var(--animation-duration) / var(--total-items) * (var(--total-items) - ${index + 1}) * -1)`,
                        }}
                    >
                        <span id={`Skill ${index + 1}`}>{skill_name}</span>
                    </div>
                ))
            }
        </div>
    );
}


const IconScroller = () =>{
    const skills = [

        
    ]

    return(
        <duv>

        </duv>
    )
}