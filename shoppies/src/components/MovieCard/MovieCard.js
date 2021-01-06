import React from 'react'

const MovieCard = ({ movie }) => {
    return (
        <div className='card' >
            <img className='card_poster' src={movie.Poster} alt={`Poster for ${movie.Title}`} />
            <div className='card_body' >
                <div className='card_body_info' >
                    <p className='card_body_title' > {movie.Title}  </p>
                    <span className='card_body_movie-year' > {movie.Year} </span>
                </div>
                <button>Nominate! <i className="fas fa-trophy"></i></button>
            </div>
        </div>
    )
}

export default MovieCard
