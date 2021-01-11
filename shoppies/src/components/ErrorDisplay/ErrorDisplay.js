import React from 'react';

const ErrorDisplay = ({ searchInput }) => (
    <div className='error' >
        <h3>No movies found for "{searchInput.toUpperCase()}" </h3>
    </div>
);


export default ErrorDisplay;
