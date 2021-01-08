import React from 'react';

import MovieCard from '../MovieCard/MovieCard';
import Spinner from '../../components/Spinner/Spinner';

const Movies = ({ movieList, searchInput, currentPage, fetchMovies, isLoading }) => (
    <div className='movie-list-container'  >
        {isLoading && (<Spinner />)}
        {searchInput.length > 0 ? (
            <div className='movie-list-container_results' >
                <h2>RESULTS FOR "{searchInput.toUpperCase()}"</h2>
                <div className='movie-list-container_btns'  >
                    <button
                        disabled={currentPage === 1}
                        onClick={() => fetchMovies(searchInput, currentPage - 1)} >
                        <i className="fas fa-arrow-alt-circle-left"></i>
                    </button>
                    <button
                        onClick={() => fetchMovies(searchInput, currentPage + 1)}>
                        <i className="fas fa-arrow-alt-circle-right"></i>
                    </button>
                </div>
            </div>
        ) : <h3>Pick up to 5 movies to nominate!</h3>}
        <div className="movie-list" >
            {movieList && movieList.map(mov => (
                <MovieCard key={mov.imdbID} movie={mov} />
            ))}
        </div>
    </div>
)
export default Movies
