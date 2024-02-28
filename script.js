const cityInput = document.getElementById("city");
const submit = document.getElementById("submit");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const feels_like = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const min_temp = document.getElementById("min-temp");
const max_temp = document.getElementById("max-temp");
const wind_speed = document.getElementById("wind-speed");
const wind_speed2 = document.getElementById("wind-speed2");
const wind_degrees = document.getElementById("wind-degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

const getWeather = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ba43091b3amsha71151035a6154cp1862cfjsn2bcef444ba44',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        cityName.innerHTML = city;
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;
    } catch (error) {
        console.error(error);
    }
};

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const cityValue = cityInput.value;
    await getWeather(cityValue);
});

getWeather("Ghatsila");