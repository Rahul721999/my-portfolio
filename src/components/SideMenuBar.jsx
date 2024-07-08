import React from 'react';
import NavItem from './NavItems';
import { CloseMenuIcon } from './Icons_svg';


const Menu = ({ closeMenu, toggleTheme, theme}) => {
  return (
      <div className="fixed top-0 right-0 h-full w-[250px] transition-transform transform translate-x-0 tablet:hidden">
          <div className='flex flex-col space-y-4 mobile-menu'>
            <button onClick={closeMenu}>
              <CloseMenuIcon className=""/>
            </button>
            <NavItem className="flex flex-row justify-start items-center nav-bar-component-mobile" toggleTheme={toggleTheme} theme={theme} closeMenu={closeMenu}/>
          </div>
      </div>
  );
}

export default Menu;