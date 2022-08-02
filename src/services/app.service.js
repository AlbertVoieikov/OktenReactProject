import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

const getMovies = () => axiosInstance('/discover/movie').then(value => value.data);
const getGenres = () => axiosInstance('/genre/movie/list').then(value => value.data);

export {
    getMovies, getGenres
}