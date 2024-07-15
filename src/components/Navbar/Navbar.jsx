import React, { useState, useEffect } from 'react';
import NavItems from '../NavItems/NavItems.jsx';
import SideMenu from '../SideMenuBar/SideMenuBar.jsx';
import { MoonIcon, SunIcon, MenuIcon } from '../Icons/Icons_svg.jsx';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSec] = useState('home');
    const themeIcon = theme === 'light' ? <MoonIcon /> : <SunIcon />;

    const handleOnClick = () => {
        setMenuOpen(!menuOpen);
    }

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
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="bg-[var(--bg-color)] fixed top-0 left-0 w-full z-50 padding-x-10p p-[20px] flex items-center justify-between">
            <a className="text-2xl font-bold logo">Portfolio.</a>
            <nav className={`items-center hidden tablet:flex`}>
                <NavItems activeSection={activeSection} setActiveSec={setActiveSec} closeMenu={() => setMenuOpen(false)}/>
                <button onClick={toggleTheme} className="flex rounded mr-9">
                    {themeIcon}
                </button>
            </nav>
            <button className="flex tablet:hidden items-center" onClick={handleOnClick}>
                <MenuIcon />
            </button>
            {
                menuOpen
                &&
                <SideMenu
                    themeIcon={themeIcon}
                    toggleTheme={toggleTheme}
                    closeMenu={() => setMenuOpen(false)}
                    activeSection={activeSection}
                    setActiveSec={setActiveSec}
                />
            }
        </header>
    )
}
export default Navbar;