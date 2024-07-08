import React from "react";
const NavItem = ({ className, closeMenu }) => {
    return (
        <>
            <a href="#home" style={{ '--i': 1 }} className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${className}`} onClick={closeMenu}>Home</a>
            <a href="#about" style={{ '--i': 2 }} className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${className}`} onClick={closeMenu}>About</a>
            <a href="#service" style={{ '--i': 3 }} className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${className}`} onClick={closeMenu}>Service</a>
            <a href="#portfolio" style={{ '--i': 4 }} className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${className}`} onClick={closeMenu}>Portfolio</a>
            <a href="#contact" style={{ '--i': 5 }} className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${className}`} onClick={closeMenu}>Contact</a>
        </>
    )
};

export default NavItem;