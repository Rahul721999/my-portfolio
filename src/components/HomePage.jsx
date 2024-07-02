const Home = () => {
    return (
        <section className="h-screen flex items-center padding-x-10p p-[20px] transition-colors duration-300">
            <div className="max-w-screen-sm ">
                <h1 className="text-4xl font-bold leading-tight"> Hi, I'm Rahul M.</h1>
                <h3 className="text-2xl font-bold my-1 text-cyan">Rust Developer</h3>
                <p className="text-base my-5 mb-10 ">
                    Aspiring and versatile software artisan with a flair for AI and 3 year of experience in Rust programming.
                    Eagerly pursuing a riveting software development role where creativity meats innovation,
                    to craft cutting-edge solutions and contribute to transformative projects
                </p>
                <div className="w-80 h-12 flex justify-between">
                    <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 bg-cyan text-dark-theme ">Hire Me</a>
                    <a href="#" className="inline-flex justify-center items-center w-36 h-full text-lg rounded-lg border-solid font-bold tracking-widest relative overflow-hidden z-1 border-2 text-cyan bg-transparent">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default Home;