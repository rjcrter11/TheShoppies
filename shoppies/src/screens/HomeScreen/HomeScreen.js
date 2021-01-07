import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/Banner/Banner';

import { NominationsContext } from '../../contexts/NominationsContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const movieUrl = "http://www.omdbapi.com"
const API_KEY = "79526c77"

const HomeScreen = () => {

    // HOOKS
    const [movieList, setMovieList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [nominations, setNominations] = useLocalStorage("nominations", [])


    // SEARCH BAR 
    const handleSearchChange = e => {
        setSearchInput(e.target.value)
    }

    const deleteSearchText = () => {
        setSearchInput('')
    }

    // MOVIE LIST 
    const fetchMovies = title => {
        axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}`)
            .then(res => {
                console.log(res);
                setMovieList(res.data.Search);
            })
            .catch(err => console.log(err));
    }

    // NOMINATIONS
    const handleNominate = movie => {
        setNominations([...nominations, movie])
    }
    const handleRemoveNomination = id => {
        setNominations(nominations.filter(nom => nom.imdbID !== id))
    }

    useEffect(() => {
        setMovieList(fetchMovies(searchInput));

    }, [searchInput])

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
                            <Movies movieList={movieList} searchInput={searchInput} />
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
