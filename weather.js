
class Weather{

    constructor(city,country){
      this.apikey = '72dd4f39e61d0b44b56c92e3289328cd';
      this.city = city;
      this.country = country;
      this.dotContainer = document.querySelector(".dot-container");
      this.weatherContainer = document.querySelector(".weathertemplate #container");
    }
    openModal(){
      this.dotContainer.style.display = 'flex';
      this.weatherContainer.style.display = 'none';
    }
    closeModal(){
      this.dotContainer.style.display = ' none';
      this.weatherContainer.style.display = 'block';
    }

    async getWeatherData(){
        this.openModal();
        const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}`);
        const data = await response.json();
        if(data){
          this.closeModal();
        }
        return data;
    }
    //in case of location change updating city and country value
    changeLocation(city,country){
      this.city=city;
      this.country = country;
    }
}
