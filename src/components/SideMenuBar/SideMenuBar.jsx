import React from 'react';
import NavItems from '../NavItems/NavItems';
import { CloseMenuIcon } from '../Icons/Icons_svg.jsx';


const Menu = ({ closeMenu, toggleTheme, themeIcon }) => {
  return (
    <div className="fixed top-0 right-0 z-50 h-full p-5 w-[250px] transition-transform transform translate-x-0 tablet:hidden">
      <div className='flex flex-col p-8 h-2/3 space-y-4 mobile-menu'>
        <button onClick={closeMenu}>
          <CloseMenuIcon />
        </button>
        <NavItems className="flex flex-row justify-start items-center nav-bar-component-mobile" closeMenu={closeMenu} />
        <button onClick={() => { toggleTheme(); closeMenu(); }}>
          {themeIcon}
        </button>
      </div>
    </div>
  );
}

export default Menu;