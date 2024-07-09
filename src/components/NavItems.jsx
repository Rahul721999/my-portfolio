import React, { useEffect, useState } from "react";
const NavItem = ({ closeMenu }) => {
    const [activeSection, setActiveSec] = useState('home');
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        setActiveSec(sectionId);
        if (closeMenu) closeMenu();
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    setActiveSec(sectionId);
                }
            })
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
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
            <a href="#portfolio"
                onClick={(e) => handleClick(e, 'portfolio')}
                style={{ '--i': 4 }}
                className={`text-lg font-medium mr-9 transition-colors duration-300 hover:text-cyan nav-bar-component ${activeSection === 'portfolio' ? 'active' : ''}`}
            >
                Portfolio
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

export default NavItem;