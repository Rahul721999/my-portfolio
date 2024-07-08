import React from "react";
const NavItem = ({ className, closeMenu }) => {
    const handleClick = (e,sectionId) =>{
        e.preventDefault();
        document.getElementById(sectionId).scrollIntoView({behavior: "smooth"});
        if (closeMenu) closeMenu();
    };
    return (
        <>
            <a href="#home" onClick={(e) => handleClick(e, 'home')} style={{ '--i': 1 }} className="text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Home</a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')} style={{ '--i': 2 }} className="text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">About</a>
            <a href="#service" onClick={(e) => handleClick(e, 'service')} style={{ '--i': 3 }} className="text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Service</a>
            <a href="#portfolio" onClick={(e) => handleClick(e, 'portfolio')} style={{ '--i': 4 }} className="text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Portfolio</a>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')} style={{ '--i': 5 }} className="text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Contact</a>
        </>
    );
};

export default NavItem;