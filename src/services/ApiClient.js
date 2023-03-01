import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://free-nba.p.rapidapi.com'
});

export default apiClient;