import { useEffect } from 'react';
import Typed from 'typed.js';

const useTypedEffect = (el) => {
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Full-Stack Web Developer',
                'Software Engineer',
                'AI Enthusiast',
                'Freelancer',
                'Photographer',
                'Rust Software Developer'
            ],
            typeSpeed: 20,
            backSpeed: 20,
            backDelay: 1000,
            loopCount: 2,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [el]);
};

export default useTypedEffect;
