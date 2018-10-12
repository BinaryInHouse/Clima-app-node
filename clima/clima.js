const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=1b49ac6ae4bb2610fab7e711d380af05`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}