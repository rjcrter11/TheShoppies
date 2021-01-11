import React from 'react'

const Clipboard = ({ closeClipboard }) => {
    return (
        <div className='clipboard' >
            <div className='clipboard_icon' >
                <i className="far fa-clipboard"></i>
            </div>
            <div className='clipboard_info' >
                <p>Link copied to clipboard!</p>
            </div>
            <div className='clipboard_btn' >
                <button onClick={() => closeClipboard()} className='clipboard_x' >X</button>
            </div>
        </div>
    )
}

export default Clipboard
