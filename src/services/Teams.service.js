import apiClient from './ApiClient';

const getOptions = {
    params: {page: '0'},
    headers: {
        'X-RapidAPI-Key': '3c7f30daf9msh9ded06a73d473dfp192553jsnadc5c4f979b1',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
}

const getTeams = () => apiClient.get("/teams", getOptions);

export default {
    getTeams
};