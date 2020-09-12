"use strict";

searchButton.addEventListener("click", searchWeather);
function searchWeather() {
    var cityName = searchCity.value;
    console.log("valor del input", searchCity.value);
    if (cityName.trim().lenght === 0) {
        return alert ("Ingrese un valor valido");
    }
    var requestWeatherService = new XMLHttpRequest();
    var apiKey = "44289173e55db412a658f508930e56be";
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    var requestMethod = "GET";
    requestWeatherService.open(requestMethod, url);
    requestWeatherService.onreadystatechange(function () {
        if (requestWeatherService.state === XMLHttpRequest.DONE && requestWeatherService.status === 200) {

        }else if (requestWeatherService.state === XMLHttpRequest.DONE) { alert("algo salio mal");

        }

        });
        requestWeatherService.send();
}