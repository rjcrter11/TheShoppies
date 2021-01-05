import React, { useEffect, useState } from 'react';

import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';

const movieUrl = "http://www.omdbapi.com"
const API_KEY = "79526c77"

const HomeScreen = () => {

    const [movieList, setMovieList] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    // Search bar functions
    const handleSearchChange = e => {
        setSearchInput(e.target.value)
    }

    const deleteSearchText = () => {
        setSearchInput('')
    }

    // axios call to imdb 
    const fetchMovies = title => {
        axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}`)
            .then(res => {
                console.log(res);
                setMovieList(res.data.Search);
            })
            .catch(err => console.log(err));
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
                <div className='movies-and-nominations_movies'>
                    <Movies movieList={movieList} />
                </div>
                <div className='movies-and-nominations_nominations' >
                    <h2>Nominations</h2>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen
