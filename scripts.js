document.addEventListener("DOMContentLoaded", function(){
    //load_weather();
    //load_city();
})

let city = [];

function load_weather(){
    const api_key = "922bab5ed5181a7ad9472e6ee4991391";
    let city = document.getElementById("city_selector").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric&lang=es`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            show_data(data);
        })
        .catch(error => {
            console.error("Algo salio mal!", error);
        })
}

function show_data(data){
    const text_weather = document.getElementById("celcius");
    const text_description = document.getElementById("description");
    const text_humidity = document.getElementById("humidity");
    const text_maxmin = document.getElementById("maxmin");

    const weather = data.main.temp;
    const description = data.weather.main;
    const description2 = data.weather.description;
    const humidity = data.main.humidity;
    const max = data.main.temp_max;
    const min = data.main.min;

    text_weather.innerHTML = weather + " °C";
    text_description.innerHTML = description + ",\n" + description2;
    text_humidity.innerHTML = humidity;
    text_maxmin.innerHTML = max + " / " + min;
}

/*function load_city(){
    const api_key = "922bab5ed5181a7ad9472e6ee4991391";
    const city = "";
    

    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${api_key}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            show_city(data);
        })
        .catch(error => {
            console.error("Algo salio mal!", error);
        })
}

function show_city(data){
    city.push(data);
    console.log(city);
}*/