import React, { useContext } from 'react';

import { NominationsContext } from '../../contexts/NominationsContext';

const defaultPoster = 'https://via.placeholder.com/200x275/383838/8cb849?text=POSTER+NOT+FOUND'


const MovieCard = ({ movie }) => {
    const { nominations, handleNominate } = useContext(NominationsContext);
    const match = nominations.find(mov => mov.imdbID === movie.imdbID)
    return (
        <div className='card' >
            <img className='card_poster' src={movie.Poster === 'N/A' ? defaultPoster : movie.Poster} alt={`Poster for ${movie.Title}`} />
            <div className='card_body' >
                <div className='card_body_info' >
                    <p className='card_body_title' > {movie.Title}  </p>
                    <span className='card_body_movie-year' > {movie.Year} </span>
                </div>
                <button
                    disabled={match !== undefined}
                    onClick={() => handleNominate(movie)} >Nominate! <i className="fas fa-trophy"></i></button>
            </div>
        </div>
    )
}

export default MovieCard
