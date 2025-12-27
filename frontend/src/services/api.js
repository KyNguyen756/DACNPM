import axios from 'axios';

const api = axios.create({
    baseURL: '/api/weather',
});

export const getLatestWeather = async () => {
    const response = await api.get('/latest');
    return response.data;
};

export const getWeatherHistory = async () => {
    const response = await api.get('/history');
    return response.data;
};
