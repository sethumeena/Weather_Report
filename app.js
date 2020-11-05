const dots = document.querySelector(".dot-container");
const weatherContainer = document.querySelector(".weathertemplate #container");
//init storage
const storage = new Storage();

//call the get location data from storage
const storageData = storage.getLocationData();


window.onload = function(){
    setTimeout(function(){
       dots.style.display = 'none';
       weatherContainer.style.display = 'block'
    }, 1500);
 };
const weather = new Weather(storageData.city,storageData.country);
//init ui

const ui = new UI;

const changeBtn = document.querySelector(".changeBtn");
const backDrop = document.getElementById('backdrop');
const saveBtn = document.querySelector('.saveBtn');
const cancelBtn = document.querySelector('.cancelBtn');

document.addEventListener('DOMContentLoaded',getWeather() );

//show backdrop
changeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    backDrop.style.display = "block";
    });

//save Btn
saveBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    dots.style.display = 'flex';
    weatherContainer.style.display = 'none'

setTimeout(()=>{
    dots.style.display = 'none';
    weatherContainer.style.display = 'block'
    const city = document.querySelector('#city').value;
    const country = document.getElementById('country-name').value;
    if(city != ''){
        weather.changeLocation(city,country);
    }
    // set and update the city and country value in local storage
    storage.setLocationData(city,country);
    getWeather();

},3000)


backDrop.style.display= "none"
});
cancelBtn.addEventListener('click',()=>{
    backDrop.style.display= "none"

})
//use the get method to get the values 
function getWeather(){
    weather.getWeatherData()
    .then(weatherData => {
    ui.showData(weatherData);
    }
    );
}




















