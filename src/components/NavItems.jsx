import React from "react";
const NavItem = () => {
    return (
        <>
            <a href="#" style={{ '--i': 1 }} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Home</a>
            <a href="#" style={{ '--i': 2 }} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">About</a>
            <a href="#" style={{ '--i': 3 }} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Service</a>
            <a href="#" style={{ '--i': 4 }} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Portfolio</a>
            <a href="#" style={{ '--i': 5 }} className="text-lg font-medium  mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component">Contact</a>
        </>
    )
}

export default NavItem;