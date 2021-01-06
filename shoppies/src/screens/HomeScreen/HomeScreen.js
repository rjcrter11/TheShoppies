import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';

import { NominationsContext } from '../../contexts/NominationsContext'
import Nominations from '../../components/Nominations/Nominations';

const movieUrl = "http://www.omdbapi.com"
const API_KEY = "79526c77"

const HomeScreen = () => {

    const [movieList, setMovieList] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [nominations, setNominations] = useState([]);

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
                        <Movies movieList={movieList} />
                    </div>
                    <div className='movies-and-nominations_nominations' >
                        <h2>Nominations</h2>
                        <Nominations />
                    </div>
                </NominationsContext.Provider>
            </div>
        </div>
    )
}

export default HomeScreen
