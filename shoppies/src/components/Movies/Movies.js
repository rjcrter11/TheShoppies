import React from 'react';

import { fetchNextPage, fetchLastPage } from '../../utils/fetchCalls';

import MovieCard from '../MovieCard/MovieCard';


const Movies = ({ movieList, setMovieList, searchInput, currentPage, setCurrentPage }) => (
    <>
        <div className='movie-list-container' >
            {searchInput.length > 0 ? (
                <div className='movie-list-container_results' >
                    <h2>Results for "{searchInput}"</h2>
                    <div className='movie-list-container_btns'  >
                        <button
                            onClick={() => fetchLastPage(searchInput, setMovieList, currentPage, setCurrentPage)} >
                            <i className="fas fa-arrow-alt-circle-left"></i>
                        </button>
                        <button
                            onClick={() => fetchNextPage(searchInput, setMovieList, currentPage, setCurrentPage)}>
                            <i className="fas fa-arrow-alt-circle-right"></i>
                        </button>
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
