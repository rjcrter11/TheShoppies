import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const Movies = ({ movieList, searchInput }) => (
    <>
        <div className='movie-list-container' >
            {searchInput.length > 0 ? (
                <div className='movie-list-container_results' >
                    <h2>Results for "{searchInput}"</h2>
                    <div className='movie-list-container_btns'  >
                        <button><i className="fas fa-arrow-alt-circle-left"></i></button>
                        <button><i className="fas fa-arrow-alt-circle-right"></i></button>
                    </div>
                </div>

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
