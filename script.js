let button = document.querySelector('.button')
let inputValue = document.querySelector('.inputValue')
let cityName = document.querySelector('.cityName');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', fetchCityWeatherFetch)

document.querySelector(".inputValue").addEventListener("keyup", function(event){
  if (event.code=="Enter"){
    fetchCityWeatherXhr()
  }
})

function fetchCityWeatherFetch() {
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=90aec1d3d77b53ab05723ff7538ec1ac')
  .then(response => response.json())
  .then(data => {
    printweather(data)
  })
  .catch(err => alert("Tyvärr hittades inte staden du letade efter, vänligen försök igen."))
}

function fetchCityWeatherXhr() {
  let xhr = new XMLHttpRequest();
  let url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=90aec1d3d77b53ab05723ff7538ec1ac';
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.send();
  xhr.addEventListener('load', (event) => {
    console.log(xhr.response)
    printweather(xhr.response)
  })
}

function printweather(data) {
    const nameValue = data['name'];
    const tempValue = data['main']['temp'];
    const descValue = data ['weather'][0]['description'];

    cityName.innerHTML = nameValue;
    temp.innerHTML = tempValue + '°C';
    desc.innerHTML = descValue;
}