import axios from 'axios';

const movieUrl = "http://www.omdbapi.com";
const API_KEY = "79526c77";


export const fetchMovies = (title, setMovieList, currentPage, setCurrentPage) => {

    axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}&page=${currentPage}`)
        .then(res => {
            setMovieList(res.data.Search);
            const result = res.data;
            result.page = currentPage ? currentPage : setCurrentPage(1)
            console.log('page', result.page);
        })
        .catch(err => console.log(err));
};

export const fetchNextPage = (title, setValue, currentPage, setCurrentPage) => {
    const page = setCurrentPage(currentPage + 1)
    axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}&page=${page}`)
        .then(res => {
            console.log('fetch data', res);
            setValue(res.data.Search);
            const result = res.data;
            result.page = page
        })
        .catch(err => console.log(err));
}
export const fetchLastPage = (title, setValue, currentPage, setCurrentPage) => {
    const page = currentPage > 1 && setCurrentPage(currentPage -= 1)
    axios.get(`${movieUrl}/?apikey=${API_KEY}&type=movie&s=${title}&page=${page}`)
        .then(res => {
            console.log('fetch data', res);
            setValue(res.data.Search);
            const result = res.data;
            result.page = page;
        })
        .catch(err => console.log(err));
}