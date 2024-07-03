import React, {useState} from 'react';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';

const Navbar = ({ toggleTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const themeIcon = theme === 'light' ? moonIcon : sunIcon;

    return (
        <header className="fixed top-0 left-0 w-full z-100 padding-x-10p p-[20px] flex items-center justify-between bg-transparent">
            <a className="text-2xl font-bold logo">Rahul.</a>
            <nav className={`flex-col mobile:flex-row mobile:flex items-center ${menuOpen ? 'flex' : 'hidden'} mobile:block`}>
                <a href="#" style={{'--i':1}} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Home</a>
                <a href="#" style={{'--i':2}} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">About</a>
                <a href="#" style={{'--i':3}} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Service</a>
                <a href="#" style={{'--i':4}} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Portfolio</a>
                <a href="#" style={{'--i':5}} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Contact</a>
                <button onClick={toggleTheme} className="flex rounded mr-9">
                    <img src={themeIcon} alt="Theme Icon" className="w-0.375rm h-0.375rem justify-center" />
                </button>
            </nav>
            <button className="md:hidden flex items-center" onClick={() => setMenuOpen(!menuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </header>
    )
}
export default Navbar;