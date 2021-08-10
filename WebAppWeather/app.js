//Global Variables connect with HTML api

const timezone = document.querySelector('.time-zone');
const tempGrad = document.querySelector('.temperature-degree');
const tempMin = document.querySelector('.min-temp');
const tempMax = document.querySelector('.max-temp');
const timeDescrip = document.querySelector('.temperature-description');
const city = document.querySelector('#city');
const searchButton = document.querySelector('.btn-search');



// functions

const updateWeather = (data)=>{
    const {temp,temp_max,temp_min,feels_like} = data.main;
    const {name} = data;
    const {description} = data.weather[0];
    // Set DOM elements from the API
    timezone.textContent = name;
    tempGrad.textContent = `${Math.round(temp)} °C`;
    tempMax.textContent = `${Math.round(temp_max)} °`;
    tempMin.textContent =  `${Math.round(temp_min)} °`;
    timeDescrip.textContent = description;
    // console.log(data);

}

//fetch data
const getWeatherByCity = (city)=>{
    const apibyCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a9a889ca35fe9b1bd9571a401ad95ca5`;
    
    fetch(apibyCity).then((response)=>{
        console.log(response);
        if(response.ok){
            return response.json();
        }
    }).then(responseValue =>{
        updateWeather(responseValue);
    })
}


const getWeatherByLatLog = (latitude,longitude) =>{
    const weatherByLatLong = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=a9a889ca35fe9b1bd9571a401ad95ca5`;

            fetch(weatherByLatLong)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    updateWeather(data);    
                });

}



//event listeners

window.addEventListener('load', ()=>{
    let long;
    let lat;

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            getWeatherByLatLog(lat,long);
            
        });

    }
});


searchButton.addEventListener('click',()=>{
    if(city.value !== ''){
        getWeatherByCity(city.value);
        
    }else{
        alert('No city input');
    }
    
})

