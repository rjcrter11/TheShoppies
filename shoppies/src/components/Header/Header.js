import React from 'react';
import logo from '../../assets/shoppify.png';

const Header = () => (
    <nav className='navbar' >
        <div className='navbar_logo-container' >
            <img src={logo} alt='shoppify logo' />
            <h1>The Shoppies</h1>
        </div>
    </nav>
);


export default Header;
