//alt+96 backtick
//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
    }
}).argv;



let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;


    } catch (e) {
        return `No se puedo encontrar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);

    })
    .catch(e => console.log(e));

clima.getClima(-5.946466, -77.30372299999999)
    .then(temp => console.log(temp))
    .catch(e => console.log(e));
*/
//console.log(argv.direccion);
/*
let encodedUrl = encodeURI(argv.direccion); //Para eliminar espacio url

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDNUesZnbLZIiWp4WW7lQn9TXua4yy_DdQ`)
    .then(resp => {
        let location = resp.data.results[0];
        let coordenadas = location.geometry.location;
        //console.log(JSON.stringify(resp.data, undefined, 2));
        // console.log(resp.status);
        console.log('Direccion:', location.formatted_address);
        console.log('latitud:', coordenadas.lat);
        console.log('longitud:', coordenadas.lng);

    })
    .catch(e => console.log('ERROR!!', e));*/