import React, { useState } from 'react';
import NavItems from '../NavItems/NavItems.jsx';
import Menu from '../SideMenuBar/SideMenuBar.jsx';
import { MoonIcon, SunIcon, MenuIcon } from '../Icons/Icons_svg.jsx';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const themeIcon = theme === 'light' ? <MoonIcon /> : <SunIcon />;

    const handleOnClick = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="bg-[var(--bg-color)] fixed top-0 left-0 w-full z-50 padding-x-10p p-[20px] flex items-center justify-between">
            <a className="text-2xl font-bold logo">Portfolio.</a>
            <nav className={`items-center hidden tablet:flex`}>
                <NavItems />
                <button onClick={toggleTheme} className="flex rounded mr-9">
                    {themeIcon}
                </button>
            </nav>
            <button className="flex tablet:hidden items-center" onClick={handleOnClick}>
                <MenuIcon />
            </button>
            {menuOpen && <Menu themeIcon={themeIcon} toggleTheme={toggleTheme} closeMenu={() => setMenuOpen(false)} />}
        </header>
    )
}
export default Navbar;