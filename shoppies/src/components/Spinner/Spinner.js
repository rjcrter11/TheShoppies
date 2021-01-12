import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => (
    <Loader
        className="spinner-overlay"
        type='Grid'
        height={125}
        width={125}
        timeout={3000}
        color='rgb(140,184,73)'
    />

);

export default Spinner;
