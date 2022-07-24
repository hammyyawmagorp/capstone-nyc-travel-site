
// for navbar/hamburger button
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
}) 

document.querySelectorAll('.nav-btn').forEach(n => n.addEventListener('click', ()=> {
    hamburger.classList.remove('is-active');
    navMenu.classList.remove('is-active');
}))

// for show/hide option on attractions page
document.querySelector("#name").addEventListener("change", function(){ 
    document.querySelectorAll(".data").forEach(function(div){
        div.style.display = "none";
    })
    document.querySelector("#" + this.value).style.display = "block";
}); 
document.querySelector("#name").dispatchEvent(new Event("change"));

// weather form
// Weather Today feature

const currentWeatherUrl = "https://api.weatherapi.com/v1/current.json?key=fffb84950e714159aa5160418221007&q=new york&aqi=yes";

axios.get(currentWeatherUrl)
.then (function (response) {
    document.querySelector('#currentTemp').innerText = `${response.data.current.temp_c}°C | ${response.data.current.temp_f}°F & ${response.data.current.condition.text}`
}).catch(function (error){
    document.querySelector('#currentTemp').innerText = `Current forecast unavailable`;
});


const weatherForm = document.querySelector('#datesForm');
const forecastUrl = "https://api.weatherapi.com/v1/forecast.json?key=fffb84950e714159aa5160418221007&q=new york&aqi=yes&dt="

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.get(forecastUrl + weatherForm.elements.weatherDates.value)
        .then (function(response){
            if (response.data.forecast.forecastday.length === 0){
                document.querySelector('#forecastedTemp').innerText = `Travel date too far. Check back 15 days before your trip!`;
            } 
            else {
                document.querySelector('#forecastedTemp').innerText = `It will be ${response.data.forecast.forecastday[0].day.avgtemp_c}°C | ${response.data.forecast.forecastday[0].day.avgtemp_f}°F & ${response.data.forecast.forecastday[0].day.condition.text}`
            }
        })
        .catch(function (error){
            document.querySelector('#forecastedTemp').innerText = `Forecast currently unavailable`;
        });
    console.log(weatherForm.elements.weatherDates.value);
})



// ---
//airport form

const zipCodeForm = document.querySelector('#zipCodeForm');

zipCodeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (zipCodeForm.elements.zip.value.length < 5 || zipCodeForm.elements.zip.value.length > 5) {
        document.querySelector('.zipCodeResColumn').innerText = "INVALID ZIP CODE";
        alert ('Enter a valid zip code');
        return
    }

    getAirport(zipCodeForm.elements.zip.value);

    
});

const localUrl = "http://localhost:4000"

function getAirport (zipcode){
    axios.get (`${localUrl}/airport?zipcode=${zipcode}`)
    .then((res) => {
        if (res.data.length === 0){
            document.querySelector('.zipCodeResColumn').innerText = "NOT A NY CITY ZIPCODE";
            alert ('Please enter a valid NYC Zipcode');
            return
        }
        document.querySelector('.zipCodeResColumn').innerText = `The closest airport to your accomadations is: ${res.data[0].airport}`;
        
    }).catch(err => document.querySelector('.zipCodeResColumn').innerText = "We'll be right back after these messages"

)}

const moreInfoForm = document.querySelector('#moreInfoForm');
let name = document.querySelector('#the-name');
let email = document.querySelector('#the-email');
let phone = document.querySelector('#the-phone');
let message = document.querySelector('#the-message');

moreInfoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }


    let xhr = new XMLHttpRequest();
    xhr.open('POST', `${localUrl}/information`);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function (){
        if(xhr.responseText = 'success'){
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
            alert('We will reach out soon!');
        } else {
            alert('Something Went Wrong!');
        }
    
    }
    console.log(formData);
    xhr.send(JSON.stringify(formData));

    // alert('We will reach out soon!');
    moreInfoForm.reset();

})
