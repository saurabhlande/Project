import React from 'react';

// import React, {Component} from 'react'
// import { NavDropdown } from 'react-bootstrap'
// import { NavDropdown } from 'react-bootstrap-validation'

import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';
import { Fade } from 'react-reveal';

// import NavDropdown from 'react-bootstrap/NavDropdown'

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Features</a>
                </li>
                <li>
                    <a href="">Performance</a>
                </li>
                <li>
                    <a href="">Cart</a>
                </li>
                <li>
                    <a href="">Explore</a>
                </li>
            </ul>
            <PrimaryButton name={'Sign Up'} />
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    align-items: center;

    ul{
        display: flex;
        justify-content: space-between;
        width: 55%;
    }
`;
export default Navigation
