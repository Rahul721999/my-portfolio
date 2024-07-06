import React, { useState } from 'react';
import NavItems from './NavItems';
import {MoonIcon, SunIcon, MenuIcon} from './Icons_svg.jsx';

const Navbar = ({ toggleTheme, theme }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const themeIcon = theme === 'light' ? <MoonIcon/> : <SunIcon/>;

    return (
        <header className="fixed top-0 left-0 w-full z-100 padding-x-10p p-[20px] flex items-center justify-between bg-transparent">
            <a className="text-2xl font-bold logo">Portfolio.</a>
            <nav className={`items-center hidden tablet:flex`}>
                <NavItems />
                <button onClick={toggleTheme} className="flex rounded mr-9">
                    {themeIcon}
                </button>
            </nav>
            <button className="flex tablet:hidden items-center" onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon is_open={menuOpen}/>
            </button>
        </header>
    )
}
export default Navbar;

