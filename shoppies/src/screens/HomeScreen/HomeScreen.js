import React, { useEffect, useState } from 'react';


import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/Banner/Banner';

import { NominationsContext } from '../../contexts/NominationsContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { fetchMovies } from '../../utils/fetchCalls';



const HomeScreen = () => {

    // HOOKS
    const [movieList, setMovieList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [nominations, setNominations] = useLocalStorage("nominations", []);
    const [currentPage, setCurrentPage] = useState(null);


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

    // FETCH MOVIES ON SEARCH AND CHANGE OF PAGE
    useEffect(() => {
        setMovieList(fetchMovies(searchInput, setMovieList, currentPage, setCurrentPage));

    }, [searchInput, currentPage]);

    // RESET PAGE COUNT WHEN CHANGING SEARCH PARAMS
    useEffect(() => {
        if (searchInput.length - 1) {
            setCurrentPage(null)
        }
    }, [searchInput]);

    return (
        <div className='main-container' >
            <SearchBar
                handleSearchChange={handleSearchChange}
                deleteSearchText={deleteSearchText}
                searchInput={searchInput}
            />
            <div className='movies-and-nominations' >
                <NominationsContext.Provider value={{ nominations, handleNominate, handleRemoveNomination }}>
                    <div className='movies-and-nominations_movies'>
                        {nominations.length >= 5 ? (<Banner />) : (
                            <Movies
                                movieList={movieList}
                                setMovieList={setMovieList}
                                searchInput={searchInput}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        )}
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
