import axios from 'axios';

const movieUrl = "http://www.omdbapi.com";
const API_KEY = "79526c77";


export const fetchMovies = (title, setMovieList, currentPage, setCurrentPage) => {

    axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}&page=${currentPage}`)
        .then(res => {
            setMovieList(res.data.Search);
            const result = res.data;
            result.page = currentPage === null ? setCurrentPage(1) : setCurrentPage(currentPage)
        })
        .catch(err => console.log(err));
};
