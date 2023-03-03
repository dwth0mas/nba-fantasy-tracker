import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu
} from './NavbarElements';
import './NavbarStyle.css'
import { useAuthenticator } from '@aws-amplify/ui-react';

const NavBar = () => {

    const { signOut } = useAuthenticator();

    return (
        <div className="navbar">
            <h1 className="nav-title"> Swish Center </h1>
            <Nav>
                {/* <Bars /> */}

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
                <NavLink to='/games' activeStyle>
                    Games
                </NavLink>
                <NavLink onClick={signOut} activeStyle>
                    Sign Out
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
            </Nav>
        </div>
    );
};

export default NavBar;
