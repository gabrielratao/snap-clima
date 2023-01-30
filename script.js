//adcoinando os elementos html para ca

//interação com usuário
const citySearchInput = document.getElementById('city-search-input')
const citySearchButton = document.getElementById('city-search-button')

//Exibição dos dados
const currentDate = document.getElementById('current-date')
const cityName = document.getElementById('city-name')
const weatherIcon = document.getElementById('weather-icon')
const weatherDescription = document.getElementById('weather-description')
const currentTemperature = document.getElementById('current-temperature')
const windSpeed = document.getElementById('wind-speed')
const feelsLikeTemperature = document.getElementById('feels-like-temperature')
const currentHumidity = document.getElementById('current-humidity')
const sunriseTime = document.getElementById('sunrise-time')
const sunsetTime = document.getElementById('sunset-time')
const tempMax = document.getElementById('temp-max')
const tempMin = document.getElementById('temp-min')

//const api_key = "4b59b987e36efab9433f59832623c3c7";
var api_key = config.MY_KEY

//escutar o click do botão      () -> função anonima
citySearchButton.addEventListener("click", () => {
    //vamos por pra ele, depois de escutar, saber qual alor esta dentro da barra de pesquisa

    //mostrar no console o valor digitado:
    //console.log(citySearchInput.value)

    let cityName = citySearchInput.value
    getCityWeather(cityName)
})


//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


//buscar a localização do usuario
//position -> retorna a posição

navigator.geolocation.getCurrentPosition(
    (position) => {
    console.log(position)
    //se o usuario aceitar a locização ja vamos trazer os dados da cidade que ele ta
    let lat = position.coords.latitude
    let lon = position.coords.longitude

    getCurrentLocationWeather (lat, lon)


    },
    //se o usuario negar exibe o erro
    (err) => {
        //codigo 1 para geo negada
        if (err.code === 1){
            alert("Geolocalização negada pelo usuário, busque manualmente a cidade desejada na barra de pesquisa.")

        } else{
            console.log(err)
        }
        
        
    }

)

function getCurrentLocationWeather (lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data))
}

function getCityWeather (cityName) {

    //sempre que usuario fizer uma pesquisa vai aparecer o icone de loading
    weatherIcon.src = `./assets/loading-icon.svg`

    //busca info then muda o dado pra json
    //fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => displayWeather(data))  //dados
    
}


function displayWeather(data) {
    //desestruturar os objetos
    let { 
        dt,
        name,
        weather: [{ icon, description }],
        //adcionando temp_max e temp_min
        main: { temp, feels_like, humidity,},
        wind: { speed },
        sys: { country, sunrise, sunset},

    } = data

    //atribuindo os dados para os conteudos do html
    //agora aqueles elementos do html que antes eram ... vai ser essas infos:
    currentDate.textContent = formatDate(dt)// data atual
    cityName.textContent = `${name}, ${country}`
    weatherIcon.src = `./assets/${icon}.svg`
    weatherDescription.textContent = description
    currentTemperature.textContent = `${Math.round(temp)}°C`
    windSpeed.textContent = `${Math.round(speed * 3.6)}km/h`
    feelsLikeTemperature.textContent = `${Math.round(feels_like)}°C`
    currentHumidity.textContent = `${humidity}%`
    sunriseTime.textContent = formatTime(sunrise)
    sunsetTime.textContent = formatTime(sunset)
    
}



function formatDate (epochTime) {
    let date = new Date(epochTime * 1000)
    let formattedDate = date.toLocaleDateString('pt-BR' , { month: "long", day: "numeric" })
    
    return `Hoje, ${formattedDate}`
}


function formatTime (epochTime) {
    let date = new Date(epochTime * 1000)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    
    //ajustando bug do minuto em 1 unidade
    if (minutes < 10){
        minutes = '0' + minutes
    }
    
    return `${hours}:${minutes}`
   
}



