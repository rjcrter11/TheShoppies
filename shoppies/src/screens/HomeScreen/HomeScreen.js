import React, { useEffect, useState, useCallback, useContext } from 'react';

import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/Banner/Banner';

import { NominationsContext } from '../../contexts/NominationsContext';

const movieUrl = "http://www.omdbapi.com";
const API_KEY = "79526c77";

const HomeScreen = () => {

    // HOOKS
    const [movieList, setMovieList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [currentPage, setCurrentPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalResults, setTotalResults] = useState(null);

    const { nominations } = useContext(NominationsContext);


    // SEARCH BAR 
    const handleSearchChange = e => {
        setSearchInput(e.target.value)
    }

    const deleteSearchText = () => {
        setSearchInput('')
    }

    // FETCH MOVIES
    const fetchMovies = useCallback((title, page) => {
        setIsLoading(true)
        axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}&page=${page}`)
            .then(res => {

                if (res.data.Response !== 'True') {
                    setError(res.data.Error)
                } else {
                    setMovieList(res.data.Search);
                    const result = res.data;
                    setTotalResults(result.totalResults)
                    result.page = currentPage === null ? setCurrentPage(1) : setCurrentPage(page)
                }
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, [currentPage]);

    // RERENDER ON SEARCH AND CHANGE OF PAGE
    useEffect(() => {
        setMovieList(fetchMovies(searchInput, currentPage));
    }, [searchInput, fetchMovies, currentPage]);



    // RESET PAGE COUNT WHEN CHANGING SEARCH PARAMS
    useEffect(() => {
        if (searchInput.length - 1) {
            setCurrentPage(null)
        }
    }, [searchInput]);

    return (
        <div className='main-container' >
            { nominations.length >= 5 && (
                <Banner />
            )}
            <SearchBar
                handleSearchChange={handleSearchChange}
                deleteSearchText={deleteSearchText}
                searchInput={searchInput}
            />
            <div className='movies-and-nominations' >

                <div className='movies-and-nominations_movies'>
                    <Movies
                        movieList={movieList}
                        fetchMovies={fetchMovies}
                        searchInput={searchInput}
                        currentPage={currentPage}
                        isLoading={isLoading}
                        error={error}
                        totalResults={totalResults}
                    />
                </div>

                <div className='movies-and-nominations_container' >
                    <h2>Your Nominations ({nominations.length} of 5) </h2>
                    <div className="movies-and-nominations_nominations">
                        <Nominations />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen
