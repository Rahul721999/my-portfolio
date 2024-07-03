const Home = () => {
    return (
        <section className="h-screen flex justify-center flex-col transition-colors duration-300 section-container">
            <div className="max-w-screen-sm ">
                <h1 className="text-4xl font-bold leading-tight"> Hi, I'm Rahul M.</h1>
                <h3 className="text-2xl font-bold my-1 text-cyan">Full-Stack Developer</h3>
                <p className="text-base my-5 mb-10 ">
                    Aspiring and versatile software artisan with a flair for AI and 3 year of experience in Rust programming.
                    Eagerly pursuing a riveting software development role where creativity meats innovation,
                    to craft cutting-edge solutions and contribute to transformative projects
                </p>
                <div className="w-80 h-12 flex justify-between">
                    <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 border-cyan bg-cyan text-dark-theme hire-me-btn">Hire Me</a>
                    <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 text-cyan bg-transparent lets-talk-btn">Let's Talk</a>
                </div>
            </div>
            <div className="btn-container">
                <a href="https://www.facebook.com/profile.php?id=100007980798131" className='social-link'>
                <svg className = "social-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></svg>
                </a>
                <a href="https://www.x.com/RahulM7299" className='social-link'>
                    <svg className='social-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/imrahul721999/" className='social-link'>
                    <svg className='social-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                </a>
            </div>
        </section>
    )
}

export default Home;