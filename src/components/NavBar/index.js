import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';
import { useAuthenticator } from '@aws-amplify/ui-react';

const NavBar = () => {

    const { signOut } = useAuthenticator();

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
                <NavLink onClick={signOut} activeStyle>
                    Sign Out
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;
