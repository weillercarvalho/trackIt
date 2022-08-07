import axios from 'axios';


const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem('trackit'));
    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    }
    return config;
}

function logins(body) {
    const promisse = axios.post(`${BASE_URL}/auth/login`,body);
    return promisse;
}

function singups(body) {
    const promisse = axios.post(`${BASE_URL}/auth/sign-up`,body);
    return promisse;
}

function habitspost(body) {
    const config = createHeaders();
    const promisse = axios.post(`${BASE_URL}/habits`,body, config);
    return promisse;
}

function habitsget() {
    const config = createHeaders();
    const promisse = axios.get(`${BASE_URL}/habits`, config);
    return promisse;
}


function habitsdelete(iDhabit) {
    const config = createHeaders();
    const promisse = axios.delete(`${BASE_URL}/habits/${iDhabit}`, config);
    return promisse;
}

function habitsgettoday() {
    const config = createHeaders();
    const promisse = axios.get(`${BASE_URL}/habits/today`, config);
    return promisse;
}

function habitspostdone(iDhabit) {
    const config = createHeaders();
    const body = {};
    const promisse = axios.post(`${BASE_URL}/habits/${iDhabit}/check`, body, config);
    return promisse;
}

function habitspostundone(iDhabit) {
    const config = createHeaders();
    const body = {};
    const promisse = axios.post(`${BASE_URL}/habits/${iDhabit}/uncheck`, body, config);
    return promisse;
}

function habitshistory() {
    const config = createHeaders();
    const promisse = axios.post(`${BASE_URL}/habits/history/daily`, config);
    return promisse;
}

export {logins, singups, habitspost, habitsget, habitsgettoday, habitspostdone, habitspostundone, habitshistory, habitsdelete};