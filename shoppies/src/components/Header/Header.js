import React from 'react';
import logo from '../../assets/shoppify.png';

import { CSSTransition } from 'react-transition-group';

import { useDarkMode } from '../../hooks/useDarkMode';

import Clipboard from '../Clipboard/Clipboard';

const Header = ({ handleOpen, closeClipboard, showCopy }) => {
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
            <div className='navbar_clipboard-container'>
                <CSSTransition
                    in={showCopy}
                    mountOnEnter
                    unmountOnExit
                    classNames='clip'
                    appear={true}
                    timeout={1500}
                >
                    <Clipboard closeClipboard={closeClipboard} />
                </CSSTransition>
            </div>
            <div className='dark-mode__toggle'>
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                ></div>

            </div>
            <div
                className='nominations-icon'
                onClick={handleOpen}
            ><i className="fas fa-trophy"></i>
            </div>
        </nav>
    );
}

export default Header;
