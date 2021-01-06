import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({ movieList }) => (
    <div className="movie-list" >
        { movieList && movieList.map(mov => (
            <MovieCard key={mov.imdbID} movie={mov} />
        ))}
    </div>
)

export default Movies
