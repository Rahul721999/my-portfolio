import React, { useEffect, useState } from "react";
import './NavItems.css';



const NavItems = ({ closeMenu, activeSection, setActiveSec  }) => {
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        setActiveSec(sectionId);
        if (closeMenu) closeMenu();
    };
    
    return (
        <>
            <a href="#home"
                onClick={(e) => handleClick(e, 'home')}
                style={{ '--i': 1 }}
                className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${activeSection === 'home' ? 'active' : ''}`}
            >
                Home
            </a>
            <a href="#about"
                onClick={(e) => handleClick(e, 'about')}
                style={{ '--i': 2 }}
                className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${activeSection === 'about' ? 'active' : ''}`}
            >
                About
            </a>
            <a href="#service"
                onClick={(e) => handleClick(e, 'service')}
                style={{ '--i': 3 }}
                className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${activeSection === 'service' ? 'active' : ''}`}
            >
                Service
            </a>
            <a href="#skills"
                onClick={(e) => handleClick(e, 'skills')}
                style={{ '--i': 4 }}
                className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${activeSection === 'skills' ? 'active' : ''}`}
            >
                Skills
            </a>
            <a href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
                style={{ '--i': 5 }}
                className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${activeSection === 'contact' ? 'active' : ''}`}
            >
                Contact
            </a>
        </>
    );
};

export default NavItems;