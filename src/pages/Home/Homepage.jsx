import { useRef } from "react";
import { MediaIcons, MobilePhoto, Photo, useTypedEffect } from "../../components";
import './Homepage.css';
import { handleScrollToSection } from "../../script";

const Home = () => {
    const el = useRef(null);
    useTypedEffect(el);
    return (
        <section id="home" className="flex flex-row justify-start items-center section-container">
            <div className="laptop:w-3/5">
                <div className="flex justify-center items-center"><MobilePhoto /></div>
                <h1 className="text-center tablet:text-left tablet:text-6xl text-4xl font-bold leading-tight">
                    <span className="intro-tag">Hi, I'm&nbsp;</span>
                    <span className="name-tag"> Rahul Mondal</span>
                </h1>
                <h3 className="tablet:text-3xl text-2xl font-bold my-1 designation-tag">And I'm a - <span ref={el} className="gradient-text"></span></h3>
                <p className="text-pretty  flex italic tablet:text-lg text-sm laptop:text-left my-5 mb-10 ">
                    Aspiring and versatile software artisan with a flair for AI and 3 year of experience in Rust programming.
                    Eagerly pursuing a riveting software development role where creativity meats innovation,
                    to craft cutting-edge solutions and contribute to transformative projects
                </p>
                <div className="w-80 h-12 flex justify-between">
                    <a href="#" download={'./RahulMondal_resume.pdf'} className="btn-type1" >Hire Me!</a>
                    <a href="#" className="btn-type2" onClick={(e) => handleScrollToSection(e, 'contact')}>Let's Talk</a>
                </div>
                <div className="btn-container">
                    <MediaIcons />
                </div>
            </div>
            <div className="w-2/5 flex justify-center items-center"><Photo /></div>
        </section>
    )
}

export default Home;