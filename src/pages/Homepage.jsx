import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { MediaIcons } from "../components";

const Home = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Rust Software Developer', 'Full-Stack Web Developer',  'Software Engineer', 'AI Enthusiast', 'Freelancer','Photographer'],
            typeSpeed: 20,
            backSpeed: 20,
            backDelay: 1000,
            loop: true,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <section className="h-screen flex justify-center flex-col transition-colors duration-300 section-container">
            <div className="max-w-screen-sm ">
                <h1 className="tablet:text-6xl text-4xl font-bold leading-tight">
                    <span className="intro-tag">Hi, I'm&nbsp;</span>
                    <span className="name-tag"> Rahul Mondal</span>

                </h1>
                <h3 className="tablet:text-3xl text-2xl font-bold my-1 designation-tag">And I'm a - <span ref={el} className="gradient-text"></span></h3>
                <p className="tablet:text-lg text-base my-5 mb-10 ">
                    Aspiring and versatile software artisan with a flair for AI and 3 year of experience in Rust programming.
                    Eagerly pursuing a riveting software development role where creativity meats innovation,
                    to craft cutting-edge solutions and contribute to transformative projects
                </p>
                <div className="w-80 h-12 flex justify-between">
                    <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan bg-cyan text-dark-theme hire-me-btn">Hire Me</a>
                    <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan text-cyan bg-transparent lets-talk-btn">Let's Talk</a>
                </div>
            </div>
            <div className="btn-container">
                <MediaIcons/>
            </div>
        </section>
    )
}

export default Home;