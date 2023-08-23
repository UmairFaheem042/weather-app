// Selectors
let searchInput = document.querySelector('.search');
let searchBtn = document.querySelector('.searchBtn');
let regionName = document.querySelector('.regionName');
let dateTime = document.querySelector('.dateTime');
let weatherIcon = document.querySelector('.weatherIcon');
let weatherDescription = document.querySelector('.description');
let currentTemperature = document.querySelector('.temperature');
let minTemp = document.querySelector('.min');
let maxTemp = document.querySelector('.max');
let humdity = document.querySelector('.humidity');
let realFeel = document.querySelector('.realFeel');
let windSpeed = document.querySelector('.windSpeed');
let pressure = document.querySelector('.pressure');


const weekdays =  [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'
];
const months =  [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

async function getWeather(city){
  const apiKey = "9088a4fe3baa32b8b41f1c1f8d59218f";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const weather_data = await fetch(`${url}`).then(response => response.json());
  
  console.log(city);
  console.log(weather_data);
  
  regionName.innerHTML = `${weather_data.name}, ${weather_data.sys.country}`;

  const date = new Date();
  dateTime.innerHTML = `${weekdays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  
  weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather_data.weather[0].icon}@4x.png" alt="weatherIcon">`;
  
  weatherDescription.innerHTML = `${weather_data.weather[0].main}`;
  
  currentTemperature.innerHTML = `${Math.round(weather_data.main.temp)}&#176C`;
  maxTemp.innerHTML = `<i class='bx bxs-up-arrow-alt'></i> ${Math.round(weather_data.main.temp_max)}&#176`;
  minTemp.innerHTML = `<i class='bx bxs-down-arrow-alt'></i> ${Math.round(weather_data.main.temp_min)}&#176`;
  
  humdity.innerHTML = `${weather_data.main.humidity} %`;
  realFeel.innerHTML = `${weather_data.main.feels_like} &#176C`;
  windSpeed.innerHTML = `${weather_data.wind.speed} m/s`;
  pressure.innerHTML = `${weather_data.main.pressure} hPa`;
  
}

getWeather('Delhi')


searchBtn.addEventListener('click', ()=>{  
  getWeather(searchInput.value);
})

