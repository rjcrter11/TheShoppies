import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({ movieList, searchInput }) => (
    <>
        <div className='movie-list-container' >
            { searchInput.length > 0 ? (
                <h2>Results for "{searchInput}"</h2>
            ) : null}
            

            <div className="movie-list" >

                {movieList && movieList.map(mov => (
                    <MovieCard key={mov.imdbID} movie={mov} />
                ))}
            </div>
        </div>
    </>
)

export default Movies
