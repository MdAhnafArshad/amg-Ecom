import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo"/>
            <div>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">section</a>
                <a href="">shop</a>
            </div>
        </nav>
    );
};

export default Header;