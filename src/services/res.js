import axios from 'axios';

const res = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default res;