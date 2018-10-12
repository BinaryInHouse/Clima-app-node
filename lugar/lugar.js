const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion); //Para eliminar espacio url
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDNUesZnbLZIiWp4WW7lQn9TXua4yy_DdQ`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para ciudad ${ direccion }`);

    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;
    //console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log(resp.status);

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }

}

module.exports = {
    getLugarLatLng
}