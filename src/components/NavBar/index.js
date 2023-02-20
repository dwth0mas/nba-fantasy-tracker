import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';

const NavBar = () => {
return (
	<>
        <Nav>
            <Bars />

            <NavMenu>
            <NavLink to='/' activeStyle>
                Home
            </NavLink>
            <NavLink to='/players' activeStyle>
                Players
            </NavLink>
            <NavLink to='/teams' activeStyle>
                Teams
            </NavLink>
            <NavLink to='/standings' activeStyle>
                Standings
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
        </Nav>
	</>
);
};

export default NavBar;
