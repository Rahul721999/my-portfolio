import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { MediaIcons, MobilePhoto, Photo } from "../components";

const Home = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [ 'Full-Stack Web Developer', 'Software Engineer', 'AI Enthusiast', 'Freelancer', 'Photographer', 'Rust Software Developer'],
            typeSpeed: 20,
            backSpeed: 20,
            backDelay: 1000,
            loopCount: 2,
        });
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <section id="home" className="flex flex-row justify-start items-center section-container">
                <div className="laptop:w-3/5">
                    <div className="flex justify-center items-center"><MobilePhoto/></div>
                    <h1 className="text-center tablet:text-left tablet:text-6xl text-4xl font-bold leading-tight">
                        <span className="intro-tag">Hi, I'm&nbsp;</span>
                        <span className="name-tag"> Rahul Mondal</span>
                    </h1>
                    <h3 className="tablet:text-3xl text-2xl font-bold my-1 designation-tag">And I'm a - <span ref={el} className="gradient-text"></span></h3>
                    <p className="text-pretty flex tablet:text-lg text-sm tablet:text-left my-5 mb-10 ">
                        Aspiring and versatile software artisan with a flair for AI and 3 year of experience in Rust programming.
                        Eagerly pursuing a riveting software development role where creativity meats innovation,
                        to craft cutting-edge solutions and contribute to transformative projects
                    </p>
                    <div className="w-80 h-12 flex justify-between">
                        <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan bg-cyan text-dark-theme hire-me-btn">Hire Me</a>
                        <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan text-cyan bg-transparent lets-talk-btn">Let's Talk</a>
                    </div>
                    <div className="btn-container">
                        <MediaIcons />
                    </div>
                </div>
                <div className="w-2/5 flex justify-center items-center"><Photo/></div>
        </section>
    )
}

export default Home;