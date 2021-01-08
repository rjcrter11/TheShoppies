import React, { useContext } from 'react';

import { NominationsContext } from '../../contexts/NominationsContext';
import NominationCard from '../NominationCard/NominationCard';

const Nominations = () => {
    const { nominations } = useContext(NominationsContext);

    return (
        <div
            className='nominations'
        >
            { nominations.map(movie => (
                <NominationCard key={`${movie.imdbID}-${movie.Title}`}  {...movie} />
            ))}
        </div>
    )
};

export default Nominations;
