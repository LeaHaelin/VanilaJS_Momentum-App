import { config } from './data.js';

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.weatherKey}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather p");
        const name = data.name;
        weather.innerHTML = `${data.weather[0].main} ` + Math.round(`${data.main.temp}`) + "°C";
        city.innerHTML = name;
    });
}

function onGeoError() {
    alert("nonono")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);