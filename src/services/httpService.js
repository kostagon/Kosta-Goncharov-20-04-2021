import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'http://dataservice.accuweather.com';

export async function ajax(endpoint, metricStr = '') {
    try {
        const res = await axios.get(`${BASE_URL}/${endpoint}apikey=${API_KEY}&language=en-us${metricStr}`);
        return res.data;
    } catch (err) {
        return console.log(err)
    }
}