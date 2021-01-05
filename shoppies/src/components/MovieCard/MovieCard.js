import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className='card' >
            <img className='card_poster' src={movie.Poster} alt={`Poster for ${movie.Title}`} />
            <div className='card_body' >
                <p> <strong className='card_title' > {movie.Title} </strong> </p>
                <span className='card_movie-year' > {movie.Year} </span>
                <button>Nominate!</button>
            </div>
        </div>
    )
}

export default MovieCard
