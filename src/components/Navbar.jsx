import React from 'react';
import moonIcon from '../assets/moon.svg';
import sunIcon from '../assets/sun.svg';

const Navbar = ({ toggleTheme, theme }) => {
    const themeIcon = theme === 'light' ? moonIcon : sunIcon;
    return (
        <header className="fixed top-0 left-0 w-full z-100 flex items-center justify-between bg-transparent">
            <a className="text-2xl font-bold ">Rahul.</a>
            <nav className="flex">
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Home</a>
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">About</a>
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Service</a>
                <a href="#" className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-navbar-font-hover">Portfolio</a>
                <a href="#" className="text-lg font-medium  mr-9     transition-colors duration-300 hover:text-navbar-font-hover">Contact</a>
                <button onClick={toggleTheme} className="flex rounded mr-9">
                    <img src={themeIcon} alt="Theme Icon" className="w-0.375rm h-0.375rem justify-center" />
                </button>
            </nav>
        </header>
    )
}
export default Navbar;