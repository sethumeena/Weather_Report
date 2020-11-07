class UI{
  
constructor(){
this.cityName = document.querySelector(".cityName");
this.iconImg = document.querySelector(".iconImg");
this.iconDesc = document.querySelector(".iconDesc");
this.temp = document.querySelector(".temp")
this.minTemp = document.querySelector(".min-temp");
this.maxTemp = document.querySelector(".max-temp");
this.sunrise = document.querySelector(".sunrise");
this.sunset = document.querySelector(".sunset");
this.windspeed = document.querySelector(".windspeed");
this.winddirection = document.querySelector(".winddirection");
this.feelslike = document.querySelector(".feelslike");
this.humidity = document.querySelector(".humidity")
this.pressure= document.querySelector(".pressure");
this.visibility = document.querySelector(".visibility");
this.sideValue = document.querySelector('.last');
}
  showData(receivedData){ 
    if(receivedData){
    //cityname
    this.cityName.innerHTML = `${receivedData.name}, ${receivedData.sys.country}`;
    //img icon and its desc
    receivedData.weather.forEach(data => {
        this.iconImg.setAttribute("src",`http://openweathermap.org/img/wn/${data.icon}@2x.png`)
        this.iconDesc.innerHTML = data.description;  
    });
    //deg
    this.tempKtoC = (receivedData.main.temp) - 273.15;  
    this.temp.innerHTML = Math.floor(this.tempKtoC) + "\xB0C";
    //convert kelvin to celcius 
    //formula => kelvin-273.15 = celcius
    this.minKtoC = (receivedData.main.temp_min) - 273.15;
    this.minTemp.innerHTML = "Min Temprature " + Math.floor(this.minKtoC) + "\xB0C";
    this.maxKtoC = (receivedData.main.temp_max) - 273.15;
    this.maxTemp.innerHTML = "Max Temprature " + Math.floor(this.maxKtoC) + "\xB0C";
    //calculate sunrise and sunset
    //convert it from unix 
    const  timeZoneValue = new TimeZoneData(receivedData.coord.lat, receivedData.coord.lon);
    timeZoneValue.getTimeZoneData().then(data => {
      //sunrise
      let unixRiseTimestamp = receivedData.sys.sunrise;
      const riseDate = new Date(unixRiseTimestamp * 1000);
      const riseTimeDate = new Date(riseDate).toLocaleString("en-US", {timeZone: data.zoneName});
      const riseTime = riseTimeDate.split(',')[1].split(':');
      this.sunrise.innerHTML = `${riseTime[0]}:${riseTime[1]} ${riseTime[2].split(' ')[1]}`;
      // sunset
      let unixSetTimestamp = receivedData.sys.sunset;
      const setDate = new Date(unixSetTimestamp * 1000);
      const setTimeDate = new Date(setDate).toLocaleString("en-US", {timeZone: data.zoneName});
      const setTime = setTimeDate.split(',')[1].split(':');
      this.sunset.innerHTML = `${setTime[0]}:${setTime[1]} ${setTime[2].split(' ')[1]}`;
    })
    //fellslike
    this.feelslike.innerHTML= (Math.ceil(receivedData.main.feels_like - 273.15)) + '\xB0C';
    //humidity
    this.humidity.innerHTML = `${receivedData.main.humidity}%`
    //pressure
    this.pressure.innerHTML = `${receivedData.main.pressure} hPa`;
    //visibility
    if(receivedData.visibility){
        this.sideValue.classList.add('show');
        this.visibility.innerHTML = `${(receivedData.visibility)/1000} km`;
    }else{
        this.sideValue.classList.add('hide');
    }
    //windspeed convert m/s to km/hr
    this.speedMtoKm = receivedData.wind.speed*3.6;
    this.deg = receivedData.wind.deg;
    this.degToCard = function(deg){
        if (deg>11.25 && deg<=33.75){
          return "NNE";
        }else if (deg>33.75 && deg<=56.25){
          return "ENE";
        }else if (deg>56.25 && deg<=78.75){
          return "E";
        }else if (deg>78.75 && deg<=101.25){
          return "ESE";
        }else if (deg>101.25 && deg<=123.75){
          return "ESE";
        }else if (deg>123.75 && deg<=146.25){
          return "SE";
        }else if (deg>146.25 && deg<=168.75){
          return "SSE";
        }else if (deg>168.75 && deg<=191.25){
          return "S";
        }else if (deg>191.25 && deg<=213.75){
          return "SSW";
        }else if (deg>213.75 && deg<=236.25){
          return "SW";
        }else if (deg>236.25 && deg<=258.75){
          return "WSW";
        }else if (deg>258.75 && deg<=281.25){
          return "W";
        }else if (deg>281.25 && deg<=303.75){
          return "WNW";
        }else if (deg>303.75 && deg<=326.25){
          return "NW";
        }else if (deg>326.25 && deg<=348.75){
          return "NNW";
        }else{
          return "N"; 
        }
    }
    //windSpeed
    this.windspeed.innerHTML = `${this.speedMtoKm.toFixed(2)} km/hr`;
    //windDirection
    this.winddirection.innerHTML = `${this.deg}\xB0 ${this.degToCard(this.deg)}`;  
  }
  }
}



