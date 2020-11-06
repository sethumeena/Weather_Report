
class Weather{

    constructor(city,country){
      this.apikey = '72dd4f39e61d0b44b56c92e3289328cd';
      this.city = city;
      this.country = country;
      
    }


async getWeatherData(){
    const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}`);
    const data = await response.json();
    return data;
}
//in case of location change updating city and country value
changeLocation(city,country){
  this.city=city;
  this.country = country;
}
}
