import React from 'react';
import logo from '../../assets/shoppify.png';
import { useDarkMode } from '../../hooks/useDarkMode';

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode', false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return (
        <nav className='navbar' >
            <div className='navbar_logo-container' >
                <img src={logo} alt='shoppify logo' />
                <h1>The Shoppies</h1>
            </div>
            <div className='dark-mode__toggle'>
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                ></div>
            </div>
        </nav>
    );
}

export default Header;
