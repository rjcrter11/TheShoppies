import React from 'react';

const Clipboard = ({ closeClipboard }) => (
    <div className='clipboard' >
        <div className='clipboard_icon' >
            <i className="far fa-copy"></i>
        </div>
        <div className='clipboard_info' >
            <p>Link copied to clipboard!</p>
        </div>
        <div className='clipboard_btn' >
            <button
                onClick={() => closeClipboard()}
                className='clipboard_x'>
                <i className="far fa-window-close"></i>
            </button>
        </div>
    </div>
)

export default Clipboard
