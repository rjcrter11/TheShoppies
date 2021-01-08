import React, { useEffect, useState, useCallback } from 'react';

import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/Banner/Banner';

import { NominationsContext } from '../../contexts/NominationsContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const movieUrl = "http://www.omdbapi.com";
const API_KEY = "79526c77";

const HomeScreen = () => {

    // HOOKS
    const [movieList, setMovieList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [nominations, setNominations] = useLocalStorage("nominations", []);
    const [currentPage, setCurrentPage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // SEARCH BAR 
    const handleSearchChange = e => {
        setSearchInput(e.target.value)
    }

    const deleteSearchText = () => {
        setSearchInput('')
    }

    // NOMINATIONS
    const handleNominate = movie => {
        setNominations([...nominations, movie])
    }
    const handleRemoveNomination = id => {
        setNominations(nominations.filter(nom => nom.imdbID !== id))
    }

    // FETCH MOVIES
    const fetchMovies = useCallback((title, page) => {
        setIsLoading(true)
        axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}&page=${page}`)
            .then(res => {

                if (res.Response === 'False') {
                    setError(res.Error)
                } else {
                    setMovieList(res.data.Search);
                    const result = res.data;
                    result.page = currentPage === null ? setCurrentPage(1) : setCurrentPage(page)
                }
                setIsLoading(false)
            })
            .catch(({ message }) => {
                setError(message);
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
            { error && (<p>{error}</p>)}
            { nominations.length >= 5 && (<Banner />)}
            <SearchBar
                handleSearchChange={handleSearchChange}
                deleteSearchText={deleteSearchText}
                searchInput={searchInput}
            />
            <div className='movies-and-nominations' >
                <NominationsContext.Provider value={{ nominations, handleNominate, handleRemoveNomination }}>
                    <div className='movies-and-nominations_movies'>
                        <Movies
                            movieList={movieList}
                            fetchMovies={fetchMovies}
                            searchInput={searchInput}
                            currentPage={currentPage}
                            isLoading={isLoading}
                        />
                    </div>

                    <div className='movies-and-nominations_container' >
                        <h2>Your Nominations ({nominations.length} of 5) </h2>
                        <div className="movies-and-nominations_nominations">
                            <Nominations />
                        </div>
                    </div>
                </NominationsContext.Provider>
            </div>
        </div>
    )
}

export default HomeScreen
