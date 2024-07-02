import React from 'react';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';

const Navbar = ({ toggleTheme, theme }) => {
    const themeIcon = theme === 'light' ? moonIcon : sunIcon;
    return (
        <header className="fixed top-0 left-0 w-full z-100 flex items-center justify-between bg-transparent p-5">
            <a className="text-2xl font-bold ">Rahul.</a>
            <nav className="flex">
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Home</a>
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">About</a>
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Service</a>
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Portfolio</a>
                <a href="#" className="text-lg font-medium       transition-colors duration-300 hover:text-navbar-font-hover">Contact</a>
            </nav>
            <button onClick={toggleTheme} className="flex p-2 rounded">
                <img src={themeIcon} alt="Theme Icon" className="w-5 h-5 mr-2" />
            </button>
        </header>
    )
}
export default Navbar;