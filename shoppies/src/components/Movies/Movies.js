import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({ movieList }) => (
    <div className="movie-list" >
        { movieList && movieList.map(mov => (
            <div key={mov.imdbID} >
                <MovieCard movie={mov} />
            </div>
        ))}
    </div>
)

export default Movies
