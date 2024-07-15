import { useEffect } from 'react';
import Typed from 'typed.js';

const useTypedEffect = (el) => {
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Freelancer',
                'AI Enthusiast',
                'Software Engineer',
                'Full-Stack Web Developer',
                'Rust Software Developer'
            ],
            typeSpeed: 20,
            backSpeed: 20,
            backDelay: 1000,
            loopCount: 2,
            smartBackspace: true,
            onComplete: (self) => {self.cursor.style.display = 'none'},
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, [el]);
};

export default useTypedEffect;
